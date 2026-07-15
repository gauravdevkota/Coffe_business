#!/bin/bash
cd /home/z/my-project

declare -A QUERIES=(
  ["poha"]="Indian poha flattened rice with peanuts and curry leaves"
  ["tulsi-chiya"]="tulsi holy basil herbal tea cup"
  ["black-chiya"]="black tea in clear glass cup hot"
  ["club-sandwich"]="club sandwich cafe plate with fries"
  ["aloo-paratha"]="aloo paratha stuffed flatbread with butter and curd"
  ["cold-brew"]="cold brew iced coffee in glass"
  ["lemon-honey"]="lemon honey ginger hot tea in cup"
  ["french-toast"]="cinnamon french toast with maple syrup and berries"
  ["lassi"]="mango lassi yogurt drink in glass"
  ["iced-chiya"]="iced milk chai tea in tall glass"
  ["spring-roll"]="vegetable spring rolls crispy plate"
  ["cafe-latte"]="cafe latte coffee in glass cup with art"
)

for key in "${!QUERIES[@]}"; do
  if [ ! -s "scripts/photos/${key}.json" ]; then
    echo "[$key]"
    z-ai image-search -q "${QUERIES[$key]}" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/photos/${key}.json"
    [ -s "scripts/photos/${key}.json" ] && echo "  OK" || echo "  FAILED"
    sleep 8
  fi
done

echo "=== FINAL ==="
nonempty=$(find scripts/photos -name "*.json" -size +0c 2>/dev/null | wc -l)
echo "Non-empty: $nonempty / 34"
