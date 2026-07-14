import json
with open('/home/z/my-project/scripts/chiya-search.json') as f:
    d = json.load(f)

items = d
if isinstance(d, dict):
    items = d.get('data') or d.get('results') or d.get('list') or []
if not isinstance(items, list):
    items = [d]

for i, item in enumerate(items, 1):
    print(f"--- Result {i} ---")
    print("title:", item.get('title', ''))
    print("url:", item.get('url') or item.get('link') or '')
    print("snippet:", item.get('snippet') or item.get('description') or item.get('content', '')[:300])
    print()
