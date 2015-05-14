---
template: page-sidebar
title: "Overview"
---

This site contains valuable resources for developers who want to extend and integrate with Optimizely in new ways.

Optimizely enables anyone to run tests and personalized experiences on websites and mobile apps. While it's easy to implement Optimizely on your website or app, many companies want to do more advanced testing or customization that isn't provided by Optimizely out of the box. This site is a resource for developers who want to understand how Optimizely works and build custom solutions for their needs.

## Introduction

If you are using Optimizely for the first time, check out the [Use cases](#use-cases) below to understand the different ways to develop on our platform. For a more in-depth overview, you may also want to read [How Optimizely works](#how-optimizely-works) which explains Optimizely's data model, architecture, and the various integration points for developers.

If you're looking to develop on a specific platform, check out the documentation for our [REST API](/rest), [JS API](/javascript), [iOS SDK](/ios), and [Android SDK](/android). Each API and SDK contains a 10 minute quickstart guide, comprehensive documentation, examples, and FAQs. You may also want to check out our [Code samples](/samples) page which contains full solutions from customers, partners, and Optimizely employees that you can download free.

At any time, if you have any questions or need help please email Optimizely's developer support team at [developers@optimizely.com](mailto:developers@optimizely.com). We're always interested to learn about your needs and see how the platform can help.

We've also open sourced this site to welcome contributions from the developer community. If you have any feedback or suggestions, please feel free to send us a pull request to the [developers.optimizely.com Github repo](http://github.com/optimizely/developers.optimizely.com).

## Use cases

Below are some of the most common use cases of Optimizely for developers, and pointers to the relevant resources to get started.

### Customization

Many of our customers want to run more advanced tests and personalized experiences that are not possible in Optimizely's out of the box solution. This site contains a wealth of information for developers who want to customize the Optimizely product for their needs.

*Custom variation code:* if you'd like to write your own variation code instead of using the Optimizely visual editor, check out our [Variation code](#variation-code) section that explains how to format Optimizely variations and links to several examples on different platforms.

*Conditional activation:* sometimes you'll want to trigger an Optimizely experiment dynamically, after some part of the page or screen has loaded. Read our [Conditional activation](#conditional-activation) section for more information on how to control when Optimizely activates.

*Event tracking:* if you'd like to track events that are not provided out of the box by Optimizely (e.g. offline conversions such as a phone call or in-store purchase), check out our section on [Events](#events) which explains all of our available tracking APIs.

(many more things...)

### Integrations

Optimizely integrates with more than [30 Technology Partners](http://optimizely.com/partners/technology) to make it easy to exchange data between Optimizely and other tools. In addition, our customers often build custom integrations with 3rd parties or their own internal tools. If you are a partner or customer looking to build an integration, please use the following resources to get started:

*Analytics integrations:* TODO

*Audience integrations:* TODO

*Retargeting list integrations:* TODO

*CMS integrations:* TODO

*Conversion integrations:* TODO

*Other integrations:* TODO

### Mobile

Optimizely includes an [A/B testing solution](http://optimizely.com/mobile) for native iOS and Android apps. If you are looking at implementing Optimizely in your app for the first time, check out our [iOS Quickstart](/ios/guide) and [Android Quickstart](/android/guide), which contain detailed instructions for installing the Optimizely SDK and running your first experiment.

## How Optimizely works

This section explains the inner workings of Optimizely, including key terminology, architecture, and the available touchpoints for developers.

### Data model

What's an experiment, variation, dimension, audience, etc.? Explain everything in detail.

### Architecture

What are the different parts of the Optimizely architecture? How does Optimizely deliver content through the CDN to the client? How does Optimizely receive data from the client? How do the REST API, JS API, iOS SDK, and Android SDK fit into this?

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
