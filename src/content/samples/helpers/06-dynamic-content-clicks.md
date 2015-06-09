---
template: inline
title: Track clicks on dynamic content
anchor: helpers-dynamic--content-clicks
js: |
  /*
   *  Usage
   *    Track clicks on elements loaded after DOM ready.  The .delegate() method allows you to select all current and future elements that match the selector passed in as the first argument.
   *
   */

   var selector = [YOUR_SELECTOR]; //provide the element selector as a string
   var eventName = [YOUR_EVENT_NAME];  //provide the custom event name

   $('html').delegate(selector, 'mousedown touchend', function() {
     window['optimizely'] = window['optimizely'] || [];
     window.optimizely.push(["trackEvent", "eventName"]);
   });

---

This JavaScript will let you track clicks on elements loaded after DOM ready as a custom event in Optimizely.  See our article on [Custom Event Goals](https://help.optimizely.com/hc/en-us/articles/200039925) to learn more about tracking custom events.
