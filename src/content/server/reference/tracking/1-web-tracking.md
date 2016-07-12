---
template: multi-example
title: Tracking on the web
anchor: webtracking
---

If you'd like to track events on the web, client-side (via JavaScript) instead of on the server, you can use the JavaScript SDK. Please email <developers@optimizely.com> to get a hold of the SDK.

Instructions for using the SDK:

1. `npm install optimizely-client-sdk --save`

2. Require the module via `var optimizely = require('optimizely-client-sdk');`

3. This SDK exposes the same APIs as the rest of the SDKs. You need to create an instance of the `Optimizely` object and pass it the datafile:
```optimizelyInstance = optimizely.createInstance({
  datafile: datafile
});```

  Note: you can pass the datafile from your backend to the frontend (i.e. append it to window like `window.datafile`) or you can manually send an HTTP request from your web frontend code to grab it from the CDN and parse it as a JSON object to pass it to the `optimizely` constructor.

4. Once you have an instance of `optimizely` you can call the `track` method as such: `optimizelyInstance.track(eventKey, userId, attributes, eventValue)`
