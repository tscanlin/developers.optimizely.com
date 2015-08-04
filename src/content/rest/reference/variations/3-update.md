---
template: sidebyside
endpoint: variations/859611685
endpoint_prefix: variations/
endpoint_option: 859611685
type: PUT
title: Update a variation
anchor: update-variation
request:
  js_component: $(".headline").text("Updated headline");
response: |
  {
    "is_paused": false,
    "description": "Variation #1",
    "weight": 3333,
    "created": "2014-04-17T00:47:06.388650Z",
    "section_id": null,
    "js_component": "$('.headline').text('Updated headline');",
    "experiment_id": 854484703,
    "project_id": 859720118,
    "id": 859611685
  }
---

The `id` is required in the URL.

#### Editable fields

- `description`
- `is_paused` (set this to `true` to stop the variation from getting traffic)
- `js_component`
- `weight`
