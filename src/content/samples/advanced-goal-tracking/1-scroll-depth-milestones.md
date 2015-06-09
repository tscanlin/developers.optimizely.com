---
template: inline
title: Scroll Depth - Milestones
anchor: advanced-goal-tracking-scroll-depth-milestones
js: |
  /*
   * Usage
   *    This function fires custom events at different scroll depth milestones.  
   */

    // Variables to prevent continuous firing of custom events

    var scrollTwentyFive = true;
    var scrollFifty = true;
    var scrollSeventyFive = true;
    var scrollOneHundred = true;

    // Create the scrollPercentage

    $(window).bind('scroll', function() {
        window.scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

        // Conditional code we'll use to fire events based on scrollPercentage.

        if (window.scrollPercent >= 25 && scrollTwentyFive) {
            window['optimizely'] = window['optimizely'] || [];
            window.optimizely.push(["trackEvent", "scroll25"]);
            scrollTwentyFive = false;
        }

        if (window.scrollPercent >= 50 && scrollFifty) {
            window['optimizely'] = window['optimizely'] || [];
            window.optimizely.push(["trackEvent", "scroll50"]);
            scrollFifty = false;
        }

        if (window.scrollPercent >= 75 && scrollSeventyFive) {
            window['optimizely'] = window['optimizely'] || [];
            window.optimizely.push(["trackEvent", "scroll75"]);
            scrollSeventyFive = false;
        }

        if (window.scrollPercent >= 100 && scrollOneHundred) {
            window['optimizely'] = window['optimizely'] || [];
            window.optimizely.push(["trackEvent", "scroll100"]);
            scrollOneHundred = false;
        }

    });
---

This function checks after each scroll event to see if a visitor has achieved certain scroll depth milestones. In the case of this example, custom events will be fired off when a visitor scrolls 25%, 50%, 75%, and 100% of the way down the page. Within the goals menu, you'll need to create custom event goals that correspond to the events below (e.g. "scroll25" for scrolling 25% of the way down the page).
