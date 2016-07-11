---
template: sidebyside
title: 5. sort by frequency
anchor: frequency-sort
js: |
  // Query for unique tag values sorted from most frequent to least frequent
  {
    "version": "0.2",
    "pick": {
      "field": ["tags", "product_name"]
    },
    "sort": [
      {
        "field": ["frequency"],
        "direction": "descending"
      }
    ]
  }
  // Result:
  [
    "Scout Backpack",
    "Derby Tier Backpack"
  ]
---
If field values are being [picked](#pick) out of events, you can `sort` those values by `["frequency"]`, either `"ascending"` or `"descending"`.

This *deduplicates* the picked values and sorts them based on how frequently each one was found in the filtered events.  This will also override any [sort](#sort) that may have been performed on the underlying events.

Unlike conventional [field identifiers](#field-identifiers), `["frequency"]` does *not* correspond to a real event field.
