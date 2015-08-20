---
template: page-sidebar
title: "Integration Guide"
---

# Integration Guide

*Welcome! This page walks through everything you need to build an integration using Optimizely APIs.*

Optimizely integrates with more than [30 Technology Partners](http://optimizely.com/partners/technology) including analytics solutions, data management platforms, content management systems, e-commerce platforms, conversion tracking solutions, and more. Many of these integrations were built entirely using public Optimizely APIs. To make the integration process as easy as possible, we've written this page which includes some common use cases for integrating with Optimizely and all the developer resources you need to build an integration.

If you are a prospective Technology Partner interested in building an integration with Optimizely, please read this page to understand the required steps to get your integration built, approved, and launched by Optimizely.

If you are a current Optimizely customer interested in building a custom integration, you may skip the steps below since they only apply to the formal partner program. Jump straight to [Integration Types](#integration-types) to understand the different ways of integrating with the Optimizely.


## Guide for Technology Partners

Follow the steps below to get your integration built, approved, and launched by Optimizely.

### 1. Create an Optimizely account

If you don't have an Optimizely account already, just sign up for a [free developer account](https://www.optimizely.com/?modal=devsignup). This account will give you access to the full set of Optimizely features and API access, but with limited traffic allocation. No credit card is required to create an account.

### 2. Join the Technology Partner Program

If you would like to partner with Optimizely to help support your integration, please fill out the <a href="https://www.optimizely.com/partners/technology/join/" target="_blank">Technology Partner Program form</a>. Becoming a partner includes many benefits including hands-on developer support and marketing benefits to help promote your integration to Optimizely customers. For more information about requirements and benefits of the Technology Partner Program <a href="http://pages.optimizely.com/rs/361-GER-922/images/Optimizely%20Technology%20Partners.pdf" target="_blank">click here</a>.

### 3. Build your integration

There are many ways to integrate with Optimizely depending on your needs. To help you decide how to best integrate with our platform, please see [Integration Types](#integration-types) below which includes some common types of integrations built by customers and partners. Each integration type includes a step-by-step guide including example code to build the integration. If none of these integration types meet your needs, please refer to the rest of our API documentation.

### 4. Get your integration approved by Optimizely

If you are approved in the Technology Partner Program, please email <a href="mailto:techpartners@optimizely.com" target="_blank">techpartners@optimizely.com</a> with information on how to test your integration. Our team is eager to provide feedback and make sure the integration works as expected.

### 5. Promote your integration to customers

If your integration is approved please fill out the <a href="https://docs.google.com/forms/d/1yC0eIgsp9QwUtUjsQRrfgS_K68Wy5IPKQCUoFBbTbu0/viewform?edit_requested=true" target="_blank">Technology Partner Directory form</a> to get your integration listed in our public partner directory. As a Technology Partner you will also receive a Marketing Playbook that provides detailed guidance on the best way to promote your integration to Optimizely customers.

If you have any questions about becoming a Technology Partner please email <a href="mailto:techpartners@optimizely.com">techpartners@optimizely.com</a>.


## Integration Types

Integrations with Optimizely typically fall into one of the six categories below.

<table style="vertical-align:top" border=1 cellpadding="10" cellspacing="10">
  <tr>
    <td>
      *Category*
    </td>
    <td>
      *Examples*
    </td>
    <td>
      *Description*
    </td>
  </tr>
  <tr>
    <td>
      *Analytics*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/sitecatalyst">Adobe Analytics</a><br>
      <a href="http://optimizely.com/partners/technology/google-analytics">Google Analytics</a><br>
      <a href="http://optimizely.com/partners/technology/mixpanel">Mixpanel</a>
    </td>
    <td>
      Analytics integrations allow customers to track Optimizely experiments in an external analytics tool.  With the flip of a switch, Optimizely can append experiment data to analytics tracking code, so customers can see the impact of their experiments in their analytics tool.
    </td>
  </tr>
  <tr>
    <td>
      *Audience*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/bluekai">BlueKai</a><br>
      <a href="http://optimizely.com/partners/technology/demandbase">Demandbase</a><br>
      <a href="http://optimizely.com/partners/technology/tealium">Tealium</a>
    </td>
    <td>
      Audience integrations allow customers to target a specific audience based on data from an external source.  With a simple drag-and-drop interface, customers can personalize content and experiments based on 3rd party demographic data such as gender, location, weather, and age, or 1st party behavioral data such as buying intent, lifetime value, cart abandonment, and more.
    </td>
  </tr>
  <tr>
    <td>
      *Uploaded Audience*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/salesforce">Salesforce</a><br>
      <a href="http://optimizely.com/partners/technology/marketo">Marketo</a>
    </td>
    <td>
      Uploaded Audience integrations are similar to Audience integrations, but data is exchanged server-side.
    </td>
  </tr>
  <tr>
    <td>
      *Content Management*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/wordpress">WordPress</a><br>
      <a href="http://optimizely.com/partners/technology/parsely">Parse.ly</a>
    </td>
    <td>
      Content Management System (CMS) integrations allow customers to utilize the full power of Optimizely directly from a CMS.  Customers can create, configure, and run experiments directly from their CMS interface without having to login to Optimizely. 
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
  </tr>
</table>

## Developer Guide

### Analytics
Analytics integrations allow customers to track Optimizely experiments in an external analytics tool.  With the flip of a switch, Optimizely can append experiment data to analytics tracking code, so customers can see the impact of their experiments in their analytics tool.

#### Prerequisites

- Your platform has the ability to receive experiment names
- You have an Optimizely account
- Basic JavaScript skills

#### Implementation
The following step-by-step describes how to implement an analytics integration. The limition of the method described in the following steps is that redirect experiments are not supported. An alternative approach is documented <a href="#alternative-approach">below</a>, but please mind that the resources provided in the alternative approach are not maintained by Optimizely. 

##### 1. Create test page with Optimizely snippet
Create a page to test the integration on. On the test page, the Optimizely snippet needs to be added to the top of the &lt;head&gt; section. Instructions on how to install the Optimizely snippet can be found on our <a href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">knowledge base</a>.

##### 2. Create and start an experiment for the test page
Within your Optimizely account, create an experiment that runs on the test page you have created in step 1. It isn't necessary to make modification in the experiment, just save and start the experiment. Remember the experiment id (see experiment_id in address bar).

When the uploading of the experiment is done (approximately 2 minutes), verify that the experiment is running on the sample page by going to the test page in your browser. After a hard refresh the Optimizely experiment should be running. You can verify if the experiment is running by opening your JavaScript console and executing `optimizely.activeExperiments`. After hitting enter, the console will output an array with your experiment ID in it. 

<img src="/assets/img/integrations/active_experiments.png">

##### 3. Implement platform specific integration code
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

```
<script>
if (window["optimizely"] && window["optimizely"]["data"]) {
    var activeExperiments = window['optimizely'].data.state.activeExperiments;
    for (var i = 0; i < activeExperiments.length; i++) {
        var experimentId = activeExperiments[i];
        var experimentName = window['optimizely'].data.state.variationNamesMap[experimentId];
        var variationName = window['optimizely'].data.experiments[experimentId].name;

        // Use the experimentName and variationName value here to send information to your analytics platform  

    }
}
</script>
```

Where indicated in the above code snippet, implement the platform specific code. 

##### 4. Verify that the integration works
When the integration is successfully implemented, you can check your network traffic to see if all the data is correctly send to the analytics platform. All the active experiments on the page in addition to a redirect experiment should be visible in the network traffic. 

#### Alternative implementation
To make it easier for anyone to implement an analytics integration that works with redirect experiments as well, an alternative implementation is described below. This implementation uses resources that are not supported by Optimizely, but are open source and can be contributed to. See <a href="https://github.com/optimizely/Analytics-JS">https://github.com/optimizely/Analytics-JS</a>. 

##### 1. Create test page with Optimizely snippet
Create a page to test the integration on. On the test page, the Optimizely snippet needs to be added to the top of the &lt;head&gt; section. Instructions on how to install the Optimizely snippet can be found on our <a href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">knowledge base</a>.

##### 2. Create and start an experiment for the test page
Within your Optimizely account, create an experiment that runs on the test page you have created in step 1. It isn't necessary to make modification in the experiment, just save and start the experiment. Remember the experiment id (see experiment_id in address bar).

When the uploading of the experiment is done (approximately 2 minutes), verify that the experiment is running on the sample page by going to the test page in your browser. After a hard refresh the Optimizely experiment should be running. You can verify if the experiment is running by opening your JavaScript console and executing `optimizely.activeExperiments`. After hitting enter, the console will output an array with your experiment ID in it. 

<img src="/assets/img/integrations/active_experiments.png">
 
##### 3. Add integrator snippet to the test page
Below the Optimizely snippet, add another snippet to the test page:

```
<script src="https://cdn.rawgit.com/optimizely/Analytics-JS/master/integrator.js"></script>
```

We will refer to this snippet as the Integrator snippet. The integrator snippet contains functionality which is commonly used in analtics integrations. It provides functionality to support redirect experiments, fix referrer values and to create usable experiment names. 

##### 4. Implement platform specific integration code
**This step is platform specific**

This step will describe how to implement your analytics platform specific code. In the previous steps you have added the integrator snippet. The code in the integrator snippet helps you build the integration, by abstracting a lot of the logic for you. The only thing that is left for you to do, is to implement three functions. 

On the test page, below the Optimizely and Integrator snippet, add this code:

```
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

The function arguments are the variation id and the experiment id. The function `makeSendableNamesfunction (experimentId, variationIds, expLength, varLength, mvtVarLength,makeClean, prefix);` returns an object that contains names based on the experiment name and variation name related to the ids. The object has two values:
    
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

###### Example
An example of a test page where an Google Analytics integration has been implemented with is here:

<a href="https://github.com/optimizely/Analytics-JS/blob/master/example.html">https://github.com/optimizely/Analytics-JS/blob/master/example.html</a>

##### 5. Verify that the integration works
When the integration is successfully implemented, you can check your network traffic to see if all the data is correctly send to the analytics platform. All the active experiments on the page in addition to a redirect experiment should be visible in the network traffic. 

### Audiences
Audience integrations allow customers to use data from a different platform to target and segment visitors. The platform data needs to be available on the client side to be able to pass it to Optimizely. If data is not available on the client side, consider using an Uploaded list integration instead. 

### **Integration with Optimizely API**
### Prerequisites
- Platform data is available client side (in the browser)
- You are comfortable with REST APIs
- You can use oAuth authentication

Using a combination of the Optimizely REST API and the JavaScript API, it is possible to create audiences within Optimizely and add a visitor to that audience within the browser. 
### **Integration with other platform API**


### Uploaded Audiences

### Content Management

### Conversion Tracking

### Snippet Installation
