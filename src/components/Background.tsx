"use client";

import Silk from "@/components/Silk";

/* Fixed full-viewport Silk shader behind all content (§12: glass needs rich
   content behind it to read as a real material). A soft light scrim keeps the
   white theme legible while letting the animated color show through the glass. */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Silk speed={4} scale={1.1} color="#E8A87C" noiseIntensity={1.2} rotation={0.1} />
      <div className="absolute inset-0 bg-white/55" />
    </div>
  );
}
