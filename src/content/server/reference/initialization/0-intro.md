---
template: multi-example
title: Initialization
anchor: initialization
code_examples:
  python:
    lang: python
    request: |
      optimizely = optimizely.Optimizely(PROJECT_ID)
  java:
    lang: java
    request: |
      // Creates an async event handler with a max buffer of 20,000 events
      // and a single dispatcher thread
      AsyncEventHandler eventHandler = new AsyncEventHandler(20000, 1);

      // Creates a project watcher that refreshes the datafile every 5 minutes
      PeriodicProjectWatcher projectWatcher =
          new PeriodicProjectWatcher(PROJECT_ID, 5, TimeUnit.MINUTES);

      Optimizely optimizely = Optimizely.builder(projectWatcher, eventHandler)
          .build();
  ruby:
    lang: ruby
    request: |
      optimizely = Optimizely::Optimizely.new(PROJECT_ID)
---

<div class="hidden visible" data-toggle-section="python-code">
To run experiments from an Optimizely project you'll need to instantiate an `Optimizely` object in your code. You'll need to include the ID of a Custom Project as an input parameter.

<p>

<div class="attention attention--warning push--bottom">*Please note:* instantiating the Optimizely object should be done once and not on every request. Please make sure to call this during class initialization or as a global variable.</div>
</div>

<div class="hidden" data-toggle-section="ruby-code">
To run experiments from an Optimizely project you'll need to instantiate an `Optimizely` object in your code. You'll need to include the ID of a Custom Project as an input parameter.

<p>

<div class="attention attention--warning push--bottom">*Please note:* instantiating the Optimizely object should be done once and not on every request. Please make sure to call this during class initialization or as a global variable.</div>
</div>

<div class="hidden" data-toggle-section="java-code">
Interaction with the SDK should be done through the top-level `Optimizely` object, which can be created using the associated `builder`. Once created, this object can be safely shared across threads; it's therefore recommended that a single `Optimizely` object be initialized per application instance.

<p><p>

By default, all exceptions originating from the SDK are suppressed. For example, attempting to activate an experiment that does not exist in the project config will cause an error to be logged, and for the "control" variation to be returned. To enable exceptions, call `throwExceptions()` when building the Optimizely object.

</div>
