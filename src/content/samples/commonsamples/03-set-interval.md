---
template: sidebyside
title: Poll for element
anchor: commonsamples-poll-for-element
js: |
  /*
   * Usage
   *    This function is a recursive setTimeout of 50ms that polls for an element matching the selector in the if statement.  
   */

   var pollForElement = function() {
     if ($('#SELECTOR').length > 0) {
     // code to run once element is found on page
     }
     else {
       setTimeout(pollForElement, 50);
     }
   };
   pollForElement();
---

This function polls for an element on the page every 50ms that matches a specified selector.  This is useful when you want to modify an element that is not injected into the DOM until shortly after document ready.
