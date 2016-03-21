---
partial: _inline.html
title: Assign visitors
anchor: audiences-assign
js: |
  window['optimizely'] = window['optimizely'] || [];
  window['optimizely'].push(["addToAudience", 85094]);
---

Now that you've created the audience, you can assign visitors to it programmatically using our [Javascript API](/javascript).

Use the `addToAudience` call with the audience's `id` as the first argument.

This call needs to happen **before** the Optimizely snippet loads, otherwise visitors won't see experiments targeted to that audience.
