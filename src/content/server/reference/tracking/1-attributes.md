---
template: multi-example
title: Including user attributes
anchor: segmentation
code_examples:
  python:
    lang: python
    request: |
        event_key = 'booking_complete'
        user_id = 'user123'
        attributes = {'device': 'iPhone', 'ad_source': 'my_campaign'}

        # Track a conversion event for the provided user
        optimizely.track(event_key, user_id, attributes=attributes)
  java:
    lang: java
    request: |
        eventKey = "booking_complete";
        userId = "user123";

        Map<String, String> attributes = new HashMap<String, String>();
        attributes.put("DEVICE", "iPhone");
        attributes.put("AD_SOURCE", "my_campaign");

        // Track a conversion event for the provided user
        optimizely.track(eventKey, userId, attributes);
  ruby:
    lang: ruby
    request: |
        event_key = 'booking_complete'
        user_id = 'user123'

        attributes = {'DEVICE' => 'iPhone', 'AD_SOURCE' => 'my_campaign'}

        # Track a conversion event for the provided user
        optimizely.track(event_key, user_id, attributes)
  javascript:
    lang: javascript
    request: |
        var eventKey = 'booking_complete';
        var userId = 'user123';
        var attributes = { 'device': 'iPhone', 'ad_source': 'my_campaign' };

        // Track a conversion event for the provided user
        optimizely.track(eventKey, userId, attributes)
          .then(function() {
            // conversion has been tracked
          });
---

If you'd like to be able to segment your experiments based on attributes of your users, you should include the optional `attributes` argument to the `track` function call. This is necessary even if you included the attributes in the corresponding `activate` call.
