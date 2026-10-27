# Store Batch 1 product images

Save the eight uploaded photos as project assets. The website will not change.

## Note on file names
You said this batch contains marathon shoes and wedding sandals. Four files are named "hiking" (hiking_one, hiking_2, hiking_3, hiking_4), and four are named "marathon". I will check each photo. If the "hiking" files really show wedding sandals, I will save them in the wedding group. If they show hiking boots, I will save them in the hiking group and tell you.

## Steps
1. Look at each photo to confirm what product it shows.
2. Upload all eight to asset storage under a separate batch folder:
   - Marathon: marathon-1 to marathon-4
   - Second group (wedding or hiking, based on step 1): four files numbered 1 to 4
3. Make no changes to the pages, product lists, or tests. The current photos stay as they are.
4. Wait for Batch 2 and your instructions.

## Technical details
- Each file gets an `.asset.json` pointer in `src/assets/products/batch1/`, created from `/mnt/user-uploads/` with `lovable-assets create`.
- No imports are added, so the site build stays the same.
