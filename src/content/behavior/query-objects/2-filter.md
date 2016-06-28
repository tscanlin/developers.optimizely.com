---
template: sidebyside
title: 2. filter
anchor: filter
js: |
  // Query object
  {
    "version": "0.2",
    "filter": [
      {
        "field": ["type"],
        "value": "pageview"
      },
      {
        "field": ["name"],
        "value": "full_product_page"
      },
      {
        "field": ["tags", "product_sku"],
        "comparator": "exists"
      }
    ]
  }

  // Resulting value: list of pageview events from the `"full_product_page"` page that have a value for the `"product_sku"` tag,
  // TODO

  // Query object
  {
    "version": "0.2",
    "filter": [
      {
        "field": ["age"],
        "comparator": "between",
        "value": [7*24*60*60*1000, 14*24*60*60*1000]
      }
    ]
  }

  // Resulting value: list of events that happened between 7 and 14 days ago.
  // TODO
---
You can `filter` the results by passing in an array of filters, each comprising a [`field`](#field-identifiers), `comparator`, and `value`.  This narrows down the query to those events that match (all) filters.

Note that you can filter by [`["age"]`](http://localhost:4000/behavior/#field-identifiers) even though `age` is not an actual event field.  This is particularly useful if you want to select events that were generated in the last N days.

These <span id="comparators">*comparators*</span> are usable on all fields:
- `"eq"`: Requires the field value to roughly equal the filter's `value`.  For strings, this is case-insensitive, as well as leading- and trailing-whitespace-insensitive.
- `"is"`: Requires the field value to exactly equal the filter's `value`.
- `"in"`: Requires the field value to be contained in the filter's `value`, which must be an `["array", "of", "acceptable", "values", 1, 2, 3]`.  For strings, this is case-insensitive, as well as leading- and trailing-whitespace-insensitive.
- `"contains"`: Requires the field value, which must be an array, to contain the filter's `value` according to `indexOf`.  For strings, this is case-insensitive.
- `"exists"`: Requires the field value to be defined; the filter need not specify a `value`.  This is only useful for tags, since top-level fields are defined for every event.

The following <span id="string-comparators">*string comparators*</span> can be used on string fields like `type`,
`name`, `category` and also on string tags:
- `"regex"`: Requires the field value to match the filter's `value`, which must be either a case-insensitive RegExp `"pattern"`, or a `["pattern", "flags"]` array

The following <span id="number-comparators">*number comparators*</span> can be used on numeric fields like `time`, `age` and also on numeric tags like `revenue`:
- `"gt"`: Requires the field value to be greater than the filter's `value`.
- `"gte"`: Requires the field value to be greater than or equal to the filter's `value`.
- `"lt"`: Requires the field value to be less than the filter's `value`.
- `"lte"`: Requires the field value to be less than or equal to the filter's `value`.
- `"between"`: Requires the field value to be in the inclusive interval specified by the filter's `value`, e.g. [123, 456].

If `comparator` is omitted, it defaults to `"eq"`.

`value` can only be omitted when you have specified the `"exists"` comparator.
