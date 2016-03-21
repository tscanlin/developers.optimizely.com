---
partial: _inline.html
title: Change page title
anchor: advanced-use-cases-browserTab-test
js: |

  /*
   * Usage
   *   The following code will modify the title of the browser tab on the "blur" event and change it back to the original on the "focus" event.
   *
   */

   // store the original tab title
   var origTitle = document.title;

   // function to change title when focusing on tab
   function oldTitle() {
     document.title = origTitle;
   }

   // function to change title when un-focusing on tab
   function newTitle() {
     document.title = 'HELLO WORLD';
   }

   // bind functions to blur and focus events
   window.onblur = newTitle;
   window.onfocus = oldTitle;

---

This JavaScript will modify the text of the browser tab when a visitor focuses and unfocuses on the tab.  You can display one title when a visitor is focused on the tab and a different title when they toggle to a different tab or window.
