---
template: multi-example
title: Initialization
anchor: initialization
code_examples:
  python:
    lang: python
    request: |
      import optimizely

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
      require "optimizely"

      optimizely = Optimizely::Project.new(datafile)

  javascript:
    lang: javascript
    request: |
      var optimizely = require('optimizely-server-sdk');

      // or ES6
      import optimizely from 'optimizely-server-sdk'

      var datafile = {};
      var optimizely = optimizely.createInstance({ datafile: datafile });

      // to skip JSON schema validation for the datafile (SDK versions 0.0.10 and above)
      var optimizely = optimizely.createInstance({
        datafile: datafile,
        skipJSONValidation: true
      });
---

<div class="hidden visible" data-toggle-section="python-code">
<p>First, you'll need to import the Optimizely library into your code as shown.</p>

<p>To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</p>

<p>To construct the `Optimizely` object, you'll need to provide the `datafile` as an argument representing the JSON configuration of your project. The datafile contains all the instructions needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section.</p>

<p>You can customize the behavior of the SDK by configuring parameters to the Optimizely constructor. This is explained in detail [below](#configuration).</p>

</div>


<div class="hidden" data-toggle-section="ruby-code">
<p>First, you'll need to import the Optimizely library into your code as shown. </p>

<p>To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</p>

<p>To construct the `Project` object, you'll need to provide the `datafile` as an argument representing the JSON configuration of your project. The datafile contains all the instructions needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section.</p>

<p>You can customize the behavior of the SDK by configuring parameters to the Optimizely constructor. This is explained in detail [below](#configuration).</p>

</div>

<div class="hidden" data-toggle-section="java-code">
<p>First, you'll need to import the Optimizely library into your code as shown.</p>

<p>To run experiments with Optimizely you'll need to instantiate an `Optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</p>

<p>To construct the `Optimizely` object, you'll need to provide a `datafile` String and an `EventHandler` object as arguments to the `Optimizely.builder` function. The `datafile` is a JSON representation of your project and contains all of the information needed to activate experiments and track events. For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section. `eventHandler` in the example to the right is instantiated as the provided asynchronous implementation.</p>

<p>You can customize the behavior of the SDK by configuring parameters to the Optimizely constructor. This is explained in detail [below](#configuration).</p>

</div>


<div class="hidden" data-toggle-section="javascript-code">
<p>First, you'll need to import the Optimizely library into your code as shown.</p>

<p>To run experiments with Optimizely you'll need to instantiate an `optimizely` object in your code. This object represents the state of an Optimizely project and can be used to both [activate experiments](#activation) and [track events](#tracking).</p>

<p>To construct the `optimizely` object, you'll need to provide the `datafile` as an argument representing the JSON configuration of your project. The datafile contains all the instructions needed to activate experiments and track events.</p>

<p>In SDK versions `0.0.10` and above, you can optionally pass in a `skipJSONValidation` property as `true` to skip JSON schema validation of the datafile upon `optimizely` instantiation. Skipping JSON schema validation enhances instantiation performance. The `skipJSONValidation` property should only be used if the datafile is being pulled from the REST API or CDN.</p>

<p>For more information on the expected format of the datafile and how to get the most up-to-date version, see the [datafile](#datafile) section.</p>

<p>You can customize the behavior of the SDK by configuring parameters to the Optimizely constructor. This is explained in detail [below](#configuration).</p>

</div>

