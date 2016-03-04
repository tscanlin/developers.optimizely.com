---
partial: _inline.html
title: AJAX complete
anchor: single-page-apps-ajax-complete
js: |
  /*
   *  Usage
   *     Apply variation code when an AJAX request is completed. In this example, we also require the request URL contain the sub-string "/shopping-cart".
   *
   *  @param {Function} handler - A function to execute when the ajaxComplete event is triggered.
   *
   *  e.g. window.$(document).ajaxComplete(handler)
   */

   // Usage example
   window.$(document).ajaxComplete(function(event, xhr, settings) {
     if (settings.url.indexOf('/shopping-cart') > -1) {
       //apply variation code
     }
   });

---

This JavaScript will apply variation code whenever an AJAX request is complete.  In this example, we also require that the request URL contain the sub-string "/shopping-cart".  Please see [the official jQuery documentation](http://api.jquery.com/ajaxcomplete/) for more details on this method.

Please note that the .ajaxComplete() method is not included in the trimmed version of jQuery loaded with Optimizely by default. A library defining this method must be loaded before the snippet to use this code.
