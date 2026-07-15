"""Update menu-data.ts with verified real photo URLs from photo-map.json."""
import json
import re

# Load the photo map
with open('/home/z/my-project/scripts/photo-map.json') as f:
    photo_map = json.load(f)

print(f"Loaded {len(photo_map)} photo URLs")

# Read the current menu-data.ts
with open('/home/z/my-project/src/lib/menu-data.ts') as f:
    content = f.read()

# For each menu item id, find its image URL field and replace it
# The pattern is:
#   id: "some-id",
#   ...
#   image:
#     "OLD_URL",
updated = content
replacements = 0

for item_id, new_url in photo_map.items():
    # Find the block for this id and replace its image URL
    # Pattern: id: "item-id", ... image:\n      "old-url",
    # We use a non-greedy match to find the image field after the id
    pattern = rf'(id: "{re.escape(item_id)}",.*?image:\s*\n\s*)"[^"]+",'
    match = re.search(pattern, updated, re.DOTALL)
    if match:
        old_url_in_file = re.search(r'"([^"]+)"', match.group(0).split('image:')[1])
        old_url = old_url_in_file.group(1) if old_url_in_file else "unknown"
        updated = re.sub(
            pattern,
            rf'\1"{new_url}",',
            updated,
            count=1,
            flags=re.DOTALL,
        )
        replacements += 1
        print(f"  {item_id}: replaced")
    else:
        print(f"  {item_id}: NOT FOUND in file")

# Write the updated content
with open('/home/z/my-project/src/lib/menu-data.ts', 'w') as f:
    f.write(updated)

print(f"\nUpdated {replacements} image URLs in menu-data.ts")

# Verify: count remaining unsplash URLs
with open('/home/z/my-project/src/lib/menu-data.ts') as f:
    final = f.read()
unsplash_count = final.count('images.unsplash.com')
sfile_count = final.count('sfile.chatglm.cn')
print(f"Remaining unsplash URLs: {unsplash_count}")
print(f"sfile.chatglm.cn URLs: {sfile_count}")
