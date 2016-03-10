---
template: multi-example
title: Initialization
anchor: initialization
code_examples:
  python:
    lang: python
    request: |
      optimizely = optimizely.Optimizely('5928310293')
  java:
    lang: java
    request: |
      Optimizely optimizely = new Optimizely("5928310293");
---

To run experiments using Optimizely you'll need to instatiate an `Optimizely` object in your code. You'll need to include the ID of a Custom Project as an input parameter.
