---
template: multi-example
title: User attributes
anchor: targeting
code_examples:
  python:
    lang: python
    request: |
      experiment_key = 'my_targeted_experiment'
      user_id = 'user123'
      attributes = {'device': 'iPhone', 'ad_source': 'my_campaign'}

      # Conditionally activate an experiment for the provided user
      variation = optimizely.activate(experiment_key, user_id, attributes)

  java:
    lang: java
    request: |
      String experimentKey = "my_experiment";
      String userId = "user123";

      Map<String, String> attributes = new HashMap<String, String>();
      attributes.put("DEVICE", "iPhone");
      attributes.put("AD_SOURCE", "my_campaign");

      // Conditionally activate a experiment for the provided user
      Variation variation = optimizely.activate(experimentKey, userId, attributes);

  ruby:
    lang: ruby
    request: |
      experiment_key = 'my_experiment'
      user_id = 'user123'
      attributes = {'DEVICE' => 'iPhone', 'AD_SOURCE' => 'my_campaign'}

      # Conditionally activate an experiment for the provided user
      variation = optimizely.activate(experiment_key, user_id, attributes)

  javascript:
    lang: javascript
    request: |
      var experimentKey = 'my_experiment';
      var userId = 'user123';
      var attributes = { 'device': 'iphone', 'ad_source': 'my_campaign' };

      // Conditionally activate an experiment for the provided user
      var variation = optimizely.activate(experimentKey, userId, attributes);

---

If you'd like to be able to segment your experiments based on attributes of your users, you should include the optional `attributes` argument to the `activate` function call. Optimizely will include these attributes when logging the experiment so you can segment them on the Optimizely results page.

Passing attributes will also allow you to target your experiments to a particular audience you've defined in Optimizely. If the provided experiment is targeted to an audience, Optimizely will evaluate whether the user falls in an audience that is associated with the experiment before bucketing.
