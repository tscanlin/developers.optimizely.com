---
template: page-sidebar
title: "Overview"
---

## Introduction

*This site contains resources for developers who want to extend and integrate with Optimizely in new ways.*

While you can get Optimizely up and running without writing code, many companies require a custom optimization solution that isn't provided by Optimizely out of the box. This site describes what you can do with the Optimizely platform and detailed documentation to help you build custom solutions for your needs.

<img src="../../assets/img/optimizely-experience-architecture.svg">

### Getting started

If you are new to Optimizely, check out the [Use cases](#use-cases) below to understand the different ways to develop on our platform. For a more in-depth overview, you may also want to read [How Optimizely works](#how-optimizely-works) which explains Optimizely's data model, architecture, and the various integration points for developers.

If you're looking to develop on a specific platform, check out our documentation for the [REST API](/rest/introduction), [JS API](/javascript/introduction), [iOS SDK](/ios/introduction) and an [Android SDK](/android/introduction). Each API and SDK contains a brief getting started guide, comprehensive documentation, and FAQs. You may also want to check out our [Code samples](/samples) page which contains full solutions from customers, partners, and Optimizely employees that you can download for free.

### Developer account

Optimizely offers a free account for developers that includes access to the APIs and SDKs. Creating an account takes 30 seconds and doesn't require a credit card.

<a class="lego-button lego-button--brand anchor--middle display--block width-200 text--center" href="#">
Create free account
</a>

### Developer support

If you have any questions or need help please email Optimizely's developer support team at [developers@optimizely.com](mailto:developers@optimizely.com). You can also post on our [developer discussion group](http://community.optimizely.com/t5/Developers/bd-p/Developers) on Optiverse. We're always interested to learn about your needs and happy to help walk you through how to use our APIs and SDKs.

### Contributions

This site is open source and we welcome contributions from the non-Optimizely developer community. If you have any feedback or suggestions, please feel free to send us a pull request to the [developers.optimizely.com Github repo](http://github.com/optimizely/developers.optimizely.com).

## Use cases

Below are some common use cases of Optimizely for developers, and pointers to the relevant resources to get started.

### Custom Implementations

Many Optimizely customers want to run more advanced tests and personalized experiences that are not possible in Optimizely's out of the box solution. Below are some common customizations that we've seen from our customers.

* *Custom variation code:* If you'd like to write your own variation code instead of using the Optimizely visual editor, check out our [Variation code](#variation-code) section that explains how to format Optimizely variations with example code.

* *Conditional activation:* Sometimes you'll want to trigger an Optimizely experiment dynamically, after some part of the page or screen has loaded. Read our [Conditional activation](#conditional-activation) section for more information on how to control when Optimizely activates.

* *Event tracking:* To track events that are not provided out of the box by Optimizely (e.g. purchase data or offline conversions), check out our section on [Events](#events) which explains all of our available tracking APIs.

* *Web snippet hosting:*

* *User identification:*

(many more things, to be determined by SA team)

### Technology Integrations

Optimizely integrates with more than [30 Technology Partners](http://optimizely.com/partners/technology) to make it easy to exchange data between Optimizely and other tools. In addition, our customers often build custom integrations with 3rd parties or their own internal tools. If you are a partner or customer looking to build an integration, please use the following resources to get started.

####*Analytics integrations*
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

####*Audience integrations*
An audience integration is a "data in" integration. 

#####Examples

* test

#####Build your own
 
#####Submit integration



####*Targeting list integrations*
List targeting integrations are in terms of functionality quite similar to Audience integrations.
#####Examples

* 

#####Build your own
 
#####Submit integration



####*CMS integrations (headline testing)*
A CMS integration is an integration that allows users of a CMS to easily set up experiments from the CSM without seeing the Optimizely tool. An example use case is the website of a newspaper. The editors of the newspaper might want to try out different headlines for articles or want to test images and derive learnings from those experiments for future articles. Instead of learing all the editors how to use Optimizely, this plugin allows the editors to easily set up an experiment with 2 headlines for example:
![headline testing](https://help.optimizely.com/hc/en-us/article_attachments/201826977/Screen_Shot_2015-05-20_at_9.41.51_AM.png)
#####Examples

* [Headline testing](https://help.optimizely.com/hc/en-us/articles/200040505-Implementing-Optimizely-on-a-CMS-or-e-commerce-platform)
* [Wordpress headline testing](https://help.optimizely.com/hc/en-us/articles/205331897#headline)

#####Build your own
Interested in building your own headline testing tool on top of Optimizely's REST API? This [step-by-step guide](https://blog.optimizely.com/wp-content/uploads/2015/05/OptimizelyHeadlineTesting.pdf) will walk you through the process to get up in running with any CMS.

#####Submit integration
If you're done building a headline testing integration, we would love to see it in action. Please contact us on [developers@optimizely.com](mailto:developers@optimizely.com) and we will see how we can help you. 

####*Snippet insertion*
There is a wide range of tools that have the ability to insert the Optimizely snippet. An obvious example is a tag managments solution, but most CMS systems or eCommerce platforms will be able to do it as well. 
#####Examples

* [Tealium](https://help.optimizely.com/hc/en-us/articles/203491910#enable)
* [Wordpress snippet insertion](https://help.optimizely.com/hc/en-us/articles/205331897#plugin)

#####Build your own
Implementing the Optimizely snippet is straightforward: a customer needs to implement 1 line ("snippet") to their html template. There are a few things to consider when this line is added to the template:

* The snippet needs to be added synchronously and as high as possible in the head section of the page to make sure Optimizely can execute before a browser shows the page to a visitor. If Optimizely is implemented correctly, Optimizely can prevent a flicker on the page when an experiments is running.
* If synchronous implementation isn't possible, we recommend to implement a timeout that blocks the Optimizely script from executing when it isn't loaded within 2 seconds (due to a bad connection for example). 
* If a snippet isn't implemented synchronously we still recommend to ad the snippet to the page as high as possible. 

Every project has their own snippet. The snippet has this construction:

`<script src="//cdn.optimizely.com/js/{{project_id}}.js"></script>`

where {{project_id}} is replaced by the id of an Optimizely project. An example:

`<script src="//cdn.optimizely.com/js/2734370016.js"></script>`

There is only one variable that needs to be filled in by a user: the project id. Therefore, a snippet insertion integration works like this:

1. A user wants to install Optimizely on their website
2. The user goed to the CMS/tag management system/ecommerce platform that has the snippet insertion integration and enables the integration. 
3. Upon enablement, a user is prompted for a project id
4. The integration automatically adds the snippet to the head section of all pages and uses the provided project id to insert the correct snippet.
 
#####Submit integration
If you're done building a headline testing integration, we would love to see it in action. Please contact us on [developers@optimizely.com](mailto:developers@optimizely.com) and we will see how we can help you. 


####*Offline conversion integrations (calltracking)*
When a goal is triggered on a webpage, a request is send to our servers. That requests creates a conversion and will later be reflected on the results page. A similar request can also be triggered from other places than the website, if that happens we call it a "offline conversion". In other words, a conversion that wasn't generated on the same medium where the experiment is running. A common use case is call tracking. For some customers an incoming call is an important conversion to track, more than conversions that happen on the web or in an app. Calltracking solutions often have the ability to set up a whebhook that is triggered when a call comes in or when a call is being answered. With the right information, this webhook can be used to create a conversion in an Optimizely report.

#####Examples

* [Avanser](https://help.optimizely.com/hc/en-us/articles/202480110-Integrating-Optimizely-with-Avanser)
* [Delacon](https://help.optimizely.com/hc/en-us/articles/203047264-Integrating-Optimizely-with-Delacon)

#####Build your own

 
#####Submit integration



####Other integrations
TODO

(more detail, to be filled out by Lucas)

### Mobile App A/B Testing

Optimizely includes an [A/B testing solution](http://optimizely.com/mobile) for native iOS and Android apps. If you are looking at implementing Optimizely in your app for the first time, check out our [iOS getting started guide](/ios/guide) and [Android getting started guide](/android/guide), which contain detailed instructions for installing the Optimizely SDK and running your first experiment.

## How Optimizely works

This section explains the inner workings of Optimizely, including key terminology, architecture, and the available touchpoints for developers. [Life of an experiment](#life-of-an-experiment) describes a typical customer workflow and [Life of a visitor](#life-of-a-visitor) describes what happens when a visitor comes to a website or mobile app running Optimizely.

### Life of an experiment

Below is a typical workflow for a customer running an experiment with Optimizely.

#### *1. Create an experiment*

An *experiment* is a campaign run by Optimizely on either a website or a mobile app to determine the impact of a change. An experiment could be an A/B test or a multivariate test. Customers can configure how much traffic they'd like to allocate to their experiment.

#### *2. Create one or more variations*

In any given experiment, customers can create one or more *variations*, that contain alternative content changes they'd like to test. Technically speaking, a variation is just a snippet of jQuery code that runs in a user's browser that renders the page differently. Variations can be created using Optimizely's [visual editor](#) or using the [edit code](#).

#### *3. Create a target audience*

Customers can filter what type of traffic they'd like to include in an experiment using an *audience*. An audience is just a set of AND/OR conditions about a user (e.g. browser type, geography, query parameters) that can be evaluated in real-time when a user visits a web page or mobile app. Audiences can be saved and re-used for other experiments.

#### *4. Create a goal*

Customers must define at least one *goal* for their experiment, i.e. a metric they'd like to track for the success of the experiment. Experiments can have an arbitrary number of goals but just one *primary goal*. Optimizely customers can define click goals or pageview goals using the goal creation dialog, or they can create *custom events* that are goals defined through code. Any goals that are defined for an experiment are tracked in the Optimizely backend over the lifetime of the experiment.

#### *5. Start the experiment*

Once the experiment has been configured, the customer can start the experiment using the *Start experiment* button in the visual editor. On taking this action, Optimizely updates the *Optimizely snippet* that contains the code necessary to make changes in the website or mobile app. The Optimizely snippet is delivered through a CDN.

#### *6. Monitor the results*

A customer can now see the results of their experiment in real-time by looking at the Optimizely results page. The results page contains how many visitors were assigned to each variation and the number of *conversions* over time, for each of the experiment goals that have been defined.

Optimizely experiments can be grouped into *projects*, which are usually tied to a single website or mobile app. Each project can have multiple *collaborators* with custom permissions.

### Life of a visitor

Below is what happens when a visitor comes to a web page or mobile app that is running Optimizely.

#### *1. Evaluate audiences*

The first thing Optimizely does is it collects information about the visitor, to determine what audiences that visitor is a part of.

#### *2. Bucket experiments*

Next, Optimizely determines what experiment(s) (if any) should be shown to the user. This decision is based on what audiences the visitor is in, random traffic allocation, and any additional experiment targeting criteria.

#### *3. Assign variation*

If the visitor has been bucketed into an experiment, Optimizely decides which variation should be shown to the visitor using random assignment, according to the relative traffic allocation specified by the customer.

#### *4. Activate experiment*

Optimizely runs the code for the chosen variation. By default, this is done before the page loads on a website to ensure that the visitor doesn't see flicker. However, many customers may want to activate an experiment after a page has loaded. For more information see conditional activation.

#### *5. Track events*

Once the page or mobile app has been rendered to the user, Optimizely tracks events by sending information to the Optimizely backend. Besides event tracking, all of the steps below happen completely client-side (i.e. in the user's browser or mobile app).

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
