#!/bin/bash
if [ -z "$1" ]; then
  echo "Usage: ./scripts/compress-blog-image.sh path/to/image.jpg"
  exit 1
fi

magick "$1" -resize 1200x630^ -gravity center -extent 1200x630 -quality 75 "$1"
echo "Compressed: $1"
ls -la "$1"