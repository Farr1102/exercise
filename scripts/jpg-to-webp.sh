#!/usr/bin/env bash
# Convert all JPGs in public/images to WebP, then remove the source JPG.
# Idempotent: skips a JPG if its .webp already exists.
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images"

convert_one() {
  jpg="$1"
  webp="${jpg%.jpg}.webp"
  [[ -f "$webp" ]] && exit 0
  cwebp -q 80 "$jpg" -o "$webp" >/dev/null 2>&1 && rm -f "$jpg"
}
export -f convert_one

find "$DIR" -name "*.jpg" -print0 \
  | xargs -0 -P 8 -I {} bash -c 'convert_one "$@"' _ {} \
  || true

echo "Done. WebP: $(find "$DIR" -name '*.webp' | wc -l | tr -d ' '), remaining JPG: $(find "$DIR" -name '*.jpg' | wc -l | tr -d ' ')"
