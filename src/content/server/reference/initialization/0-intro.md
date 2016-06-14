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
      import com.optimizely.ab.Optimizely;
      import com.optimizely.ab.event.AsyncEventHandler;

      String datafile = "{}";
      // Creates an async event handler with a max buffer of 20,000 events
      // and a single dispatcher thread
      EventHandler eventHandler = new AsyncEventHandler(20000, 1);
      Optimizely optimizely = Optimizely.builder(datafile, eventHandler)
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

<div class="hidden" data-toggle-section="ruby-code">
To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</div>

<p>

<div class="hidden" data-toggle-section="ruby-code">
To construct the `Optimizely` object, you'll need to provide the `datafile` as an argument representing the JSON configuration of your project. The datafile contains all the instructions needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section.</div>

<p>

<div class="hidden" data-toggle-section="java-code">
To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</div>

<p>

<div class="hidden" data-toggle-section="java-code">
To construct the `Optimizely` object, you'll need to provide a `datafile` String and an `EventHandler` object as arguments to the `Optimizely.builder` function. The `datafile` is a JSON representation of your project and contains all of the information needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section. `eventHandler` in the example to the right is instantiated as the provided asynchronous implementation.</div>
