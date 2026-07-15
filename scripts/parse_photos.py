import json, os

photos_dir = '/home/z/my-project/scripts/photos'
results = {}

for fname in sorted(os.listdir(photos_dir)):
    if not fname.endswith('.json'):
        continue
    key = fname.replace('.json', '')
    path = os.path.join(photos_dir, fname)
    try:
        with open(path) as f:
            text = f.read().strip()
        if not text:
            print(f"{key}: EMPTY")
            continue
        d = json.loads(text)
        items = d.get('results') or []
        if items:
            url = items[0].get('original_url') or items[0].get('url') or ''
            results[key] = url
            print(f"{key}: {url}")
        else:
            print(f"{key}: NO RESULTS")
    except Exception as e:
        print(f"{key}: ERROR - {e}")

with open('/home/z/my-project/scripts/photo-map.json', 'w') as f:
    json.dump(results, f, indent=2)
print(f"\nSaved {len(results)} URLs to photo-map.json")
