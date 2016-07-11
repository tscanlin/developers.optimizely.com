---
template: sidebyside
title: 1. version
anchor: version
js: |
  // Query object
  {
    "version": "0.2"
  }
---
You must include a version number in each of your query objects.  This ensures that your query will always be evaluated the same, even if Optimizely introduces a backwards-incompatibile query format in the future.
