---
template: sidebyside
title: 2. filter
anchor: filter
js: |
  // Query for events that demonstrate interest in the "Scout Backpack".
  {
    "version": "0.2",
    "filter": [
      {
        "field": ["tags", "product_name"],
        "value": "Scout Backpack"
      }
    ]
  }
  // Result:
  [
    {
      "type": "pageview",
      "name": "AB_product_page",
      "category": "product_detail",
      "tags": {
        "price": 12800,
        "product_name": "Scout Backpack"
      },
      "time": 1111111115000
    },
    {
      "type": "click",
      "name": "AB_add_to_cart",
      "category": "add_to_cart",
      "tags": {
        "price": 12800,
        "product_name": "Scout Backpack",
        "quantity": 1
      },
      "time": 1111111119000
    }
  ]

  // Query for add-to-cart events where the price was at least $50.00.
  {
    "version": "0.2",
    "filter": [
      {
        "field": ["type"],
        "value": "click"
      },
      {
        "field": ["category"],
        "value": "add_to_cart"
      },
      {
        "field": ["tags", "price"],
        "comparator": "gte",
        "value": 5000
      }
    ]
  }
  // Result:
  [
    {
      "type": "click",
      "name": "AB_add_to_cart",
      "category": "add_to_cart",
      "tags": {
        "price": 12800,
        "product_name": "Scout Backpack",
        "quantity": 1
      },
      "time": 1111111119000
    }
  ]

  // Query for pageview events that happened between 7 and 14 days ago.
  {
    "version": "0.2",
    "filter": [
      {
        "field": ["type"],
        "value": "pageview"
      },
      {
        "field": ["age"],
        "comparator": "between",
        "value": [7*24*60*60*1000, 14*24*60*60*1000]
      }
    ]
  }
  // Result:
  [
    {
      "type": "pageview",
      "name": "AB_product_page",
      "category": "product_detail",
      "tags": {
        "price": 14700,
        "product_name": "Derby Tier Backpack"
      },
      "time": 2222222222000
    }
  ]
---
You can `filter` the results by passing in an array of filters, each comprising a [`field`](#field-identifiers), `comparator`, and `value`.  This narrows down the query to those events that match (all) filters.

Note that you can filter by [`["age"]`](http://localhost:4000/behavior/#field-identifiers) even though `age` is not an actual event field.  This is particularly useful if you want to select events that were generated in the last N days.

These <span id="comparators">*comparators*</span> are usable on all fields:
- `"eq"`: Requires the field value to roughly equal the filter's `value`.  For strings, this is case-insensitive, as well as leading- and trailing-whitespace-insensitive.
- `"is"`: Requires the field value to exactly equal the filter's `value`.
- `"in"`: Requires the field value to be contained in the filter's `value`, which must be an `["array", "of", "acceptable", "values", "such as", 2, "and", true]`.  For strings, this is case-insensitive, as well as leading- and trailing-whitespace-insensitive.
- `"contains"`: Requires the field value, which must be an array, to contain the filter's `value` according to `indexOf`.  For strings, this is case-insensitive.
- `"exists"`: Requires the field value to be defined; the filter need not specify a `value`.  This is only useful for tags, since top-level fields are defined for every event.

The following <span id="string-comparators">*string comparators*</span> can be used on string fields like `type`, `name`, `category` and also on string tags:
- `"regex"`: Requires the field value to match the filter's `value`, which must be either a case-insensitive RegExp `"pattern"`, or a `["pattern", "flags"]` array

The following <span id="number-comparators">*number comparators*</span> can be used on numeric fields like `time`, `age` and also on numeric tags like `revenue`.  These comparators automatically reject non-numeric field values.
- `"gt"`: Requires the field value to be greater than the filter's `value`, which must be a number.
- `"gte"`: Requires the field value to be greater than or equal to the filter's `value`, which must be a number.
- `"lt"`: Requires the field value to be less than the filter's `value`, which must be a number.
- `"lte"`: Requires the field value to be less than or equal to the filter's `value`, which must be a number.
- `"between"`: Requires the field value to be in the inclusive interval specified by the filter's `value`, which must be an array of two numbers.

If `comparator` is omitted, it defaults to `"eq"`.

`value` can only be omitted when you have specified the `"exists"` comparator.
