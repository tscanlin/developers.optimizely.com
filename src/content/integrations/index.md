---
template: page-sidebar
title: "Integration Guide"
---

# Integration Guide

*Welcome! This page walks through everything you need to build an integration using Optimizely APIs.*

Optimizely integrates with more than [30 Technology Partners](http://optimizely.com/partners/technology) including analytics solutions, data management platforms, content management systems, e-commerce platforms, conversion tracking solutions, and more. Many of these integrations were built entirely using public Optimizely APIs. To make the integration process as easy as possible, we've written this page which includes some common use cases for integrating with Optimizely and all the developer resources you need to build an integration.

If you are a prospective Technology Partner interested in building an integration with Optimizely, please read this page to understand the required steps to get your integration built, approved, and launched by Optimizely.

If you are a current Optimizely customer interested in building a custom integration, you may skip the steps below since they only apply to the formal partner program. Jump straight to [Integration Types](#integration-types) to understand the different ways of integrating with the Optimizely.


## Technology Partner Program

If you would like to partner with Optimizely to help support your integration, we highly recommend you apply for the [Technology Partner Program](http://optimizely.com/partners/technology/join). Becoming a partner includes many benefits including hands-on developer support and marketing benefits to help promote your integration to Optimizely customers. For more information about requirements and benefits of the Technology Partner Program <a href="http://pages.optimizely.com/rs/361-GER-922/images/Optimizely%20Technology%20Partners.pdf" target="_blank">click here</a>.

If you are a developer interested in joining the program, follow the steps below to get your integration built, approved, and launched by Optimizely.

### 1. Create an Optimizely account

If you don't have an Optimizely account already, just sign up for a [free developer account](https://www.optimizely.com/?modal=devsignup). This account will give you access to the full set of Optimizely features and API access, but with limited traffic allocation. No credit card is required to create an account.

### 2. Apply to the Technology Partner Program

Please fill out the <a href="https://www.optimizely.com/partners/technology/join/" target="_blank">Technology Partner Program form</a> to apply for the program. We recommend that you apply for the program before you start developing an integration so we can provide you with appropriate guidance using the Optimizely APIs and plan for launch.

### 3. Build your integration

There are many ways to integrate with Optimizely depending on your needs. To help you decide how to best integrate with our platform, please see [Integration Types](#integration-types) below which includes some common types of integrations built by customers and partners. Each integration type includes a step-by-step guide including example code to build the integration. If none of these integration types meet your needs, please refer to the rest of our API documentation.

### 4. Get your integration tested by Optimizely

If you are approved in the Technology Partner Program, please email your Partner Manager with information on how to test your integration. Our team is eager to provide feedback and make sure the integration works as expected. Please include any relevant documentation on the integration that you've built, as well as instructions on how to access a demo account.

### 5. Promote your integration to customers

After Optimizely has tested and approved your integration, you can work with your Partner Manager to get your integration listed in the [Technology Partner Directory](http://optimizely.com/partners/technology). As a Technology Partner you will also receive a Marketing Playbook that provides detailed guidance on the best way to promote your integration to Optimizely customers.

If you have any questions about becoming a Technology Partner please email <a href="mailto:techpartners@optimizely.com">techpartners@optimizely.com</a>.


## Integration Types

Integrations with Optimizely typically fall into one of the following six categories. For each category we've included some examples as well as a link to an implementation guide with step-by-step instructions on how to build the integration.

<style>
  table {
    vertical-align: top;
    border: 1px solid black;
  }
  td {
    padding: 5px;
    border: 1px solid black;
  }
  th {
    background-color: #00415d;
    color: white;
    text-align: left;
    padding: 5px;
    border: 1px solid black;
  }
</style>

<table>
  <tr>
    <th>
      Category
    </th>
    <th>
      Examples
    </th>
    <th>
      Description
    </th>
    <th>
    </th>
  </tr>
  <tr>
    <td width=120>
      *Analytics*
    </td>
    <td width=120>
      <a href="http://optimizely.com/partners/technology/sitecatalyst">Adobe Analytics</a><br>
      <a href="http://optimizely.com/partners/technology/google-analytics">Google Analytics</a><br>
      <a href="http://optimizely.com/partners/technology/mixpanel">Mixpanel</a>
    </td>
    <td>
      Analytics integrations allow customers to track Optimizely experiments in an external analytics tool.  With the flip of a switch, Optimizely can append experiment data to analytics tracking code, so customers can see the impact of their experiments in their analytics tool.
    </td>
    <td width=150>
      [Implementation Guide](#analytics)
    </td>
  </tr>
  <tr>
    <td>
      *Audiences*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/bluekai">BlueKai</a><br>
      <a href="http://optimizely.com/partners/technology/demandbase">Demandbase</a><br>
      <a href="http://optimizely.com/partners/technology/tealium">Tealium</a>
    </td>
    <td>
      Audience integrations allow customers to target a specific audience based on data from an external source.  With a simple drag-and-drop interface, customers can personalize content and experiments based on 3rd party demographic data such as gender, location, weather, and age, or 1st party behavioral data such as buying intent, lifetime value, cart abandonment, and more.
    </td>
    <td>
      [Implementation Guide](#audiences)
    </td>
  </tr>
  <tr>
    <td>
      *Uploaded Lists*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/salesforce">Salesforce</a><br>
      <a href="http://optimizely.com/partners/technology/marketo">Marketo</a>
    </td>
    <td>
      Uploaded List integrations allow customers to upload a list of user identifiers (e.g. cookies, query parameters, or other user identifiers) to Optimizely from a 3rd party application, which can be used to target experiments and segment results. Unlike audience integrations which operate client-side, user list integrations are implemented by a server-to-server exchange.
    </td>
    <td>
      [Implementation Guide](#uploaded-lists)
    </td>
  </tr>
  <tr>
    <td>
      *Content*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/wordpress">WordPress</a><br>
      <a href="http://optimizely.com/partners/technology/parsely">Parse.ly</a>
    </td>
    <td>
      Content integrations allow customers to utilize the full power of Optimizely directly from a platform that manages content.  Customers can create, configure, and run experiments directly from their content platform interface without having to login to Optimizely. Examples of content platforms are Content Management Systems, e-commerce platforms and editorial platforms. 
    </td>
    <td>
      [Implementation Guide](#content-management)
    </td>
  </tr>
  <tr>
    <td>
      *Conversion Tracking*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/dialogtech">DialogTech</a><br>
      <a href="http://optimizely.com/partners/technology/freespee">FreeSpee</a><br>
      <a href="http://optimizely.com/partners/technology/avanser">AVANSER</a>
    </td>
    <td>
      Goal integrations allow customers to use custom events (e.g. phone calls) as a goal for their experiments, as opposed to default goals (eg. clicks or pageviews).  These integrations use Optimizely’s custom event goals functionality to track conversions.
    </td>
    <td>
      [Implementation Guide](#conversion-tracking)
    </td>
  </tr>
  <tr>
    <td>
      *Snippet Installation*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/demandware">Demandware</a><br>
      <a href="http://optimizely.com/partners/technology/episerver">EPiServer</a>
    </td>
    <td>
      TBD
    </td>
    <td>
      [Implementation Guide](#snippet-installation)
    </td>
  </tr>
</table>

## Analytics

*Analytics integrations* allow customers to track Optimizely experiments in an external analytics tool.  With the flip of a switch, Optimizely can append experiment data to analytics tracking code, so customers can see the impact of their experiments in their analytics tool.

### Prerequisites

- Your platform has the ability to receive experiment names
- You have an Optimizely account
- Basic JavaScript skills


### Implementation
The following step-by-step describes how to implement an analytics integration. The limition of the method described in the following steps is that redirect experiments are not supported. An alternative approach is documented <a href="#alternative-approach">below</a>, but please mind that the resources provided in the alternative approach are not maintained by Optimizely. 

### 1. Create a test page with Optimizely snippet
Create a page to test the integration on. On the test page, the Optimizely snippet needs to be added to the top of the &lt;head&gt; section. Instructions on how to install the Optimizely snippet can be found on our <a href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">knowledge base</a>.

### 2. Create and start an experiment for the test page
Within your Optimizely account, create an experiment that runs on the test page you have created in step 1. It isn't necessary to make modification in the experiment, just save and start the experiment. Remember the experiment ID (see experiment_id in address bar).

When the uploading of the experiment is done (approximately 2 minutes), verify that the experiment is running on the sample page by going to the test page in your browser. After a hard refresh the Optimizely experiment should be running. You can verify if the experiment is running by opening your JavaScript console and executing `optimizely.activeExperiments`. After hitting enter, the console will output an array with your experiment ID in it. 

<img src="/assets/img/integrations/active_experiments.png">

### 3. Implement platform specific integration code
**This step is platform specific**

On the test page, below the Optimizely snippet, we can implement code to get the experiment and variation names of the experiments that are running on the page. This is the information that you can send to the analytics platform you are working with.

The JavaScript API provides four usefull methods for getting all information regarding running experiments on a page. The methods that you will use for this integration are:

- `window["optimizely"] && window["optimizely"]["data"]`
This line makes sure that Optimizely is loaded on the page.
- `window['optimizely'].data.state.activeExperiments`
This is an array of experiment ids for all the active experiments.
- `window['optimizely'].data.state.variationNamesMap`
This is a hash table whose keys are the experiment ids of experiments running for the visitor (including inactive experiments for which the user has been bucketed), and whose values are the variation names for those experiments.
- `window['optimizely'].data.experiments[experimentId].name`
This is the experiment's name.

If we combine these three functions, we can get the information we need:

```xml
<script>
if (window["optimizely"] && window["optimizely"]["data"]) {
    var activeExperiments = window['optimizely'].data.state.activeExperiments;
    for (var i = 0; i < activeExperiments.length; i++) {
        var experimentId = activeExperiments[i];
        var variationName = window['optimizely'].data.state.variationNamesMap[experimentId];
        var experimentName = window['optimizely'].data.experiments[experimentId].name;

        // Use the experimentName and variationName value here to send information to your analytics platform  

    }
}
</script>
```

Where indicated in the above code snippet, implement the platform specific code. 

### 4. Verify that the integration works
When the integration is successfully implemented, you can check your network traffic to see if all the data is correctly send to the analytics platform. All the active experiments on the page in addition to a redirect experiment should be visible in the network traffic. 

### Alternative implementation
To make it easier for anyone to implement an analytics integration that works with redirect experiments as well, an alternative implementation is described available. This implementation uses resources that are not supported by Optimizely. If you want to contribute to these resources, go to <a href="https://github.com/optimizely/Analytics-JS">https://github.com/optimizely/Analytics-JS</a>. 

The alternative implementation requires a approach than described in step 3. Instead of doing step 3, use the following:

Below the Optimizely snippet, add another snippet to the test page:
```
<script src="https://cdn.rawgit.com/optimizely/Analytics-JS/master/integrator.js"></script>
```
**Note** There is no uptime guarantee for this file. Use your own servers to host the integrator.js file.

We will refer to this snippet as the Integrator snippet. The Integrator snippet creates an abstraction around the logi c that is required to support redirect experiments and the only thing that is left for you to do, is to implement three function in an object. It also provides functionality to support redirect experiments, fix referrer values and to create usable experiment names. 

On the test page, below the Optimizely and Integrator snippet, add this code:

```xml
<script>
window.integration = {
  initialize: function () {

  },
  makeRequest: function (experimentId, variationIds) {

  },
  finish: function () {
  
  }
};

// Register the integration
window.integrator.registerIntegration(window.integration);
</script>
```

The three functions to implement are initialize (optional), makeRequest (required) and finish (optional). Below is a description of the functions and an example implementation.

**initialize**

The function initialize runs before anything else happens. It allows you to implement logic to initialize the integration. In some cases, this isn't necessary. 

Example usage: Google Analytics uses referrer values to map out behavior through the website. The function window.integrator.redirect.getRedirectReferrer() returns a referrer that was set when a redirect has occurred. This value can be used to set the correct referrer value when a redirect has occurred.

**makeRequest(experimentId, variationId)**

This function is called for every experiment that is running on the current page. In this function, implement the code that sends custom data to the analytics platform. 

The function arguments are the variation ID and the experiment id. The function `makeSendableNamesfunction (experimentId, variationIds, expLength, varLength, mvtVarLength, makeClean, prefix)` returns an object that contains names based on the experiment name and variation name related to the ids. The object has two values:
    
- obj.variationName
- obj.experimentName

The parameters for the `makeSendableNamesfunction` are:

- experimentId - The experiment id
- variationsIds - The variation id
- expLength - The maximum length of the experiment name
- varLength - The maximum length of the variation name
- mvtVarLength - The maximum length of all variation names in a mvt test
- makeClean - Replace characters that are not allowed in URL query parameter with '_'
- prefix - A prefix added to experiment names

**finish**

This function is called after makeRequest has been executed for all the experiments that are running on the page. 

### 5. QA integration

When the integration is successfully implemented, you can check your network traffic to see if all the data is correctly send to the analytics platform. All the active experiments on the page in addition to a redirect experiment should be visible in the network traffic. 

#### Example

An example of a test page where an Google Analytics integration has been implemented with is here: <a href="https://github.com/optimizely/Analytics-JS/blob/master/example.html">https://github.com/optimizely/Analytics-JS/blob/master/example.html</a>

## Audiences
Audience integrations allow customers to use data from a different platform to target and segment visitors. The platform data needs to be available on the client side to be able to pass it to Optimizely. If data is not available on the client side, consider using an Uploaded list integration instead. 

### Prerequisites
- Your platform data is available client side (in the browser)

Using a combination of the Optimizely REST API and the Javascript API, it is possible to create audiences within Optimizely and add a visitor to that audience within the browser. 

### 1. Create a developer account

Uploaded Lists are a feature restricted to select Enterprise customers and developers. If you do not have access to Uploaded Lists and would like to develop an integration, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access to the Uploaded Lists feature and associated APIs.

### 2. Register your application

We highly recommend that you use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send lists to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

### 3. Create a test page with Optimizely snippet
Create a page to test the integration on. On the test page, the Optimizely snippet needs to be added to the top of the &lt;head&gt; section. Instructions on how to install the Optimizely snippet can be found on our <a href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">knowledge base</a>. Also implement the platform you are integrating with. 

### 4. Create an Optimizely audience
After connecting with Optimizely you can create Audiences via the REST API. When a user indicates that they want to use an Audience from your platform within Optimizely you should create an audience without conditions in Optimizely. [Learn more on how to create audiences in Optimizely using the REST API](/rest/reference/index.html#create-audience). When the audience is created, save the audience ID to use in the next step.

### 5. Adding a visitor to the Optimizely audience
The Optimizely JavaScript API allows you to programatically add a visitor to an Optimizely audience. To do so, you can use the following function:

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(['addToAudience', audienceId]);
```

When you created the Optimizely audience in the previous step, you received an audience ID. You can use that ID in the JavaScript call.

### 6. QA integration
To verify that the integration works select an audience within your platform that you are sure you will be in. Trigger the procedure to create a corresponding Optimizely audience for the selected audience.

Verify that the audience creation has worked by going to `https://app.optimizely.com/projects/{{ project_id }}/audiences`. The audience that has been create should show up in the list there.

When the audience is in the list, create and start an experiment that uses the audience. You can do so by going to your [experiment dashboard](https://app.optimizely.com/projects/) and clicking on "New experiment". Make sure to use the test page (created earlier). Open the audience builder in the Optimizely editor. 

<img src="/assets/img/integrations/audience_builder.png">

In the audience builder click on "Add a Saved Audience", select the create audience and click on "add".

<img src="/assets/img/integrations/audience_saved_audience.png">

Go to the test page you have create after you are sure the experiment is started and running (it takes a few minutes after starting). Verify with your platform that you are recognised as being in the audience. You can verify that the Optimizely integration works by opening the javascript console and executing `optimizely.data.visitor.audiences`. The value of the audience ID that you created should be true. 

<img src="/assets/img/integrations/audience_confirm.png">

## Uploaded Lists

*Uploaded List integrations* allow customers to upload a list of user identifiers (e.g. cookies, query parameters, or other user identifiers) to Optimizely from a 3rd party application, which can be used to target experiments and segment results. Unlike audience integrations which operate client-side, user list integrations are implemented by a server-to-server exchange. For more information on uploaded lists, refer to the Optimizely [knowledge base](https://help.optimizely.com/hc/en-us/articles/206197347).

This section walks through how to build an integration with Optimizely that sends lists of users to Optimizely via the REST API. As an example, check out our integrations with [Salesforce](https://help.optimizely.com/hc/en-us/articles/206524537) and [Marketo](https://help.optimizely.com/hc/en-us/articles/206440108).

### Prerequisites

* Your application stores user identifiers (e.g. hashed email addresses or other unique IDs)
* User identifiers are not personally identifiable, according to Optimizely's [Terms of Service](https://www.optimizely.com/terms/)
* User identifiers can be accessed via the user's browser (e.g. in a cookie, query parameter, or otherwise)

### 1. Create a developer account

Uploaded Lists are a feature restricted to select Enterprise customers and developers. If you do not have access to Uploaded Lists and would like to develop an integration, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access to the Uploaded Lists feature and associated APIs.

### 2. Register your application

We highly recommend that you use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send lists to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

### 3. Create a list in Optimizely

After connecting with Optimizely you can send lists to Optimizely via the REST API. Note that we currently limit list sizes to 5MB. If you want to send larger lists, please contact [developers@optimizely.com](mailto:developers@optimizely.com) with more information on what size lists you hope to send via the API. [Learn how to create an uploaded list in Optimizely via the REST API](/rest/reference/#create-list).

### 4. Update a list in Optimizely

If you'd like periodically refresh lists, please use the [PUT endpoint](http://localhost:4001/rest/reference/#update-list) to update an existing list.

### 5. QA integration

To test the integration end-to-end, you should verify that lists you've created via the API appear in the [Uploaded Lists](https://help.optimizely.com/hc/en-us/articles/206197347#create) tab in Optimizely. You can download the lists directly from this interface to make sure the individual user IDs are uploaded as expected. Finally, try [creating an audience including the uploaded list](https://help.optimizely.com/hc/en-us/articles/206197347#target) and running an experiment targeted to the audience to make sure users are bucketed correctly.

*Note:* You may upload lists as frequently as you like, however, it may take up to 2 hours to propagate your lists to our servers.

## Content

### Prerequisites
- Your platform manages content on a website
- The content that is tested has a unique identifier. Example: `<a id="article1234">HeadlineTest</a>`

### Implementation
A content integration can be done in many forms. The example that we will use is testing headlines for posts done with Wordpress. Other examples of a content integration are: testing images from within an e-Commerce platform, testing product titles from within an e-Commerce platform, testing an entire article from an editorial platform. 

### 1. Create a developer account

Uploaded Lists are a feature restricted to select Enterprise customers and developers. If you do not have access to Uploaded Lists and would like to develop an integration, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access to the Uploaded Lists feature and associated APIs.

### 2. Register your application

We highly recommend that you use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send lists to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

### 3. Configuration form: authenticating and project selection

Within your platform, you should add form for installing Optimzely in a place where only administrators have access to. The configuration form consists of a button to authenticate with Optimizely.

After connecting with Optimizely you can use the REST API to get all the projects for the account that the user has authenticated with. To get all the project names and their corresponding project IDs, use the <a href="/rest/reference/index.html#list-projects">list-projects</a> REST api call.

<img src="/assets/img/integrations/content_config_authentication.png">

### 4. Configuration form: URL targeting

An article could appear on several places on the website, so the easiest URL targeting setting for an headline testing experiment is to do a substring match on the entire website. You can create an option for users to select different URLS to target. This targeting will be used for all experiments started with the headline testing tool. 
<img src="/assets/img/integrations/content_config_url.png">

### 5. Configuration form: variation code
For Optimizely to modify the right content on the page, a user will have to specify where the content can be found on the page. Create a textbox that allows a user to specify the variation code.
<img src="/assets/img/integrations/content_config_variationcode.png">

### 6. Create experiment
On the content item level, create a form that allows editors to create an experiment. 

<img src="/assets/img/integrations/content_createexperiment.png">

When a user clicks on the "Create experiment button" you can use the REST API to create the experiment with the relevant variation codes.

Example form HTML code:

```xml
<h1>Variation#1</h1>
<input type="text" id="post_title1" class="optimizely_variation" placeholder="AlternateTitle1">
<h1>Variation#2</h1>
<input type="text" id="post_title2" class="optimizely_variation" placeholder="AlternateTitle2">
<a id="optimizely_create" class="button-primary">CreateExperiment</a>
```

Use the REST API When the experiment is created. With the REST API you can create an experiment and the variations defined in the form. If your platform has a structured URL structure, you can also create a goal with the REST API to track how many visitors open the article and read it. The REST API calls to use:

- [Create experiment](/rest/reference/index.html#create-experiment)
- [Create variations](/rest/reference/index.html#create-variation)
- [Create goals](/rest/reference/index.html#create-goal)

### 7. Start and pause experiment
After creating experiments the form on the content will change to allow a user to start, pause and modify the experiment.

<img src="/assets/img/integrations/content_startexperiment.png">

You can also use the REST API to [update an experiment](/rest/reference/index.html#experiments) and [a variation](/rest/reference/index.html#update-variation). 

To start and pause the experiment, update the status field on an experiment.

### 8. Display results
For editors to work entirely in the content platform, you will also have to report on the results of the content experiments. 

<img src="/assets/img/integrations/content_results.png">

The results can be fetched using the [Get experiment results](/rest/reference/index.html#get-stats) function of the REST API.

## Conversion Tracking

*Conversion tracking integrations* allow customers to use offline events from another application (e.g. phone calls) as a goal for their experiments, as opposed to default goals (e.g. clicks or pageviews). As an example, check out our integration with [DialogTech](https://help.optimizely.com/hc/en-us/articles/202984310) or [FreeSpee](https://help.optimizely.com/hc/en-us/articles/204468298).

This section walks through how to create a conversion tracking integration using [custom event goals](https://help.optimizely.com/hc/en-us/articles/200039925) and the [offline conversion API](https://help.optimizely.com/hc/en-us/articles/200040195).

### 1. Create a custom event goal in Optimizely

In order to track conversion events in Optimizely, the customer must first define a [custom event goal](https://help.optimizely.com/hc/en-us/articles/200039925) that will be used to identify those conversion events. You can create multiple custom event goals for each type of conversion, and each custom event goal has a unique name that can be referenced in your application.

There are two ways you can create a custom event goal:

* *Option 1: Ask customer to create custom event goal manually.* The user can login to their Optimizely account and create a custom event goal for an experiment. You may want to require the customer to use a pre-specified name for the goal, e.g. `phone_call_conversion`, so you can reference it later. [Learn how to create custom event goals in Optimizely](https://help.optimizely.com/hc/en-us/articles/200039925#add).

* *Option 2: Create custom event goal via the REST API (preferred).* For a more seamless experience, you can create a custom event goal on behalf of the customer using the REST API. If you are using the REST API, we highly recommend using [OAuth 2.0](/rest/reference/index.html#oauth) to authenticate with Optimizely. [Learn how to create goals via the REST API](/rest/reference/index.html#create-goal).

### 2. Reference custom event goal in your application

In order to send Optimizely conversion events, you'll need to reference the name of the custom event goal defined in the previous step. If the customer manually specified the custom event goal, you can prompt the user to enter the name of the custom event goal in your application (e.g. `phone_call_conversion`). You can also access a list of custom event goal names using the REST API and ask the customer to select one from a menu. [Learn how to read goals via the REST API](/rest/reference/index.html#read-goal).

### 3. Collect information about the visitor

In addition to the providing a custom event goal name, you'll also need to specify information about the visitor so Optimizely knows how to tie the conversion event back to the experiment and variation that was shown. All of this information can be fetched from a browser using the [JS API](/js). For convenience, we've provided some helper functions to collect all of the necessary information below.

#### Account ID

```javascript
/**
 * Gets the Optimizely Account ID installed on this page
 *
 * @return {Number} the account id
 */
function getAccountId() {
    return optimizely.getAccountId();
}
```

#### Project ID

```javascript
/**
 * Gets the Optimizely Project ID installed on this page (sometimes the same as the Account ID)
 *
 * @return {Number} the project id
 */
function getProjectId() {
    return optimizely.getProjectId();
}
```

#### Experiment and Variation IDs

```javascript
/**
 * Gets the experiment/variation mappings for the current visitor
 *
 * @return {String} a string that displays all the experiments and variations in a list of query parameters
 */
function getVariationsInParameters() {

    var variations = JSON.parse(decodeURIComponent(getCookie("optimizelyBuckets")));
    resultstring = "";
    for (var variation in variations) {
        resultstring += "&x" + variation + "=" + variations[variation];
    }
    return resultstring;
}
```

#### Segment IDs

```javascript
/**
 * Gets the segment values for the current visitor
 *
 * @return {String} a string that displays all the segments and their values in a list of query parameters
 */
function getSegmentsInParameters() {
    var segments = JSON.parse(decodeURIComponent(getCookie("optimizelySegments")));
    var resultstring = "";
    for (var seg in segments) {
        resultstring += "&s" + seg + "=" + segments[seg];
    }
    return resultstring;
}
```

#### User IDs

```javascript
/**
 * Getting the user ID is only possible using the cookie value
 *
 * @return {String} a JSON formatted string that contains all the segments and their values
 */
function getUserId() {
    return getCookie("optimizelyEndUserId");
}
```

### 4. Create an offline conversion

Once you know the required information about a visitor and the name of the custom event goal you want to track, you can create an offline conversion using a GET request formatted like below:

```http
http://{{project_id}}.log.optimizely.com/event?a=1
                               &n={{goal identified}}}
                               &u={{ Optimizely user id }}
                               &x{{experiment id 1}}={{variation id 1}}
                               &s{{segment id 1}}={{segment value 1}}
```

To learn more about the expected format of these parameters see
[Tracking offline conversion events with Optimizely](https://help.optimizely.com/hc/en-us/articles/200040195).

For example, the following function can be used to construct a valid offline conversion URL:

```javascript
/**
 * Generate the entire URL that you can use to create a conversion, given a goalname. The goalname
 * is required, if you also provide a value, there will be a revenue value added to the conversion 
 * call. The goalname will be encoded if it isn't already.
 *
 * @param {String} goalname (the goal were you are creating a conversion for)
 * @param {Number} value (a value representing the revenue of the conversion)
 * @return {String} a JSON formatted string that contains all the segments and their values
 */
function generateConversionUrl(goalname, value) {
    var goalname = decodeURIComponent(goalname) == goalname ? encodeURIComponent(goalname) : goalname;


    var result = "http://" + getProjectId() + ".log.optimizely.com/event?a=" + getAccountId() + "&n=" + goalname + "&u=" + getUserId() + getVariationsInParameters() + getSegmentsInParameters();
    if (typeof (value) != "undefined") {
        result += "&v=" + value;
    }
    return result;
}

```

### 5. QA integration

To verify the integration works, create an Optimizely experiment that includes the custom event goal in question, send some visitor traffic and offline conversions. The results page for the experiment should now include data on how many visitors and offline conversions have occurred for this experiment.

## Snippet Installation

To  make installing Optimizely easier, platforms that have the ability to add content to a website (like a CSM or an e-commerce platform) can create a codeless Optimizely installation to remove all the friction of installing Optimizely. 

### Requirements
* Your platform is able to programatically modify html template

### 1. Create a developer account

Uploaded Lists are a feature restricted to select Enterprise customers and developers. If you do not have access to Uploaded Lists and would like to develop an integration, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access to the Uploaded Lists feature and associated APIs.

### 2. Register your application

We highly recommend that you use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send lists to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

### 3. Configuration form

Within your platform, you should add a form for installing Optimzely in a place where only administrators have access to. The configuration form consists of a button to authenticate with Optimizely using oAuth and a selector for selecting the project that the user wants to have installed on their website. This is an example of a form for when the user has not authenticated yet:

<img src="/assets/img/integrations/snippet_wordpress_first.png">

After connecting with Optimizely you can use the REST API to get all the projects for the account that the user has authenticated with. To get all the project names and their corresponding project IDs, use the <a href="/rest/reference/index.html#list-projects">list-projects</a> REST api call.

<img src="/assets/img/integrations/snippet_wordpress_choose.png">

### 4. Implement snippet in the head section of every page
Write custom code to add the Optimizely snippet to every page automatically, using that project ID that was chosen by the user.

This is an example of how it would work within Wordpress:

```php
/**
 * Generates the Optimizely script tag.
 * @param int $project_code
 * @return string
 */
function optimizely_generate_script( $project_id ) {
	return '<script src="//cdn.optimizely.com/js/' . abs( floatval( $project_id ) ) . '.js"></script>';
}

/**
 * Force Optimizely to load first in the head tag.
 */
function optimizely_add_script() {
	$project_id = get_option( 'optimizely_project_id' );
	if ( ! empty( $project_id ) ) {
		// This cannot be escaped since optimizely_generate_script returns a script tag.
		// The output of this script is fully escaped within the function below
		echo optimizely_generate_script( $project_id );
	}
}
add_action( 'wp_head', 'optimizely_add_script', -1000 );
```

[WordPress documentation regarding the wp_head function](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_head)

### 5. QA integration
When a user goes through all the steps, the Optimizely snippet should be installed on the page. You can verify if the snippet is working correctly by going to a page on the website and opening the javascript console. When you execute `optimizely.getProjectId()`, Optimizely should return the project ID that is installed on the page. 

<img src="/assets/img/integrations/snippet_validation.png">