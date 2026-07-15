#!/bin/bash
cd /home/z/my-project
mkdir -p scripts/img3

run_one() {
  local key="$1"
  local query="$2"
  if [ -s "scripts/img3/${key}.json" ]; then
    echo "[$key] cached"
    return
  fi
  echo "[$key] searching..."
  z-ai image-search -q "$query" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/img3/${key}.json"
  if [ -s "scripts/img3/${key}.json" ]; then
    url=$(python3 -c "import json; d=json.load(open('scripts/img3/${key}.json')); print(d.get('results',[{}])[0].get('original_url',''))" 2>/dev/null)
    echo "  -> $url"
  else
    echo "  FAILED, retrying in 8s..."
    sleep 8
    z-ai image-search -q "$query" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/img3/${key}.json"
    [ -s "scripts/img3/${key}.json" ] && echo "  OK (retry)" || echo "  STILL EMPTY"
  fi
  sleep 5
}

run_one "chhoila" "Nepali chhoila grilled meat with beaten rice"
run_one "dhido" "Nepali dhido buckwheat porridge traditional"
run_one "puri-tarkari" "Indian puri fried bread with potato curry"
run_one "aloo-paratha" "aloo paratha stuffed flatbread with butter"
run_one "masala-omelette" "masala omelette with toast Indian style"
run_one "french-toast" "cafe french toast with syrup and berries"
run_one "eggs-benedict" "eggs benedict with hollandaise on english muffin"
run_one "poha" "Indian poha flattened rice with peanuts"
run_one "nepali-thali" "Nepali thali plate rice dal curry"
run_one "breakfast-spread" "Nepali breakfast spread table overhead"
echo "DONE"
