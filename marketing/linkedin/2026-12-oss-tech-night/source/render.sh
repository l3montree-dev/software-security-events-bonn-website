#!/bin/sh
# Rendert alle LinkedIn-Motive (1200 × 1200 PNG) aus index.html in den
# übergeordneten Ordner. Braucht nur Google Chrome (macOS-Pfad, per CHROME
# überschreibbar).
set -eu

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
SRC="$(cd "$(dirname "$0")" && pwd)"
OUT="$(dirname "$SRC")"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

render() {
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --allow-file-access-from-files \
    --user-data-dir="$PROFILE" \
    --force-device-scale-factor=1 \
    --window-size=1200,1200 \
    --virtual-time-budget=5000 \
    --screenshot="$OUT/$2" \
    "file://$SRC/index.html?slide=$1" 2>/dev/null
  echo "$2"
}

render event 01-event.png
render sebastian-bergmann 02-talk-sebastian-bergmann.png
render hendrik-ebbers 03-talk-hendrik-ebbers.png
render marc-ohm 04-talk-marc-ohm.png
render sebastian-kawelke 05-talk-sebastian-kawelke.png
render lineup 06-alle-talks.png
