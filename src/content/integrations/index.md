---
template: page-sidebar
title: "Integrations"
---

# Integrations Developer Guide

*Welcome! This page walks you through everything you need to build an integration using Optimizely APIs.*

Optimizely integrates with more than [30 Technology Partners](http://optimizely.com/partners/technology) including analytics solutions, data management platforms, content management systems, e-commerce platforms, conversion tracking solutions, and more. Many of these integrations are built entirely using public Optimizely APIs. On this page, you’ll find some common use cases for integrating with Optimizely and all the developer resources you need to build an integration.

Are you a prospective Technology Partner interested in building an integration with Optimizely? Please read the [Technology Partners](#technology-partners) section to understand the required steps to get your integration built, approved, and launched by Optimizely.

Are you a current Optimizely customer interested in building a custom integration for your own use case? Jump straight to [Integration Types](#integration-types) to understand the different ways of integrating with Optimizely.

At any time, if you have questions about building integrations please email [developers@optimizely.com](mailto:developers@optimizely.com).


## Technology Partners

If you would like to partner with Optimizely to help support your integration, we highly recommend you apply for the [Technology Partner Program](http://optimizely.com/partners/technology/join). Becoming a partner includes many benefits including hands-on developer support and marketing benefits to help promote your integration to Optimizely customers. For more information about requirements and benefits of the Technology Partner Program <a href="http://pages.optimizely.com/rs/361-GER-922/images/Optimizely%20Technology%20Partners.pdf" target="_blank">click here</a>.

<h3 id="create-an-optimizely-account">1. Create an Optimizely developer account</h3>

If you don't have an Optimizely developer account, just sign up for a [free developer account](https://www.optimizely.com/?modal=devsignup). This account will give you access to <a href="https://help.optimizely.com/hc/en-us/articles/200040055-Optimizely-Pricing-Plan-changes-upgrading-and-downgrading#comparison">the full set of Optimizely features</a> and API access, but with limited traffic allocation. No credit card required.

<h3 id="apply-to-technology-partner-program">2. Apply to Technology Partner Program</h3>

Please fill out the <a href="https://www.optimizely.com/partners/technology/join/" target="_blank">Technology Partner Program form</a> to apply for the program. We recommend that you apply for the program before you start developing an integration so we can provide you with appropriate guidance using the Optimizely APIs and plan for launch.

<h3 id="track-your-integration">3. Register your integration</h3>

We require all Technology Partners to formally register their integration to Optimizely so we can better track which APIs are most important to our partners. Registering your integration is easy. If your integration is using the REST API, we require you use OAuth 2.0 authentication and register your integration as an OAuth client . If your integration is using the JavaScript API, we also require you to make a one-line API call. The steps to register your integration are described in the [Register your integration section](#register-integration).

<h3 id="build-your-integration">4. Build your integration</h3>

There are many ways to integrate with Optimizely depending on your needs. To decide how to best integrate with our platform, please see the chart of [Integration Types](#integration-types) below which includes some common types of integrations built by customers and partners. Each integration type includes a step-by-step guide including example code that you can use to build the integration. If none of these integration types meet your needs, please refer to our [REST API documentation](/rest).

<h3 id="submit-integration-for-qa">5. Submit integration for QA</h3>

Our team is eager to provide feedback and make sure the integration works as expected. Please go through the Integration Checklist before submitting your integration to <a href="mailto:techpartners@optimizely.com">techpartners@optimizely.com</a> to make the review process as quick and smooth as possible. You can find the checklist in the <a href="#integration-checklist">Integration Checklist</a> section.

<h3 id="promote-your-integration">6. Promote your integration</h3>

After Optimizely has tested and approved your integration, you can work with your Partner Manager to get your integration listed in the [Technology Partner Directory](http://optimizely.com/partners/technology). As a Technology Partner you will also receive a Marketing Playbook that provides detailed guidance on the best way to promote your integration to Optimizely customers.

If you have any questions about becoming an Optimizely Technology Partner, please email <a href="mailto:techpartners@optimizely.com">techpartners@optimizely.com</a>.


## Integration Types

Integrations with Optimizely typically fall into one of the following categories. For each category we've included some examples as well as a link to an implementation guide with step-by-step instructions on how to build the integration.

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
      Audience integrations allow customers to target a specific audience based on data from an external source.  With a simple drag-and-drop interface, customers can personalize content and experiments based on 3rd party demographic data such as gender, location, weather, and age, or 1st party behavioral data such as buying intent, lifetime value, <a href="https://www.optimizely.com/optimization-glossary/shopping-cart-abandonment/" target="_blank">cart abandonment</a>, and more.
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
      *Content Management*
    </td>
    <td>
      <a href="http://optimizely.com/partners/technology/wordpress">WordPress</a><br>
      <a href="http://optimizely.com/partners/technology/parsely">Parse.ly</a>
    </td>
    <td>
      Content Management integrations allow customers to utilize the full power of Optimizely directly from a platform that manages content.  Customers can create, configure, and run experiments directly from their content platform interface without having to login to Optimizely.
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
      Conversion Tracking integrations allow customers to use custom events (e.g. phone calls) as a goal for their experiments, as opposed to default goals (eg. clicks or pageviews).  These integrations use Optimizely’s custom event goals functionality to track conversions.
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
      Snippet integrations allow users to implement the Optimizely functionality on their website without the help of a developer to add the Optimizely snippet.
    </td>
    <td>
      [Implementation Guide](#snippet-installation)
    </td>
  </tr>
</table>

<br>

Not seeing the platform you’re looking for? Check out the <a href="https://help.optimizely.com/hc/en-us/articles/203729580" target="_blank">full list of platforms</a> that Optimizely integrates with.



## Integration Checklist

We will review Optimizely Integrations submitted to the [techpartners@optimizely.com](mailto:techpartners@optimizely.com).

Follow this guide to help your integration go through the review process quickly and smoothly. We've highlighted the most important elements for your integration listing.

This guide does not replace or supersede our [Developer Policy](https://www.optimizely.com/terms-development/), which must be adhered to at all times. The Developer Policy is listed here: [https://www.optimizely.com/terms-development/](https://www.optimizely.com/terms-development/).

### QA details

#### Sandbox account

Set up a working account that can be used by Optimizely employees to do functional testing.

#### Instructions

Provide high level testing instructions for an Optimizely employee to QA your integration. During the QA process, our engineers check the expected behaviour. We aim to partner with great products, so we also expect to not encounter serious bugs in the product during QA.

### Listing

#### Appropriate name

Your integration's name should not infringe upon a trademark or copyright for any other products or services. Also, if you have any reference to Optimizely in the Integration name, we will ask you to remove it. You can find our [brand guidelines](http://design.optimizely.com/) here: [http://design.optimizely.com/](http://design.optimizely.com/). For an integration we recommend using your product name or a combination of your company name and your product name. Examples:
- Your company name is XYZ and your product name is Product:
XYZ Product
- Your company name (XYZ) is the same as your product:
XYZ

### Logos

Optimizely needs two versions of your logo:

- One for the partner directory:
 [https://www.optimizely.com/partners/technology/](https://www.optimizely.com/partners/technology/)
- One for the integrations dashboard:
  <img src="/assets/img/integrations/checklist.png">

The following guidelines should be followed when creating an integration of application logo that will appear in Optimizely.

#### Designing the Logo:

- Avoid putting an edge or border around the image
- Avoid drop shadows if possible. It's OK to use small shadows for contrast.
- Make the logo face the screen. Don't put perspective on it.
- Logo should be able to be shown on both white and light grey backgrounds.
- Logo should be square with no rounded edges.
- Logo should be a PNG file

#### Optimizely Logos

- Don't use the Optimizely logo (original or modified) in any logo.
- Don't use any icons or logos that can be found in the Optimizely application, as this could confuse users.

#### Logo for integrations dashboard

- Logo should be exactly 200 x 200 px.

#### Logo for partner directory

- Minimum size for the logo: 280 x 80 px
- Maximum size for the logo: 500 x160 px

### Installation link

This is how customers install your integration, so it's important to make it as easy as possible. It should contain:

- Information about your services
- Information about how the integration interacts with Optimizely

### Customer support link

As part of your submission to the Directory, you agree to "Keep your Integration updated and your support channel active" so please ensure that the link you provide is to an active and responsive support channel.

### Customer support email

Please make sure this is an email address that you check regularly and is clearly connected to your app.

### Registering your app

Make sure your integration activity is visible to Optimizely. Go through the steps described here:

[http://developers.optimizely.com/integrations/#register-integration](http://developers.optimizely.com/integrations/#register-integration)

### Submit all information

Use all the information from above to fill in this [form](https://goo.gl/YhGzmd).



<h2 id="register-integration">Registration</h2>

We require all partners that have an integration to register an OAuth 2.0 client. Using OAuth 2.0 provides the following benefits:
- We can better support your integration and our mutual customers
- It will allow us to better understand which functionality has made the biggest impact on the customer experience
- It gives us the ability to determine where to invest more time for improvements
- For integrations that use the REST API, OAuth 2.0 provides a better, more transparent customer experience

**If your integration does not use the REST API, creating an OAuth 2.0 client is still a required step.**

If you have questions about registering your integration, please email [integrationsupport@optimizely.com](mailto:integrationsupport@optimizely.com).

The following step-by-step guide describes how register an OAuth 2.0 client.

### 1. Create an OAuth 2.0 client for your integration
Sign in to the account and navigate to <a target="_blank" href="https://app.optimizely.com/accountsettings/apps/developers">https://app.optimizely.com/accountsettings/apps/developers</a>.

On this page, click on "Register a new application".

<img src="/assets/img/integrations/tracking_register.png">

Fill in the fields with the following values:
- *Application Name*: the name of your integration
- *Redirect URI*: your homepage
- *Client Type*: can be Public or Confidential, depending on your application. If you integration only uses the JavaScript API, use "Public". The client type for an integration that uses the REST API depends on your setup. You can find more information about client types [here](http://localhost:4009/rest/reference/index.html#grant-types).

Click *Apply*.

### 2. Implement API specific requirements

<span id='rest-registering'>**Integrations that use the REST API**</span><br>
We require every integration that uses the REST API to authenticate with the OAuth 2.0 client that you created in the previous step. Authentication with an OAuth 2.0 client is described in the [REST API reference](/rest/reference/index.html#authorization).

<span id='js-registering'>**Integrations that use the JavaScript API**</span><br>
If your integration is using the JavaScript API, we also require you to make a one-line API call at the top of your integration's JavaScript:

```javascript
window.optimizely = window.optimizely || [];
window.optimizely.push({
 'type': 'integration',
 'OAuthClientId': 5352110138 // This is the OAuth Client ID you've copied in the previous step.
});
```

The client ID used in the on-line API call can be found here:

<img src="/assets/img/integrations/tracking_client_id.png">

## Analytics

*Analytics integrations* allow customers to track Optimizely experiments in an external analytics tool.  With the flip of a switch, Optimizely can append experiment data to analytics tracking code, so customers can see the impact of their experiments in their analytics tool. The following step-by-step guide describes how to implement an analytics integration.

<h3 id="analytics-prerequisites">Prerequisites</h3>

- Your analytics platform can track Optimizely experiment and variation names
- Basic JavaScript skills

<h3 id="add-the-snippet">1. Add the snippet</h3>

To get started, install the Optimizely snippet on your test page. This is the page you’ll test your integration on. The snippet should be added as high up in the &lt;head&gt; tag as possible. To learn how to install the Optimizely snippet, check out this <a target="_blank" href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">step-by-step</a> guide in our knowledge base.

<h3 id="create-and-start-an-experiment">2. Create and start an experiment</h3>

Create an experiment within your Optimizely account that runs on the test page you have created in Step 1. Save your experiment without making any changes. Click Start Experiment.

To verify that your experiment is running, do a hard refresh on the test page outside of the Editor. Open the JavaScript console and execute optimizely.activeExperiments. When your experiment is live, the console will output an array with your Experiment ID. It may take up to 2 minutes for the experiment to fully upload to your test page. If you don’t see the Experiment ID appear, wait for a few seconds, then execute the call again.

<img src="/assets/img/integrations/active_experiments.png">

<h3 id="write-the-integration-code">3. Write the integration code</h3>

To integrate with the analytics platform, you’ll need the Optimizely Experiment and Variation names that are running on the test page. This section describes the JavaScript methods you’ll need to retrieve this information:

- `window["optimizely"] && window["optimizely"]["data"]`
This line makes sure that Optimizely is loaded on the page.
- `window['optimizely'].data.state.activeExperiments`
This is an array of experiment ids for all the active experiments.
- `window['optimizely'].data.state.variationNamesMap`
This is a hash table whose keys are the experiment ids of experiments running for the visitor (including inactive experiments for which the user has been bucketed), and whose values are the variation names for those experiments.
- `window['optimizely'].data.experiments[experimentId].name`
This is the name of the experiment specified with the experimentId variable.
- `window["optimizely"].data.state.redirectExperiment`
An object that if defined means a redirect experiment occurred on the previous page.

Implement these methods below the Optimizely snippet on your test page. By combining the methods, you will be able to access all the experiment names and variation names. You can read more about the above methods in the <a href="/javascript/reference/index.html#the-data-object">JavaScript API reference</a>.

```xml
<script>
if (window['optimizely'] && window['optimizely']['data']) {
  var activeExperiments = window['optimizely'].data.state.activeExperiments;
  if(window['optimizely'].data.state.redirectExperiment) {
    var redirectExperimentId = window['optimizely'].data.state.redirectExperiment.experimentId;
    var index = window['optimizely'].data.state.activeExperiments.indexOf(redirectExperimentId);
    if(index === -1){
      activeExperiments.push(redirectExperimentId);
    }
    // Some analytics platforms have the ability to fix referrer values. Use optimizely.data.state.redirectExperiment.referrer to fix the referrer value here.

  }

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

<h3 id="qa-integration">4. QA integration</h3>

When the integration is successfully implemented, check your network traffic to see if all the data is correctly send to the analytics platform. All the active experiments on the page in addition to a redirect experiment should be visible in the network traffic.

## Mobile analytics
Mobile analytics integrations allow customers to track Optimizely experiments in an external analytics tool. Optimizely can append experiment data to analytics tracking code, so customers can see the impact of their experiments in their analytics tool. The following step-by-step guide describes how to implement an analytics integration for mobile through Optimizely provided plugins.The plugins allow you to capture information about which experiment is running and which variant is chosen for a visitor.

<h3 id="analytics-for-mobile-prerequisites">Prerequisites</h3>

- Your analytics platform can track Optimizely experiment and variation names by calling a SDK function or a REST API endpoint
- The ability to create an Android or iOS library

<h3 id="create-test-app">1. Create a test application and install the Optimizely SDK</h3>

To get started, create a test application and install the Optimizely SDK. This is the app you’ll test your integration on. To learn how to install the Optimizely SDK, check out this <a href="https://help.optimizely.com/hc/en-us/articles/202296994-Get-Started-on-Mobile-Optimization#prereqs">step-by-step</a> guide in our knowledge base.

<h3 id="declare-dependency">2. Declare a dependency on the Optimizely SDK</h3>

To get started, declare a dependency on the Optimizely SDK in your test app. Declaring the dependency in Android happens by adding `provided ("com.optimizely:optimizely-core:1.2.1+@aar") {transitive = true}`to your build.gradle. You can read more about using Gradle to declare the dependency in the <a href="/android/getting-started/index.html#using-gradle">developer documentation for Android</a>. For iOS you need to declare the dependency by adding `pod 'Optimizely-iOS-SDK'` to your CocoaPods Podfile. You can read more about using CocoaPods to declare the dependency in the <a href="/ios/getting-started/index.html#using-cocoapods">developer documentation for iOS</a>.

<h3 id="implement-the-optimizely-plugin">3. Implement the Optimizely plugin</h3>


#### Android
The Optimizely Android SDK includes an interface called "OptimizelyPlugin" that you will need to implement. This is an example implementation of the OptimizelyPlugin interface:

```java
package com.analytics;

import com.optimizely.Optimizely;
import com.optimizely.integration.DefaultOptimizelyEventListener;
import com.optimizely.integration.OptimizelyEventListener;
import com.optimizely.integration.OptimizelyExperimentData;
import com.optimizely.integration.OptimizelyPlugin;

import org.json.JSONObject;

import java.util.List;

import android.app.Application;
import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.View;

/**
 * Example Plugin
 */
public class ExamplePlugin implements OptimizelyPlugin {

    @NonNull
    @Override
    public String getPluginId() {
        return "com.example.plugin";
    }

    /**
     * Declare all required permissions here. Nullable lists are okay for the empty set of permissions.
     * @param context the context of the app in case the permission is based on the package name
     *                or otherwise declared via manifest.
     * @return a list of permissions required or null if no permissions are necessary
     */
    @Nullable
    @Override
    public List<String> getRequiredPermissions(Context context) {
        return null; // Declare required Android permissions
    }

    /**
     * Declare all dependencies on other plugins here.
     * @return
     */
    @Override
    public List<String> getDependencies() {
        return null; // Declare any dependencies on other Optimizely Plugins
    }

    /**
     * @return a touch listener which will receive all touch events that occur on tracked views
     */
    @Nullable
    @Override
    public View.OnTouchListener getOnTouchListener() {
        return null; // If your plugin wants to handle touch events, return an OnTouchListener here.
    }

    /**
     * @return a lifecycle callbacks that will receive all Android lifecycle events that occur
     */
    @Nullable
    @Override
    public Application.ActivityLifecycleCallbacks getActivityLifecycleCallbacks() {
        // If your plugin wants to be notified of Activity start/stop, return an
        // ActivityLifecycleCallbacks instance here.
        return null;
    }

    /**
     * @return a listener that will receive all events emitted by Optimizely and its plugins
     */
    @Nullable
    @Override
    public OptimizelyEventListener getOptimizelyEventsListener() {
        return mListener;
    }

    /**
     * Initialize the plugin and start any listeners or threads.
     * @param optimizely reference to the Optimizely singleton so that services can be accessed
     * @return true if the plugin was started successfully, false otherwise.
     */
    @Override
    public boolean start(Optimizely optimizely, JSONObject config) {
        return true;
    }

    /**
     * Stop the plugin and clean up any objects that are owned by the plugin.
     */
    @Override
    public void stop() {

    }

    /**
     * Interface for clients which want notifications when various Optimizely events occur.
     * Listeners are weakly held, so you may need to re-register your listeners if you don't
     * hold onto them.
     */
    private OptimizelyEventListener mListener = new DefaultOptimizelyEventListener() {
        /**
         * Notification that is fired whenever the user's experience has been affected
         * by an experiment. This means that:
         *   a live variable has been evaluated,
         *   a code block has been evaluated,
         *   or a visual change has been seen by the user.
         * @param experimentState the current running state of the experiment.
         */
        @Override
        public void onOptimizelyExperimentVisited(OptimizelyExperimentData experimentState) {
            String propertyName = "Optimizely: " + experimentState.experimentName;
            String propertyValue = experimentState.variationName;
            // mySDK.setGlobalProperty(propertyName, propertyValue);
        }

        /**
         * Notification that a goal has been triggered.
         * @param description A description of the goal event
         * @param affectedExperiments the experiments that are active and tracking this goal
         */
        @Override
        public void onGoalTriggered(String description, List<OptimizelyExperimentData> affectedExperiments) {
            String eventName = "Optimizely: " + description;

            for (OptimizelyExperimentData experimentData : affectedExperiments) {
                String propertyName = "Optimizely: " + experimentData.experimentName;
                String propertyValue = experimentData.variationName;
                // mySDK.setEventProperty(propertyName, propertyValue);
            }
            // mySDK.trackEvent(eventName);
        }
    };
}
```
The plugin framework offers a lot of functionality, but for most analytics integrations the functions in the OptimizelyEventListener shown in the example are sufficient.

##### onOptimizelyExperimentVisited
The function `onOptimizelyExperimentVisited` is triggered every time an experiment is shown to a user of the app. Every experiment has an ID and a name.The user will be randomly assigned to a variation of the experiment which also has an ID and a name. For the analytics integration, you'll want to use the experiment name and variation name.
In the example, the experiment name is stored in the String `propertyName` and the variation name is stored in `propertyValue`. Both the experiment name and variation name are assigned to a user. Use your analytics SDK or REST API to append this metadata to a user. An example of how to send the data with the Google Analytics Android SDK is by using <a href="https://developers.google.com/analytics/devguides/collection/android/v4/customdimsmets">custom dimensions</a>.

##### onGoalTriggered
The `onGoalTriggered` function is called everytime a goal that has been set in Optimizely is triggered by the user of the app. The `onGoalTriggered` function can be used to forward events to your SDK or REST API.

#### iOS
The Optimizely iOS SDK includes a interface called "OptimizelyPlugin" that you will need to implement. This is an example implementation of the OptimizelyPlugin interface:

```
//
//  ExamplePlugin.m
//
//  Created by Josiah Gaskin on 10/8/15.
//

#import <Foundation/Foundation.h>
#import <Optimizely/OptimizelyPlugin.h>

@interface ExamplePlugin : NSObject<OptimizelyPlugin>

@end
OptimizelyRegisterPlugin(ExamplePlugin)

@implementation ExamplePlugin

/**
 * Return the plugin ID
 */
- (NSString *)pluginId {
    return @"com.example.analytics";
}

/*
 * iOS plugins are expected to handle their own permission requests appropriately
 */

/**
 * Declare all dependencies on other plugins here.
 * @return a list of plugin identifiers
 */
- (NSSet *)getDependencies {
    return nil;
}

/**
 * @return true if this plugin should receive and handle touch events
 */
- (BOOL)shouldHandleTouchEvents {
    return NO;
}

/**
 * If shouldHandleTouchEvents returns true, touch events will be passed to the plugin.
 */
- (void)processTouchEvent:(UIEvent *)event {}

/*
 * iOS plugins are expected to handle UIApplication* notifications as needed
 */

/**
 * iOS plugins can subscribe to the NSNotification center notifications for the Optimizely
 * notifications listed in Optimizely.h#NSNotification Keys
 */

/**
 * Initialize the plugin and start any listeners or threads.
 * @param optimizely reference to the Optimizely singleton so that services can be accessed
 * @return true if the plugin was started successfully, false otherwise.
 */
- (BOOL)startWithOptimizely:(Optimizely *)optimizely withConfig:(NSDictionary *)config {
    /**
     *  Constant NSNotification key that is triggered when an experiment is viewed by the user. The userInfo in the notification
     *  will have metadata which includes experiment Id, variation Id, experiment description and variation description. For more
     *  information on visited experiments, see the `visitedExperiments`.
     */
    [NSNotificationCenter.defaultCenter addObserverForName:OptimizelyExperimentVisitedNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
        NSDictionary *userInfo = note.userInfo;
        NSString *property_name = [NSString stringWithFormat:@"Optimizely: %@", userInfo[@"experiment_id"]];
        NSString *property_value = userInfo[@"variation_id"];
        // [mySDK setGlobalProperty: property_value forKey: propertyName];
    }];

    /**
     *  Constant NSNotification key that is triggered when an Optimizely goal is triggered. The userInfo in the notification
     *  will have metadata which includes an array of experiments pertaining to this goal and the goal description. This notification
     *  is only fired in normal mode when a conversion is counted for 1 or more experiments.
     */
    [NSNotificationCenter.defaultCenter addObserverForName:OptimizelyGoalTriggeredNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
        NSDictionary *userInfo = note.userInfo;
        NSString *description = userInfo[@"description"];
        NSArray *experiments = userInfo[@"experiments"];

        for (NSDictionary *experiment in experiments) {
            NSString *property_name = [NSString stringWithFormat:@"Optimizely: %@", experiment[@"experiment_id"]];
            NSString *property_value = experiment[@"variation_id"];
            // [mySDK setEventProperty: property_value forKey: propertyName];
        }
        // [mySDK trackEvent: description];
    }];
    return YES;
}

/**
 * Stop the extension and clean up any objects that are owned by the extension.
 */
- (void)stop {}

@end
```
The plugin framework offers a lot of functionality, but for most analytics integrations the observers in the `startWithOptimizely:(Optimizely *)optimizely withConfig:(NSDictionary *)config` function are most relevant.

##### OptimizelyExperimentVisitedNotification
The function `OptimizelyExperimentVisitedNotification` is triggered every time an experiment is shown to a user of the app. Every experiment has an ID and a name and the user will be randomly assigned to a variation of the experiment which also has an ID and a name. You need to use the experiment name and variation name for your analytics integration.In the example, the experiment name is stored in the NSString `property_name` and the variation name is stored in `property_value`. Both the experiment name and variation name are assigned to a user. Use your analytics SDK or REST API to append this metadata to a user. An example of how to send the data with the Google Analytics iOS SDK is by using <a href="https://developers.google.com/analytics/devguides/collection/ios/v3/customdimsmets#set-send">custom dimensions</a>.

##### OptimizelyGoalTriggeredNotification
The `OptimizelyGoalTriggeredNotification` function is called every time a goal that has been set in Optimizely is triggered by the user of the app. The `OptimizelyGoalTriggeredNotification` function can be used to forward Optimizely goal events to your SDK or REST API.

<h3 id="register-plugin">4. Enable plugin</h3>

The code that you wrote in step 3 needs to be enabled to become effective. If you used the plugin id `"example_plugin"`, you need to use `Optimizely.whitelistPlugin("example_plugin", null);` to enable the plugin in Android and `[Optimizely whitelistPlugin:@"example_plugin"];` on iOS. Once your integration gets approved for the Optimizely dashboard, you can skip this step. On iOS, your users will need to include the header file (e.g. `ExamplePlugin.h`) which contains your registration macro (the call to `OptimizelyRegisterPlugin()`). On Android, your plugin will be detected by the classloader.


<h3 id="mobile-qa-integration">5. QA integration</h3>

When the integration is successfully implemented, check your network traffic to see if all the data is correctly sending to the analytics platform. You can use Charles for monitoring your Network traffic. There is a configuration guide for <a href="http://www.charlesproxy.com/documentation/configuration/browser-and-system-configuration/">using Charles with iOS and Android</a>.

## Audiences

*Audience integrations* allow customers to target a specific audience based on data from an external source. With a simple drag-and-drop interface, customers can personalize content and experiments based on 3rd party demographic data such as gender, location, weather, and age, or 1st party behavioral data such as buying intent, lifetime value, cart abandonment, and more. This section explains how to create audiences within Optimizely (via the REST API) and add a visitor to that audience in the browser (via the JavaScript API).

<h3 id="audiences-prerequisites">Prerequisites</h3>

- Audience data from your platform is available client-side (i.e. in the browser)
- Comfortable using REST APIs
- Basic JavaScript skills

<h3 id="audiences-create-a-developer-account">1. Create a developer account</h3>

Depending on your [Optimizely plan type](https://help.optimizely.com/hc/en-us/articles/200040055), the REST API may restrict the number of calls you can make per month. To avoid going over the limit with your account, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access the REST API.

<h3 id="register-your-application">2. Register your application</h3>

We require you to use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send audiences to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

<h3 id="create-a-test-page">3. Create a test page</h3>

Create a page to test the integration on. On the test page, the Optimizely snippet needs to be added to the top of the &lt;head&gt; section. Instructions on how to install the Optimizely snippet can be found on our <a href="https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet">knowledge base</a>.

<h3 id="create-an-optimizely-audience">4. Create an Optimizely audience</h3>

You can now create Audiences using the REST API. When a user indicates that they want to use an audience from your platform within Optimizely you should create an audience without conditions in Optimizely. [Learn more on how to create audiences in Optimizely using the REST API](/rest/reference/index.html#create-audience).

An example of the Optimizely REST API call and the result with CURL is displayed here:

<img src="/assets/img/integrations/audiences_rest.png">

In the above picture, the REST API call returns various fields, including an id (highlighted with an arrow). You will need to use the id in the next step.

<h3 id="add-visitors-to-an-audience">5. Add visitors to an audience</h3>

The Optimizely JavaScript API allows you to programmatically add a visitor to an Optimizely audience. To do so, you can use the following function:

```javascript
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(['addToAudience', audienceId]);
```

When you created the Optimizely audience in the previous step, you received an audience ID. You can use that ID in the JavaScript call.

<h3 id="qa-your-integration">6. QA your integration</h3>

To verify that the integration works, select an audience within your platform that you are sure you will be in. Trigger the procedure to create a corresponding Optimizely audience.

Verify that the audience creation has worked by going to `https://app.optimizely.com/projects/{{ project_id }}/audiences`. The audience that has been created should show up in the list.

<img src="/assets/img/integrations/audience_saved_audience.png">

When the audience is in the list, create and start an experiment that uses the audience. Go to your [Experiment Dashboard](https://app.optimizely.com/projects/) and click on New Experiment. Open the Audience Builder (shown below) in the Optimizely Editor.

<img src="/assets/img/integrations/audience_builder.png">

In the audience builder click on "Add a Saved Audience". Select the create audience and click on "add".

<img src="/assets/img/integrations/audience_builder_2.png">

Go to the test page you have created. Verify that the experiment is running when the uploading of the experiment is done (approximately 2 minutes after saving an experiment). You can verify if the experiment is running by doing a hard refresh on the test page. Open the JavaScript console and execute `optimizely.activeExperiments`. The console will output an array with your experiment ID.

<img src="/assets/img/integrations/active_experiments.png">

If you are sure the experiment should be running (after a few minutes) but doesn't show up in the activeExperiments array, it could be that the visitor has not been added to the Optimizely audience. You will get more information by executing `optimizely.push("log")`.

Verify with your platform that you are recognised as being in the audience. You can verify that the Optimizely integration works by opening the JavaScript console and executing `optimizely.data.visitor.audiences`. The value of the audience ID that you created should be true.

<img src="/assets/img/integrations/audience_confirm.png">

## Uploaded Lists

*Uploaded List integrations* allow customers to upload a list of user identifiers (e.g. cookies, query parameters, or other user identifiers) to Optimizely from a 3rd party application. These identifiers can be used to target experiments and segment results. Unlike audience integrations which operate client-side, user list integrations are implemented by a server-to-server exchange. For more information on uploaded lists, please refer to the Optimizely [knowledge base](https://help.optimizely.com/hc/en-us/articles/206197347).

This section walks you through how to build an integration that sends lists of users to Optimizely via the REST API. To see examples of Uploaded list integrations, check out our documentation on integrations with [Salesforce](https://help.optimizely.com/hc/en-us/articles/206524537) and [Marketo](https://help.optimizely.com/hc/en-us/articles/206440108).

<h3 id="uploaded-lists-prerequisites">Prerequisites</h3>

* Your application stores user identifiers (e.g. hashed email addresses or other unique IDs)
* User identifiers are not personally identifiable, according to Optimizely's [Terms of Service](https://www.optimizely.com/terms/)
* User identifiers can be accessed via the user's browser (e.g. in a cookie, query parameter, or otherwise)
* Comfortable using REST APIs


<h3 id="uploaded-lists-1-create-a-developer-account">1. Create a developer account</h3>

Uploaded Lists are a feature restricted to select Enterprise customers and developers. If you do not have access to Uploaded Lists and would like to develop an integration, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access to the Uploaded Lists feature and associated APIs.

<h3 id="uploaded-lists-2-register-your-application">2. Register your application</h3>

We require you to use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send lists to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

<h3 id="uploaded-lists-3-create-a-list">3. Create a list in Optimizely</h3>

You can now send lists to Optimizely via the REST API. Note that we currently limit list sizes to 5MB. If you want to send larger lists, please contact [developers@optimizely.com](mailto:developers@optimizely.com) with more information, including what size lists you hope to send via the API. [Learn how to create an uploaded list in Optimizely via the REST API](/rest/reference/#create-list).

An example of the Optimizely REST API call and the result with CURL is displayed here:

<img src="/assets/img/integrations/list_rest.png">

<h3 id="uploaded-lists-4-update-list">4. Update a list in Optimizely</h3>

If you'd like periodically refresh your lists, please use the [update endpoint](/rest/reference/#update-list) to update an existing list.

<h3 id="uploaded-lists-qa-your-integration">5. QA your integration</h3>

To test the integration end-to-end, you should verify that the lists you've created via the API appear in the [Uploaded Lists](https://help.optimizely.com/hc/en-us/articles/206197347#create) tab in Optimizely. You can download the lists directly from this interface to make sure the individual user IDs are uploaded as expected. Finally [create an audience that includes the uploaded list](https://help.optimizely.com/hc/en-us/articles/206197347#target) and run an experiment that targets that audience to make sure that users are bucketed correctly.

*Note:* You may upload lists as frequently as you like. However, it may take up to 2 hours to propagate your lists to our servers.

## Content Management

*Content Management integrations* allow customers to leverage the full power of Optimizely on a platform that manages content.  Customers can create, configure, and run experiments directly from their content platform interface without having to login to Optimizely.

There are many types of content management integrations. The example below describes an integration that tests article headlines in WordPress. Other potential integrations include: testing images from within an e-Commerce platform, testing product titles from within an e-Commerce platform, and testing an entire article from an editorial platform.

<h3 id="content-prerequisites">Prerequisites</h3>

- Your platform manages content on a website
- The content that is tested has a unique identifier, e.g. `<a id="article1234">HeadlineTest</a>`
- Comfortable using REST APIs
- Basic JavaScript skills

<h3 id="content-create-a-developer-account">1. Create a developer account</h3>

Depending on your [Optimizely plan type](https://help.optimizely.com/hc/en-us/articles/200040055), the REST API may restrict the number of calls you can make per month. To avoid going over the limit with your account, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access the REST API.

<h3 id="content-register-your-application">2. Register your application</h3>

We require you to use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send lists to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

<h3 id="create-a-configuration-form-authentication-and-project-selection">3. Create a configuration form: authentication and project selection</h3>

Users can authenticate your application to use the REST API using OAuth 2.0. You can find a description on how to implement OAuth authentication <a href="http://developers.optimizely.com/rest/reference/index.html#oauth">here</a>.

After connecting with Optimizely you can use the REST API to get all the projects for the account that the user has authenticated with. To get all the project names and their corresponding project IDs, use the <a href="/rest/reference/index.html#list-projects">list-projects</a> REST API call.

You can see an example of how the configuration form should look like in the image below. The first step is to authenticate with Optimizely (the blue button). After the authentication is done, the user will be able to select a project from the selector below "Choose a project". The options within the project are populated by the information that is returned by the <a href="/rest/reference/index.html#list-projects">list-projects</a> REST API call.

<img src="/assets/img/integrations/content_config_authentication.png">

<h3 id="create-a-configuration-form-url-targeting">4. Create a configuration form: URL targeting</h3>

Because there are many different places on a page where an article can appear, the best URL targeting condition for a content management experiment is a substring match on the entire website. You can create an option that allows customers to select different URLS to target. This targeting will be used for all experiments that are created  with the content testing tool.
<img src="/assets/img/integrations/content_config_url.png">

<h3 id="create-a-configuration-form-variation-code">5. Create a configuration form: variation code</h3>

For Optimizely to modify the right content on the page, users must be able to specify where the target content can be found. Create an HTML textbox that allows the user to specify the variation code.

<img src="/assets/img/integrations/content_config_variationcode.png">

<h3 id="content-create-an-experiment">6. Create an experiment</h3>

On the content item level, create a form that allows editors to create an experiment.

<img src="/assets/img/integrations/content_createexperiment.png">

In the form that is added on a content item level, create fields that allow a user to fill in alternate titles for the article.

Sample HTML code:

```xml
<h1>Variation#1</h1>
<input type="text" id="post_title1" class="optimizely_variation" placeholder="AlternateTitle1">
<h1>Variation#2</h1>
<input type="text" id="post_title2" class="optimizely_variation" placeholder="AlternateTitle2">
<a id="optimizely_create" class="button-primary">CreateExperiment</a>
```

With the REST API you can create the [experiment](/rest/reference/index.html#create-experiment). In the screenshot you see that a user has the ability to fill in two alternate titles. This means that the created experiments should have 2 + 1 (for the original) variations. The variation code of the variations is defined by the setting in Step 5. and the values of the fields in the above form. If we consider the following scenario:
- The setting in Step 5. is `$(".optimizely-$POST_ID").text($NEW_TITLE);`
- The id of the article the user is currenctly editing is 423
- Original headline is "Hello World!"
- Alternate headline 1 is "Hello Mars!"
- Alternate headline 2 is "Hello Friends!"

The variation code that you should use to [create the variation](/rest/reference/index.html#create-variation) using the REST API is:

**Original**
```// nothing to do here```

**Variation #1**
$(".optimizely-423").text("Hello Mars!");

**Variation #1**
$(".optimizely-423").text("Hello Friends!");

If the article has a specific URL, like www.example.com/articles/article-$POST-ID, you can use the REST API to [create a pageview goal](/rest/reference/index.html#create-goal) for the experiment. You can read more about pageview goals [here](https://help.optimizely.com/hc/en-us/articles/200090069-Pageview-goals).

The REST API calls you'll use:

- [Create experiment](/rest/reference/index.html#create-experiment)
- [Create variations](/rest/reference/index.html#create-variation)
- [Create goals](/rest/reference/index.html#create-goal)

<h3 id="content-start-and-pause-experiment">7. Start and pause experiment</h3>

After clicking the "Create experiment" button, the form on the content will change to allow a user to start, pause and modify the experiment.

<img src="/assets/img/integrations/content_startexperiment.png">

You can use the REST API to [update an experiment](/rest/reference/index.html#experiments) and [a variation](/rest/reference/index.html#update-variation).

To start and pause the experiment, update the "status" field on an experiment to the value "Running".

<h3 id="content-display-results">8. Display results</h3>

For editors to work entirely in the content platform, you will also need to report the results of the experiments in the platform.

<img src="/assets/img/integrations/content_results.png">

Results can be fetched using the [get experiment results](/rest/reference/index.html#get-stats) function of the REST API.

## Conversion Tracking

*Conversion Tracking integrations* allow customers to use custom events (e.g. phone calls) as goals for their experiments, as opposed to default goals like clicks and pageviews. These integrations use Optimizely’s custom event goals functionality to track conversions. To see examples of Conversion Tracking integrations, check out our documentation on [DialogTech](https://help.optimizely.com/hc/en-us/articles/202984310) or [FreeSpee](https://help.optimizely.com/hc/en-us/articles/204468298) integrations.

This section walks you through how to create a conversion tracking integration using [custom event goals](https://help.optimizely.com/hc/en-us/articles/200039925) and the [offline conversion API](https://help.optimizely.com/hc/en-us/articles/200040195).

<h3 id="create-a-custom-event-goal">1. Create a custom event goal</h3>

In order to track conversion events in Optimizely, a [custom event goal](https://help.optimizely.com/hc/en-us/articles/200039925) needs to be defined. The custom event goal will be used to identify conversion events. It is possible to create multiple custom event goals for each type of conversion. Each custom event goal has a unique name that can be referenced in your application.

There are two ways you can create a custom event goal:

* *Option 1: Create custom event goal via the REST API (preferred).* For a seamless experience, you can create a custom event goal on behalf of the customer using the REST API. If you are using the REST API, we require using [OAuth 2.0](/rest/reference/index.html#oauth) to authenticate with Optimizely. [Learn how to create goals via the REST API](/rest/reference/index.html#create-goal). The goal type field needs to have the value "1". A commonly used value for the "event" field is `phone_call_conversion`.

* *Option 2: Ask the customer to create custom event goal manually.* The easiest way for you to implement this integration is to instruct the customer to do a couple of manual steps. Instruct the customer to login to their Optimizely account and create a custom event goal for an experiment manually. You may want to require the customer to use a pre-specified name for the goal, e.g. `phone_call_conversion`, so you can reference it later. [Learn how to create custom event goals in Optimizely](https://help.optimizely.com/hc/en-us/articles/200039925#add).


<h3 id="reference-custom-event-goal">2. Reference custom event goal in your application</h3>

You'll need to reference the name of the custom event goal that was defined in Step 1. If the customer is creating the custom event goal manually prompt the user to enter the name of the custom event goal in your application (e.g. `phone_call_conversion`).

If you created the custom event goal using the REST API, use the value you chose for the "event" field.

<h3 id="collect-information-about-the-visitor">3. Collect information about the visitor</h3>

In addition to the providing a custom event goal name, you'll also need to specify information about the visitor so Optimizely knows how to tie the conversion event back to the experiment and variation that was shown. All of this information can be fetched from a browser using the [JS API](/js). For convenience, we've provided some helper functions that you can use to collect all of the necessary information:

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
    resultstring = "";
    for (var exp in optimizely.data.state.variationIdsMap) {
        resultstring += "&x" + exp + "=" + optimizely.data.state.variationIdsMap[exp].join("_");
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
    var resultstring = "";
    for (var seg in optimizely.data.visitor.segments) {
        resultstring += "&s" + seg + "=" + optimizely.data.visitor.segments[seg];
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

<h3 id="create-an-offline-conversion">4. Create an offline conversion</h3>

Once you know the required information about a visitor and the name of the custom event goal you want to track, you can create an offline conversion using a GET request in this format:

```http
http://{{ project_id }}.log.optimizely.com/event
                               ?a={{ project_id }}
                               &n={{ goal identified }}
                               &u={{ Optimizely user id }}
                               &x{{experiment id 1}}={{variation id 1}}
                               &s{{segment id 1}}={{segment value 1}}
```

To learn more about the expected format of these parameters see
[Tracking offline conversion events with Optimizely](https://help.optimizely.com/hc/en-us/articles/200040195).

The following function can be used to construct a valid offline conversion URL using the sample JavaScript functions above:

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
    var result = "http://" + getProjectId() + ".log.optimizely.com/event?a=" + getProjectId() + "&n=" + goalname + "&u=" + getUserId() + getVariationsInParameters() + getSegmentsInParameters();
    if (typeof (value) != "undefined") {
        result += "&v=" + value;
    }
    return result;
}

```

<h3 id="conversion-5-qa-integration">5. QA your integration</h3>

To verify that the integration works, create an Optimizely experiment that includes the custom event goal in question. Then send visitor test traffic through your experiment and fire the offline conversion goals. Check your results page for the experiment. It should now include data on how many visitors and offline conversions have occurred for this experiment.

## Snippet Installation

*Snippet integrations* allow users to implement the Optimizely functionality on their website without the help of a developer to add the Optimizely snippet.

<h3 id="snippet-prerequisites">Prerequisites</h3>

* Your platform is able to programmatically modify HTML templates

<h3 id="snippet-create-a-developer-account">1. Create a developer account</h3>

Depending on your [Optimizely plan type](https://help.optimizely.com/hc/en-us/articles/200040055), the REST API may restrict the number of calls you can make per month. To avoid going over the limit with your account, [create a free developer account](https://www.optimizely.com/?modal=devsignup). Creating a developer account does not require a credit card and will provide full access the REST API.

<h3 id="snippet-register-your-application">2. Register your application</h3>


We require you to use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application who want to install the Optimizely snippet. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

<h3 id="snippet-create-a-configuration-form">3. Create a configuration form</h3>

Within your platform, you should add a form for installing Optimizely in a place only administrators have access to. The configuration form should consist of a button to authenticate with Optimizely using OAuth and a selector for selecting the project that the user wants to install on their website. This is an example form:

<img src="/assets/img/integrations/snippet_wordpress_first.png">

After connecting with Optimizely you can use the REST API to get all the projects connected to the account that the user authenticated with. To get all the project names and their corresponding project IDs, use the <a href="/rest/reference/index.html#list-projects">list-projects</a> REST API call.

<img src="/assets/img/integrations/snippet_wordpress_choose.png">

<h3 id="implement-snippet-in-head">4. Implement snippet in the head section of every page</h3>

Write custom code that automatically adds the Optimizely snippet to every page using the project ID that was chosen by the user.

This is an example of how it would work within WordPress:

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

Want to learn more about the wp_head function used above? Check out the [WordPress documentation here](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_head).

<h3 id="snippet-qa-integration">5. QA your integration</h3>
To verify whether the snippet integration is working correctly, use the snippet integration form to add a snippet to a test page. If you have gone through all the steps of your form, the Optimizely snippet should be installed on the page. Verify wether the snippet integration is working correctly by going to the test page on the website and opening the JavaScript console. When you execute `optimizely.getProjectId()` Optimizely should return the project ID that is installed on the page.

<img src="/assets/img/integrations/snippet_validation.png">
