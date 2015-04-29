---
template: twocol
title: Set Cookie
anchor: commonsamples-set-cookie
js: |
   /*
    * Usage
    *    This function will set a cookie on the visitor's browser.
    *
    *  @param {String} name - The name of the cookie.
    *  @param {String} value - The value of the cookie.
    *  @param {String} domain - The domain on which this cookie should be set and can be read.
    *  @param {Float} age - The number of days the cookie should last.
    *
    */

    var setCookie = function(name, value, domain, age) {
      var futureDate = new Date(+new Date() + age * 1000);
      var parts = [
        name, '=', encodeURIComponent(value),
        '; domain=.', domain,
        '; path=/',
        '; expires=', futureDate.toUTCString(),
        ';'
      ];
      document.cookie = parts.join('');
    };

---

This function sets a cookie and accepts the cookie's name, value, domain and duration in days as arguments.
