---
template: page-sidebar
title: "Optimizely JS API Reference"
---

# Optimizely JS API Reference

Below is a full reference for the JavaScript API, including the [Data Object](#the-data-object) and [API Function Calls](#api-function-calls).

## The Data Object

The `window['optimizely'].data` object contains read-only information about the current user and the running experiments.

<a name="custom-tags-data"></a>
### Custom Tags

```javascript
window['optimizely'].data.customTags
```

This is an object that contains all the key-value pairs you've sent to Optimizely using the [custom tag function](#custom-tag).

### Experiments

#### The Experiments Object

```javascript
window['optimizely'].data.experiments
```

This is an object with information about all the experiments for this project file. The keys of `window['optimizely'].data.experiments` are the experiment ids, which can be found in the diagnostic report for your experiment.

#### Experiment Code

```javascript
window['optimizely'].data.experiments[experimentId].code
```

This contains the experiment's global JavaScript code, if any.

#### Experiment Manual Mode

```javascript
window['optimizely'].data.experiments[experimentId].manual
```

This is a boolean indicating whether the experiment is a manual experiment or not.

#### Experiment Name

```javascript
window['optimizely'].data.experiments[experimentId].name
```

This is the experiment's name.

#### Experiment Section Ids

```javascript
window['optimizely'].data.experiments[experimentId].section_ids
```

This contains the section ids for the experiment, if it is a multivariate experiment.

#### Experiment Variation Ids

```javascript
window['optimizely'].data.experiments[experimentId].variation_ids
```

This is an array of variation ids for the variations of this experiment.

### Sections

#### The Sections Object

```javascript
window['optimizely'].data.sections
```

This object contains information about all the project file's sections, indexed by their section id. The section ids can be found in the diagnostic report. Only [multivariate experiments](https://www.optimizely.com/resources/multivariate-test-vs-ab-test) contain sections.

#### Section Name

```javascript
window['optimizely'].data.sections[variationId].name
```

This contains the section's name.

#### Section Variation Ids

```javascript
window['optimizely'].data.sections[variationId].variation_ids
```

This is an array containing the variation ids for this section.

### State

#### The State Object

```javascript
window['optimizely'].data.state
```

This object contains information about the current state of Optimizely, such as the active variations and the visitor's bucket map.

#### Active Experiments

```javascript
window['optimizely'].data.state.activeExperiments
```

This is an array of experiment ids for all the active experiments.

#### Variation Map

```javascript
window['optimizely'].data.state.variationMap
```

This is a hash table whose keys are the experiment ids of experiments running for the visitor (including inactive experiments for which the user has been bucketed), and whose values are the variation indexes for those experiments.

#### Variation Ids Map

```javascript
window['optimizely'].data.state.variationIdsMap
```

This is a hash table whose keys are the experiment ids of experiments running for the visitor (including inactive experiments for which the user has been bucketed), and whose values are the variation ids for those experiments.

#### Variation Names Map

```javascript
window['optimizely'].data.state.variationNamesMap
```

This is a hash table whose keys are the experiment ids of experiments running for the visitor (including inactive experiments for which the user has been bucketed), and whose values are the variation names for those experiments.

### Variations

#### The Variation Object

```javascript
window['optimizely'].data.variations
```

This is an object with information about all the project file's variations, indexed by their variation id. The variation ids can be found in the diagnostic report.

#### Variation Name

```javascript
window['optimizely'].data.variations[variationId].name
```

This contains the variation's name.

#### Variation Map

```javascript
window['optimizely'].data.variations[variationId].code
```

This contains the variation's JavaScript code..

### Visitor

#### The Visitor Object

```javascript
window['optimizely'].data.visitor
```

This contains helpful information about the visitor to Optimizely.

#### Visitor Audiences

```javascript
window['optimizely'].data.audiences
```

This is an object with audienceId as the key, and a boolean representing whether the visitor is in the audience (true if the visitor is in the audience) as the value. Not all audiences will be listed, in particular those audiences which are not used in any condition and are not enabled for segmentation.

#### Visitor Browser

```javascript
window['optimizely'].data.visitor.browser
```

This is a string containing information about the browser type that the visitor is using. Options include "Firefox", "Google Chrome", "Internet Explorer", "Opera", and "Safari". If Optimizely does not recognize the browser, this will be an empty string.

#### Visitor Dimension Values

```javascript
window['optimizely'].data.visitor.dimensions
```

An object with dimensionId as the key, and a string for the dimension value (if any) as the value. If a visitor has no value for a dimension, it will not appear in this object.

#### Visitor Location

```javascript
window['optimizely'].data.visitor.location
window['optimizely'].data.visitor.location.city
window['optimizely'].data.visitor.location.region
window['optimizely'].data.visitor.location.country
```

For Platinum customers only, this is an object containing information about the visitor's location. Specifically, this object contains the names of the visitor's city, region, and country, if detected.

Region can also be a territory, such as Canadian province, Indian state, or German state. For US states and Canadian provinces, the string will be the standard two-letter abbreviation of the state, e.g. "NH" for New Hampshire, "DC" for the District of Columbia, and "ON" for Ontario. In some cases, the region string could refer to different places. For example, "MN" could be Minnesota, the US state, or Manipur, the Indian state. The region information should be used in conjunction with the country information, in order to be sure the region is for the correct country.

The country value is a two-letter abbreviation of the visitor's country, if one is detected. For example, "US" is the United States, "CA" is Canada, "MX" is Mexico, "DE" is Germany, "JP" is Japan, "GB" is Great Britain, and "RU" is Russia.

#### Visitor Referrer

```javascript
window['optimizely'].data.visitor.referrer
```

This is a string listing the visitor's referring URL, if any. This is functionally equivalent to document.referer.

#### Visitor OS

```javascript
window['optimizely'].data.visitor.os
```

This is a string listing the visitor's operating system. If the operating system is unknown, this string is the empty string.

#### Visitor Third Party Data

```javascript
window['optimizely'].data.thirdParty
```

This object contains information about the visitor sourced from third-party integrations. The content of this object depends on which integrations you have enabled in Optimizely. For example, if you have enabled the <a target="_blank" href="http://optimizely.com/partners/technology/demandbase">Demandbase integration</a> you can access Demandbase's visitor attributes as follows:

```javascript
window['optimizely'].data.thirdParty.demandbase.company_name
window['optimizely'].data.thirdParty.demandbase.industry
window['optimizely'].data.thirdParty.demandbase.sub_industry
...
```

More generally, to access the third-party attribute `attributeID` from an integration `integrationID`, use the format below:

```javascript
window['optimizely'].data.thirdParty.integrationID.attributeID
```

Since third-party data is not guaranteed to be present on every page view, ensure that your code correctly handles reference errors.  For example, to access the `industry` field from the Demandbase integration, we recommend the code below:

```javascript
var demandbase = window['optimizely'].data.thirdParty.demandbase || {};
var industry = demandbase.industry || '';
if (industry) {
  // do something
}
```

For more information on how to enable third-party integrations and what visitor attributes you have access to, see <a target="_blank" href="http://help.optimizely.com/hc/en-us/articles/203729580">Introduction to Optimizely Integrations</a>.

## API Function Calls

Before ever making an Optimizely function call you should use the following asynchronous instantiation line. The purpose of this line is to ensure that the Optimizely code has already been loaded or, if it has not been loaded, to queue the function calls in a JavaScript array. This is similar to Google Analytics' asynchronous function calls. The following is the code you should use:

```javascript
window['optimizely'] = window['optimizely'] || [];
```

Optimizely function calls can be made using JavaScript or a query parameter, `optimizely_function_name=value`. The JavaScript API is used when the function should be called as part of your application, such as when activating a manual activation mode experiment. The query parameters are used most often for testing and debugging purposes. A common example is to opt a visitor out of Optimizely tracking by loading the URL with the query parameter `optimizely_opt_out=true`. The URL might look like this:

```text
http://www.example.com/page.html?optimizely_opt_out=true
```



<a name="activate"></a>
### Activate

Activate manual activation mode experiments. When you call "activate", all experiments that have manual activation mode configured are run if the visitor meets the experiment's targeting conditions.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["activate"]);
```

You can activate an experiment setup with any activation type by including the `experimentID` in the activation call. The visitor must still meet all experiment targeting conditions.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["activate", experimentId]);
```

### Activate SiteCatalyst

Integrate with SiteCatalyst. You must call "activateSiteCatalyst" after the "s_code.js" file has loaded.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push("activateSiteCatalyst");
```

The `sVariable` parameter contains all of the tracking tags to be sent to SiteCatalyst for a given visitor. Some sites use custom SiteCatalyst implementations with special `sVariable`s. If you wish to specify an `sVariable`, use:

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["activateSiteCatalyst", {"sVariable": mySVar}]);
```

The `sVariable` parameter is optional. By default, Optimizely will use the variable "s" as the SiteCatalyst variable. [Learn More](https://help.optimizely.com/hc/en-us/articles/200039985).

<a name="audiences"></a>
### Audiences

Manually assign visitors to audiences. Optimizely will assign users to an audience when they match that audience's conditions, but you can use these calls to override the built-in behavior. This is especially useful for audiences created through our [REST API]({{site.paths.rest}}#audiences), which don't have conditions and require manual assignment.

To add a visitor to an audience, use:

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(['addToAudience', audienceId]);
```

To remove a visitor from an audience, use:

```javascript
window['optimizely'].push(['removeFromAudience', audienceId]);
```

If the audience has segmentation enabled, this will not impact any past conversions, and visitors you remove will still count towards the audience's unique visitor count if their visit was already logged.

To remove a visitor from all audiences, use:

```javascript
window['optimizely'].push(['removeFromAllAudiences']);
```

<a name="bucket-visitor"></a>
### Bucket Visitor

Assign a visitor to a specific variation, thus overriding Optimizely's random assignment mechanism. You must call "bucketVisitor" prior to loading the Optimizely snippet. It's also important to note that bucketing a visitor via the API will add the user as a visitor to the experiment regardless of whether or not they match any of the [targeting conditions](https://help.optimizely.com/hc/en-us/articles/200039685) for the experiment. The `experimentId` and `variationId`s can be found in an experiment's [Diagnostic Report](https://help.optimizely.com/hc/en-us/articles/200039745).

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["bucketVisitor", experimentId, variationId]);
```

Other ways to call this API:

```javascript
// Multivariate experiments should bucket for each section:
window['optimizely'].push(["bucketVisitor", experimentId, variationIdOfSection1]);
window['optimizely'].push(["bucketVisitor", experimentId, variationIdOfSection2]);

// You can also use the variation index:
window['optimizely'].push(["bucketVisitor", experimentId, variationIndex]);
```

The `variationIndex` is a 0-based index of the variation in the editor (0 being the original page, 1 being the first variation, and so on).

<a name="custom-tag"></a>
### Custom Tag

You can use custom tags to target based on information you have about a visitor. You must call "customTag" prior to loading the Optimizely snippet.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["customTag", tagKey, tagValue]);
```

You can also set multiple tags simultaneously:

```javascript
window['optimizely'].push(["customTag", {
  firstKey: firstValue,
  secondKey: secondValue
}]);
```

If you set multiple values for the same tag key, the last value set before the Optimizely snippet loads will be used. You can check what values are actually set by checking the [custom tags field on the data object](#custom-tags-data) after the Optimizely snippet loads.

Note that for targeting purposes, values are all compared as strings.

### Delay Pageview Tracking

Delay pageview tracking by a specified number of milliseconds.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["delayPageviewTracking", 1000]);
```
<a name="dimensions"></a>
### Dimensions

Dimensions have replaced [Visitor Segments added through the API](#segments). You can assign dimension values to your visitors through this API, and those values will be available for segmentation on the results page or targeting with an audience.

To set a dimension value for a visitor:

```javascript
window['optimizely'].push(['setDimensionValue', dimensionId, 'value']);
```

'value' will be coerced to a string, and limited to 20 characters (encoded).

To delete an existing value, remove the value argument or supply `null`. Deleting a value will prevent Optimizely from counting future conversions toward that dimension value. It will not impact any past conversions, and visitors you remove will still count towards that value's unique visitor count if their visit was already logged.

### Disable

Disable Optimizely entirely. You must call "disable" prior to loading the Optimizely snippet.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["disable"]);
```

You can also disable just Optimizely tracking calls from being made:

```javascript
window['optimizely'].push(["disable", "tracking"]);
```

### Log

Tell Optimizely to output its log to the browser's console log.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["log"]);
```

You can also do this by using the query parameter `optimizely_log=true`.

### Set Cookie Expiration

Specify the number of days before the Optimizely visitor cookies will be set to expire. You must call "setCookieExpiration" prior to loading the Optimizely snippet. The minimum number of days that can be set is 90 (approximately 3 months). For more information on how Optimizely uses cookies, visit our [Learning Center](https://help.optimizely.com/hc/en-us/articles/200040335).

Note: Some Optimizely cookies are re-set every time a visitor comes to the site, which means the expiration period set with this API call will be used each time the cookie is set.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["setCookieExpiration", 365]);
```

In the example above, the Optimizely visitor cookies will expire in 1 year.

### Set Cookie Domain

Instruct Optimizely to set its cookies on a specific subdomain instead of the default domain. You must call "setCookieDomain" prior to loading the Optimizely snippet. By default, Optimizely sets its cookies on the domain, in order to work across subdomains.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["setCookieDomain", "www.example.com"]);
```

In this example, the cookies Optimizely sets will be available only on ".www.example.com", ("www.example.com" and all of its subdomains), rather than on ".example.com", which is the default.

### Third Party Cookie Opt Out

Disable Optimizely's 3rd party cookies. You must call "optOutThirdPartyCookies" prior to loading the Optimizely snippet. This will prevent cross-domain visitor bucketing and measurement. For more information on Optimizely's use of cookies, please see our [Knowledge Base](https://help.optimizely.com/hc/en-us/articles/200040335).

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["optOutThirdPartyCookies"]);
```

### Track Element

Track clicks on elements matching "selector" with the event "eventName". You can call bindTrackElement before or after the Optimizely JavaScript snippet:

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["bindTrackElement", "selector",
   "eventName"]);
```

or from within variation code or global JavaScript:

```javascript
optimizely.push(["bindTrackElement", "selector", "eventName"]);
```

### Track Event

#### Basic Tracking

Track custom events in Optimizely. The event "eventName" will be tracked and associated with the current visitor.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["trackEvent", "eventName"]);
```

#### Revenue Tracking

Track revenue-generating events. The event "eventName" will be tracked and associated with a revenue of `valueInCents`.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["trackEvent", "eventName", {"revenue": valueInCents}]);
```

