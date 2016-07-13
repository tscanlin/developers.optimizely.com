---
template: multi-example
title: SDK installation
anchor: installation
code_examples:
  python:
    lang: python
    request:
      pip install optimizely-sdk
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
      npm install optimizely-server-sdk --save
---

<div class="hidden" data-toggle-section="python-code">
The Python SDK is distributed through [PyPi](https://pypi.python.org/pypi?name=optimizely-sdk&:action=display). To install, simply use `pip` or add `optimizely-sdk` to your `requirements.txt`.
</div>

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

<div class="hidden" data-toggle-section="javascript-code">
The Node SDK is distributed through [npm](https://www.npmjs.com/package/optimizely-server-sdk). To install, simply run `npm install optimizely-server-sdk --save`.
</div>

<p>

