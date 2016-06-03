---
template: multi-example
title: Initialization
anchor: initialization
code_examples:
  python:
    lang: python
    request: |
      optimizely = optimizely.Optimizely(datafile)
  java:
    lang: java
    request: |
      Optimizely optimizely = Optimizely.builder(projectWatcher, eventHandler)
          .build();
  ruby:
    lang: ruby
    request: |
      optimizely = Optimizely::Optimizely.new(datafile)
  javascript:
    lang: javascript
    request: |
      var datafile = {};
      var optimizely = optimizely.createInstance({ datafile: datafile });
---

<div class="hidden visible" data-toggle-section="python-code">
To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</div>

<p>

<div class="hidden visible" data-toggle-section="python-code">
To construct the `Optimizely` object, you'll need to provide the `datafile` as an argument representing the JSON configuration of your project. The datafile contains all the instructions needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section.</div>

<p>

<div class="hidden visible" data-toggle-section="python-code">
<div class="attention attention--warning push--bottom">*Please note:* instantiating the Optimizely object should be done once and not on every request. Please make sure to call this during class initialization or as a global variable.</div>
</div>

<div class="hidden" data-toggle-section="ruby-code">
To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</div>

<p>

<div class="hidden" data-toggle-section="ruby-code">
To construct the `Optimizely` object, you'll need to provide the `datafile` as an argument representing the JSON configuration of your project. The datafile contains all the instructions needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section.</div>

<p>

<div class="hidden" data-toggle-section="ruby-code">
<div class="attention attention--warning push--bottom">*Please note:* instantiating the Optimizely object should be done once and not on every request. Please make sure to call this during class initialization or as a global variable.</div>
</div>

<div class="hidden" data-toggle-section="java-code">
Interaction with the SDK should be done through the top-level `Optimizely` object, which can be created using the associated `builder`. Once created, this object can be safely shared across threads; it's therefore recommended that a single `Optimizely` object be initialized per application instance.

<p><p>

By default, all exceptions originating from the SDK are suppressed. For example, attempting to activate an experiment that does not exist in the project config will cause an error to be logged, and for the "control" variation to be returned. To enable exceptions, call `throwExceptions()` when building the Optimizely object.

</div>
