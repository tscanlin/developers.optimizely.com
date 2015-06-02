---
template: inline
title: Running An Experiment On Pages With Certain Meta Values
anchor: meta-values
js: |
  /*
   * Usage
   * Replace "desired_value" with the name of the meta value you're testing for.
   */

   $('meta[name="desired_value"]').length > 0
---

The following condition will only run an experiment when a certain meta value is present on the page.