#!/usr/bin/env bash
# Convert all GIFs in public/videos to MP4 (H.264), then remove the source GIF.
# Idempotent: skips a GIF if its .mp4 already exists.
set -euo pipefail

DIR="public/videos"
count=0
skipped=0

export DIR

convert_one() {
  gif="$1"
  base="${gif%.gif}"
  mp4="${base}.mp4"
  if [[ -f "$mp4" ]]; then
    exit 42  # sentinel: skipped
  fi
  ffmpeg -y -i "$gif" \
    -movflags +faststart \
    -pix_fmt yuv420p \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
    -c:v libx264 -crf 26 \
    "$mp4" >/dev/null 2>&1
  rm -f "$gif"
}
export -f convert_one

# Run up to 8 conversions in parallel.
find "$DIR" -name "*.gif" -print0 \
  | xargs -0 -P 8 -I {} bash -c 'convert_one "$@"' _ {} \
  || true

echo "Done. MP4 count: $(find "$DIR" -name '*.mp4' | wc -l | tr -d ' ')"
echo "Remaining GIFs: $(find "$DIR" -name '*.gif' | wc -l | tr -d ' ')"
