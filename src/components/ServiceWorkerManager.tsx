"use client";

import { useEffect } from "react";

/** Registers the service worker and asks the browser to keep our cache around.
 *  Renders nothing. Mounted once from the root layout. */
export default function ServiceWorkerManager() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Registration failures are non-fatal — the app still works online.
      });
    };

    // Request durable storage so the media cache survives eviction pressure.
    // Best-effort: browsers may grant silently, prompt, or ignore.
    if (navigator.storage?.persist) {
      navigator.storage.persist().catch(() => {});
    }

    // Register after load so the SW never competes with first paint.
    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
