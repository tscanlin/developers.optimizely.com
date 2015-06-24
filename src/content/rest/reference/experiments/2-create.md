---
template: sidebyside
endpoint: projects/1234/experiments/
endpoint_prefix: projects/
endpoint_option: 1234
endpoint_suffix: /experiments/
type: POST
anchor: create-experiment
title: Create a new experiment
request:
  edit_url: https://mysite.com/products/
  description: My Experiment Name
response: |
  {
    "id": 791495413,
    "project_id": 1234,
    // ... (other fields omitted)
    "percentage_included": 10000,
    "is_multivariate": false,
    "variation_ids": [
      800227656,
      800227657
    ],
    "status": "Not started",
    "url_conditions": [
      {
        "index": 0,
        "match_type": "simple",
        "created": "2014-04-12T19:10:53.806640Z",
        "value": "https://mysite.com/products",
        "last_modified": "2014-04-12T19:10:53.806650Z",
        "negate": false
      }
    ],
    "description": "My Experiment Name",
    "activation_mode": "immediate",
    "custom_css": "",
    "custom_js": "",
    "experiment_type": "ab",
  }

---

The `project_id` is required in the URL, and the `description` and `edit_url` are required in the body. The [other editable arguments](#update-experiment) are all optional.

When you create an experiment, Optimizely will also fill in associated data by default. These defaults mimic the behavior of Optimizely's editor and include:

- Two variations in `variation_ids` named "Original" and "Variation #1". The default variations have 50% traffic each and no code.
- One URL targeting condition in `url_conditions`. By default, your experiment is targeted to the `edit_url` with a simple match.
- Traffic allocated to 100% in `percentage_included`. Traffic is measured in basis points. Divide by 100 to get a percentage.
- A `status` of "Not started", meaning the experiment will not be running initially.
- Immediate `activation_mode`, rather than manual.
- The `experiment_type` will be a normal A/B test, rather than a multivariate or multipage test.
