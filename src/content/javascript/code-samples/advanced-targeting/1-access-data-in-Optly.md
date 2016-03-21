---
partial: _inline.html
title: Access data on page
anchor: advanced-targeting-data-access
js: |
  /*
   * Usage
   *    Example showing how to reference a variable defined natively on the page from inside Optimizely.
   *
   */

   // Audience condition example checking the 'category' property of the 'exampleObject'
   window.exampleObject['category'] == 'shirts';

---

This is an example using JavaScript to access an object defined outside of the Optimizely snippet.  Please note that the variable must be declared above the snippet, so it is defined before Optimizely evaluates Audience conditions or executes experiment code.
