---
partial: _inline.html
title: Conditional activation
anchor: conditional
js: |

  /*
   * Usage Option #1 - Polling
   *   Optimizely will poll for the code condition to be true if the JavaScript
   *   entered does not evaluate to a function type.
   *
   *  Note: Optimizely will evaluate this code in a try/catch block, meaning
   *  if your expression errors, it will be evaluated as false
   */

   [Code whose last line evaluates to true/false, just like custom JS targeting]


  /*
   * Usage Option #2 - Callback Function
   *   Optimizely will call the function entered immediately if the JavaScript entered
   *   does evaluate to a function type.
   *
   * @param {Function} activate - Activate this experiment
   * @param {Object=}  options {
   *                     isActive : {Boolean} - Indicates if this experiment is active
   *                     experimentId : {Integer} - This experiment's Id
   *                   }
   *
   *  Note: Optimizely will call this function immediately when the snippet loads, so make
   *  sure any functions referenced are defined at that time.
   */

   function(activate, options) {
     // Do logic and call `activate()` when appropriate
   }

---

[Conditional activation mode](https://help.optimizely.com/hc/en-us/articles/200040225-Activation-Mode-Activating-an-experiment-dynamically-after-a-page-has-loaded#conditional) is a flexible and powerful way to activate an experiment. There are two ways to use it: with **polling**, you enter a condition and Optimizely activates the experiment once that condition is true. With a **callback**, you enter a function and trigger a callback once your code is ready for the experiment to activate. These methods are described in more detail below, and we've also highlighted several examples using each method.

Based on the code you enter, Optimizely will automatically determine if it should be polled for or executed as a function. See the examples for detailed usage definitions.

#### Polling
If the code entered **does not** evaluate to a function type, it will be checked every 50ms and the experiment will be activated when it evaluates to true. Optimizely checks this code in a try/catch block, so a condition which results in an error will be assumed to be false and polling will continue.

#### Callback Function
If the code entered **is** a function, Optimizely will assume it is of the form shown here and call it immediately, passing an `activate` function and an `options` object. Rather than returning a value, your code should call `activate()` when it is ready, leveraging `options.isActive` and `options.experimentId` if needed. Note that because this function is called immediately when the Optimizely snippet loads, any functions or variables referenced here should be available/defined at the time they are used.

**Note:** No matter which method is used, remember that this is only an activation condition. Visitors must still meet URL and Audience targeting to actually be bucketed into the experiment.
