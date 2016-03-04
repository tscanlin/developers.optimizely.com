---
partial: _inline.html
type: GET
endpoint: projects/1234/experiments
title: List experiments
anchor: results-list
response: |
  [
    {
      "id": 15,
      "project_id": 1234,
      // ... (other fields omitted)
      "variation_ids": [115, 210, 215],
      "edit_url": "https://mysite.com/products/",
      "status": "Not started"
    },
    {
      "id": 16,
      "project_id": 1234,
      // ... (other fields omitted)
      "variation_ids": [216, 217, 218],
      "edit_url": "https://mysite.com/cart/",
      "status": "Running"
    },
  ]
---

Next, you'll want to [list out all of the experiments](/rest/reference/index.html#list-experiments) for the selected project.  You can tell which experiments are active based on the `status` field.
