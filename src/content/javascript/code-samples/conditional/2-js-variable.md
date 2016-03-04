---
partial: _inline.html
title: Polling - JavaScript variable
anchor: conditional-activation-js-variable
js: |
  /*
   * Condition: Activate when the Omniture eVar 33 contains 'product'
   * Type: Polling
   */

   window.s.eVar33.indexOf('product') != -1
---

To activate an experiment based on the value of a JavaScript variable, simply enter the condition to check.