`valueInCents` should be an integer equal to 100 times the value in dollars (or another currency if you prefer). For example, if you wish to track a purchase of $23.95, you would call:

```javascript
window['optimizely'].push(["trackEvent", "purchase", {"revenue": 2395}]);
```

### Universal User ID (Beta)<a name="uuid"></a>

Set a unique (logged-in) identifier to be used by Optimizely for bucketing and tracking. Once set, Optimizely will re-bucket visitors in all experiments so that visitors will see the same variation across devices and platforms. We will store this identifier in a cookie and continue to use it until a new one is set.

Optimizely will also track unique visitors in experiment results using this ID; we will count an anonymous ID (cookie) and a Universal ID as two distinct visitors, and prefer the Universal ID when counting experiment traffic and goals. *Make sure to target your experiments to "Has Universal User ID" to ensure consistent counting and bucketing across devices.*

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["setUserId", myHashedEmail]);
```

*This is a beta feature, and is subject to change.* To learn more, visit our [Help Center](https://help.optimizely.com/hc/en-us/articles/203626830). For support, please visit [Optiverse](http://www.optiverse.com/) or contact your Customer Success Manager.

<div class="lego-attention lego-attention--warning push--bottom">Note: By using this API call, you agree not to pass personally identifiable (PII) information to Optimizely in accordance with our <a href="http://optimizely.com/terms">Terms of Service</a> or your Master Service Agreement. If your login identifier is personally identifiable (such as an email address) you must hash it first before sending to Optimizely.</div>

### Visitor Opt Out

Opt a visitor out of Optimizely tracking. For example, you may want to opt visitors out of Optimizely tracking as part of your site's broader opt-out preferences.

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["optOut"]);
```

