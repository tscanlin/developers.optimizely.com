---
template: multi-example
title: Custom configuration
anchor: configuration
fields:
  Event dispatcher: You can optionally change how the SDK dispatches events to Optimizely, by providing a request handling function that takes a URL and query parameters as arguments. You should provide your own event dispatcher if you have particular networking requirements on your servers that aren't met by our default dispatcher.
  Logger: You can provide a logging method that logs messages when certain events occur in the SDK. You can write your own logger if you would like to customize things like message formatting or minimum logging levels. For the Java SDK, we require the use of an [SLF4J](http://www.slf4j.org) implementation.
  Error handler: You should override Optimizely's error handling if you would like to take custom actions when exceptions are raised. If you are using the SDK in production then you will want to handle exceptions elegantly.
code_examples:
  python:
    lang: python
    request: |
      from .error_handler import NoOpErrorHandler as error_handler
      from .logger import NoOpLogger as logger
      from .event_dispatcher import EventDispatcher as event_dispatcher

      optimizely = optimizely.Optimizely(datafile,
                                         event_dispatcher=event_dispatcher,
                                         logger=logger,
                                         error_handler=error_handler)
  java:
    lang: java
    request: |
      import com.optimizely.ab.Optimizely;
      import com.optimizely.ab.event.AsyncEventHandler;

      String datafile = "{}";
      // Creates an async event handler with a max buffer of 20,000 events
      // and a single dispatcher thread
      EventHandler eventHandler = new AsyncEventHandler(20000, 1);
      // Creates an error handler that throws exceptions on errors
      ErrorHandler errorHandler = new RaiseExceptionErrorHandler();
      Optimizely optimizely = Optimizely.builder(datafile, eventHandler)
          .withErrorHandler(errorHandler);
          .build();
  ruby:
    lang: ruby
    request: |
      require_relative 'optimizely/event_dispatcher'
      require_relative 'optimizely/logger'
      require_relative 'optimizely/error_handler'

      optimizely = Optimizely::Project.new(datafile,
                                           EventDispatcher.new,
                                           NoOpLogger.new,
                                           NoOpErrorHandler.new)
  javascript:
    lang: javascript
    request: |
      var defaultLogger = require(optimizely-server-sdk/lib/core/logger);
      var defaultErrorHandler = require(optimizely-server-sdk/lib/core/error_handler);
      var defaultEventDispatcher = require(optimizely-server-sdk/lib/core/event_dispatcher);

      optimizely = optimizely.createInstance({
        datafile: datafile,
        errorHandler: defaultErrorHandler,
        eventDispatcher: defaultEventDispatcher,
        logger: defaultLogger.createLogger(),
      });
---
<div class="hidden visible" data-toggle-section="python-code">
  You can optionally provide a number of parameters to the `Optimizely` constructor to configure how the SDK behaves. See below for a full list of options that you can configure. If you plan on writing your own event dispatching, logging, or error handling, or would like to edit the default behavior provided by our SDKs, refer to the reference implementations in the SDK source code for examples.
</div>

<div class="hidden visible" data-toggle-section="java-code">
  You can optionally provide a number of parameters to the `Optimizely` constructor to configure how the SDK behaves. See below for a full list of options that you can configure. If you plan on writing your own event dispatching, logging, or error handling, or would like to edit the default behavior provided by our SDKs, refer to the reference implementations in the SDK source code for examples.
</div>

<div class="hidden visible" data-toggle-section="ruby-code">
  You can optionally provide a number of parameters to the `Project` constructor to configure how the SDK behaves. See below for a full list of options that you can configure. If you plan on writing your own event dispatching, logging, or error handling, or would like to edit the default behavior provided by our SDKs, refer to the reference implementations in the SDK source code for examples.
</div>

<div class="hidden visible" data-toggle-section="javascript-code">
  You can optionally provide a number of parameters to the `optimizely` constructor to configure how the SDK behaves. See below for a full list of options that you can configure. If you plan on writing your own event dispatching, logging, or error handling, or would like to edit the default behavior provided by our SDKs, refer to the reference implementations in the SDK source code for examples.
</div>