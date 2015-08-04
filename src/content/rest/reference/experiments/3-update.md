---
template: sidebyside
endpoint: experiments/15
endpoint_prefix: experiments/
endpoint_option: 15
type: PUT
title: Update an experiment
anchor: update-experiment
request:
  "status": "Running"
response: |
  {
    "id": 791495413,
    // ... (other fields omitted)
    "status": "Running"
  }
---
#### Editable fields

- `audience_ids` (add or remove an audience ID here to change the experiment's targeting)
- `activation_mode`
- `description`
- `edit_url`
- `status` (send "Running" to start an experiment and "Paused" to stop)
- `custom_css`
- `custom_js`
- `percentage_included`
- `url_conditions`

We don't currently support creating or updating multivariate or multipage tests via the API.
