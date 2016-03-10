---
template: multi-example
title: Goal tracking
anchor: tracking
code_examples:
  python:
    lang: python
    request: |
      def CompleteBooking(user_id):
        optimizely.track('BOOKING_COMPLETE', user_id)
        # other booking code
  java:
    lang: java
    request: |
      public Boolean CompleteBooking(String user_id) {
        optimizely.track("BOOKING_COMPLETE", user_id);
        // other booking code
      }
---

You can easily track Optimizely goals from your code as shown in the example to the right. Optimizely takes care of making sure that goals are tracked only for experiments that are mapped to them.
