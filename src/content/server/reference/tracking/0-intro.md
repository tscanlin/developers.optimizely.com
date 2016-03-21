---
template: multi-example
title: Goal tracking
anchor: tracking
code_examples:
  python:
    lang: python
    request: |
        optimizely.track(bucketing_id, 'BOOKING_COMPLETE')
  java:
    lang: java
    request: |
      optimizely.track(bucketing_id, "BOOKING_COMPLETE");
---

You can easily track Optimizely goals from your code as shown in the example to the right. Optimizely takes care of making sure that goals are tracked only for experiments that are mapped to them.
