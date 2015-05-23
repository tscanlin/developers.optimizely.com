---
template: sidebyside
title: List variations in experiment
type: GET
anchor: list-variation
endpoint: experiments/854484703/variations/
endpoint_prefix: experiments/
endpoint_option: 854484703
endpoint_suffix: /variations/
response: |
  [
    {
      "is_paused": false,
      "description": "Original",
      "weight": null,
      "created": "2014-04-17T00:47:58.390560Z",
      "section_id": null,
      "js_component": "",
      "experiment_id": 854484703,
      "project_id": 859720118,
      "id": 854613530
    },
    {
      "is_paused": false,
      "description": "Variation #1",
      "weight": 5000,
      "created": "2014-04-17T00:47:06.388650Z",
      "section_id": null,
      "js_component": "$('.headline').text('Headline one');",
      "experiment_id": 854484703,
      "project_id": 859720118,
      "id": 859611684
    },
    {
      "is_paused": false,
      "description": "Variation #2",
      "weight": 5000,
      "created": "2014-04-17T00:47:06.388900Z",
      "section_id": null,
      "js_component": "$('.headline').text('Headline two');",
      "experiment_id": 854484703,
      "project_id": 859720118,
      "id": 859611685
    }
  ]
---
List all variations associated with the experiment.
