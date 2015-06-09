---
template: inline
title: Days of the week
anchor: experiment-certain-days
js: |
  /*
   * Usage
   *  Specifies a date range to target visitors
   */

   new Date().getDay() > 0 && new Date().getDay() < 6
---

The following condition will only evaluate to true when the day of the week is Monday – Friday (based on the visitor’s location).
