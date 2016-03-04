---
partial: _inline.html
title: Polling - DOM element
anchor: conditional-activation-dom-element
js: |
  /*
   * Condition: Activate when the green button DOM element appears
   * Type: Polling
   */

   $('button.green').length > 0
---

To activate an experiment based on the existence of a DOM element, simply select that element with jQuery and check the length of the result.
