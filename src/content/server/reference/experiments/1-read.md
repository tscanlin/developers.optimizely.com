---
template: sidebyside
endpoint: experiments/15/
endpoint_prefix: experiments/
endpoint_option: 15
type: GET
title: Read an experiment
anchor: read-experiment
fields:
  id: The unique identifier for the experiment
  project_id: The project the experiment was created in.
  variation_ids: A list of variations in the experiment. A basic A/B test has two variations.
  edit_url: The page that will show up in the Optimizely editor.
  description: The name that will show up in the Optimizely dashboard and editor.
  display_goal_order_lst: List of goal IDs representing the goals applicable to the experiment.
  primary_goal_id: The ID of the primary goal for the experiment.
  details: The description or hypothesis for an experiment.
  custom_css: CSS which is applied to all the variations in the experiment, including the Original. Learn more [here](https://help.optimizely.com/hc/en-us/articles/200039855#experiment_css).
  custom_js: JavaScript code which runs before variation code for all the variations in the experiment, including the Original. Learn more [here](https://help.optimizely.com/hc/en-us/articles/200039855#experiment_javascript).
  status: A `Running` experiment will be live for visitors. A `Paused` or `Not started` experiment will not. `Archived` experiments will be hidden in Optimizely.
  url_conditions: |
    The pages where an experiment will run. For more details, see our article on <a href="https://help.optimizely.com/hc/en-us/articles/200040835-URL-Targeting" target="_blank">URL Targeting</a>. This property is now editable through the API. URL conditions are objects with these properties:

    - **match_type**: default is `simple`, can also be `regex`, `exact`, or `substring`

    - **value**: the URL string to match

    - **negate**: default is `false`, setting it to `true` will exclude the URL
  percentage_included: The percentage of your visitors that should see the experiment, measured in basis points. 100 basis points = 1% traffic.
  activation_mode: Can be `immediate`, `manual` or 'conditional', see <a href="https://help.optimizely.com/hc/en-us/articles/200039765-Activation-Mode" target="_blank">Activation Mode</a>.
  conditional_code: The JavaScript condition or function used to activate the experiment. Learn more [here](https://help.optimizely.com/hc/en-us/articles/200040225-Activation-Mode-Activating-an-experiment-dynamically-after-a-page-has-loaded#conditional).
  experiment_type: A normal A/B test is `ab` but this could also be `multivariate` or `multipage`. See <a href="https://help.optimizely.com/hc/en-us/articles/200039785-Experiment-Type-Overview" target="_blank">Experiment Type Overview</a>.
  shareable_results_link: A link that anyone can use to see your experiment's results, whether or not they're logged into Optimizely.
  audience_ids: List of IDs of all audiences the experiment is targeted at.
response: |
  {
    "id": 791495413,
    "percentage_included": 10000,
    "display_goal_order_lst": [],
    "is_multivariate": false,
    "project_id": 754864960,
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
        "value": "http://blog.optimizely.com/2014/04/11/10-reasons-why-your-agency-should-offer-optimization/",
        "last_modified": "2014-04-12T19:10:53.806650Z",
        "negate": false
      }
    ],
    "description": "Wordpress: 10 Reasons Why Your Agency Should Offer Optimization ",
    "last_modified": "2014-04-12T19:10:53.806650Z",
    "activation_mode": "immediate",
    "details": "Experiment to test out blog post.",
    "custom_css": "",
    "created": "2014-04-12T19:10:53.588450Z",
    "custom_js": "",
    "primary_goal_id": null,
    "experiment_type": "ab",
    "shareable_results_link": "https://www.optimizely.com/results?experiment_id=791495413&token=fh3lk2hrlk",
    "edit_url": "http://blog.optimizely.com/2014/04/11/10-reasons-why-your-agency-should-offer-optimization/",
    "audience_ids": []
  }
---

Get metadata for a single experiment.
