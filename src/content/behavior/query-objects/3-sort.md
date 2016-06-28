---
template: sidebyside
title: 3. sort by time
anchor: sort
js: |
  // Query object
  {
    "version": "0.2",
    "sort": [
      {
        "field": ["time"],
        "direction": "descending"
      }
    ]
  }

  // Resulting value: a list of events sorted from newest to oldest.
  // TODO
---
You can `sort` events by [`["time"]`](#field-identifiers), either `"ascending"` or `"descending"`.
