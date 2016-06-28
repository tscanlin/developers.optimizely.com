---
template: sidebyside
title: Fields
anchor: fields
js: |
  // A single event
  {
    "type": "pageview",
    "name": "full_product_page",
    "category": "product_detail",
    "tags": {
      "product_sku": "428977",
      "product_desc": "Clamshell Button 12mm",
      "product_cat": "button"
    },
    "time": 1447046231000
  }
---

Each event object has the following *fields*:
- `type`: `'pageview'`, `'click'`, or `'custom'`
- `name`: A page name, click event name, or custom event name.  If you filter by `name`, you probably want to filter by `type` as well
- `category`: A category name.  All events with a given `name` and `type` will necessarily have the same `category`.
- Various `tags`: All events from a given page will have those pages' tag values, although additional or overridden tag values may be present on [custom events](/javascript/personalization/#events).
- `time`: The time at which the event occurred (number of milliseconds after January 1, 1970).

Each field can be a number, boolean, of strings.

Tag fields may also be `undefined` or some arbitrary JSON value, so be prepared for anything if you're retrieving tag values using the [query](/javascript/personalization/#query) API.
