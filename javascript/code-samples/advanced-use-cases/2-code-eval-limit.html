---
partial: _inline.html
title: Execute code for X visits
anchor: advanced-use-cases-code-eval-limit
js: |

  /*
   * Usage
   *   The following allows you to set a limit on the number of times a Code Block will execute for any given visitor.
   */

   // the number of times the code should execute for a given visitor
   var limit = 3;
   // the number of days the evaluation limit should last
   var days = 180;
   // name of the cookie we use as the counter
   var cookieName = 'counterCookie';

   // function to fetch cookie values
   var getCookie = function(name) {
     var match = document.cookie.match(name+'=([^;]*)');
     return match ? match[1] : undefined;
   };

   // function to create cookies
    var setCookie = function(c_name,value,exdays,c_domain) {
      c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
      var exdate=new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
      document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
    }

   // logic that counts and limits number of times code can evaluate for given visitor
   if (!getCookie(cookieName)) {
     setCookie(cookieName, 1, days, window.location.hostname);
   } else {
     var numberPops = parseInt(getCookie(cookieName)) + 1;
     setCookie(cookieName, numberPops, days, window.location.hostname);
   }

   if (getCookie(cookieName) <= limit) {
    // INSERT code to evaluate HERE
   }

---

This JavaScript will let you execute code a certain number of times within an experiment.

For example, you might want to only show a pop up to visitors on their first 3 visits.  In this case, you place this code in either the Experiment JS or Variation code.
