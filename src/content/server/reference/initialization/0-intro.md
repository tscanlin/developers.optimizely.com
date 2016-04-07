---
template: multi-example
title: Initialization
anchor: initialization
code_examples:
  python:
    lang: python
    request: |
      optimizely = optimizely.Optimizely(5928310293)
  java:
    lang: java
    request: |
      Optimizely optimizely = Optimizely.builder(projectWatcher, eventHandler)
          .build();
  ruby:
    lang: ruby
    request: |
      optimizely = Optimizely::Optimizely.new(project_id)
---

To run experiments using Optimizely you'll need to instantiate an `Optimizely` object in your code. You'll need to include the ID of a Custom Project as an input parameter.
