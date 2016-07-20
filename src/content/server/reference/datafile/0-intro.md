---
template: multi-example
title: Datafile
anchor: datafile
datafile: true
code_examples:
  python:
    lang: python
  java:
    lang: java
  ruby:
    lang: ruby
  javascript:
    lang: javascript
---

The datafile compactly represents all of the "instructions" needed to activate experiments in your code and send conversion events back to Optimizely. The SDKs work by reading from a datafile in JSON format which represents the experiments you've set up for the project. For example, the datafile at right represents the project from the [Getting started](/server/getting-started) guide.

Unless you are building your own SDK, there shouldn't be any need to interact with the datafile directly.

<div class="attention attention--warning push--bottom">*Please note:* The format of the datafile is still not finalized and subject to change.</div>

You can fetch the datafile for your Optimizely project in two ways:

* *Use the Optimizely CDN.*  For example, if the ID of your project is `12345` you can access the file at https://cdn.optimizely.com/json/12345.json.
* *Use the Optimizely REST API.* For example, if the ID of your project is `12345` you can access the file at https://www.optimizelyapis.com/experiment/v1/projects/12345/json. Please note that as with other requests to the REST API, you will have to [authenticate with an API token](/rest/getting-started).

For example, this authenticated REST API call will return the datafile:

```bash
curl \
  -H "Token: abcdefghijklmnopqrstuvwxyz:123456" \
  "https://www.optimizelyapis.com/experiment/v1/projects/12345/json"
```

To retrieve the datafile, use the preferred request library of your language.

