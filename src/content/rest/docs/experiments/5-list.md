---
template: sidebyside
endpoint: projects/1234/experiments/
endpoint_prefix: projects/
endpoint_option: 1234
endpoint_suffix: /experiments/
type: GET
title: List experiments in project
anchor: list-experiments
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
Get a list of all the experiments in a project.