You can also do this by using the query parameter `optimizely_opt_out=true`.

<a name="segments"></a>
### Visitor Segments

<div class="lego-attention lego-attention--warning push--bottom">Visitor Segments assigned through the API have been deprecated and replaced by <a href="#dimensions">Dimensions</a>. For backwards compatibility, these API calls will continue to work for existing segments, but you should transition your code to use dimensions instead. <a href="{{site.paths.rest}}#audiences">Learn more</a>.</div>

Accounts with segmentation enabled can add visitors to visitor segments through the API. To do so, first navigate to the dashboard page. Then find your visitor segment's API identifier by clicking through the information in the visitor segment dialog. The API identifier is automatically generated when you first create the visitor segment, but can be changed later.

To add a visitor to a segment, use:

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(['addToSegment', 'apiIdentifier', 'optionalSegmentValue']);
```

To remove a visitor from a segment, use:

```javascript
window['optimizely'].push(['removeFromSegment', 'apiIdentifier']);
```

Removing a visitor will prevent Optimizely from counting future conversions toward that segment. It will not impact any past conversions, and visitors you remove will still count towards the segment's unique visitor count if their visit was already logged.

To remove a visitor from all segments, use:

```javascript
window['optimizely'].push(['removeFromAllSegments']);
```

<a name="changelog"></a>
## Changelog
* **August 14, 2014**: Geo-targeted experiments for which visitor geo data is locally cached now activate immediately, rather than waiting for DOM.ready().
* **November 17, 2014**: New API call to set a [Universal User ID](#uuid).


## Personalization

<div class="lego-attention lego-attention--warning push--bottom">The API calls below only apply to <a href="http://www.optimizely.com/personalization" target="_blank">Optimizely Personalization</a>.</div>

Optimizely Personalization introduces several new API calls for tracking visitor behavior and attributes.

To call these new APIs, you push an object containing a `type` property with the API call to use. See the sections below for detailed examples.

Some legacy API calls like `trackEvent` will automatically trigger a new API call in this format. You don't need to reimplement event tracking if you've already set it up, but you can use the new API format to track additional tags for behavioral targeting (see below).

#### Examples
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

The event function captures visitor behavior and additional data. You can track clicks and pageviews in Optimizely
without code, but this API call supports tracking other behaviors like watching a video.

#### Parameters
 
- `type`: "event"
- `eventName` (string): The "API name" for an event created in Optimizely, e.g. `add_to_cart`  
- `tags` (object): A single-level JSON object with metadata about an event, e.g. the product being purchased.  

#### Examples
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

The page function tracks the visitor's current context on a website. This context is used for both analytics ("track the number of views to the checkout page") and targeting ("run this experiment on the checkout page").

Specifically, pushing a page has two effects:
 * Optimizely will track a pageview event for this page, incrementing the count of views to that page in analytics and recording the event in the user's behavioral profile
 * Any experiences targeted to this page will be activated

Pages can be created visually in Optimizely with URL targeting, but this API call provides full flexibility for sites with dynamic content or challenging URL patterns.

Page information is reset whenever the browser reloads.

#### Parameters
 
- `type`: "page"
- `pageName` (string): The "API name" for a page created in Optimizely, e.g. `product_detail`
- `tags` (object): A single-level JSON object with metadata about the content on the page, e.g. the product being purchased.

#### Examples
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

Tags are contextual metadata about pages events. They identify what a user is looking at, clicking on, or interacting with. For example, you can use tags to describe a product being purchased, an article being read, or a flight being booked.

There are three ways to capture this context:
 * Directly on an `event`, using the `tags` property.
 * Directly on a `page`, using the `tags` property. These tags will be sent along with any event that happens on that page.
 * Finally, you can use this `tags` call directly to add context without activating a page and tracking a pageview. This is equivalent to the previous option, but it can be used when pages are already being activated using URL targeting.

#### Parameters
 
- `type`: "tags"
- `tags` (object): A single-level JSON object with metadata about an event, e.g. the product being purchased.  

#### Examples
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

The user function captures attributes of a user and stores them in a profile that persists across sessions and syncs across devices.

These attributes are persisted in the browser's local storage and can be used for targeting and analysis in experiment results.

You can also use this function to identify a user with a unique userId. If you don't provide an ID, we'll automatically generate an anonymous ID and persist it in a cookie. Providing your own userId allows you to target lists of users by their ID and integrate offline data.


#### Parameters

- `type`: "user"
- `userId` (string): Your unique identifier for a user, or null to use Optimizely's ID.  
- `attributes` (object): Metadata about a user, e.g. their home state. Attributes can be used for creating audiences (target "Californians") and analyzing results (see results broken down by state).

#### Examples
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