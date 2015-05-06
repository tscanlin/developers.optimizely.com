---
template: sidebyside
endpoint: goals/543071054/
endpoint_prefix: goals/
endpoint_option: 543071054
type: GET
title: Read a goal
anchor: read-goal
response: |
  {
    "is_editable": null,
    "target_to_experiments": true,
    "archived": false,
    "description": "Confirming if the navigation is used more or less. #nav",
    "id": 543071054,
    "target_urls": [],
    "title": "Navigation button clicks",
    "event": "nav_button_clicks",
    "url_match_types": [],
    "project_id": 547944643,
    "goal_type": 0,
    "experiment_ids": [
      561450169
    ],
    "selector": ".portal-navigation > button",
    "created": "2014-01-09T23:47:51.042343Z",
    "last_modified": "2014-12-08T12:33:27.045543Z",
    "target_url_match_types": [],
    "urls": []
  }
---

Optimizely has several different goal types, as explained <a href="https://help.optimizely.com/hc/en-us/articles/200039915-Goals-Overview" target="_blank">in our knowledge base</a>. Depending on the goal type, different fields in the response are important.

#### Common properties

All goals have a unique `id` and a `title` that shows up in the Optimizely editor and results page. They also have a `goal_type` with one of the following integer values:

  * `0` Click
  * `1` Custom event
  * `2` Engagement
  * `3` Pageviews
  * `4` Revenue

Pageview, click and custom event goals can be created via the API. Engagement and revenue goals are created automatically with each project and can be added or removed from experiments.

Goals can also be designated as `addable`, where `true` means they'll show up in the "Saved Goals" list for reuse across experiments and `false` means they'll be hidden from the list.

Goals with `is_editable` set to `true` can be updated using a PUT request. [Old goals cannot be edited](https://help.optimizely.com/hc/en-us/articles/200039915-Goals-Measure-the-success-of-your-experiment#retroactive_goals), and will have this field set to `false`.

#### Click goals

<a href="https://help.optimizely.com/hc/en-us/articles/200039905" target="_blank">Click goals</a> track clicks on any element matched by the jQuery `selector`.

If `target_to_experiments` is true, the goal will use the exact same targeting conditions as the experiment as a whole. If it's false, then the goal will be measured on the pages defined in `target_urls` according to `target_url_match_types`.

#### Pageview goals

<a href="https://help.optimizely.com/hc/en-us/articles/200090069">Pageview goals</a> track the number of visitors to the pages specified in `urls`, as specified by `url_match_types`.

The `url_match_types` can use the following integer values:

* `1` Exact
* `2` Regular expression
* `3` Simple
* `4` Substring

#### Custom event goals

<a href="https://help.optimizely.com/hc/en-us/articles/200039925" target="_blank">Custom event goals</a> allow you to capture and report on visitor actions or events that might not be related exclusively to clicks or page views. The event to track is defined in `event`.
