---
template: multi-example
title: Basic Usage
anchor: basic
code_examples:
  python:
    lang: python
    request: |
      import optimizely

      optimizely = optimizely.Optimizely(datafile)

      variation = optimizely.activate(experiment_key, user_id)

      if variation == 'variation_a':
        # execute code for variation A
      elif variation == 'variation_b':
        # execute code for variation B
      else:
        # execute default code

      optimizely.track(event_key, user_id)

      variation = optimizely.get_variation(experiment_key, user_id)

  java:
    lang: java
    request: |
      import com.optimizely.ab.Optimizely;

      Optimizely optimizely = Optimizely.builder(datafile).build();

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

      optimizely.track(eventKey, userId);

      Variation variation = optimizely.getActiveVariation(experimentKey, userId);

  ruby:
    lang: ruby
    request: |
      require "optimizely"

      optimizely = Optimizely::Optimizely.new(datafile)

      variation = optimizely.activate(experiment_key, user_id)

      if variation == 'variation_a'
        # execute code for variation A
      elsif variation == 'variation_b'
        # execute code for variation B
      else
        # execute default code
      end

      optimizely.track(event_key, user_id)

      variation = optimizely.get_variation(experiment_key, user_id)
  javascript:
    lang: javascript
    request: |
      var optimizely = require('optimizely-testing-sdk-node');

      var optimizely = optimizely.createInstance({ datafile: datafile });

      var variation = optimizely.activate(experimentKey, userId);

      if (variation === 'variation_a') {
        // execute code for variation A
      } else if (variation === 'variation_b') {
        // execute code for variation B
      } else {
        // execute default code
      }

      optimizely.track(eventKey, userId);

      var variation = optimizely.getVariation(experimentKey, userId);
---

This illustrates the minimal components necessary to run a server-side test. The fundamental calls are as follows:

* **Initialization**: Instantiate Optimizely which will represent the state of the project.
* **Activation**: Activate and bucket a visitor into a experiment variation. 
* **Track**: Track goals in your experiment.
* **Get Variation**: View which variation a visitor was bucketed into.
