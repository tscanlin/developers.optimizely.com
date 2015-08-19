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

### Audiences

### Uploaded Audiences

### Content Management

### Conversion Tracking

### Snippet Installation
