---
template: page-sidebar--full
title: Field Identifers
anchor: field-identifiers
---
When defining a behavioral query, you may need to refer to a particular event field.  You can do this using *field identifiers*.

For top-level fields like `time`, the identifier is an array containing the name of the field.
- `["type"]`: Identifies the `type` field.
- `["name"]`: Identifies the `name` field.
- `["category"]`: Identifies the `category` field.
- `["time"]`: Identifies the `time` field.

For tag fields, the identifier is an array containing the string `"tags"` and then the name of the tag.
- `["tags", "material"]`: Identifies the `material` tag.
- `["tags", "color"]`: Identifies the `color` tag.
- `["tags", "revenue"]`: Identifies the special `revenue` tag.  Its value is extracted in Optimizely's analytics backend and used to compute advanced statistics.

When [filtering](#filter), you can also refer to an event's `age`.  `age` is not a real event field so it is never actually included in event objects.  Compare with [`time`](#fields).
- `["age"]`: Identifies the amount of time since an event occurred (number of millseconds before the time at which the query is executed).
