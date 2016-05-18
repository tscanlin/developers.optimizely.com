---
template: multi-example
title: Event tracking
anchor: tracking
code_examples:
  python:
    lang: python
    request: |
        event_key = 'booking_complete'
        user_id = 'user123'

        # Track a conversion event for the provided user
        optimizely.track(event_key, user_id)
  java:
    lang: java
    request: |
        eventKey = "booking_complete";
        userId = "user123";

        // Track a conversion event for the provided user
        optimizely.track(eventKey, userId);
  ruby:
    lang: ruby
    request: |
        event_key = 'booking_complete'
        user_id = 'user123'

        # Track a conversion event for the provided user
        optimizely.track(event_key, user_id)
---

You can easily track Optimizely goals from your code as shown in the example to the right. Note that you don't need to pass the assigned experiments or variations; Optimizely will drop any conversion events for users that are not part of an experiment that includes the goal.

<div class="attention attention--warning push--bottom">*Please note:* in cases where an experiment is activated for a user, the SDK will log an event to Optimizely servers to record the conversion event.</div>
