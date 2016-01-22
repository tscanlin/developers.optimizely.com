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

##### *Examples*
```js
// Legacy format
window['optimizely'].push(['trackEvent', 'watchedVideo']);

// New format
window['optimizely'].push({
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
without code, but this API call supports tracking other behaviors like watching a video. These events can be used for measuring the results of a campaign, or for defining an audience based on behavior. [Learn more about events.](https://help.optimizely.com/hc/en-us/articles/210306928#events)

##### *Parameters*

- `type`: "event"
- `eventName` (string): The "API name" for an event created in Optimizely, e.g. `add_to_cart`
- `tags` (object): A single-level JSON object with metadata about an event, e.g. the product being purchased.
  - `revenue` (integer): A special tag that denotes a revenue-generating event. Revenue should be an integer equal to 100 times the value. For example, a purchase of $79.99 or €79.99 would be `7999`. Revenue should only be attached to the final purchase to prevent double-counting, and if you've already tracked events using the legacy `trackEvent` method you should not re-instrument it again.

##### *Examples*
```js
// Basic tracking
window['optimizely'].push({
  type: "event",
  eventName: "watchedVideo"
});

// Tracking revenue
window['optimizely'].push({
  type: "event",
  eventName: "purchase",
  tags: {
    revenue: 5000,
  }
});

// Additional metadata
window['optimizely'].push({
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

##### *Examples*
```js
window['optimizely'] = window['optimizely'] || [];

// Basic page tracking
window['optimizely'].push({
  type: "page",
  pageName: "checkout_stage_1"
});

// Page tracking with tags
window['optimizely'].push({
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

##### *Examples*
```js
// Tracking the current product
window['optimizely'].push({
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

You can also use this function to identify a user with a unique `userId`. If you don't provide an ID, we'll automatically generate an anonymous ID and persist it in a cookie. Providing your own userId allows you to target lists of users by their ID and integrate offline data. See [Uploaded Audience targeting](https://help.optimizely.com/hc/en-us/articles/206197347-Uploaded-Audience-Targeting-Create-audiences-based-on-lists-of-data) for more information.


##### *Parameters*

- `type`: "user"
- `userId` (string): Your unique identifier for a user, or null to use Optimizely's ID.
- `attributes` (object): Metadata about a user, e.g. their home state. Attributes can be used for discovering and targeting audiences.

##### *Examples*
```js
window['optimizely'] = window['optimizely'] || [];

// Attach extra information to an anonymous visitor
window['optimizely'].push({
  type: "user",
  attributes: {
    frequentFlyerStatus: "Gold",
    frequentFlyerMiles: 25600
  }
});

// Alias an anonymous user to a known userId
window['optimizely'].push({
  type: "user",
  userId: "834092"
});

// Combine both calls
window['optimizely'].push({
  type: "user",
  userId: "834092",
  attributes: {
    frequentFlyerStatus: "Gold",
    frequentFlyerMiles: 25600
  }
});

// To remove an attribute value, set it to null
window['optimizely'].push({
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
var utils = window['optimizely'].get('utils');
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

In addition to updating the `push` API, Optimizely Personalization also exposes a new function, `window['optimizely'].get()`. This function allows you to access several useful properties and utilities within the context of custom code. Please note that unlike `push`, `get` may only be used after the Optimizely snippet has loaded. While this will always be the case within custom code, it should be considered when using `get` within external scripts.

For example, if you have [jQuery bundled](https://help.optimizely.com/hc/en-us/articles/202480860-Project-Settings-JavaScript-jQuery#jS) in the Optimizely snippet, you can access it directly by getting `jquery`:

```js
var $ = window['optimizely'].get('jquery');
```

If no jQuery is bundled into the client, the default return value is `window.jQuery`.

```js
var utils = window['optimizely'].get('utils');
```

<h4 id="waitForElement" class="subLink">waitForElement</h4>

This utility returns a `Promise` that is resolved as soon as an element appears in the DOM matching the supplied selector.

##### *Parameters*
- `selector` (string): CSS selector, ex. ".product-item"

##### *Returns*
An [ES6-style Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with the matching element.

##### *Examples*
```js
// Retrieve the utils library
var utils = window['optimizely'].get('utils');

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

##### *Example*
```js
// Retrieve the utils library
var utils = window['optimizely'].get('utils');

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

##### *Examples*
```js
// Retrieve the utils library
var utils = window['optimizely'].get('utils');

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

##### *Examples*
```js
// Retrieve the utils library
var utils = window['optimizely'].get('utils');

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

##### *Examples*

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

### Customer Profiles

<h4 id="getAttributeValue" class="subLink">getAttributeValue</h4>

This utility returns the current customer's value for a [content-enabled](https://help.optimizely.com/hc/en-us/articles/216497887) profile attribute.

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

##### *Examples*
```js
// Retrieve the dcp library
var dcp = window['optimizely'].get('dcp');

// Specify a content-enabled attribute by ID.
dcp.getAttributeValue({datasourceId: 123, attributeId: 456});

// Specify a content-enabled attribute by name.
dcp.getAttributeValue({datasourceId: 123, attributeName: 'Preferred Locale'});
```

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
- Campaigns are referred to as `layers`
- Experiences within a campaign are listed as `experiments` within a layer, each of which has a single `variation`
- Pages are referred to as `views`
- `actions` are the set of changes that apply for a specific experience on a particular page

To debug a specific campaign, you can search within the console (Cmd-F) for that campaign's ID. You can find the ID in the URL of the Optimizely interface. A campaign with the URL `https://app.optimizely.com/p13n/3563611614/layers/3558430129` has the ID `3558430129`. Searching for this ID will lead to a "decision event" in the logs, which captures Optimizely's decision about which experience should be shown for a given a campaign. This line is preceded by a section saying `Activating layer...` and followed by a section saying `Activated layer...`, and between these lines you can see the execution logic. For example:

![](/assets/img/js/decision-no.png)

In this example, the output is telling us that the visitor did not match any of the audiences in the campaign. Therefore, they weren't eligible for any experiences and no changes will actually be appied.

![](/assets/img/js/decision-yes.png)

In this example, the output tells us that the visitor qualified for two audiences: Shoe Shoppers and Cold Weather. Optimizely decided to serve the Shoe Shoppers experience because it was ranked higher (experiment 3559000019), and the visitor was randomly assigned to the personalized treatment rather than the holdback. Optimizely registed an Action, which included a set of changes like a new background image and new button text. Optimizely recorded the layer decision and then applied the changes.

### Events and Tags

To debug event tracking and visual tags, you can use the network tab to observe requests to Optimizely's log endpoint. For example, in Google Chrome, you can open the Developer Tools and then reload the page. When you click on the Network tab, you'll see all the network requests on that page. You can filter these requests to show only those made by Optimizely for tracking purposes by filtering to `p13nlog`. When you trigger an event, e.g. by clicking a button, you'll see it fire here. For example:

![](/assets/img/js/event.png)

In this example, we've triggered the Share button on the Product Detail Page. The `eventName` shows the API name of the event, and the `type` corresponds to the category in the Optimizely interface. For pages, `eventType = 'view-activated'` and the `eventName` will be the ID of the page.

The `eventFeatures` show tags that were captured on the page. In this case, we can see tags picking up the product's category, subcategory, title, and price. `eventMetrics` show tags that are used as metrics on the results page, like revenue for a custom event. Finally, the `layerStates` show which campaigns the event will be attributed to.