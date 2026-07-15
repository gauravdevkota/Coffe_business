import json, os, re

img_dir = '/home/z/my-project/scripts/img'
results = {}
for fname in sorted(os.listdir(img_dir)):
    if not fname.endswith('.json'):
        continue
    key = fname.replace('.json', '')
    path = os.path.join(img_dir, fname)
    try:
        with open(path) as f:
            text = f.read().strip()
        if not text:
            print(f"{key}: EMPTY FILE")
            continue
        d = json.loads(text)
        items = d.get('results') or []
        if items:
            url = items[0].get('original_url') or items[0].get('url') or ''
            results[key] = url
            print(f"{key}: OK -> {url}")
        else:
            print(f"{key}: NO RESULTS - {d.get('error', 'unknown')}")
    except Exception as e:
        print(f"{key}: ERROR - {e}")

with open('/home/z/my-project/scripts/image-map.json', 'w') as f:
    json.dump(results, f, indent=2)
print(f"\nSaved {len(results)} URLs to image-map.json")
