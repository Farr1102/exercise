// FitBase service worker — offline-capable, media-persistent caching.
// This is a pure-frontend, media-heavy app; the goal is that a returning
// visitor loads instantly and can browse offline.

// App-shell cache is versioned: bump SHELL_VERSION to invalidate HTML/JS/CSS.
const SHELL_VERSION = "fitbase-shell-v1";

// Media cache is intentionally NOT versioned. Filenames are content-stamped
// (0001-2gPfomN.mp4), so a URL's bytes never change — cached entries can live
// indefinitely and safely survive service-worker upgrades.
const MEDIA_CACHE = "fitbase-media";

const isMedia = (url) =>
  url.pathname.startsWith("/videos/") || url.pathname.startsWith("/images/");

// Next.js build output under /_next/static/ is content-hashed => immutable.
const isImmutableAsset = (url) => url.pathname.startsWith("/_next/static/");

self.addEventListener("install", (event) => {
  // Take over as soon as installed; no precache list to wait on.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Drop stale app-shell caches from older SW versions, but keep the media
      // cache (its content-stamped entries are never stale).
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== SHELL_VERSION && k !== MEDIA_CACHE)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// cache-first: serve from cache, fall back to network and store the result.
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  if (hit) return hit;
  const res = await fetch(request);
  // Only cache full, cacheable responses (skip 206 partials / opaque errors).
  if (res.ok && res.status === 200) {
    cache.put(request, res.clone());
  }
  return res;
}

// Media cache-first. <video> issues Range requests that come back as 206, which
// a normal cache-first would refuse to store. The files are tiny (~10KB), so we
// always fetch the FULL resource (Range stripped), cache the 200, and serve that
// whole body — browsers accept a 200 in reply to a range request. Cache lookup
// ignores the Range header (ignoreVary) so every range hits the one entry.
async function mediaCacheFirst(request) {
  const cache = await caches.open(MEDIA_CACHE);
  const hit = await cache.match(request, { ignoreVary: true, ignoreSearch: false });
  if (hit) return hit;
  // Refetch without the Range header to get a complete, cacheable 200.
  const fullReq = new Request(request.url, {
    credentials: request.credentials,
    mode: "same-origin",
  });
  const res = await fetch(fullReq);
  if (res.ok && res.status === 200) {
    await cache.put(request.url, res.clone());
  }
  return res;
}

// stale-while-revalidate: return cache immediately, refresh in the background.
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  const network = fetch(request)
    .then((res) => {
      if (res.ok && res.status === 200) cache.put(request, res.clone());
      return res;
    })
    .catch(() => hit);
  return hit || network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // don't touch cross-origin

  // Media & Next static assets: cache-first, long-lived.
  if (isMedia(url)) {
    event.respondWith(mediaCacheFirst(request));
    return;
  }
  if (isImmutableAsset(url)) {
    event.respondWith(cacheFirst(request, SHELL_VERSION));
    return;
  }

  // Page navigations: network-first so content stays fresh, cache as offline
  // fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(request);
          if (res.ok) {
            const cache = await caches.open(SHELL_VERSION);
            cache.put(request, res.clone());
          }
          return res;
        } catch {
          const cache = await caches.open(SHELL_VERSION);
          return (
            (await cache.match(request)) ||
            (await cache.match("/")) ||
            Response.error()
          );
        }
      })()
    );
    return;
  }

  // Everything else same-origin: stale-while-revalidate.
  event.respondWith(staleWhileRevalidate(request, SHELL_VERSION));
});
