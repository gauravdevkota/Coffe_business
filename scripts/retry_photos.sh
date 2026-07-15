#!/bin/bash
# Sequential retry for empty photo files
cd /home/z/my-project

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

for key in "${!QUERIES[@]}"; do
  if [ ! -s "scripts/photos/${key}.json" ]; then
    echo "[$key] fetching..."
    z-ai image-search -q "${QUERIES[$key]}" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/photos/${key}.json"
    if [ -s "scripts/photos/${key}.json" ]; then
      echo "  OK"
    else
      echo "  FAILED"
    fi
    sleep 4
  fi
done

echo "=== FINAL ==="
total=$(ls scripts/photos/*.json 2>/dev/null | wc -l)
nonempty=$(find scripts/photos -name "*.json" -size +0c 2>/dev/null | wc -l)
echo "Total: $total / Non-empty: $nonempty"
