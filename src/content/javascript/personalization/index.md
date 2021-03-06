---
template: page-sidebar
title: "Optimizely Personalization Developer's Guide"
---

# Personalization Developer's Guide

[Optimizely Personalization](http://www.optimizely.com/personalization) extends the Optimizely developer platform with new capabilities like behavioral targeting, audience discovery, and customer profiles. It also introduces a new code editor for custom JavaScript and CSS with important differences in how code is written and executed. The sections below describe these changes and explain how you can use a new set of JavaScript APIs for instrumenting behavior and developing experiences.

<div class="attention attention--warning push--bottom"><b>Note:</b> The documentation below only applies to <a href="http://www.optimizely.com/personalization" target="_blank">Optimizely Personalization</a>. In the future, many of these APIs will also be available for use in Optimizely Testing.</div>

## Implementation

The first step to getting started with Optimizely Personalization is tracking the key pages, events, and tags on your site. See [The Six Core Concepts of Optimizely Personalization](https://help.optimizely.com/hc/en-us/articles/210306928) for a high-level introduction to how these pieces work together. While much of this implementation is possible in the visual editor, we also provide a set of JavaScript APIs for defining pages, tracking events, and adding tags on each for full flexibility.

These APIs are similar to the [tracking calls in Optimizely Testing](/javascript/reference/index.html#track-event), but they use a new format for pushing data. To call these new APIs, you call `optimizely.push` with an object containing a `type` property and additional parameters. See the sections below for detailed examples.

Some legacy API calls like `trackEvent` will automatically trigger a new API call in this format. You don't need to reimplement event tracking if you've already set it up, but you can use the new API format to track additional tags for behavioral targeting (see below).

##### *Usage*
```js
// Legacy format
window.optimizely.push(['trackEvent', 'watchedVideo']);

// New format
window.optimizely.push({
  type: "event",
  eventName: "watchedVideo",
  tags: { // Additional metadata for targeting (optional)
    title: "Funny Cats",
    duration: 30,
  }
});
```

### Events

The `event` method captures visitor behavior and additional data. You can track clicks and pageviews in Optimizely
without code, but this API call supports tracking other behaviors like watching a video. These events can be used for measuring the results of a campaign, or for defining an audience based on behavior. [Learn more about events.](https://help.optimizely.com/Get_Started/Six_core_concepts_of_Optimizely_Personalization#events)

##### *Parameters*

- `type`: "event"
- `eventName` (string): The "API name" for an event created in Optimizely, e.g. `add_to_cart`
- `tags` (object): A single-level JSON object with metadata about an event, e.g. the product being purchased.
  - `revenue` (integer): A special tag that denotes a revenue-generating event. Revenue should be an integer equal to 100 times the value. For example, a purchase of $79.99 or €79.99 would be `7999`. Revenue should only be attached to the final purchase to prevent double-counting, and if you've already tracked events using the legacy `trackEvent` method you should not re-instrument it again.

##### *Usage*
```js
// Basic tracking
window.optimizely.push({
  type: "event",
  eventName: "watchedVideo"
});

// Tracking revenue
window.optimizely.push({
  type: "event",
  eventName: "purchase",
  tags: {
    revenue: 5000,
  }
});

// Additional metadata
window.optimizely.push({
  type: "event",
  eventName: "purchase",
  tags: {
    revenue: 10000,
    quantity: 2,
    category: "Shoes",
    subcategory: "Sneakers",
  }
});
```

### Pages

The `page` method tracks the visitor's current context on a website. This context is used for both analytics ("track the number of views to the checkout page") and targeting ("run this experiment on the checkout page"). [Learn more about pages.](https://help.optimizely.com/hc/en-us/articles/210306928#pages)

Specifically, pushing a page has two effects:
 * Optimizely will track a pageview event for this page, incrementing the count of views to that page in analytics and recording the event in the user's behavioral profile
 * Any campaigns targeted to this page will be activated

Pages can be created visually in Optimizely with URL targeting, but this API call allows you to manually activate a page. This allows full flexibility for sites with dynamic content or challenging URL patterns.

Page information is reset whenever the browser reloads.

##### *Parameters*

- `type`: "page"
- `pageName` (string): The "API name" for a page created in Optimizely, e.g. `product_detail`. Choose the "manual activation" option in page creation to see or change this name.
- `tags` (object): A single-level JSON object with metadata about the content on the page, e.g. the product being purchased.

##### *Usage*
```js
window.optimizely = window.optimizely || [];

// Basic page tracking
window.optimizely.push({
  type: "page",
  pageName: "checkout_stage_1"
});

// Page tracking with tags
window.optimizely.push({
  type: "page",
  pageName: "product_detail",
  tags: {
    category: "Kitchen",
    subcategory: "Blenders",
    price: 64999,
    sku: "113757"
  }
});
```

### Tags

Tags are contextual metadata about pages and events. They identify what a user is looking at, clicking on, or interacting with. For example, you can use tags to describe a product being purchased, an article being read, or a flight being booked. [Learn more about tags.](https://help.optimizely.com/hc/en-us/articles/210306928#tags)

There are three ways to capture this context:
 * Directly on an [event](#events), using the `tags` property.
 * Directly on a [page](#pages), using the `tags` property. These tags will be sent along with any event that happens on that page.
 * Finally, you can use this `tags` method directly to add context without activating a page and tracking a pageview. This is equivalent to the previous option, but it can be used when pages are already being activated using URL targeting.

##### *Parameters*

- `type`: "tags"
- `tags` (object): A single-level JSON object with metadata about an event, e.g. the product being purchased.

##### *Usage*
```js
// Tracking the current product
window.optimizely.push({
  type: "tags",
  tags: {
    category: "Kitchen",
    subcategory: "Blenders",
    price: 64999,
    sku: "113757"
  }
});
```

### Users

The `user` method captures attributes of a user and stores them in a profile that persists across sessions and syncs across devices. These attributes are persisted in the browser's local storage and can be used for targeting and analysis.


##### *Parameters*

- `type`: "user"
- `attributes` (object): Metadata about a user, e.g. their home state. Attributes can be used for discovering and targeting audiences.

##### *Usage*
```js
window.optimizely = window.optimizely || [];

// Attach extra information to an anonymous visitor
window.optimizely.push({
  type: "user",
  attributes: {
    frequentFlyerStatus: "Gold",
    frequentFlyerMiles: 25600
  }
});

// To remove an attribute value, set it to null
window.optimizely.push({
  type: "user",
  attributes: {
    frequentFlyerStatus: null
  }
});
```

## Developing experiences

Optimizely Personalization allows you to build experiences using a visual editor or make more sophisticated changes by writing your own custom code. To give you full control over the execution of that code, we've changed the timing of when code is applied and added new utility functions for adjusting that timing.

### Timing

The execution model for JavaScript has been revamped in Optimizely Personalization, so developers familiar with our Testing product should be careful copying over existing code. There are two key differences:

*Custom code and visual changes are separated*. When you make a change in the visual editor, you won't see the corresponding jQuery in the code box. Instead, the change is stored in a JSON data structure and applied at runtime. Each visual change is applied when the selector it applies to is ready.

*Custom code runs immediately*. Because visual and code changes are mixed together, Optimizely Testing polls for each line separately and tries to run it when elements were ready. In Personalization, we've removed this behavior so that your code runs exactly as written, *often before the DOM is ready*.

Please note this means that some code that works in Optimizely Testing may *not* work in Personalization. For example, the following code would have no effect if the Optimizely snippet is in the head tag because the body element doesn't exist at the time when the code runs:

```js
$("body").css("background-color", "red");
```

To delay running the code until the whole page is loaded, you can use jQuery's `document.ready` function or one of the [utility functions](#utilities) below:

```js
// Change the background when the DOM is ready (may cause flashing)
$(document).ready(function() {
  $("body").css("background-color", "red");
});

// Change the background as soon as the body element loads (no flash)
var utils = window.optimizely.get('utils');
utils.waitForElement('body').then(function(){
   $("body").css("background-color", "red");
});
```

You could also use the CSS option under Custom Code to make the same change without worrying about timing. CSS changes are applied by appending a `style` tag to the end of the `body` tag.

```css
body {
  background-color: red;
}
```

Finally, there are several different places where you can write custom code. Changes are applied synchronously in the following order:

1. Project JS [(learn more)](https://help.optimizely.com/hc/en-us/articles/202480860-Project-Settings-JavaScript-jQuery#project_javascript)
2. Campaign JS
3. Campaign CSS
4. Experience JS
5. Experience CSS
6. Visual editor changes

*Note:* Personalization campaigns and Testing experiments can execute in parallel. Be careful assuming any dependencies between them or optimizing the same element in multiple campaigns/experiments.

### Utilities

In addition to updating the `push` API, Optimizely Personalization also exposes a new function, `window.optimizely.get()`. This function allows you to access several useful properties and utilities within the context of custom code. Please note that unlike `push`, `get` may only be used after the Optimizely snippet has loaded. While this will always be the case within custom code, it should be considered when using `get` within external scripts.

For example, if you have [jQuery bundled](https://help.optimizely.com/hc/en-us/articles/202480860-Project-Settings-JavaScript-jQuery#jS) in the Optimizely snippet, you can access it directly by getting `jquery`:

```js
var $ = window.optimizely.get('jquery');
```

If no jQuery is bundled into the client, the default return value is `window.jQuery`.

```js
var utils = window.optimizely.get('utils');
```

<h4 id="waitForElement" class="subLink">waitForElement</h4>

This utility returns a `Promise` that will be resolved as soon as an element appears in the DOM matching the supplied selector.

##### *Parameters*
- `selector` (string): CSS selector, ex. ".product-item"

##### *Returns*
An [ES6-style Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with the matching element.

##### *Usage*
```js
// Retrieve the utils library
var utils = window.optimizely.get('utils');

// Wait for the footer element to appear in the DOM, then change the color
utils.waitForElement('.footer').then(function(footerElement){
  footerElement.style.color = 'black';
});
```

<h4 id="observeSelector" class="subLink">observeSelector</h4>

This utility provides a subset of the functionality of a [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver), allowing you to run a function whenever a DOM selector changes. Given a CSS selector and a callback, this function will invoke the supplied callback whenever a new element appears in the DOM matching the supplied selector.

##### *Parameters*
- `selector` (string): CSS selector, ex ".product-item"
- `callback` (function): A function that accepts an `HTMLDomElement` as its first parameter
- `options` (object):
  - `timeout` (string|null): Number of milliseconds to try before canceling. If null, continues indefinitely
  - `once` (boolean): If true, the callback will be invoked for the first match only
  - `onTimeout` (function): Function to execute on timeout

##### *Returns*
A function that can be executed to cancel observation

##### *Usage*
```js
// Retrieve the utils library
var utils = window.optimizely.get('utils');

// Modify elements displaying product prices whenever they appear on the page
var cancelProductPriceObserver = utils.observeSelector('.productPrice', function(priceElement) {
  priceElement.style.fontSize = '30px';
  priceElement.style.color = 'red';
});
```

<h4 id="poll" class="subLink">poll</h4>

This is a convenience wrapper for `setInterval`.

##### *Parameters*
- `callback` (function): Function to be executed on the interval specified by `delay`
- `delay` (number): Milliseconds to wait in between each callback invocation

##### *Returns*
A function that can be executed to cancel polling.

##### *Usage*
```js
// Retrieve the utils library
var utils = window.optimizely.get('utils');

// Wait until the element we want to modify is in the DOM
utils.waitForElement('#pre-header-shipping-cont').then(function(headerElement) {

  // 10 minutes in ms
  var timeRemaining = 60000;

  // Create a reservation countdown timer that expires after 10 minutes
  // We want to instill some urgency in our customers so that they buy buy buy
  var cancelPolling = utils.poll(function() {
    timeRemaining = timeRemaining - 1000;

    // Update message based on how much time is remaining
    if (timeRemaining > 0) {
      var date = new Date(timeRemaining);
      headerElement.innerHTML = 'You have ' + date.getMinutes() + ':' + date.getSeconds() + ' before your reservation expires.';
    } else {
      headerElement.innerHTML = 'Your reservation has expired';
      cancelPolling();
    }
  }, 1000);
});
```


<h4 id="waitUntil" class="subLink">waitUntil</h4>

This utility accepts a function that returns a boolean value and returns a `Promise` that resolves when the supplied function returns `true`.

##### *Parameters*
- `conditionFunction` (function): A function that will be executed periodically and returns a boolean value

##### *Returns*
An [ES6-style Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

##### *Usage*
```js
// Retrieve the utils library
var utils = window.optimizely.get('utils');

// We have infinite scroll enabled on the site. Wait until more than 200 products have been shown
// to prompt the user to try out our filter by color feature
utils.waitUntil(function() {
  var productsShownOnThePage = document.querySelectorAll('.product-listing');
  return productsShownOnThePage && productsShownOnThePage.length > 200;
}).then(function() {
  alert('Not finding what you\'re looking for? Try narrowing down your search using our new filter by color feature');
});
```


### Listeners

As Optimizely runs on your site, you can hook into the snippet's execution and run your own code at different points by using the `addListener` API. Looking for other listeners? Contact us at [developers@optimizely.com](mailto:developers@optimizely.com).

##### *Parameters*

- `type`: "addListener"
- `filter` (object): The events to listen for
  - `type` (string)
  - `name` (string)
- `handler` (function): A callback to run when an event fires. The function takes a single `data` object that varies based on the event.

##### *Usage*

```js

window.optimizely = window.optimizely || [];

window.optimizely.push({
  type: 'addListener',
  filter: {
    type: 'lifecycle',
    name: 'viewActivated',
  },
  handler: function(data) {
    console.log('Page', data.name, 'was activated.');
  },
});
```

<h4 id="layerDecided" class="subLink">Campaign Decision</h4>

This listener fires whenever a decision is made for a campaign. This means that Optimizely has chosen an audience/experience to display.

##### *Parameters*

- `type`: "lifecycle"
- `name`: "layerDecided"

##### *Callback Parameters*

- `data`: (object)
  - `layer`: (object) Details about the campaign
  - `decisionTicket`: (object) Metadata used to make the decision
  - `decision`: (object) The audience and variation ID that were decided

<h4 id="viewActivated" class="subLink">Page Activation</h4>

This listener fires whenever a page is activated, either due to URL targeting or manual activation.

##### *Parameters*

- `type`: "lifecycle"
- `name`: "viewActivated"

##### *Callback Parameters*

- `data`: (object)
  - `id` (integer)
  - `name` (string): The user-friendly name, like "Homepage"
  - `apiName` (string): The API name for the page, used for manual activation
  - `category` (string): The category, like "homepage"


### Behavior

<h4 id="query" class="subLink">query</h4>

This API function runs a behavioral query over the [events](https://help.optimizely.com/Get_Started/Six_core_concepts_of_Optimizely_Personalization#events) that have taken place on this device.

Currently, the API only considers events that took place before the most recent activation of the Optimizely snippet.  You must reload the page if you want to query over events that took place on the current page load.

##### *Parameters*
- `query` (object): A [behavioral query object](/behavior/#query-objects)

##### *Returns*
Depending on which clauses are included in the specified query object, this API will return one of the following types of values:
- A simple value like a number, a boolean, a string, or any other value that may have been specified in a tag.  May be `undefined` if the specified tag was not set on the filtered event.
- A list containing multiple simple values.
- An [event object](/behavior/#event-objects).
- A list containing multiple events.

##### *Usage*
```js
var behavior = window.optimizely.get('behavior');

// Return a list of page names, sorted by viewing frequency.
behavior.query({
  "version": "0.2",
  "filter": {
    "field": ["type"],
    "value": "pageview"
  },
  "pick": {
    "field": ["name"]
  },
  "sort": [
    {
      "field": ["frequency"],
      "direction": "descending"
    }
  ]
});
```


### Customer Profiles

<h4 id="getAttributeValue" class="subLink">getAttributeValue</h4>

This API function returns the current customer's value for a [content-enabled](https://help.optimizely.com/hc/en-us/articles/216497887) profile attribute.

##### *Parameters*
- `datasourceId` (number): Required
- `attributeId` (number): Required if `attributeName` is not provided
- `attributeName` (string): Required if `attributeId` is not provided.  Does not work if descriptive names are [masked](https://help.optimizely.com/hc/en-us/articles/208997878-Project-Settings-Privacy#masking_descriptive_names) in the Optimizely client

##### *Returns*
The uploaded attribute value, or `undefined` if any of the following are true:
- A customer profile still needs to be [uploaded](https://help.optimizely.com/hc/en-us/articles/216307487#upload) for the current user.
- A profile has been uploaded, but it does not include the desired attribute.
- The Optimizely client is waiting for fresh data from the DCP service.

##### *Throws*
If any of the following are true:
- The specified attribute does not exist
- The attribute is not content-enabled
- The attribute is specified by name even though names are [masked](https://help.optimizely.com/hc/en-us/articles/208997878-Project-Settings-Privacy#masking_descriptive_names) in the Optimizely client

##### *Usage*
```js
// Retrieve the dcp library
var dcp = window.optimizely.get('dcp');

// Specify a content-enabled attribute by ID.
dcp.getAttributeValue({datasourceId: 123, attributeId: 456});

// Specify a content-enabled attribute by name.
dcp.getAttributeValue({datasourceId: 123, attributeName: 'Preferred Locale'});
```

<h4 id="waitForAttributeValue" class="subLink">waitForAttributeValue</h4>

This API function returns a `Promise` that will be resolved as soon as Optimizely receives the current customer's value for a [content-enabled](https://help.optimizely.com/hc/en-us/articles/216497887) profile attribute.

##### *Parameters*
- `datasourceId` (number): Required
- `attributeId` (number): Required if `attributeName` is not provided
- `attributeName` (string): Required if `attributeId` is not provided.  Does not work if descriptive names are [masked](https://help.optimizely.com/hc/en-us/articles/208997878-Project-Settings-Privacy#masking_descriptive_names) in the Optimizely client

##### *Returns*
An [ES6-style Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that
will be resolved with the uploaded attribute value, or with `undefined` if any of the following are true:
- A customer profile still needs to be [uploaded](https://help.optimizely.com/hc/en-us/articles/216307487#upload) for the current user.
- A profile has been uploaded, but it does not include the desired attribute.

If your campaign does not [target a DCP Audience](https://help.optimizely.com/hc/en-us/articles/216497887#campaign),
then it is possible that profile data will not be fetched and the Promise will not be resolved.

##### *Throws*
If any of the following are true:
- The specified attribute does not exist
- The attribute is not content-enabled
- The attribute is specified by name even though names are [masked](https://help.optimizely.com/hc/en-us/articles/208997878-Project-Settings-Privacy#masking_descriptive_names) in the Optimizely client

##### *Usage*
```js
// Retrieve the dcp library
var dcp = window.optimizely.get('dcp');

// Specify a content-enabled attribute by ID.
dcp.waitForAttributeValue({datasourceId: 123, attributeId: 456}).then(
  function (attributeValue) {
  }
);

// Specify a content-enabled attribute by name.
dcp.waitForAttributeValue({datasourceId: 123, attributeName: 'Preferred Locale'}).then(
  function (attributeValue) {
  }
);
```

## Reading data and state

`optimizely.get` can also be used to get read-only information about the current visitor, sessions, and running campaigns.

### Data

Returns an object exposing static data fields.

##### *Usage*
```js
// Retrieve the data object
var staticData = window.optimizely.get('data');
```

##### *Returns*
- `Object`:
  - `accountId` (string)
  - `projectId` (string)
  - `revision` (string)
  - `dcpServiceId` (string|null)
  - `audiences` (object) Object mapping Audience ID to:
    - `id` (string): The audience id
    - `name` (string)
    - `conditions` (array): Conditions the visitor must have to be in the audience
  - `campaigns` (object) Object mapping Campaign ID to:
    - `id` (string): The campaign id
    - `name` (string)
    - `policy` (string): ordered (personalization) or random (A/B test)
    - `holdback` (BasisPoints): 0 - 100
    - `weightDistributions` (object|null): Traffic allocation among the experiments in the campaign
    - `activation` (object|null)
    - `changes` (array|null): An array of changes
    - `commitId` (string|null)
    - `experiments` (array): An array of the experiments in the campaign
    - `integrationSettings` (object)
    - `viewIds` (array): An array of view ids (strings) associated with the campaign
  - `events` (object) Object mapping Event ID to:
    - `id` (string): The event id
    - `name` (string|null): The event name
    - `apiName` (string)
    - `category` (string): added to cart, saved, shared, searched, purchased, converted, signed up, subscribed, other
    - `eventType` (string): click, custom, engagement, or pageview
    - `eventFilter` (object|null): Filter type of string or target selector
    - `viewId` (string|null)
  - `pages` (object) Object mapping Page ID to:
    - `id` (string): The page id
    - `name` (string|null): The page name
    - `apiName` (string)
    - `category` (string): article, cart, category, checkout, home, landing page, pricing, product detail, search results, other
    - `staticConditions` (array)
    - `tags` (array)

### Session

##### *Usage*
```js
// Retrieve the session object
var sessionData = window.optimizely.get('session');
```

##### *Returns*
- `Object`:
  - `lastSessionTimestamp` (number|0)
  - `sessionId` (string|null)

### Visitor ID

##### *Usage*
```js
// Retrieve the visitor ID data object
var visitorIdData = window.optimizely.get('visitor_id');
```
##### *Returns*
- `Object`:
  - `randomId` (string|null): If no UUID is available, Optimizely will generate a random visitor id
  - `UUID` (string|null): Your unique identifier for a user (universally unique identifier)

### Visitor

##### *Usage*
```js
// Retrieve the visitor profile
var visitorProfile = window.optimizely.get('visitor');
$("#username").text(visitorProfile.custom.userName);
```

##### *Returns*
- `Object`:
  - `IP` (string): The visitor's IP address
  - `browserId` (string)
  - `browserVersion` (string)
  - `campaign` (string|null): The campaign the visitor is in
  - `cookies` (object): The visitor's optimizely cookies
  - `currentTimestamp` (number)
  - `dcpData` (object): Indicates personalized content delivered via named or unnamed DCP attributes
  - `defaultBehavior` (object): Includes default values for a variety of properties, such as average events per session, most viewed page, average revenue per order last 60 days, etc.
  - `device` (string): The visitor's device (e.g., desktop, laptop, etc.)
  - `events` (array)
  - `first_session` (boolean): True if it is the visitor's first session
  - `language` (string)
  - `lists` (object)
  - `location` (object): Includes fields for city, continent, country, and region
  - `queryParams` (array)
  - `referrer` (string|null)
  - `source_type` (string|null)
  - `visitorId` (string|null): The visitor's randomly generated Optimizely ID

### State

Returns a module exposing several functions to access information about the current visitor's state

##### *Usage*
```js
// Access the state module
var stateModule = window.optimizely.get('state');

// Use the state module to access the campaign states
var campaignStates = stateModule.getCampaignStates();
```

<h4 id="getCampaignStates" class="subLink">getCampaignStates()</h4>

Returns a map of campaign states, indexed by campaign id.

##### *Returns*
- `Object` Object mapping Campaign ID to:
  - `id` (string)
  - `campaignName` (string)
  - `audiences` (array)
  - `experiment` (object|null)
  - `variation` (object|null)
  - `reason` (string|null): Reason why experiment or variation id is null

<h4 id="getPageStates" class="subLink">getPageStates()</h4>

Returns a map of page states, indexed by page id.

##### *Returns*
- `Object` Object mapping Page ID to:
  - `id` (string)
  - `apiName` (string)
  - `category` (string): article, cart, category, checkout, home, landing page, pricing, product detail, search results, other
  - `isActive` (boolean)
  - `metadata` (object)
  - `name` (string)
  - `staticConditions` (array)
  - `tags` (array)

<h4 id="getActivationId" class="subLink">getActivationId()</h4>

##### *Returns*
- string: current activation ID

## Debugging

### Logging

You can tell Optimizely to output its log to the browser's console log by using the query parameter `optimizely_log={level}`. For example, you can follow the high-level execution by adding `?optimizely_log=info`. The following levels are supported, and the default is off:

- **OFF**: No logging
- **ERROR**: Errors only
- **WARN**: Warnings and errors
- **INFO**: High-level information on campaigns, audiences, and event tracking
- **DEBUG**: Detailed logging for debugging purposes
- **ALL**: All logs

### Campaign Activation

You can use the [logging output](#logging) to see which campaigns are activating for a given a visitor, and which experience they will see.

First, enable logging by adding `?optimizely_log=info` to a URL on your site. Then, open your browser's console to see the logging output. To make the log more readable, it may help to filter within the console log to "Optly /" so that other messages are hidden.

![](/assets/img/js/init.png)

The first few lines cover the initialization of the Optimizely client, including data like the active campaigns, events, and pages. You can use this section to confirm that the right data is being compiled into the snippet. Some of the terminology is slightly different from the user interface:
- Experiences within a campaign are listed as `experiments` within a layer, each of which has a single `variation` with a set of `actions`.
- `actions` are the set of changes that apply for a specific experience on a particular page

To debug a specific campaign, you can search within the console (Cmd-F) for that campaign's ID. You can find the ID in the URL of the Optimizely interface. A campaign with the URL `https://app.optimizely.com/p13n/3563611614/layers/3558430129` has the ID `3558430129`. Searching for this ID will show all log events related to that campaign. For example:

![](/assets/img/js/decision-no.png)

In this example, the output is telling us that the visitor did not match any of the audiences in the campaign. Therefore, they weren't eligible for any experiences and no changes were applied.

Now let's add the visitor to a campaign audience to apply a change:

![](/assets/img/js/full-screen.png)

In this example, the output tells us that the visitor was in the Campaign "Homepage Offers". Let's take a closer look at some of the entries in the log:

![](/assets/img/js/recording-decision.png)

If we click on the Objects in the log to inspect them, we can see some of the details about the "decision ticket" (the information Optimizely uses in order to make a decision of which experience to show, if any) on the left of the arrow "->" and the "decision" (the selected experiment/variation, if any, and whether the visitor is in the layer holdback) on the right hand side. In particular note the "audienceIds" property of the decision ticket which shows the IDs of the audiences the visitor was in at the time of the decision (in this case "4055203664").

![](/assets/img/js/tracking-decision.png)

Next we can see that Optimizely created a log event to track the decision. By inspecting the log event we can see that it has properties "decisionTicket" and "decision" corresponding to the objects we inspected above, as well as information about the client version, a guid and timestamp to track the event in Optimizely's logs, and others (event properties subject to change).

![](/assets/img/js/action-executing.png)

In addition to recording and tracking the decision, Optimizely applies the actions (changes) corresponding to the current view. By clicking on the Object to inspect, we can see that the action is associated with the current campaign (layerId) and selected experiment/variation (from the decision), and consists of a "changeSet" (list of changes), each of which describes a change to apply. The change detail above shows that the first change in the set is an "attribute" change which changes the "html" (innerHTML) of the ".hero__title" element to the string "Stylish new looks for p13n-ers". If there is an error applying this change, it will be logged here as well.

### Events and Tags

To debug event tracking and visual tags, you can use the network tab to observe requests to Optimizely's log endpoint. For example, in Google Chrome, you can open the Developer Tools and then reload the page. When you click on the Network tab, you'll see all the network requests on that page. You can filter these requests to show only those made by Optimizely for tracking purposes by filtering to `p13nlog`. When you trigger an event, e.g. by clicking a button, you'll see it fire here. For example:

![](/assets/img/js/event.png)

In this example, we've triggered the Share button on the Product Detail Page. The `eventName` shows the API name of the event, and the `type` corresponds to the category in the Optimizely interface. For pages, `eventType = 'view-activated'` and the `eventName` will be the ID of the page.

The `eventFeatures` show tags that were captured on the page. In this case, we can see tags picking up the product's category, subcategory, title, and price. `eventMetrics` show tags that are used as metrics on the results page, like revenue for a custom event. Finally, the `layerStates` show which campaigns the event will be attributed to.
