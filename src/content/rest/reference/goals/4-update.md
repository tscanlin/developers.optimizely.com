---
template: sidebyside
endpoint: goals/1234
endpoint_prefix: goals/
endpoint_option: 1234
type: PUT
title: Update a goal
anchor: update-goal
request:
  title: Updated goal name
response: |
  {
    "id": 1234,
    // ... (other fields omitted)
    "title": "Updated goal name"
  }
---

#### Editable fields
- `archived`
- `description`
- `experiment_ids`
- `goal_type`
- `selector`
- `target_to_experiments`
- `target_urls`
- `target_url_match_types`
- `title`
- `urls`
- `url_match_types`

Please note that [old goals cannot be edited](https://help.optimizely.com/hc/en-us/articles/200039915-Goals-Measure-the-success-of-your-experiment#retroactive_goals), and will have `is_editable` set to `false`.
