---
template: page-sidebar
title: "Optimizely iOS SDK Tutorial"
---
# Optimizely iOS SDK Tutorial

The following steps will allow you to try out Optimizely's SDK in our Tutorial App.  This guide is a walkthrough of all the key code that you can include in your app prior to releasing your app live to the App Store.

## Download the tutorial app

The tutorial app is included as a sub directory in the SDK directory.  It can be found in the *<a href="https://github.com/optimizely/Optimizely-iOS-SDK/tree/master/TutorialApp" target="_blank">TutorialApp</a>* folder in the SDK.

[![SDK Version](http://img.shields.io/cocoapods/v/Optimizely-iOS-SDK.svg?style=flat)](http://developers.optimizely.com/ios/help/html/index.html)

[ZIP](http://github.com/optimizely/Optimizely-iOS-SDK/zipball/master) | [TAR](http://github.com/optimizely/Optimizely-iOS-SDK/tarball/master) | [GitHub](http://github.com/optimizely/Optimizely-iOS-SDK)

<h2 id="create-an-ios-project">1. Create an iOS Project</h2>

To create an iOS project, select "Create New Project" in the [Optimizely Dashboard](https://www.optimizely.com/dashboard):

   <img src="/assets/img/ios/New_projectbutton.png" alt="Drawing" style="width: 80%;"/>

   <img src="/assets/img/ios/create-project.png" alt="Drawing" style="width: 80%;"/>

<a name="project-code"></a>Once you've created a project, please take a look at the `Settings` tab to find your project ID and API key which you will use during installation:

<img src="/assets/img/ios/project-code.png" alt="Project Code Dialog">

<h2 id="add-your-api-token">2. Add Your API token</h2>

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

<h2 id="create-an-experiment">3. Create An Experiment</h2>

Once you have a project created and the SDK installed, you should be ready to start running experiments to generate more value from your mobile apps.

1. In the Optimizely Application, select the project that you use for your iOS experiments and click Create Experiment.

<img src="/assets/img/ios/create_experiment.png" alt="Drawing" style="width: 80%;"/>

2. Put the app into *Edit Mode* by drawing the Optimizely 'O'.

<h2 id="modify-live-variables">4. Modify Live Variables</h2>

Live variables have already been added to the sample app. You can refer to the *LiveVariablesViewController.m* file.  There are 3 examples of live variables used in that file, which are shown below.  Save your experiment after you have made the change.

<img src="/assets/img/ios/live_variable_number.png" alt="Drawing" style="width: 60%;"/>

For more details about live variables, you can refer [here](../reference/index.html#register-live-variables).

<h2 id="modify-code-blocks">5. Modify Code Blocks</h2>

Code Blocks have already been added to the sample app. You can refer to the *CodeBlocksViewController.m* file.  There is 1 example of a code block used in that file, which are shown below.  Save your experiment after you have made the change.

1. If you tap on "Code Blocks" > "Sign in" without modifying the code block, the View Controller that will appear is shown below:

   <img src="/assets/img/ios/code_block_2.png" alt="Drawing" style="width: 60%;"/>

2. Return to the "Sign in" View Controller:

   <img src="/assets/img/ios/code_blocks_3.png" alt="Drawing" style="width: 60%;"/>

3. Now, select "One Stage", and if you navigate through the app, you will see a new screen appear, which is shown below:

   <img src="/assets/img/ios/code_blocks_4.png" alt="Drawing" style="width: 60%;"/>


For more details about code blocks, you can refer [here](../reference/index.html#code-blocks).

<h2 id="add-custom-tags">6. Add Custom Tags</h2>

Custom tags sample code can be found in the *AppDelegate.m* and *CodeBlocksViewController.m* files.  In order to create a test that only runs for returning users as defined in the app, in your Optimizely experiment you can go to Audiences to set up the custom tag condition.

<img src="/assets/img/ios/custom_tags_guide.png" alt="Drawing" style="width: 60%;"/>

For more details about custom tags, you can refer [here](../reference/index.html#custom-tags)

<h2 id="track-event">7. Track Event</h2>

trackEvent sample code can be found in the *CodeBlocksViewController.m* file.  In order to track the custom event for a specific experiment, you can click on the flag image on the top right of the screen next to the "Start Experiment" button.

<img src="/assets/img/ios/goals_flag.png" alt="Drawing" style="width: 30%;"/>

From there, you can add a new goal of goal type custom event as shown below:

<img src="/assets/img/ios/goal_modal.png" alt="Drawing" style="width: 60%;"/>

For more details, you can refer [here](../reference/index.html#track-event).

<h2 id="revenue-tracking">8. Revenue Tracking</h2>

Code for tracking revenue can be found in the *CodeBlocksViewController.m* file.  In order to track revenue for a specific experiment, you can click on the flag image on the top right of the screen next to the "Start Experiment" button.

<img src="/assets/img/ios/goals_flag.png" alt="Drawing" style="width: 30%;"/>

From there, you can click on Add a Saved Goal > Select Revenue:

<img src="/assets/img/ios/revenue.png" alt="Drawing" style="width: 60%;"/>

For more details, you can refer [here](../reference/index.html#revenue-tracking).

<h2 id="analytics-integrations">9. Analytics Integration</h2>

For guidance on how to implement Google Analytics and Mixpanel integrations, you can refer to the *AppDelegate.m* file in the comments.

For more details, you can refer [here](../reference/index.html#analytics-integrations)


<h2 id="qa">10. QA</h2>


### Preview Mode
Preview mode allows you to view your app in a different variations for a given experiment in order to check that your app and the experiment are both running smoothly. To enter preview mode, connect your device to the editor, open the `Preview` menu, and click `Launch Preview`

<img src="/assets/img/mobile/launch-preview.png" style="width: 60%;" alt="Enter Preview Mode" />

Your app will restart and you will see the Optimizely preview menu icon displayed over your app content.
 The icon may be repositioned by dragging it. Tapping the icon will reveal the Preview Menu which allows you to switch variations, view the goals that have been triggered so far, and see the code blocks and live variables that are included in the experiment.

<img src="/assets/img/ios/preview-menu.gif" style="width: 40%;" alt="Preview Mode Demo" />
