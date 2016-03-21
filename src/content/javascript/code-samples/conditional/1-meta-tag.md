---
partial: _inline.html
title: Polling - Meta tag data
anchor: conditional-activation-meta-tag
html: |
  <meta name="keywords" content="movies,games,videos,photos"/>
js: |
  /*
   * Condition: Activate when the description meta tag contains 'sports', 'games', or 'puzzles'
   * Type: Polling
   */

   (/sports|games|puzzles/).test($('meta[name=keywords]').attr('content'))
---

To activate an experiment based on the value of a meta tag, select the contents of the meta tag with jQuery and check them for your value.
