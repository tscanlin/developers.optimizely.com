---
template: sidebyside
title: 6. reduce
anchor: reduce
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
    // Reduce a list of sorted events into a single event.
    "reduce": {
      "aggregator": "nth",
      "n": 0
    }
  }

  // Resulting value: the single most recent event.

  // Query object
  {
    "version": "0.2",
    "pick": {
      "field": ["tags", "revenue"],
    },
    // Reduce a list of picked field values into a single value.
    "reduce": {
      "aggregator": "sum"
    }
  }

  // Resulting value: the sum of all defined values for the "revenue" tag.
  4200
---
You can `reduce` a list of values into a single value using an `aggregator`.

These <span id="aggregators">*aggregators*</span> are usable on all types of values:
- `"nth"`: Reduce the list by choosing the nth value and ignoring the rest.  `"n"` is specified separately, and is 0-indexed, so you should specify `0` if you want the first value.  This aggregator is only meaningful when values have been [sorted](#sort).
- `"count"`: Reduce the list by resolving to the number of values in the list.  There is no need to [sort](#sort) or [pick](#pick) when using this aggregator.

The following <span id="mathematical-aggregators">*mathematical aggregators*</id> are usable on numeric fields like `time`, `age` and also on numeric tags like `revenue`:
- `"sum"`: Reduce the list by computing the sum of the numeric values.
- `"avg"`: Reduce the list by computing the average of the numeric values.
- `"max"`: Reduce the list by choosing the largest of the numeric values.
- `"min"`: Reduce the list by choosing the smallest of the numeric values.

Non-numeric values are ignored when evaluating a mathematical aggregator, as if those values didn't exist at all.  This ensures, for example, that an `"avg"` computation is not diluted through zero-filling of `undefined` values.  Note that JavaScript numbers like `NaN`, `+Infinity`, and `-Infinity` are still recognized and can strong affect the result of the aggregation.
