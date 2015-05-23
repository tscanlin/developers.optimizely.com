---
template: page-sidebar
title: "Optimizely JavaScript API Guide"
---

To access the Optimizely data object, open your browser console and type `window.optimizely`:

<img src="../../../assets/img/developer-console-1.gif">

## API Overview

The Optimizely Javascript API has two parts:

### API Function Calls

The Optimizely API function calls are used to direct Optimizely to take specific actions.

One example is starting experiments manually rather than upon page load, which is useful for testing dynamic web pages. Your application can tell Optimizely when to activate these "manual activation mode" experiments with the [activate](#activate) API function. Another example is using the [bucketVisitor](#bucket-visitor) API function to assign visitors to a specific variation if you wanted to incorporate inputs that Optimizely's traffic allocation algorithm does not. The API function calls expose many of Optimizely's decisions and actions so you can take control.

<a name="data-object"></a>
### Data Object

Optimizely's Data Object is a read-only data object that contains information about a visitor and his or her Optimizely experiments, variations, and goals. Use the Data Object to retrieve the state of and details about Optimizely experiments, variations, and goals for a given visitor. An example of this is retrieving which experiments and variations a visitor has seen and passing this information to your internal database.

### Tutorials

See the [Tutorials page](https://www.optimizely.com/docs/tutorials) for more examples of solutions using the Optimizely API.

<a name="change-log"></a>
### Change Log
* **August 14, 2014**: Geo-targeted experiments for which visitor geo data is locally cached now activate immediately, rather than waiting for DOM.ready().
* **November 17, 2014**: New API call to set a [Universal User ID](#uuid).
