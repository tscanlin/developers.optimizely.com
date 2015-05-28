---
template: inline
title: Running An Experiment For Visitors Who Have A Specific User Agent
anchor: user-agent
js: |
  /*
   * Usage
   *
   */

   window.navigator.userAgent.indexOf("Chrome") !== -1
---

The following condition will only run for visitors who are using the Google Chrome web browser.