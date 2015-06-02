---
template: page-sidebar
title: "Overview"
---

## Introduction

*Welcome to Optimizely Developers! This site contains resources for developers who want to extend and integrate with Optimizely in new ways.*

While you can get Optimizely up and running without writing code, many companies want to do more advanced testing or customization that isn't provided by Optimizely out of the box. This site describes what you can build on the Optimizely platform and detailed documentation to help you build custom solutions for your needs.

Our platform includes a [REST API](/rest/introduction), [JS API](/javascript/introduction), [iOS SDK](/ios/introduction) and an [Android SDK](/android/introduction).

<img src="../../assets/img/optimizely-experience-architecture.svg">

### Getting started

If you are using Optimizely for the first time, check out the [Use cases](#use-cases) below to understand the different ways to develop on our platform. For a more in-depth overview, you may also want to read [How Optimizely works](#how-optimizely-works) which explains Optimizely's data model, architecture, and the various integration points for developers.

If you're looking to develop on a specific platform, check out the documentation for our [REST API](/rest), [JS API](/javascript), [iOS SDK](/ios), and [Android SDK](/android). Each API and SDK contains a 10 minute quickstart guide, comprehensive documentation, examples, and FAQs. You may also want to check out our [Code samples](/samples) page which contains full solutions from customers, partners, and Optimizely employees that you can download for free.

You can always create a [free account](/signup) to get full access to our APIs and SDKs.

### Developer support

If you have any questions or need help please email Optimizely's developer support team at [developers@optimizely.com](mailto:developers@optimizely.com). We're always interested to learn about your needs and see how the platform can help.

## Use cases

Below are some of the most common use cases of Optimizely for developers, and pointers to the relevant resources to get started.

### Custom Implementations

Many of our customers want to run more advanced tests and personalized experiences that are not possible in Optimizely's out of the box solution. Below are some common customizations that we've seen from our customers.

* *Custom variation code:* If you'd like to write your own variation code instead of using the Optimizely visual editor, check out our [Variation code](#variation-code) section that explains how to format Optimizely variations with example code.

* *Conditional activation:* Sometimes you'll want to trigger an Optimizely experiment dynamically, after some part of the page or screen has loaded. Read our [Conditional activation](#conditional-activation) section for more information on how to control when Optimizely activates.

* *Event tracking:* To track events that are not provided out of the box by Optimizely (e.g. purchase data or offline conversions), check out our section on [Events](#events) which explains all of our available tracking APIs.

* *Web snippet hosting:*

* *User identification:*

(many more things, to be determined by SA team)

### Technology Integrations

Optimizely integrates with more than [30 Technology Partners](http://optimizely.com/partners/technology) to make it easy to exchange data between Optimizely and other tools. In addition, our customers often build custom integrations with 3rd parties or their own internal tools. If you are a partner or customer looking to build an integration, please use the following resources to get started:

#### Analytics integrations
##### Description
An analytics integration is an integration where Optimizely sends information to a different tool. In other words: an Analytics integration is "data out". The data that is send in the most conventional integrations is which experiments and variations a visitor has been bucketed in. For every page a visitor visits, the Optimizely Javascript is  is used to determine if an experiment is running on that page and in which variation the visitor is bucketed. That information is used to send to an Analytics platform.
#####Examples
* [Google Analytics](https://help.optimizely.com/hc/en-us/articles/200039995)
* [Adobe Analytics](https://help.optimizely.com/hc/en-us/articles/200039985)

#####Build your own
To create an analytics integration, you need to find out which experiments are running on a page and send their ids and/or names to the analytics tool you are integrating with. In theory, this is really easy with Optimizely. The Optimizely object on a page has the attribute `optimizely.variationIdsMap` which gives you all the all the experiments that are currently running on a page and the ids for the variations you (as a visitor) are bucketed in. There is one type of experiment that doesn't work with this solution: a redirect experiment. When a variation has redirected a visitor, the page where the visitor has been redirected to doesn't have the experiment running in most cases. In other words: this experiment doesn't show up in `optimizely.variationIdsMap`. To build a complete analytics integration that takes care of all the edge cases, you can use an analytics integration template. You can find the template and additional documentation in the [code samples section](/samples/#technology-integrations-analytics).

The template takes care of:

 * Retrieving all running experiments and their variations form the `optimizely.variationIdsMap` function. 
 * Determining if you are looking at a page was the result of a redirect experiment. In most cases, the experiment doesn't run on the page where you are redirected to, so a redirect experiment can only be detected by looking at a redirect cookie that Optimizely sets right before a redirect occurs.  
 * Abstracting the original referrer url before a redirect happened from the redirect cookie. This can be used to correct information in your analytics tool (see GA example).
 * Creating sendable names based on integration specific paramters. It makes sure that information that is being send is not too long and doesn't contain any invalid characters.
 
You can see how all those steps work in our [code samples section](/samples/#technology-integrations-analytics).
 
#####Submit integration
If you want to build an integration, we can review the integration. To share an integration with more customers, please follow the next steps:

1. Create the integration using the [analytics integration template](samples/#technology-integrations-analytics) described in our code samples.
2. Describe (preferably using screenshots) how a customer can view the data that is related to Optimizely in the tool you are integrating with. 
3. Send both the code and the description to [developers@optimizely.com](mailto:developers@optimizely.com)

####Audience integrations
TODO

####Targeting list integrations
TODO

####CMS integrations (headline testing)
Interested in building your own headline testing tool on top of Optimizely's REST API? This [step-by-step guide](https://blog.optimizely.com/wp-content/uploads/2015/05/OptimizelyHeadlineTesting.pdf) will walk you through the process to get up in running with any CMS.

####Offline conversion integrations
Example 

####Other integrations
TODO

(more detail, to be filled out by Lucas)

### Mobile A/B Testing

Optimizely includes an [A/B testing solution](http://optimizely.com/mobile) for native iOS and Android apps. If you are looking at implementing Optimizely in your app for the first time, check out our [iOS Quickstart](/ios/guide) and [Android Quickstart](/android/guide), which contain detailed instructions for installing the Optimizely SDK and running your first experiment.

## How Optimizely works

This section explains the inner workings of Optimizely, including key terminology, architecture, and the available touchpoints for developers.

### Data model

Below are some of the key terminology in the Optimizely data model.

<table class="table">
  <tr>
    <td>
      *Account*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Project*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Experiment*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Variation*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Dimension*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Audience*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Event*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *Goal*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *User*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
  <tr>
    <td>
      *User List*
    </td>
    <td>
      API link(s)
    </td>
    <td>
      Description
    </td>
  </tr>
</table>

### Architecture

What are the different parts of the Optimizely architecture? How does Optimizely deliver content through the CDN to the client? How does Optimizely receive data from the client? How do the REST API, JS API, iOS SDK, and Android SDK fit into this?

<img src="../../assets/img/optimizely-experience-architecture.svg">

### Configuration

Below are some of the key integration points for developers to customize the behavior of Optimizely.

#### Data object

#### Variation code

#### Conditional activation

#### User IDs

#### Events

#### Revenue

#### Dimensions

#### Tags

#### Advanced

## Contributions

This site is open source and we welcome contributions from the non-Optimizely developer community. If you have any feedback or suggestions, please feel free to send us a pull request to the [developers.optimizely.com Github repo](http://github.com/optimizely/developers.optimizely.com).


