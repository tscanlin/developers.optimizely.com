---
template: multi-example
title: Custom configuration
anchor: configuration
fields:
  Event dispatcher: You can optionally change how the SDK dispatches events to Optimizely, by providing a function that takes a URL and decides how to send the request. You should provide your own event dispatcher if you have particular networking requirements on your servers that aren't met by our default dispatcher.
  Logger: You can provide a logging method that logs messages given certain actions that occur in the SDK. You can write your own logger if you would like to customize what messages are shown either a staging or production environment.
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
      require_relative 'optimizely/error_handler'
      require_relative 'optimizely/event_builder'
      require_relative 'optimizely/event_dispatcher'

      optimizely = Optimizely::Optimizely.new(datafile,
                                              EventDispatcher.new,
                                              NoOpLogger.new,
                                              NoOpErrorHandler.new)
---

You can optionally provide a number of parameters to the `Optimizely` constructor to configure how the SDK behaves. See below for a full list of options that you can configure. If you plan on writing your own event dispatching, logging, or error handling, or would like to edit the default behavior provided by our SDKs, refer to the reference implementations in the SDK source code for examples.
