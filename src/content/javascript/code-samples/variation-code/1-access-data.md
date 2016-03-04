---
partial: _inline.html
title: Access data on page
anchor: access-data-variation-code
js: |
  /*
   * Example showing how to reference a variable defined natively on the page from inside Optimizely.
   */

   // Variation code example injecting the 'visitorName' property of the 'exampleObject' in the h3 elements
   $('h3').text('Hello,' + window.exampleObject['visitorName']);

---

This is an example using JavaScript to access an object defined outside of the Optimizely snippet.  Please note that the variable must be declared above the snippet, so it is defined before Optimizely evaluates Audience conditions or executes experiment code.
