---
template: sidebyside
title: 5. sort by frequency
anchor: frequency-sort
js: |
  // Query object
  {
    "version": "0.2",
    "pick": {
      "field": ["name"]
    },
    "sort": [
      {
        "field": ["frequency"],
        "direction": "descending"
      }
    ]
  }

  // Resulting value: a list of unique event names sorted from most frequent to least frequent:
  [
    "learn_more",
    "full_product_page",
    "add_to_cart"
  ]
---
If field values are being [picked](#pick) out of events, you can `sort` those values by `["frequency"]`, either `"ascending"` or `"descending"`.

This *deduplicates* the picked values and sorts them based on how frequently each one was found in the filtered events.  This will also override any [sort](#sort) that may have been performed on the underlying events.

Unlike conventional [field identifiers](#field-identifiers), `["frequency"]` does *not* correspond to a real event field.
