---
template: multi-example
title: Variation assignment
anchor: variation
code_examples:
  python:
    lang: python
    request: |
      experiment_key = 'my_experiment'
      user_id = 'user123'      

      # Get the active variation for the provided user
      variation = optimizely.get_variation(experiment_key, user_id)
  java:
    lang: java
    request: |
      String experimentKey = "my_experiment";
      String userId = "user123";
     
      // Get the active variation for the provided user 
      Variation variation = optimizely.getActiveVariation(experimentKey, userId);
  ruby:
    lang: ruby
    request: |
      experiment_key = 'my_experiment'
      user_id = 'user123'

      # Get the active variation for the provided user
      variation = optimizely.get_variation(experiment_key, user_id)
---

If you've already called `activate` and would like to retrieve the current variation assignment for a given experiment and user, without sending a duplicate network request to Optimizely, you can use the code shown at right.
