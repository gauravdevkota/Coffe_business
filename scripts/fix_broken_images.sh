#!/bin/bash
cd /home/z/my-project
mkdir -p scripts/img2

run_one() {
  local key="$1"
  local query="$2"
  echo "[$key]"
  z-ai image-search -q "$query" -c 1 --no-rank 2>/dev/null | sed -n '/^{/,$p' > "scripts/img2/${key}.json"
  if [ -s "scripts/img2/${key}.json" ]; then
    url=$(python3 -c "import json; d=json.load(open('scripts/img2/${key}.json')); print(d.get('results',[{}])[0].get('original_url',''))")
    echo "  -> $url"
  else
    echo "  FAILED"
  fi
  sleep 3
}

run_one "black-chiya" "black tea in clear glass cup hot"
run_one "adrak-chiya" "ginger tea hot drink in glass"
run_one "mocha" "mocha coffee chocolate drink cup"
run_one "iced-chiya" "iced milk tea glass cold drink"
run_one "lassi" "mango lassi yogurt drink in glass"
echo "DONE"
