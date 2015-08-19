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

TODO: table with the different integration types.


## Developer Guide

### Analytics

Analytics integrations take the experiment and variation that is running on a page and send it to an Analytics platform. This information can be used within the analytics platform to perform further analysis on the bahaviour of visitors based on the experience they had on the website.

#### Prerequisites
- Functionality to send custom data to the analytics platform
- (Optional) Functionality to overwrite referrer 
value
- You have an Optimizely (developer) account (see the "<a href="#1-create-an-optimizely-account">Join the Technology Partner Program</a>" section).
- You are able to host a test page
- Have Chrome or Firefox installed
- You know how to use the Javascript console in <a href="https://developer.chrome.com/devtools/docs/console">Chrome</a> or <a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console">Firefox</a>
- Basic skill in Javascript

#### 1. Create test page with Optimizely snippet
Create a page to test the integration on. On the test page, the Optimizely snippet needs to be added to the top of the &lt;head&gt; section. 

Instructions regarding installing the snippet can be found on our <a href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">knowledge base</a>.

#### 2. Create and start an experiment for the test page
Within your Optimizely account, create an experiment that runs on the test page you have created in step 1. It isn't necessery to make modification in the experiment, just save and start the experiment. Remember the experiment id (see experiment_id in address bar).

When the uploading of the experiment is done (approximately 2 minutes), verify that the experiment is running on the sample page by going to the test page in your browser. After a hard refresh, the Optimizely experiment should be running. You can verify if the experiment is running by opening your Javascript console and executing `optimizely.activeExperiments`. After hitting enter, the console will output an array with your experiment ID in it. 

<img src="/assets/img/integrations/active_experiments.png">
 
#### 3. Add integrator snippet to the test page
Below the Optimizely snippet, add another snippet to the test page:

```
<script src="https://cdn.rawgit.com/optimizely/Analytics-JS/master/integrator.js"></script>
```

We will refer to this snippet as the Integrator snippet. 

#### 4. Implement platform specific integration code
**This step is platform specific**

This step will describe how to implement your analytics platform specific code. In the previous steps you have added the integrator snippet. The code in the integrator snippet helps you build the integration, by abstracting a lot of the logic for you. The only thing that is left for you to do, is to implement three functions. 

On the test page, below the Optimizely and Integrator snippet, add this code:

```
</script>
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

The function initialize runs before anything else happens. It allows you to implement logic to initialize the integration. In some cases, this isn't necessery. 

Example usage: Google Analytics uses referrer values to map out behaviour through the website. The function window.integrator.redirect.getRedirectReferrer() returns a referrer that was set when a redirect has occured. This value can be used to set the correct referrer value when a redirect has occured.

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

#### Example
An example of a test page where an Google Analytics integration has been implemented with is here:

<a href="https://github.com/optimizely/Analytics-JS/blob/master/example.html">https://github.com/optimizely/Analytics-JS/blob/master/example.html</a>


#### 5. Verify that the integration works

When the integration is succesfully implemented, you can check your network traffic to see if all the data is correctly send to the analytics platform. All the active experiments on the page in addition to a redirect experiment should be visible in the network traffic. 

### Audiences
Audience integrations allow customers to use data from a different platform to target and segment visitors. The platform data needs to be available on the client side to be able to pass it to Optimizely. If data is not available on the client side, consider using an Uploaded list integration instead. 

### **Integration with Optimizely API**
### Prerequisites
- Platform data is available client side (in the browser)
- You are comfortable with REST APIs
- You can use oAuth authentication

Using a combination of the Optimizely REST API and the Javascript API, it is possible to create audiences within Optimizely and add a visitor to that audience within the browser. 
### **Integration with other platform API**


### Uploaded Audiences

### Content Management

### Snippet Installation

### Conversion Tracking
