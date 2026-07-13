import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Media filenames are content-stamped (e.g. 0001-2gPfomN.mp4), so the bytes
    // behind a given URL never change — safe to cache immutably for a year.
    return [
      {
        source: "/:dir(videos|images)/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
