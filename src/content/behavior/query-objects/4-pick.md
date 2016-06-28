---
template: sidebyside
title: 4. pick
anchor: pick
js: |
  // Query object
  {
    "version": "0.2",
    "sort": [
      {
        "field": ["time"],
        "direction": "descending"
      }
    ],
    "pick": {
      "field": ["name"]
    }
  }

  // Resulting value: a list of event names sorted from most recent to least recent.
  [
    "full_product_page",
    "add_to_cart",
    "learn_more",
    "learn_more",
    "learn_more",
    "full_product_page"
  ]
---
You can `pick` the values for a single field out of an array of (potentially [filtered](#filter) and
[sorted](#sort)) events.
