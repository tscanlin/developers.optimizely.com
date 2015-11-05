---
template: page-sidebar
title: "Optimizely Android SDK Reference"
---

# Optimizely Android SDK Reference

This section provides information on how to customize your SDK installation and code snippets for how to implement Optimizely's APIs.

## Connecting to Optimizely's Editor

It is highly recommended to use Optimizely's 'O' gesture to connect your app to Optimizely's editor.  However, there are other options should you choose not to implement Optimizely's URL scheme.

### Programmatically Enable Edit Mode

Typically Optimizely's 'O' gesture will put your app into Edit Mode, which will then allow you to connect with Optimizely's editor.  However, if you choose not to implement the URL scheme in your app or are unable to put the app into 'Edit Mode', prior to `startOptimizelyWithAPIToken`, you can call [enableEditor](/android/help/reference/com/optimizely/Optimizely.html#enableEditor%28%29) in the development version of your app so that you can make changes.

```java
Optimizely.enableEditor();
Optimizely.startOptimizelyWithAPIToken(getOptimizelyToken(), getApplication());
```

 **Note that you should always remove the enableEditor call prior to releasing your app to the App store.**

### Disable Gesture

By default, Optimizely's Android SDK disables the gesture if the app is live in the Play store.  However, if you would like to ensure that your end users are not able to put the app into edit mode (e.g. if you have an enterprise app that you release to internal employees), you can call the [setEditGestureEnabled](/android/help/reference/com/optimizely/Optimizely.html#setEditGestureEnabled%28boolean%29) method prior to `startOptimizelyWithAPIToken`.

An example of how to implement this method can be found below:

```java
Optimizely.setEditGestureEnabled(false);
Optimizely.startOptimizelyWithAPIToken(getOptimizelyToken(), getApplication());
```

## Visual Editor Configuration

The Optimizely Visual Editor allows you to modify existing views in your app. The first time you connect your app to Optimizely's Visual Editor, you can see which views are automatically detected by Optimizely.  Optimizely is able to detect and allows you to modify these views by:

- Dynamically tagging all views with an Optimizely ID
- Optimizely uses swizzling to enable view changes

### Tag Your Views

There are some cases where Optimizely will not be able to detect your views.  For those views, you should give them a unique `optimizelyId`.  An example of how to do this is below:

```java
TextView priceTextView = (TextView) rowView.findViewById(R.id.textViewPrice);
Optimizely.setOptimizelyId("price_text_label", priceTextView);
```

### Disable Visual Editor

If you decide you want to exclusively use Live Variables and Code Blocks, you can set [setVisualExperimentsEnabled](/android/help/reference/com/optimizely/Optimizely.html#setVisualExperimentsEnabled%28boolean%29) to false.

## Register Live Variables

Live Variables allow you to designate variables in your app that can be assigned values in the Optimizely editor.  These values can be modified by Optimizely's editor even after you have released your app to the app store.  For example, you might want to create an experiment that tests various values for gravity. Live Variables are declared as static variables in your code and then can be accessed anywhere in your application. These values can be used as feature flags, to modify the behavior of your app, or as a convenient way to update your app with new styling. Live variables must be declared as static variables in your app in order for the Optimizely Editor to detect them.

```java
public class MyActivity extends Activity {
  private static LiveVariable<Float> discountVariable = Optimizely.floatForKey("Gravity", 9.8f /* default value */);
  private static LiveVariable<Boolean> enableGravityVariable = Optimizely.booleanForKey("EnableGravity", true /* default value */);

  private float updateSpeed(float currentSpeed) {
    if (enableGravityVariable.get()) {
        return currentSpeed + gravityVariable.get();
    } else {
      return currentSpeed;
    }
  }
}
```

Once a variable is defined, each variation can specify a different value for that variable.

Optimizely defines different  `<type>Variable()` functions for all the basic Java types. See the [Class Documentation](/android/help/reference/com/optimizely/Optimizely.html) for more information.  In order to access the variable, call `Optimizely.<type>Variable` and provide the corresponding variable name. Variables are scoped at an application level, thus repeated calls to `Optimizely.<type>Variable` will return the same value throughout your application.

```java
import com.optimizely.Optimizely;

public class GameUtils {
  private static World makeNewWorld() {
      double gravity = Optimizely.floatVariable("Gravity", 9.8).get();

      // Use gravity here...
  }
}
```

You're now ready to edit your Live Variables using the Optimizely web editor:

0. Make sure you have not called `Optimizely.setEditGestureEnabled(false)`.
1. Load your application and draw a large circle to connect in edit mode.
2. Navigate to the variables section of the editor.
<img src="/assets/img/android/editor-variables-add-button.png" alt="Drawing" style="width: 50%;"/>
3. Click the "Add Variable" button to open a dialog where you can select variables to add to your experiment.
4. Once you have added a variable to the experiment, you can select a value for each variation in the variables section of the editor.
5. While in edit mode, changes to the variable will be applied on subsequent reads, thereby allowing you to quickly test your variable logic.  However, we recommend that you verify your variable tests in [preview mode](/android/getting-started/index.html#preview-mode) prior to going live with the experiment.
6. Once you've connected your app to the editor, you can later edit live variables without connecting a device. However, if you make any changes to your app, make sure to connect it again to allow your changes to sync with the editor.

### Register Variable Callback

By default, in Edit Mode, Optimizely's editor will apply variable value changes once the screen the variable is defined on is reloaded.  However, there may be times where you want the changed value of the variable to be reflected in your app without the screen being refreshed while you're making experiment changes.  To do so, you can use the overloaded `Optimizely.<type>Variable` methods like `"stringVariable(String variableKey, String defaultValue, Callback callback)"`.

An example implementation of this can be found below:

```java
Optimizely.stringVariable("variableKey", "defaultValue", new LiveVariable.Callback<String>() {
  @Override
  public void execute(String variableKey, @Nullable String value) {
    Log.i("log-tag", String.format("The value of Optimizely's Live Variable: %s is now %s",
              variableKey, value));
    actionButton.setText(value);
  }
});
```

## Code Blocks

Code Blocks allow developers to create variations that execute different code paths. Code Blocks are declared as static variables and then can be accessed anywhere in your application. For example, one use case might be to test various checkout flows.

**Note: The syntax for Code Blocks was changed in version 1.0+**

First, define your CodeBlock as a static variable, then, add handlers for each of the possible branches in your code:

``` java
private static OptimizelyCodeBlock checkoutFlow = Optimizely.codeBlock("CheckoutFlow")
		.withBranchNames("shortCheckout", "longCheckout");
```

The above Code Block will have 3 branches: the "default" branch, and a branch named "shortCheckout" and a branch named "longCheckout".

This is what the implementation of that Code Block looks like. Be sure to implement your Code Block branches in the same order as you declare them when initializing the Code Block.

``` java
public class CommerceActivity extends Activity {
  private static OptimizelyCodeBlock checkoutFlow = Optimizely.codeBlock("CheckoutFlow").withBranchNames("shortCheckout", "longCheckout");

  private void checkout() {
    // This line defines Code Blocks "shortCheckout", "longCheckout", and a
    // default block that is executed in the case that the experiment is
    // not activated.
    checkoutFlow.execute(new DefaultCodeBranch() {
            @Override
            public void execute() {
                // This block is executed by default
                goToDefaultCheckout();
            }
        }, new CodeBranch() {
            @Override
            public void execute() {
                // This block is executed when myCheckoutTest -> shortCheckout
                goToShortCheckout();
            }
        }, new CodeBranch() {
            @Override
            public void execute() {
                // This block is executed when myCheckoutTest -> longCheckout
                goToLongCheckout();
            }
        });
  }
}
```

You're now ready to implement your experiment using the Optimizely web editor:

0. Make sure you have not called `Optimizely.setEditGestureEnabled(false)`.
1. Load your application and draw a large circle to connect in edit mode.
2. Navigate to the Code Blocks section of the editor.
<img src="/assets/img/android/editor-codeblocks-add-button.png" alt="Drawing">
3. Click the "Add Code Block" button to open a dialog where you can select Code Blocks to add to your experiment.
4. Once you have added a Code Block to the experiment, you can select a value for each variation in the Code Blocks section of the editor.
5. While in edit mode, changes to the active block will be applied on subsequent executions, thereby allowing you to quickly test your Code Block's logic.  However, we recommend that you verify your Code Blocks in [preview mode](/android/getting-started/index.html#preview-mode) prior to going live with the experiment.
6. Once you've connected your app to the editor, you can later edit code blocks without connecting a device. However, if you make any changes to your app, make sure to connect it again to allow your changes to sync with the editor.

For more details, please see the [Code Blocks API Reference](/android/help/reference/com/optimizely/CodeBlocks/OptimizelyCodeBlock.html)

### Register Code Block Callback

By default, in Edit Mode, Optimizely's editor will apply code block branch changes once the code block is executed again.  However, there may be times where you want the new code block branch to be executed in your app without the screen being refreshed while you're making experiment changes. To do so, you can use the `Optimizely.CodeBlock` method `setCallback(new OptimizelyCodeBlock.Callback(){...})`

An example implementation of this can be found below:

```java
OptimizelyCodeBlock myCodeBlock = Optimizely.codeBlock("myCodeBlock").setCallback(new OptimizelyCodeBlock.Callback() {
		@Override
    	public void onBranchChange() {
			// Calling renderViews will allow us to execute the code that wraps our code block
			renderViews();
		}
    }).withBranchNames("branch1", "branch2");
```
### Phased Rollouts

A common use case for Code Blocks are phased rollouts.  Phased rollouts allow you to release a feature to a subset of users, which will help you mitigate the risk of crashes and help you understand how users will react to your new feature prior to rolling out a new feature to all users.  To learn more about to implement a phased rollout using Optimizely, you can refer to the article in Optiverse [here](https://help.optimizely.com/hc/en-us/articles/206101447-Phased-rollouts-for-your-iOS-or-Android-App).

## Custom Targeting

### Custom Tags
Custom Tags allow you to target users based on variables and attributes before Optimizely starts. You will be able to run your experiment and target visitors based on those custom attributes, effectively **only** bucketing those who meet your targeting conditions.
To create an experiment targeting a Custom Tag, open the Optimizely editor, click on "Options", followed by "Targeting" and selecting "Custom Tag" within the Optimizely editor.

For example, to create the Custom Tag `"returning_customer"` with a value of `"true"`:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    // more create logic
    Optimizely.setCustomTag("returning_customer", "true");
    Optimizely.startOptimizelyWithAPIToken("<API Token>", getApplication());
}
```

Make sure to call `setCustomTag` prior to `startOptimizelyWithAPIToken` and any time custom tag values are expected to change.  To do that you can make the `setValue:forCustomTag:` call in the following ways:

- Prior to `startOptimizelyWithAPIToken` so that Optimizely knows all of the targeting conditions prior to experiment activation
- `setCustomTag` can also be called in conjunction with `refreshExperimentData` while the app is still running.  For more details on how this works, you can refer to the section below.

```java
  private void userDidLogIn(String username) {
    Optimizely.setCustomTag("returning_customer", "true");
    Optimizely.refreshExperimentData();
  }
```

Please refer to our [API Docs](/android/help/reference/com/optimizely/Optimizely.html#setCustomTag(java.lang.String, java.lang.String) for more details.

### Experiment Reload
By default, Optimizely will try to activate experiments whenever the user opens the app. This includes when the app might be live in the background, but not visible to the user. If you want experiment activation to occur only when your app is "cold started," you can disable the activation behavior by calling

```java
      Optimizely.setshouldReloadExperimentsOnForegrounding(false);
```

It is also possible to manually force Optimizely to reset all experiments and try to re-bucket the user from "scratch." One example where this is useful is in setting the user ID manually:

```java
  private void userDidLogIn(String username) {
    Optimizely.setUserId(username);
    Optimizely.refreshExperimentData();
  }
```

**Note: Using `refreshExperimentData()` may damage the statistical validity of your conversion events because the user has potentially seen multiple variations of your experiment!**

### Universal User ID (Beta)

Set a unique (logged-in) identifier to be used by Optimizely for bucketing and tracking. Once set, Optimizely will bucket visitors in all new and future experiments so that visitors will see the same variation across devices (e.g. Android phone to tablet). Note that bucketing only happens upon app foregrounding or cold start. We will store this identifier in local storage and continue to use it until a new one is set.

Optimizely will also track unique visitors in experiment results using this ID; we will count an anonymous ID and a Universal ID as two distinct visitors, and prefer the Universal ID when counting experiment traffic and goals. *Make sure to target your experiments to "Has Universal User ID" to ensure consistent counting and bucketing across devices.*

```java
Optimizely.setUserId("userid");
```

*This is a beta feature, and is subject to change.* To learn more, visit our [Help Center](https://help.optimizely.com/hc/en-us/articles/203626830), or consult our [API reference](/ios/help/html/Classes/Optimizely.html#//api/name/userId). For support, please visit [Optiverse](http://www.optiverse.com/) or contact your Customer Success Manager.

<div class="lego-attention lego-attention--warning push--bottom">Note: By using this API call, you agree not to pass personally identifiable (PII) information to Optimizely in accordance with our <a href="http://optimizely.com/terms">Terms of Service</a> or your Master Service Agreement. If your login identifier is personally identifiable (such as an email address) you must hash it first before sending to Optimizely.</div>

## Goal Tracking

### Track Event
Custom goals allow you to track events other than taps and view changes. There are two steps to creating a custom goal. The first step occurs in the web editor. Click "Goals", then "Create a New Goal", and select "Custom Goal" from the drop-down. You will be prompted for a string to uniquely identify your custom goal. In order to track this goal, send this same string as a parameter to

```java
Optimizely.trackEvent("GoalID");
```

For example, if we wanted a goal for users deleting a task with a swipe, we might create a custom goal "User Deleted Task" and then call `trackEvent` with this string in our event handler as follows:

```java
private void userDidSwipeTask() {
    Optimizely.trackEvent("UserDeletedTask");
    //The rest of your handler
}
```
As of SDK version 1.1, if you aren't sure of the exact spelling of your custom goal string, you can trigger custom events in your simulator or connected device, and the strings will appear in the dialog in the order they were triggered.

For more details and to learn about tap and view goals, refer to the following [article](https://help.optimizely.com/hc/en-us/articles/200039925#add) from our Knowledge Base.

### Revenue Tracking
The Revenue goal allows you to track purchases made by your users. There are two steps to adding the revenue goal to your experiment. The first step occurs in the web editor. Click "Goals", then "Add a Saved Goal", hover over the "Total Revenue" goal, and click the "Add" button. In order to track this goal, use the revenue API by passing an integer number of cents:

```java
private void userCompletedPurchase() {
    Optimizely.trackRevenue(price * 100));
    //The rest of your handler
}
```

## Analytics Integrations

You can also access the experiments and variations active for a given user directly using the `Optimizely.getVisitedExperiments()` and pass that data to internal or other analytics frameworks.  For more details about this property, you can refer to the [API documentation](/android/help/reference/com/optimizely/Optimizely.html#getVisitedExperiments()).

Optimizely offers a number of configurable 3rd party analytics integrations in order to easily tag your analytics data with Optimizely experiments. Each integration is available as a separate package. Configuration instructions for each integration are below.

### Amplitude

Gradle dependency:
```groovy
dependencies {
    compile('com.optimizely:amplitudeintegration:+@aar')
}
```

Installation:
```java
Optimizely.registerPlugin(new OptimizelyAmplitudeIntegration());
```
### Localytics

Gradle dependency:
```groovy
dependencies {
	compile(‘com.optimizely.localyticsintegration:+@aar’)
}
```

Installation:
```java
Optimizely.registerPlugin(new OptimizelyLocalyticsIntegration());
```

### Mixpanel

Gradle dependency:
```groovy
dependencies {
    compile('com.optimizely:mixpanelintegration:+@aar')
}
```

Installation:
```java
MixpanelAPI mixpanelAPI = MixpanelAPI.getInstance(this, "API_TOKEN");
Optimizely.registerPlugin(new OptimizelyMixpanelIntegration());
```

### Universal Analytics (Google Analytics)

Gradle dependency:
```groovy
dependencies {
    compile('com.optimizely:universalanalyticsintegration:+@aar')
}
```

Installation:
```java
Tracker tracker = GoogleAnalytics.getInstance(this).newTracker("TRACKER_ID");
OptimizelyUniversalAnalyticsIntegration.setTracker(tracker);
Optimizely.registerPlugin(new UniversalAnalyticsIntegration());
```

## Network Settings
There are only two instances when the Optimizely Android SDK uses a network connection: when downloading the config file (which contains all experiment configuration information) and when returning event tracking data.  By default, the config file is automatically downloaded every 2 minutes. Event tracking data is automatically uploaded whenever the user leaves a screen of your application (on every `Activity.onPause`). The Optimizely Android SDK allows you to customize how often these network calls are made by:

1. Customizing the 2 minute interval
2. By turning off automatic sending of events and allowing you to sending events manually.

The first option is to customize the interval for how often you want network calls to be made. To adjust the interval in seconds, you can call `Optimizely.setDataFileDownloadInterval(long)`. Setting the download interval to 0 or a negative value will completely disable downloading of the data file (Not recommended).
For example, to set the data file download to 5 minutes (300,000ms):
`Optimizely.setDataFileDownloadInterval(5 * 60 * 1000);`

The second option is to turn off the automatic event sends and manually make network calls. Calling `Optimizely.setAutomaticEventSending(false);` will disable the automatic sending of events. You will need to send events manually using `Optimizely.sendEvents()` in order to collect experiment results.

```java
Optimizely.setAutomaticEventSending(false);
```

To manually send events, in the appropriate function (e.g. where you make other network calls or after a custom event goal is triggered):

```java
  private void userClickedImportantButton() {
      Optimizely.trackEvent("ImportantButtonClicked");
      Optimizely.sendEvents(); // Manually send the event logs back to the server
  }
```

Please refer to the documentation for [trackEvent](/android/help/reference/com/optimizely/Optimizely.html#trackEvent%28String%29), and [sendEvents](/android/help/reference/com/optimizely/Optimizely.html#sendEvents%28%29)for more details.

## Manual Activation

### Experiment Activation Modes

There are two different types of activation modes for Optimizely Mobile experiments.

#### Automatic (Default)
By default, Optimizely buckets users and activates the experiment as soon as the app starts and the startOptimizely method is called (either synchronously or asynchronously). Experiments are marked as visited when the end user reaches an element that has been modified in the experiment.

#### Manual
In manual activation mode, developers can specify, via an in-app API call, at which point they want to activate a given experiment. Manual activation allows you to separate the experiment start (which buckets the users and activates the experiment) from startOptimizely, which loads the datafile and any remote assets, such as images. Manual activation is only available for SDK versions 1.3.0 and above.

*Please note that visitors still must meet Audience targeting conditions for a manually activated experiment to be eligible for that experiment.* Manual activation does not bypass Audience conditions. 


Toggle between manual and automatic activation mode from the Options > Activation Mode menu in the Editor:

<img src="/assets/img/android/activation_mode.png" alt="Drawing" style="width: 50%;"/>

### Use Cases
#### Use Case #1: Set additional metadata for your audiences before evaluating targeting conditions for an unactivated experiment. 

Bucketing only occurs for your audiences when activateExperiment is called and NOT when startOptimizely is called, and thus any custom tags you set before the experiment starts will be considered for targeting. 
For example, you can mark a user as a “VIP” at one point during a session, then use this tag for an experiment later in the same session. 
With automatic activation mode, you can only target using tags set before the app was started (and thus set in a previous session).

#### Use Case #2: Bucket only a subset of users who access less frequently used areas of your app.

Bucketing users when the app loads, which is done in automatic mode, may not be the best choice for experiments involving an experience that not all users visit. 
For example, if you want to test a feature deep in your user experience that only 10% of users visit, you wouldn’t necessarily want to bucket all users when you launch your app (as is done with automatic mode), because this could lead to skewed sampling. 
If you manually activate your experiment only when users reach that experience, you can bucket users at the point where they visit that feature, and run tests on only those users. 

#### Use Case #3: Quick-load assets for consistency.

Remote assets distributed by the Optimizely CDN, such as images you upload to our editor, start loading asynchronously when the app starts. As a result, if any assets fail to load before an experiment is viewed due to slow internet speeds, the user is not showed the variation and is instead shown the control even though that user has been bucketed.
The variation will be shown to the user the next time he or she opens the app, assuming the assets have loaded before he or she views the experiment, leading to an inconsistent user experience and possibly even skewed results. 
In manual activation mode, you can activate experiments right when you want to show them, giving the user’s device more time to load assets associated with that experiment.

### Manual Activation Example

```java
// Calling start Optimizely will not activate any manual experiments.
// Instead you have to activate them manually for users to see your experiment
Optimizely.startOptimizelyWithAPIToken(myOptimizelyAPIKey, getApplication());
                          
...

// You specify when you want to activate each manual experiment.
// For use case #1 above, this can be useful if you want to wait until you 
// have additional data for a user and then store that data as custom tags.
// For example, we now know that the user is a VIP user so we set a tag for that
Optimizely.setCustomTag("accountType", "VIP");
    
// Activate a manual experiment that takes the custom tag we just set into account 
boolean success = Optimizely.activateManualExperiment(myExperimentId);
```

## Debugging Your Experiments

### Adding an Event Listener
Clients can get notifications when various Optimizely events occur in the Optimizely SDK life cycle like start of the SDK or an experiment visited. To do that, client needs to register a callback with Optimizely and override methods which they are interested in.

```java
  Optimizely.addOptimizelyEventListener(new OptimizelyEventListener() {

    public void onOptimizelyStarted() {
      Log.i(tag, "Optimizely started.");
    }

    public void onOptimizelyFailedToStart(String errorMessage) {
      Log.i(tag, format("Optimizely failed to start with message {%s}", errorMessage));
    }

    public void onOptimizelyExperimentViewed(OptimizelyExperimentData experimentState) {
      Log.i(tag, format("Optimizely experiment {%s} viewed.", experimentState));
    }

    public void onOptimizelyEditorEnabled() {
      Log.i(tag, "Optimizely is ready to connect to the editor.");
    }

    public void onOptimizelyDataFileLoaded() {
      Log.i(tag, "Optimizely experiment data file loaded.");
    }

    public void onGoalTriggered(String description,
                                List<OptimizelyExperimentData> affectedExperiments) {
      Log.i(tag, format("Optimizely goal {%s} part of experiments {%s} achieved.",
                          description, affectedExperiments));
    }

    public void onMessage(String source, String messageType, Bundle payload) {
      Log.i(tag, format("Optimizely received message %s from %s {%s; %s} .",
                          messageType, source, payload));
    }
  });
```

### Experiment Data Object
Optimizely's Experiment Object will provide information about what part of the experiment life cycle a user is part of.  There are two main functions: `getAllExperiments` and `getVisitedExperiments`.  `getAllExperiments` contains all running, paused, and draft experiments in your Optimizely project.  `getVisitedExperiments` contains all experiments in your Optimizely project that a user has actually visited. You can also query for the `OptimizelyExperimentData` associated to a given experimentId by using `getExperimentDataById`.

Each experiment is represented as an `OptimizelyExperimentData` object. For more info on the properties contained there, see the class reference for [OptimizelyExperimentData](/android/help/reference/com/optimizely/integration/OptimizelyExperimentData.html).

```java
// This will get all your experiments
Map<String, OptimizelyExperimentData> allExperiments = Optimizely.getAllExperiments();

// This will get all your visited experiments
Map<String, OptimizelyExperimentData> visitedExperiments = Optimizely.getVisitedExperiments();

// This will get the experiment with the corresponding experimentId
OptimizelyExperimentData data = Optimizely.getExperimentDataById("EXPERIMENT_ID");
```

### Audience Information
There are a couple utility functions that you can use to help aid in debugging audiences. `getAudiences` will return a JSONArray of all the audiences associated with your project. Each audience is represented as an JSONObject and you'll be able extract additional metadata through the following keys: `audience_id`, `conditions`, and `name`. From there you can check whether or not the user currently satisfy a given audience by calling `isUserInAudience` with a specific audienceId. Keep in mind that both of these methods need to be called after Optimizely is started. 

Here's an example below:
```java
// Make sure to call the helper functions after starting Optimizely
Optimizely.startOptimizelyWithAPIToken(myOptimizelyAPIKey, getApplication());

// Gets an array that holds all your project audiences
JSONArray audiences = Optimizely.getAudiences();

for(int i = 0; i < audiences.length(); i++) {
    JSONObject audience = audiences.getJSONObject(i);
    // You can access the metadata associated with each audience
    // Here we're just getting each audience's audienceId
    String audienceId = audience.getString("audience_id");
    
    // We can then check to see if the user currently satisfies those
    // audience conditions
    boolean included = Optimizely.isUserInAudience(audienceId);
    Log.d("tag", "The user " + (included ? "is" : "isn't") + " included in this audience:" + audienceId);
}
```  

### Forcing a Variation
Sometimes you'll want to try out your experiment before it goes live and outside of preview mode. You may run into an annoyance where you spend a lot of times re-bucketing yourself in order to get into all the experiment combinations. Now you can opt to force an experiment into a given variation with `forceVariation`. When you force a variation for a given experiment, we'll reset the app's userId and try to force that experiment/variation if they are both valid. This should be called before startOptimizely is called and keep in mind that you should only use this for testing your experiments. You should NOT ship this to your customers.

Here's an example below:
```java
// Force the variation and experiment specified by those two ids
Optimizely.forceVariation(myVariationId, myExperimentId);

// Make sure to call it before start Optimizely is called
Optimizely.startOptimizelyWithAPIToken(myOptimizelyAPIKey, getApplication());
```

### Resetting QA State
Uninstalling the app everytime to QA your builds with Optimizely can be quite tedious. Now you can use `resetUserBucketing` to clear any variations that the current app user may have already been bucketed into. This will also remove the cached data file. This is useful if you want to insure that you're treated as a new user each time you start the app. Keep in mind that you must call `resetUserBucketing` before you start Optimizely.

Here's an example below:
```java
// Reset user bucketing
Optimizely.resetUserBucketing(context);

// Make sure to call it before start Optimizely is called
Optimizely.startOptimizelyWithAPIToken(myOptimizelyAPIKey, getApplication());
```

## Upgrading to a new SDK

1. If you are using Maven or Gradle, simply replace the dependency declaration in your `pom.xml` or `build.gradle` with a dependency on the new version.

2. Starting with SDK version 1.1, Optimizely's Android SDK uses a unique URL scheme handler to help you edit and test your experiments.

   If you are upgrading from an SDK version more outdated than 1.1 to version 1.1 or later, please add the following intent filter to the MainActivity entry of your AndroidManifest.xml

   ```xml
   <activity
     android:name=".MainActivity">
     <intent-filter>
       <action android:name="android.intent.action.VIEW" />
       <category android:name="android.intent.category.DEFAULT" />
       <category android:name="android.intent.category.BROWSABLE" />
       <data android:scheme="optly[PROJECT_ID]" />
     </intent-filter>
   </activity>
   ```

   *Note:
   The scheme includes a unique identifier.  Be sure to replace [PROJECT_ID] with your project id.*


If you are using manual integration, please repeat the [Manual Installation Steps](/android/getting-started/index.html#manual-installation) for your platform.

## Uninstalling Optimizely

If you installed via Maven or Gradle, simply remove the dependency on Optimizely. If you installed manually, you need to delete Optimizely.jar from your app.
