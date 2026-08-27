#!/usr/bin/env bash
set -euo pipefail
SK=/home/grejoy/.claude/plugins/cache/nateherk/nateherk-design/0.2.0/skills/scrollcraft
export KIE_AI_API_KEY=$(grep -oP 'KIE_AI_KEY=\K.*' /home/grejoy/Projects/veloxa-website/.env.local)
cd "$(dirname "$0")"

P="Architectural photography, tilt-shift corrected verticals, wide 24mm lens. Vast negative space, strong linear geometry, raking daylight through structure. Cool neutral graphite colour grade with one restrained warm brass accent. Long-exposure stillness, fine photographic grain, true blacks, no bloom. Photographic realism, NOT 3D render, NOT CGI, NOT illustration, no digital glow, no plastic sheen."

node $SK/scripts/kie.mjs still "$P

Interior of a glass and aluminium fabrication workshop at dawn. A long aisle of stacked anodised aluminium extrusion profiles receding toward a bright open roller door. Nobody in frame. Cold neutral light, one small warm work lamp deep in the aisle. Large empty swept concrete floor occupying the lower third of the frame, empty shadowed wall along the upper left." out/01-tools.png --ar 16:9

node $SK/scripts/kie.mjs still "$P

A quiet fabrication factory floor seen from a high mezzanine walkway: cutting benches, a bridge saw, vertical sheet-glass racks, swept concrete with faint chalk setting-out marks. Raking daylight from a high clerestory. One lone figure far away, small, back to camera, mid-stride. Vast empty floor and exposed roof trusses, deep negative space across the upper left of the frame." out/02-floor.png --ar 16:9

node $SK/scripts/kie.mjs still "$P

Extreme frontal macro of a single anodised aluminium window extrusion, cut clean and clamped in a machinist jig. Precision-milled end face, fine brushed-metal texture catching one thin warm brass highlight along a top edge. Everything else falls to soft charcoal black. Subject centred low, even empty dark space on both sides and across the top." out/03-spine.png --ar 16:9

node $SK/scripts/kie.mjs still "$P

A heavy powder-coated steel access door set in a poured-concrete wall, standing very slightly ajar, photographed straight on and symmetrical. Cold light spills through the narrow gap; a machined bolt mechanism is just visible at the edge. Plain unbroken concrete fills the upper half of the frame, even empty space left and right." out/04-guarantee.png --ar 16:9

echo "STILLS DONE"
for f in 01-tools 02-floor 03-spine 04-guarantee; do
  ffmpeg -y -loglevel error -i out/$f.png -vf "scale=1600:-2" -c:v libwebp -quality 82 assets/$f.webp
  ffmpeg -y -loglevel error -i out/$f.png -vf "scale=800:-2"  -c:v libwebp -quality 80 assets/$f-m.webp
done
echo "ENCODE DONE"
ls -la assets/
