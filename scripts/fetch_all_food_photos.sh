#!/bin/bash
# Fetch real food photos for every menu item, with rate-limit handling.
cd /home/z/my-project
mkdir -p scripts/photos

# Map of menu-item-id -> search query (descriptive, single concept)
declare -A QUERIES=(
  ["masala-chiya"]="Nepali masala chai milk tea in glass cup"
  ["milk-chiya"]="Indian milk chai tea in glass cup"
  ["black-chiya"]="black tea in clear glass cup hot"
  ["tulsi-chiya"]="tulsi holy basil herbal tea cup"
  ["adrak-chiya"]="ginger tea in glass cup hot drink"
  ["lemon-honey"]="lemon honey ginger hot tea in cup"
  ["espresso"]="double espresso shot in white ceramic cup"
  ["cappuccino"]="cappuccino coffee with latte art foam"
  ["cafe-latte"]="cafe latte coffee in glass cup with art"
  ["mocha"]="mocha coffee with chocolate in cup"
  ["iced-chiya"]="iced milk chai tea in tall glass"
  ["cold-brew"]="cold brew iced coffee in glass"
  ["cold-coffee"]="cold coffee milkshake with whipped cream in glass"
  ["lassi"]="mango lassi yogurt drink in glass"
  ["lemonade"]="fresh lemonade with mint in glass"
  ["veg-momo"]="Nepalese steamed vegetable momo dumplings with sauce"
  ["chicken-momo"]="Nepalese chicken momo dumplings plate with chutney"
  ["sekuwa"]="Nepali chicken sekuwa grilled skewers with chiura"
  ["samosa"]="samosa fried snack with chutney plate"
  ["spring-roll"]="vegetable spring rolls crispy plate"
  ["club-sandwich"]="club sandwich cafe plate with fries"
  ["sel-roti"]="Nepali sel roti ring rice bread traditional"
  ["aloo-tama"]="Nepali aloo tama potato bamboo shoot curry bowl"
  ["tibetan-bread"]="Tibetan flat bread fried with honey"
  ["granola-bowl"]="granola yogurt fruit bowl breakfast"
  ["chhoila"]="Nepali chhoila grilled chicken with beaten rice"
  ["dhido"]="Nepali dhido buckwheat porridge traditional"
  ["puri-tarkari"]="Indian puri fried bread with potato curry"
  ["aloo-paratha"]="aloo paratha stuffed flatbread with butter and curd"
  ["masala-omelette"]="masala omelette with onion tomato chili and toast"
  ["french-toast"]="cinnamon french toast with maple syrup and berries"
  ["eggs-benedict"]="eggs benedict with hollandaise on english muffin"
  ["poha"]="Indian poha flattened rice with peanuts and curry leaves"
  ["nepali-thali"]="Nepali thali plate rice dal curry traditional meal"
)

run_one() {
  local key="$1"
  local query="$2"
  # Skip if file already has content
  if [ -s "scripts/photos/${key}.json" ]; then
    return
  fi
  z-ai image-search -q "$query" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/photos/${key}.json"
  if [ -s "scripts/photos/${key}.json" ]; then
    echo "[$key] OK"
  else
    echo "[$key] FAILED (rate-limited?), will retry"
  fi
}

# First pass — all items in parallel batches
echo "=== PASS 1 ==="
for key in "${!QUERIES[@]}"; do
  run_one "$key" "${QUERIES[$key]}" &
done
wait
echo "Pass 1 complete. Empty files:"
find scripts/photos -name "*.json" -size 0 | wc -l

# Retry pass — sequential with delay for any that failed
echo "=== PASS 2 (retry failed) ==="
for key in "${!QUERIES[@]}"; do
  if [ ! -s "scripts/photos/${key}.json" ]; then
    echo "Retrying $key..."
    sleep 8
    z-ai image-search -q "${QUERIES[$key]}" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/photos/${key}.json"
    [ -s "scripts/photos/${key}.json" ] && echo "  OK" || echo "  STILL EMPTY"
  fi
done

echo "=== SUMMARY ==="
total=$(ls scripts/photos/*.json 2>/dev/null | wc -l)
nonempty=$(find scripts/photos -name "*.json" -size +0c | wc -l)
echo "Total files: $total"
echo "Non-empty: $nonempty"
