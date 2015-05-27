---
template: inline
title: Execute code for X visits
anchor: commonsamples-code-eval-limit
js: |

  /*
   * Usage
   *   The following allows you to set a limit on the number of times a code block will execute for any given visitor.  
   *
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

   // logic that counts and limits number of times code can evaluate for given visitor
   if (!getCookie(cookieName)) {
     setCookie(cookieName, 1, window.location.hostname, days);
   } else {
     var numberPops = parseInt(getCookie(cookieName)) + 1;
     setCookie(cookieName, numberPops, window.location.hostname, days);
   }

   if (getCookie(cookieName) <= limit) {
    // INSERT code to evaluate HERE
   }

---

This JavaScript will let you execute code a certain number of times within an experiment.  

For example, you might want to only show a pop up to visitors on their first 3 visits.  In this case, you place this code in either the Experiment JS or Variation code.
