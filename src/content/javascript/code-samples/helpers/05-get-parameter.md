---
partial: _inline.html
title: Get query parameter value
anchor: helpers-get-parameter
js: |
  /*
   * Usage
   *    This function takes a query parameter name and returns its value.
   *
   *  @param {String} name - The name of the query parameter, whose value you want returned.
   */

   var getQueryParam = function(name) {
     var match = window.location.search.match(name + '=([^&]*)');
     return match ? match[1] : undefined;
   }

   // example showing the function called, with the return value inserted in the first h1 element
   $('h1:eq(0)').text(getQueryParam('myParam'));

---

This function will return the value of a query parameter.  This is useful if you'd like to render a query parameter value on the page itself.

For example, you may store a visitor's search term in a query parameter.  You can use this function to render their search term on the page, providing a personalized experience.
