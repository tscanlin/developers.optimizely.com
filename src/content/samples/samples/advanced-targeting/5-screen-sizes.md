---
template: inline
title: Running An Experiment For Visitors With Certain Screen Sizes
anchor: screen-sizes
js: |
  /*
   * Usage
   *  Specifies window size (in pixels) to target visitors.
   */

   screen.width > 1400 && screen.height < 800
---

The following condition will ensure that the experiment only runs if the screen width is greater than 1400 and the height is greater than 800.
