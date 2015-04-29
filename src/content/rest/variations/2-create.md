---
template: sidebyside
endpoint: experiments/854484703/variations/
endpoint_prefix: experiments/
endpoint_option: 854484703
endpoint_suffix: /variations/
type: POST
title: Create a new variation
anchor: create-variation
request:
  description: "Variation #1"
  js_component: $(".headline").text("New headline");
  weight: 3333
response: |
  {
    "is_paused": false,
    "description": "Variation #1",
    "weight": 3333,
    "created": "2014-04-17T00:47:06.388650Z",
    "section_id": null,
    "js_component": "$('.headline').text('New headline');",
    "experiment_id": 854484703,
    "project_id": 859720118,
    "id": 859611685
  }
---

The `experiment_id` is required in the URL, and the `description` is required in the body. Most variations will also want to include `js_component`, but an Original can use the default value of an empty string.

Whenever possible, you should also include the correct `weight` and update the other variations so their weights sum to 10000.

Note that newly created experiments come with two variations created automatically, so you may need to PUT a variation rather than POSTing it.

#### Known issues

Traffic allocation may not always be set correctly. Changes to the `weight` or `is_paused` property should be double-checked on optimizely.com.

We're working on fixing this issue now. Please contact [developers@optimizely.com](mailto:developers@optimizely.com) to be updated when it is fixed.
