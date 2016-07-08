---
template: multi-example
title: SDK installation
anchor: installation
code_examples:
  python:
  java:
    lang: java
    request: |
      compile files('libs/core-api-{VERSION}.jar')
      compile files('libs/core-httpclient-impl-{VERSION}.jar')
  ruby:
    lang: ruby
    request: |
      gem install optimizely-sdk
  javascript:
    lang: javascript
    request: |
      npm install path/to/optimizely-testing-sdk-node --save
---

<div class="hidden" data-toggle-section="java-code">
Currently, packages are supplied directly rather than being made available through a public maven repository. To add the modules to your project, add a `libs` directory under your project root. Drop the provided JARs into that directory and add the lines shown at right to your `build.gradle`.
</div>

<p>

<div class="hidden" data-toggle-section="java-code">
The supplied `pom` files define the module dependencies.
</div>

<p>

<div class="hidden" data-toggle-section="java-code">
`core-api` requires `slf4j-api.jar` and a *supported* JSON parser. We currently integrate with [Jackson](https://github.com/FasterXML/jackson), [GSON](https://github.com/google/gson), [json.org](http://www.json.org/), and [json-simple](https://code.google.com/archive/p/json-simple/); if any of those packages are available at runtime, they will be used by `core-api`. If none of those packages are already provided in your project's classpath, one will need to be added.
</div>

<p>

<div class="hidden" data-toggle-section="java-code">
`core-httpclient-impl` requires `org.apache.httpcomponents:httpclient:4.5.2` and provides an asynchronous event dispatcher which is described in the [Initialization](#initialization) section. This library isn't required and you may provide a custom `EventHandler` implementation which uses a different networking stack.
</div>

<p>

<div class="hidden" data-toggle-section="ruby-code">
The gem for the Ruby SDK is distributed through [RubyGems](https://rubygems.org/gems/optimizely-sdk). To install, simply use `gem` or bundler to install the gem `optimizely-sdk`.
</div>

<p>


<div class="attention attention--warning push--bottom">
Our server-side SDKs are not yet generally available to Optimizely customers. Please contact [developers@optimizely.com](mailto:developers@optimizely.com) if you are interested in getting early access or giving us feedback.
</div>
