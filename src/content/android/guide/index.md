---
template: page-sidebar
title: "Optimizely Android SDK Tutorial"
---
# Optimizely Android SDK Tutorial

The following steps will allow you to try out Optimizely's SDK in our Tutorial App.  This guide is a walkthrough of all the key code that you can include in your app prior to releasing your app live to the Play Store.

## Download the tutorial app

The tutorial app is included as a sub directory in the SDK directory.  It can be found in the *<a href="https://github.com/optimizely/Optimizely-Android-SDK/tree/master/TutorialApp" target="_blank">TutorialApp</a>* folder in the SDK.

[ZIP](http://github.com/optimizely/Optimizely-Android-SDK/zipball/master) | [TAR](http://github.com/optimizely/Optimizely-Android-SDK/tarball/master) | [GitHub](http://github.com/optimizely/Optimizely-Android-SDK)

<h2 id="create-an-android-project">1. Create an Android Project</h2>

To create an Android project, select "Create New Project" in the [Optimizely Dashboard](https://www.optimizely.com/dashboard):

   <img src="/assets/img/android/New_projectbutton.png" alt="Drawing" style="width: 80%;"/>

   <img src="/assets/img/android/create-project.png" alt="Drawing" style="width: 80%;"/>

<a name="project-code"></a>Once you've created a project, please take a look at the `Settings` tab to find your project ID and API key which you will use during installation:

<img src="/assets/img/android/project-code.png" alt="Project Code Dialog">

<h2 id="add-your-api-token">2. Add Your API token</h2>

Now, you're ready to add some code so your app can connect with your Optimizely account.

Optimizely assigns each project a unique identifier known as an API token. Your app identifies itself to the Optimizely Android SDK by initializing the SDK with this token.

Modify the Optimizely call in MainActivity.java in the `onCreate()` function. The code can be copied from your `Implementation Settings`, which you can find by selecting on the appropriate Android Project in your [Optimizely Home](https://app.optimizely.com/projects).  For more details, you can refer back to [Step 2: Create an Android project](#accountcreation).

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    
    ...

    // [OPTIMIZELY] (REQUIRED) Replace this line with your API token, and don't forget to go to
    // your AndroidManifest.xml (e.g. it should look like optly123456, replace 123456 with your project id)
    // Replace <YOUR_API_TOKEN> with your API Token from your Optimizely Dashboard
    // optimizely.com/dashboard.  It should look like: "AAMseu0A6cJKXYL7RiH_TgxkvTRMOCvS~123456"
    Optimizely.startOptimizelyWithAPIToken(<YOUR_API_TOKEN>, getApplication(), mOptimizelyEventListener);
}
```

In this example, you can see that the Optimizely event listener is included in this call.  By registering this callback with Optimizely and overriding methods you're interested in, you can get notifications when various Optimizely events occur.  To learn more, you can go [here](../reference/index.html#optimizely-debug).

This call will block until Optimizely is started. For a non-blocking call, use the following version which takes a callback listener as the third argument. If you are not interested in the callback, you can pass in `null`:

```java

private static void mOptimizelyEventListener = new DefaultOptimizelyEventListener() {
    @Override onOptimizelyStarted() {}
    @Override onOptimizelyFailedToStart(String message) {}
};

@Override
protected void onCreate(Bundle savedInstanceState) {
    // More startup code here
    Optimizely.startOptimizelyAsync("<API Token>", getApplication(), mOptimizelyEventListener);
}
```

 Starting with version 1.1, Optimizely's Android SDK uses a unique URL scheme handler to help you edit and test your experiments.

   Update the existing intent filter to the MainActivity entry of AndroidManifest.xml with your project id.
   
   *Note:
   The scheme includes a unique identifier.  Be sure to replace [PROJECT_ID] with your project id (e.g. optly123456).*

   ```xml
   <activity
     android:name="com.optly.tutorialapp.MainActivity"
     android:label="@string/app_name" >
     <intent-filter>
       <action android:name="android.intent.action.MAIN" />
       <category android:name="android.intent.category.LAUNCHER" />
       <category android:name="android.intent.category.DEFAULT" />
     </intent-filter>
     <intent-filter>
       <action android:name="android.intent.action.VIEW" />
       <category android:name="android.intent.category.DEFAULT" />
       <category android:name="android.intent.category.BROWSABLE" />
       <data android:scheme="optly[PROJECT_ID]" />
     </intent-filter>
   </activity>
   ```

At this point you should run your application to register the SDK installation. The Optimizely SDK will register itself in the background once you put the app into edit mode. You will see your project overview display light up, allowing you to create an experiment:

   <img src="/assets/img/android/sdk-detected.png", style="width: 70%"/>


<h2 id="create-an-experiment">4. Create an Experiment</h2>

After creating an Android project and installing the SDK, click the `Create Experiment` button in the upper right hand side of your project overview.

#### Custom View Tagging

The Optimizely Android SDK identifies Views within your application using the view hierarchy of the view-- in some cases you may need to specify your own ID or mark a specific view in a collection view as unique.  You can see an example of how to do this in *VisualEditorActivity.java*.

```
Optimizely.setOptimizelyId("Widgets", takeToWidgets);
```

See this section on [configuring the visual editor](#configure_visual_editor).

<h2 id="modify-live-variables">4. Modify Live Variables</h2>

Live variables have already been added to the sample app. You can refer to the *LiveVariablesAdapter.java* file.  There are 2 examples of live variables used in that file, which are shown below.  Save your experiment after you have made the change.

<img src="/assets/img/android/live_variable_number.png" alt="Drawing" style="width: 60%;"/>

For more details about live variables, you can refer [here](../reference/index.html#register-live-variables).

<h2 id="modify-code-blocks">5. Modify Code Blocks</h2>

Code Blocks have already been added to the sample app. You can refer to the *CodeBlocksActivity.java* file.  There is 1 example of a code block.  Save your experiment after you have made the change.

1. If you tap on "Code Blocks" > "Sign in" without modifying the code block, the View Controller that will appear is shown below:

   <img src="/assets/img/android/code_block_2.png" alt="Drawing" style="width: 60%;"/>

2. Return to the "Sign in" View Controller:

   <img src="/assets/img/android/code_block_3.png" alt="Drawing" style="width: 60%;"/>

3. Now, select "addOnboarding", and if you navigate through the app, you will see a new screen appear, which is shown below:

   <img src="/assets/img/android/code_block_4.png" alt="Drawing" style="width: 60%;"/>


For more details about code blocks, you can refer [here](../reference/index.html#code-blocks).

<h2 id="add-custom-tags">6. Add Custom Tags</h2>

Custom tags sample code can be found in the *MainActivity.java* and *CodeBlocksActivity.java* files.  In order to create a test that only runs for returning users as defined in the app, in your Optimizely experiment you can go to Audiences to set up the custom tag condition.

<img src="/assets/img/android/custom_tags_guide.png" alt="Drawing" style="width: 60%;"/>

For more details about custom tags, you can refer [here](../reference/index.html#custom-tags)

<h2 id="track-event">7. Track Event</h2>

trackEvent sample code can be found in the *CodeBlocksActivity.java* file.  In order to track the custom event for a specific experiment, you can click on the flag image on the top right of the screen next to the "Start Experiment" button.

<img src="/assets/img/android/goals_flag.png" alt="Drawing" style="width: 30%;"/>

From there, you can add a new goal of goal type custom event as shown below:

<img src="/assets/img/android/goal_modal.png" alt="Drawing" style="width: 60%;"/>

For more details, you can refer [here](../reference/index.html#track-event).

<h2 id="revenue-tracking">8. Revenue Tracking</h2>

Code for tracking revenue can be found in the *CodeBlocksActivity.java* file.  In order to track revenue for a specific experiment, you can click on the flag image on the top right of the screen next to the "Start Experiment" button.

<img src="/assets/img/android/goals_flag.png" alt="Drawing" style="width: 30%;"/>

From there, you can click on Add a Saved Goal > Select Revenue:

<img src="/assets/img/android/revenue.png" alt="Drawing" style="width: 60%;"/>

For more details, you can refer [here](../reference/index.html#revenue-tracking).

<h2 id="analytics-integrations">9. Analytics Integration</h2>

For guidance on how to implement Google Analytics and Mixpanel integrations, you can refer to the *MainActivity.java* file in the comments.

For more details, you can refer [here](../reference/index.html#analytics-integrations)


<h2 id="qa">10. QA</h2>


### Preview Mode
Preview mode allows you to force your app into a certain variation for a given experiment in order to check that your app and the experiment are both running smoothly. To enter preview mode, connect your device to the editor, select your desired variation, open the variation settings drawer, and click `Preview`

<img src="/assets/img/android/launch-preview.png" alt="Enter Preview Mode" />
