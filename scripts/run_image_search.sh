#!/bin/bash
cd /home/z/my-project
mkdir -p scripts/img

run_one() {
  local key="$1"
  local query="$2"
  # Skip if file already has content
  if [ -s "scripts/img/${key}.json" ]; then
    return
  fi
  echo "Searching: $key"
  z-ai image-search -q "$query" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/img/${key}.json"
  if [ -s "scripts/img/${key}.json" ]; then
    echo "  OK"
  else
    echo "  FAILED, retrying..."
    sleep 2
    z-ai image-search -q "$query" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/img/${key}.json"
    [ -s "scripts/img/${key}.json" ] && echo "  OK (retry)" || echo "  STILL EMPTY"
  fi
}

run_one "masala-chiya" "Nepali masala chiya milk tea in glass cup"
run_one "milk-chiya" "Indian sweet milk tea glass cup chai"
run_one "black-chiya" "black tea in clear glass cup"
run_one "tulsi-chiya" "tulsi holy basil herbal tea cup"
run_one "adrak-chiya" "ginger tea glass cup hot drink"
run_one "lemon-honey" "lemon honey ginger tea cup"
run_one "iced-chiya" "iced milk tea glass cold drink"
run_one "espresso" "double espresso shot in white cup"
run_one "cappuccino" "cappuccino with latte art in cup"
run_one "cafe-latte" "cafe latte coffee in glass cup"
run_one "mocha" "mocha coffee chocolate drink cup"
run_one "cold-brew" "cold brew iced coffee in glass"
run_one "cold-coffee" "cold coffee milkshake glass whipped cream"
run_one "lassi" "mango lassi in glass yogurt drink"
run_one "lemonade" "fresh lemonade glass with mint"
run_one "veg-momo" "Nepalese steamed vegetable momo dumplings"
run_one "chicken-momo" "Nepalese chicken momo dumplings with sauce"
run_one "sekuwa" "Nepali chicken sekuwa grilled skewers"
run_one "samosa" "samosa fried snack with chutney"
run_one "spring-roll" "vegetable spring rolls crispy plate"
run_one "club-sandwich" "club sandwich cafe plate with fries"
run_one "sel-roti" "Nepali sel roti ring bread traditional"
run_one "aloo-tama" "Nepali aloo tama potato bamboo curry"
run_one "tibetan-bread" "Tibetan bread fried traditional"
run_one "granola-bowl" "granola yogurt fruit bowl breakfast"

echo "Done. Non-empty files:"
find scripts/img -name "*.json" -size +0c | wc -l
