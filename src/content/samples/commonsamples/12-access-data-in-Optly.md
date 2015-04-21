---
title: Access data on page
anchor: commonsamples-data-access
js: |
  /*
   * Usage
   *    Example showing how to reference a variable defined natively on the page from inside Optimizely.
   *	
   */
   
   // Audience condition example checking the 'category' property of the 'exampleObject'
   window.exampleObject['category'] == 'shirts';

   // Variation code example injecting the 'visitorName' property of the 'exampleObject' in the h3 elements
   $('h3').text('Hello,' + window.exampleObject['visitorName']);

---

These are two examples of using JavaScript to access an object defined outside of the Optimizely snippet.  Please note that the variable must be declared above the snippet, so it is defined before Optimizely evaluates Audience conditions or executes experiment code.

