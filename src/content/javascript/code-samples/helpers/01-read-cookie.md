---
partial: _inline.html
title: Read cookie
anchor: helpers-read-cookie
js: |
  /*
   * Usage
   *    This function will return the value of the cookie name passed in as the argument.
   *
   *  @param {String} name - The name of the cookie.
   */

   var getCookie = function(name) {
     var match = document.cookie.match(name+'=([^;]*)');
     return match ? match[1] : undefined;
   };


---

This function reads a cookie from the visitor's browser and returns the value.
