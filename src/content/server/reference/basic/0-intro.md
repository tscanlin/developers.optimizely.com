---
template: multi-example
title: Basic usage
anchor: basic
code_examples:
  python:
    lang: python
    request: |
      import optimizely

      # instantiate Optimizely object
      optimizely = optimizely.Optimizely(datafile)

      # activate user in the experiment
      variation = optimizely.activate(experiment_key, user_id)

      if variation == 'variation_a':
        # execute code for variation A
      elif variation == 'variation_b':
        # execute code for variation B
      else:
        # execute default code

      # track conversion event
      optimizely.track(event_key, user_id)

  java:
    lang: java
    request: |
      import com.optimizely.ab.Optimizely;

      // instantiate Optimizely object
      Optimizely optimizely = Optimizely.builder(datafile).build();

      // activate user in the experiment
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

      // track conversion event
      optimizely.track(eventKey, userId);

  ruby:
    lang: ruby
    request: |
      require "optimizely"

      # instantiate Optimizely object
      optimizely = Optimizely::Optimizely.new(datafile)

      # activate user in the experiment
      variation = optimizely.activate(experiment_key, user_id)

      if variation == 'variation_a'
        # execute code for variation A
      elsif variation == 'variation_b'
        # execute code for variation B
      else
        # execute default code
      end

      # track conversion event
      optimizely.track(event_key, user_id)

  javascript:
    lang: javascript
    request: |
      var optimizely = require('optimizely-testing-sdk-node');

      // instantiate Optimizely object
      var optimizely = optimizely.createInstance({ datafile: datafile });

      // activate user in the experiment
      var variation = optimizely.activate(experimentKey, userId);

      if (variation === 'variation_a') {
        // execute code for variation A
      } else if (variation === 'variation_b') {
        // execute code for variation B
      } else {
        // execute default code
      }

      // track conversion event
      optimizely.track(eventKey, userId);

---

<p>This illustrates the minimal components necessary to run a server-side test.</p> 

<p>The SDK can be used to activate experiments and track events in your code. First, you need to [**instantiate**](/server/reference/index.html#initialization) Optimizely. Then you'll want to call [**activate()**](/server/reference/index.html#activation) at the point you want the experiment to start and [**track()**](/server/reference/index.html#tracking) for conversion events you'd like to track in Optimizely. `track()` can work across multiple experiments but should be called after `activate()` has been called for each experiment. </p>

<p>Also in general `track()` is always going to be in a separate server request because it means the user has taken an action. If there's a way to illustrate this somehow in the code example that will help.</p>
