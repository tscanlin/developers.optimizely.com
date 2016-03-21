---
partial: _inline.html
title: Track clicks on dynamic content
anchor: helpers-dynamic--content-clicks
js: |
  /*
   *  Usage
   *    Track clicks on elements loaded after DOM ready.  The .delegate() method allows you to select all current and future elements that match the selector passed in as the first argument.
   *
   *  @param {String} selector - Provide the element selector.
   *  @param {String} eventName - Provide the custom event name.
   */

   var selector = [YOUR_SELECTOR];
   var eventName = [YOUR_EVENT_NAME];

   $('html').delegate(selector, 'mousedown touchend', function() {
     window['optimizely'] = window['optimizely'] || [];
     window.optimizely.push(["trackEvent", eventName]);
   });

---

This JavaScript will let you track clicks on elements loaded after DOM ready as a custom event in Optimizely.  See our article on [Custom Event Goals](https://help.optimizely.com/hc/en-us/articles/200039925) to learn more about tracking custom events.
