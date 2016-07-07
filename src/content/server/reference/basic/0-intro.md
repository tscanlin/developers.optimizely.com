---
template: multi-example
title: Basic Usage
anchor: basic
code_examples:
  python:
    lang: python
    request: |
      experiment_key = 'my_experiment'
      user_id = 'user123'

      # Conditionally activate an experiment for the provided user
      variation = optimizely.activate(experiment_key, user_id)

      if variation == 'variation_a':
        # execute code for variation A
      elif variation == 'variation_b':
        # execute code for variation B
      else:
        # execute default code
  java:
    lang: java
    request: |
      String experimentKey = "my_experiment";
      String userId = "user123";

      // Conditionally activate an experiment for the provided user
      Variation variation = optimizely.activate(experimentKey, userId);

      if (variation != null) {
          if (variation.is("variation_a")) {
              // execute code for variation A
          } else if (variation.is("variation_b")) {
              // execute code for variation B
          }
      } else {
          // execute default code
      }

  ruby:
    lang: ruby
    request: |
      experiment_key = 'my_experiment'
      user_id = 'user123'

      # Conditionally activate an experiment for the provided user
      variation = optimizely.activate(experiment_key, user_id)

      if variation == 'variation_a'
        # execute code for variation A
      elsif variation == 'variation_b'
        # execute code for variation B
      else
        # execute default code
      end
  javascript:
    lang: javascript
    request: |
      var experimentKey = 'my_experiment';
      var userId = 'user123';

      // Conditionally activate an experiment for the provided user
      var variation = optimizely.activate(experimentKey, userId);

      if (variation === 'variation_a') {
        // execute code for variation A
      } else if (variation === 'variation_b') {
        // execute code for variation B
      } else {
        // execute default code
      }
---

Use the `activate` function to run an experiment in your code.

The `activate` call will conditionally activate an experiment for a user based on the provided experiment key and a randomized hash of the provided user ID. If the user satisfies audience conditions for the experiment and the experiment is valid and running, the function returns the variation the user is bucketed in. Otherwise, `activate` returns `None` or `null`. Make sure that your code adequately deals with the case when the experiment is not activated i.e. execute the default variation.

<div class="attention attention--warning push--bottom">*Please note:* in cases where an experiment is activated for a user, the SDK will log an event to Optimizely servers to record that the user was bucketed.</div>
