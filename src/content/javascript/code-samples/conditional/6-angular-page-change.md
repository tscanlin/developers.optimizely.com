---
partial: _inline.html
title: Function - Angular page change
anchor: conditional-activation-angular-page-change
js: |
  /*
   * Condition: Activate when an Angular.js application successfully changes location
   * Type: Callback function
   */

   function(activate, options) {
     var scope = window.angular.element('body').scope();
     scope.$on('$locationChangeSuccess', function(event, next, current) {
       if (next.indexOf('/productPage') != -1) {
         if (!options.isActive) {
           activate();
         }
       }
     });
   }
---

To activate an experiment when an Angular.js location change happens, setup an event listener on the `$locationChangeSuccess` event and activate the experiment if the page change meets the right criteria.

Note: Not all Angular.js implementations are the same and thus this exact implementation may not work correctly on all websites. This is just an example of how to leverage built in Angular.js functions to activate an experiment at the right time.
