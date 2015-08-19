---
template: page-sidebar
title: "Optimizely iOS SDK Guide"
---
# Guide

The following steps will allow you to try out Optimizely's SDK in our Tutorial App.  This guide is a walkthrough of all the key code that you can include in your app prior to releasing your app live to the App Store.

## Download the tutorial app

The tutorial app can be found in the *<a href="https://github.com/optimizely/Optimizely-iOS-SDK/tree/master/TutorialApp" target="_blank">TutorialApp</a>* folder in the SDK.

[![SDK Version](http://img.shields.io/cocoapods/v/Optimizely-iOS-SDK.svg?style=flat)](http://developers.optimizely.com/ios/help/html/index.html)

[ZIP](http://github.com/optimizely/Optimizely-iOS-SDK/zipball/master) | [TAR](http://github.com/optimizely/Optimizely-iOS-SDK/tarball/master) | [GitHub](http://github.com/optimizely/Optimizely-iOS-SDK)

## 1. Create an iOS Project

To create an iOS project, select "Create New Project" in the [Optimizely Dashboard](https://www.optimizely.com/dashboard):

   <img src="/assets/img/ios/New_projectbutton.png" alt="Drawing" style="width: 80%;"/>

   <img src="/assets/img/ios/create-project.png" alt="Drawing" style="width: 80%;"/>

<a name="project-code"></a>Once you've created a project, please take a look at the `Settings` tab to find your project ID and API key which you will use during installation:

<img src="/assets/img/ios/project-code.png" alt="Project Code Dialog">

## 2. Add Your API token
1. Now, you're ready to add your API token to the tutorial app!  Open the `AppDelegate.m` file in the Project Navigator.  Replace the dummy API token `@"AAMseu0A6cJKXYL7RiH_TgxkvTRMOCvS~123456"` at the beginning of `application:didFinishLaunchingWithOptions:` in your
app delegate. The code can be copied from your `Project Code`, which you can find by selecting the appropriate iOS Project in your [Optimizely Dashboard](https://www.optimizely.com/dashboard).  For more details, you can refer back to [Step 1: Create an iOS project](#accountcreation).

<img src="/assets/img/ios/project-code.png" alt="Project Code Dialog">

*Note: We recommend putting this code at the beginning of your `application:didFinishLaunchingWithOptions:` function.*

3. <a name="urlscheme"></a> In order to enter Edit Mode (which will allow your app to be detected by Optimizely's Editor), you'll have to define a URL scheme for Optimizely.

   0. <a name="urlschemeInfo"></a> In the project editor, click on "Targets" -> Your app name -> "Info" tab.
   1. Add `optly{PROJECT_ID}` to "URL Schemes."  Your Project ID is available at the bottom of the <a href="#project-code">Project Code</a> dialog box. For instance, if your Project ID is `123456`, your URL Scheme would be `optly123456`.
      Once completed, your `URL Scheme` should look like this:
      <img src="/assets/img/ios/project-plist.png" alt="Drawing" style="width: 100%; padding-bottom:10px;"/>

   2. <a name="urllinkgenerate"></a>Once you run your app in DEBUG mode with the SDK installed, you should see the image below in your [Optimizely Dashboard](https://www.optimizely.com/dashboard).  Once the SDK is detected, the Create Experiment button will appear, and you can continue to Step 3 to create your experiment.

        <img src="/assets/img/ios/sdk-detected.png" alt="Drawing" style="width: 80%;"/>

## 3. Create an experiment

Once you have a project created and the SDK installed, you should be ready to start running experiments to generate more value from your mobile apps.

1. In the Optimizely Application, select the project that you use for your Android or iOS experiments and click Create Experiment.

<img src="/assets/img/ios/create_experiment.png" alt="Drawing" style="width: 80%;"/>

2. Put the app into *Edit Mode* by drawing the Optimizely 'O'.

## 4. Modify Live Variables

Live variables have already been added to the sample app. You can refer to the *LiveVariablesViewController.m* file.  There are 3 examples of live variables used in that file, which are shown below.  Save your experiment after you have made the change.

<img src="/assets/img/ios/live_variable_number.png" alt="Drawing" style="width: 60%;"/>

For more details about live variables, you can refer [here](../reference/index.html#register-live-variables).

## 5. Modify Code Blocks

Code Blocks have already been added to the sample app. You can refer to the *CodeBlocksViewController.m* file.  There are 3 examples of live variables used in that file, which are shown below.  Save your experiment after you have made the change.

1. If you tap on "Code Blocks" > "Sign in" without modifying the code block, the View Controller that will appear is shown below:

<img src="/assets/img/ios/code_block_2.png" alt="Drawing" style="width: 60%;"/>

2. Return to the "Sign in" View Controller:

<img src="/assets/img/ios/code_blocks_3.png" alt="Drawing" style="width: 60%;"/>

3. Now, select "One Stage", and if you navigate through the app, you will see a new screen appear, which is shown below:

<img src="/assets/img/ios/code_blocks_4.png" alt="Drawing" style="width: 60%;"/>


For more details about code blocks, you can refer [here](../reference/index.html#code-blocks).

## 6. Add Custom Tags

Custom tags sample code can be found in the *AppDelegate.m* and *CodeBlocksViewController.m* files.  In order to create a test that only runs for returning users as defined in the app, in your Optimizely experiment you can go to Options > Targeting to set up the custom tag condition.

<img src="/assets/img/ios/custom_tags_guide.png" alt="Drawing" style="width: 60%;"/>

For more details about custom tags, you can refer [here](../reference/index.html#custom-tags)

## 7. Track Event

trackEvent sample code can be found in the *CodeBlocksViewController.m* file.  In order to track the custom event for a specific experiment, you can click on the flag image on the top right of the screen next to the "Start Experiment" button.

<img src="/assets/img/ios/goals_flag.png" alt="Drawing" style="width: 30%;"/>

From there, you can add a new goal of goal type custom event as shown below:

<img src="/assets/img/ios/goal_modal.png" alt="Drawing" style="width: 60%;"/>

For more details, you can refer [here](../reference/index.html#track-event).

## 8. Revenue Tracking

Code for tracking revenue can be found in the *CodeBlocksViewController.m* file.  In order to track revenue for a specific experiment, you can click on the flag image on the top right of the screen next to the "Start Experiment" button.

<img src="/assets/img/ios/goals_flag.png" alt="Drawing" style="width: 30%;"/>

From there, you can click on Add a Saved Goal > Select Revenue:

<img src="/assets/img/ios/revenue.png" alt="Drawing" style="width: 60%;"/>

For more details, you can refer [here](../reference/index.html#revenue-tracking).

## 9. Analytics Integration

For guidance on how to implement Google Analytics and Mixpanel integrations, you can refer to the *AppDelegate.m* file in the comments.

For more details, you can refer [here](../reference/index.html#analytics-integrations)

## 10. Create an Experiment
After creating an iOS project and installing the SDK, reference [this guide in our Knowledge Base](https://help.optimizely.com/hc/en-us/articles/202296994), which will walk you through how to set up an experiment.

## 11. QA


### Preview Mode
Preview mode allows you to view your app in a different variations for a given experiment in order to check that your app and the experiment are both running smoothly. To enter preview mode, connect your device to the editor, open the `Preview` menu, and click `Launch Preview`

<img src="/assets/img/mobile/launch-preview.png" style="width: 60%;" alt="Enter Preview Mode" />

Your app will restart and you will see the Optimizely preview menu icon displayed over your app content.
 The icon may be repositioned by dragging it. Tapping the icon will reveal the Preview Menu which allows you to switch variations, view the goals that have been triggered so far, and see the code blocks and live variables that are included in the experiment.

<img src="/assets/img/ios/preview-menu.gif" style="width: 40%;" alt="Preview Mode Demo" />

### Pre-launch Checklist

Now that you've created an experiment and successfully installed the Optimizely iOS SDK, below is a checklist to go through prior to releasing your app to the app store with the SDK:

1. In order to set up your app such that you can QA experiments (beyond using Preview), we recommend either having a separate [Project](#accountcreation) for development and production or inserting [Custom Tags](#customtags), that are only set for certain QA devices.  If you decide to go with setting up 2 separate projects, we recommend setting up an `#ifdef` to ensure that only one project code snippet is defined at any given time.

2. Were you able to connect to Optimizely's Visual Editor?  If you ran into issues, you can try out this [troubleshooting tip](#cantseeappineditor).

3. [Configure your app](#urlscheme) so that non-technical members of your team can set up and run experiments using the visual editor on a physical device without the need of XCode.  You can try downloading the development build on your device and try opening the [link](#urllinkgenerate) to make sure that this is set up properly.

4. (Optional) If you have a separate project for development and production, you can run your experiments in your development environment to check that results are updating and that you are seeing the different variations.
    - A useful debugging tool is to enable logging (be sure to disable this feature when your app is live in the app store) `[Optimizely sharedInstance].verboseLogging = YES`  For each event that is triggered, you will see a log statement.  Be sure to check that verboseLogging is *not* enabled in production.
    - You will want to make sure that each experiment does not make changes to the same element (otherwise only one of the experiments will run).
    - Optimizely tracks unique visitors, so that we make sure that the same user sees the same experience.  If you would like to check that you are getting a random experience, you will need to delete the app to be counted as a new visitor.
    - By default, Optimizely sends network calls every 2 minutes or upon backgrounding. (You can find more details about modifying the SDK network settings [here](#networksettings)). In order to check that your event data is being updated in Optimizely's dashboard as expected, you can either:
       1. Trigger events in the app and keep the app foregrounded for 2 minutes
       2. Background the app so that events are sent to our servers.
<br  />
5. Once you've checked all these steps, you're ready to release to the app store!  To learn more about how to use Optimizely's editor and get additional testing ideas, you can check out our articles in [Optiverse](https://help.optimizely.com/hc/en-us/sections/200666084-Mobile-Optimization).
