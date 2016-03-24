---
template: multi-example
title: Experiment activation
anchor: activation
code_examples:
  python:
    lang: python
    request: |
      bucketing_id = hash('user@company.com')
      experiment_key = 'SEARCH_RANKING_EXP_24'
      dimensions = {'DEVICE': 'iPhone', 'AD_SOURCE': 'my_campaign'}
      
      variation = optimizely.activate(bucketing_id, experiment_key, dimensions=dimensions)
      
      if variation == None OR variation == 'ALGORITHM_A':
        # execute code for algorithm A
      if variation == 'ALGORITHM_B':
        # execute code for algorithm B
  java:
    lang: java
    request: |
      String bucketingId = "user@company.com";
      String experimentKey = "SEARCH_RANKING_EXP_24";
      
      Map<String, String> dimensions = new HashMap<String, String>();
      dimensions.put("DEVICE", "iPhone");
      dimensions.put("AD_SOURCE", "my_campaign");
 
      Variation variation = optimizely.activate(experimentKey, bucketingId, dimensions);
      if (variation.is("ALGORITHM_A")) {
          // execute code for algorithm A
      } else if (variation.is("ALGORITHM_B")) {
          // execute code for algorithm B
      } else {
          // execute code for default algorithm 
      }
---

Add code to activate an experiment! The `activate` call should be used to conditionally activate an experiment for a user depending on the audience criteria and randomized bucketing handled by Optimizely. If the experiment is active for that user, the function returns a variation. Make sure that your code adequately deals with the case when the user is not bucketed in the experiment or the experiment hasn't been defined in the JSON.
