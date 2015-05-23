---
template: sidebyside
endpoint: projects/1234/goals/
endpoint_prefix: projects/
endpoint_option: 1234
endpoint_suffix: /goals/
type: POST
anchor: create-goal
title: Create a goal
request:
  title: "Add to cart clicks"
  goal_type: 0
  selector: 'div.cart > button'
response: |
  {
    "is_editable": false,
    "target_to_experiments": null,
    "id": 860850647,
    "target_urls": [],
    "title": "Add to cart clicks",
    "archived": true,
    "description": "",
    "event": null,
    "url_match_types": [],
    "project_id": 547944643,
    "goal_type": 0,
    "experiment_ids": [],
    "selector": null,
    "created": "2014-04-20T18:20:10.991600Z",
    "last_modified": "2014-08-17T19:32:11.006794Z",
    "target_url_match_types": [],
    "urls": []
  }
---

For all goals, the `title` and `goal_type` are required. For each goal type, other fields are required:

* Click goals need a `selector` and a boolean value for `target_to_experiments` to be set. If it's true, the goal will run on the same pages as the experiment it's it attached to. If it's false, you should also provide `target_urls` and `target_url_match_types`.
* Pageview goals need a list of `urls` and `url_match_types` and will match nowhere if the lists are empty.
* Custom event goals need an `event` name.
