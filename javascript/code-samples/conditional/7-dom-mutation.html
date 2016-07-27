---
partial: _inline.html
title: Function - DOM mutation activation
anchor: conditional-activation-dom-mutation
js: |
  /*
   * Condition: Activate when the dom selector changes on the page
   * Type: Callback Function
   *
   * Place the following code in your Project Javascript and call the function below in your experiment's
   * conditional activation code box:
   *
   * window.activateOnDOMMutation('#element', window['optimizely'].push(["activate", EXPERIMENT_ID]), true);
   * @param '#element': DOM Selector of element you'd like to watch
   * @param 'window['optimizely'].push(["activate", EXPERIMENT_ID])': Replace EXPERIMENT_ID with the current
   * experiment's ID
   * @param 'true': True re-activates the experiment on the DOM selector changing or being added to the DOM.
   * False activates the experiment only the first time the selector is added or updated.
   */

  (function(win) {
      'use strict';

      var listeners = [],
          doc = win.document,
          MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
          observer;

      function waitForElement(selector, repeat, fn) {

          // Store the selector and callback to be monitored
          listeners.push({
              selector: selector,
              fn: fn,
              repeat: repeat,
          });
          if (!observer) {
              // Watch for changes in the document
              observer = new MutationObserver(check);
              observer.observe($(document), {
                  childList: true,
                  subtree: true
              });
          }
          // Check if the element is currently in the DOM
          check();
      }

      function check() {
          // Check the DOM for elements matching a stored selector
          for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
              listener = listeners[i];
                // Query for elements matching the specified selector
                elements = $(listener.selector);
                for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
                   element = elements[j];
                  if (!element.ready || listener.repeat) {
                       // Invoke the callback with the element
                        listener.fn.call(element, element);
                    }
               }
          }
      }

      function activateOnDOMMutation(selector, activate, repeat) {
        repeat = repeat === undefined ? false : repeat;
        if (window.MutationObserver || window.WebKitMutationObserver) {
          waitForElement(selector, repeat, function(element) {
             activate();
          });
        } else {
          // this solution does not handle older browsers
        }
      }

      // Expose functions
      win.waitForElement = waitForElement;
      win.activateOnDOMMutation = activateOnDOMMutation;

  })(this);
---
Note: This activation mode requires that you have Project Javascript enabled on your account. If you don't currently have ProjectJS in your account, you can upgrade! Get more information at: https://help.optimizely.com/hc/en-us/articles/200040055#switching

To activate an experiment based on a DOM element either changing or appearing on the page, simply make the following call in your experiment's conditional activation code box:

```js
function(activate, options) {
  window.activateOnDOMMutation('#element:not(.changed)', activate, true);
}
```

The first part of the call, `#element:not(.changed)`, is a DOM element selector that you would like to monitor. Any time this element appears on the page or is changed, the experiment will be activated either once or multiple times depending on the last parameter. You can use any DOM selector that you can use with jQuery. If you are change the selected element or its children in variation code you will create an infinite loop. You can prevent this by excluding selectors with an added class as shown in the code example. You would add the ".changed" class in experiment code.

The second part of the call, `activate`, activates the experiment with the given ID.

The last parameter, `true`, tells the DOM Mutation call whether you want to re-activate the experiment every time the selector changes or is added to the page. Adding 'false' here will only activate the experiment once. This is useful when you are appending content to the page and you don't want to append every time the DOM selector changes.
