---
template: page-sidebar
title: "Optimizely Android SDK Reference"
---

# Optimizely Android SDK Reference

## Connecting to Optimizely's Editor

It is highly recommended to use Optimizely's 'O' gesture to connect your app to Optimizely's editor.  However, there are other options should you choose not to implement Optimizely's URL scheme.

### Programmatically Enable Edit Mode

Typically Optimizely's 'O' gesture will put your app into Edit Mode, which will then allow you to connect with Optimizely's editor.  However, if you choose not to implement the URL scheme in your app or are unable to put the app into 'Edit Mode', prior to `startOptimizely`, you can call [enableEditor](/android/help/reference/com/optimizely/Optimizely.html#enableEditor()) in the development version of your app so that you can make changes.

```java
Optimizely.enableEditor();
Optimizely.startOptimizely(getOptimizelyToken(), getApplication());
```

 **Note that you should always remove the enableEditor call prior to releasing your app to the App store.**

### Disable Gesture

By default, Optimizely's Android SDK disables the gesture if the app is live in the Play store.  However, if you would like to ensure that your end users are not able to put the app into edit mode (e.g. if you have an enterprise app that you release to internal employees), you can call the [setEditGestureEnabled](/android/help/reference/com/optimizely/Optimizely.html#setEditGestureEnabled(boolean)) method prior to `startOptimizelyWithAPIToken`.

An example of how to implement this method can be found below:

```java
Optimizely.setEditGestureEnabled(false);
Optimizely.startOptimizely(getOptimizelyToken(), getApplication());
```

## <a name="tag your views"></a> Visual Editor Configuration

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

If you decide you want to exclusively use live variables and code blocks, you can set  [setVisualExperimentsEnabled](/android/help/reference/com/optimizely/Optimizely.html#setVisualExperimentsEnabled(boolean)) to false.

## <a name="variables"></a> Register Live Variables

Live Variables allow you to designate variables in your app that can be assigned values in the Optimizely editor.  These values can be modified by Optimizely's editor even after you have released your app to the app store.  For example, you might want to create an experiment that tests various values for gravity. Live Variables are declared as static variables in your code and then can be accessed anywhere in your application. These values can be used as feature flags, to modify the behavior of your app, or as a convenient way to update your app with new stylings. Live variables must be declared as static variables in your app in order for the Optimizely Editor to detect them.

```java
public class MyActivity extends Activity {
  private static LiveVariable<Float> gravityVariable = Optimizely.floatVariable("Gravity", 9.8 /* default value */);
  private static LiveVariable<Boolean> enableGravityVariable = Optimizely.booleanVariable("EnableGravity", true /* default value */);

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

You're now ready to edit your live variables using the Optimizely web editor:

0. Make sure you have not called `Optimizely.setEditGestureEnabled(false)`.
1. Load your application and draw a large circle to connect in edit mode.
2. Navigate to the variables section of the editor.
<img src="/assets/img/android/editor-variables-add-button.png" alt="Drawing" style="width: 50%;"/>
3. Click the "Add Variable" button to open a dialog where you can select variables to add to your experiment.
4. Once you have added a variable to the experiment, you can select a value for each variation in the variables section of the editor.
5. While in edit mode, changes to the variable will be applied on subsequent reads, thereby allowing you to quickly test your variable logic.  However, we recommend that you verify your variable tests in [preview mode](#preview) prior to going live with the experiment.

## Code Blocks <a name="codeblocks"></a>

Code Blocks allow developers to create variations that execute different code paths. CodeBlocks are declared as static variables and then can be accessed anywhere in your application. For example, one use case might be to test various checkout flows.

**Note: The syntax for Code Blocks was changed in version 1.0+**

First, define your CodeBlock as a static variable, then, add handlers for each of the possible branches in your code:

``` java
private static OptimizelyCodeBlock checkoutFlow = Optimizely.codeBlock("CheckoutFlow")
		.withBranchNames("shortCheckout", "longCheckout");
```

The above code block will have 3 branches: the "default" branch, and a branch named "shortCheckout" and a branch named "longCheckout".

This is what the implemenation of that code block looks like. Be sure to implement your codeblock branches in the same order as you declare them when initializing the codeblock.

``` java
public class CommerceActivity extends Activity {
  private static OptimizelyCodeBlock checkoutFlow = Optimizely.codeBlock("CheckoutFlow").withBranchNames("shortCheckout", "longCheckout");

  private void checkout {
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
<img src="editor-codeblocks-add-button.png" alt="Drawing" style="width: 100%;"/>
3. Click the "Add Code Block" button to open a dialog where you can select code blocks to add to your experiment.
4. Once you have added a code block to the experiment, you can select a value for each variation in the Code Blocks section of the editor.
5. While in edit mode, changes to the active block will be applied on subsequent executions, thereby allowing you to quickly test your Code Block's logic.  However, we recommend that you verify your Code Blocks in [preview mode](https://help.optimizely.com/hc/en-us/articles/202296994#preview) prior to going live with the experiment.

For more details, please see the [Code Blocks API Reference](/android/help/reference/com/optimizely/CodeBlocks/OptimizelyCodeBlock.html)

### Phased Rollouts

A common use case for code blocks are phased rollouts.  Phased rollouts allow you to release a feature to a subset of users, which will help you mitigate the risk of crashes and help you understand how users will react to your new feature prior to rolling out a new feature to all users.  To learn more about to implement a phased rollout using Optimizely, you can refer to the article in Optiverse [here](https://help.optimizely.com/hc/en-us/articles/206101447-Phased-rollouts-for-your-iOS-or-Android-App).

## <a name="targeting"></a> Custom Targeting

### Custom Tags <a name="customtags"></a>
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
    Optimizely.startOptimizely("<API Token>", getApplication());
}
```

Make sure to call `setCustomTag` prior to `startOptimizely`.

Please refer to our [API Docs](/android/help/reference/com/optimizely/Optimizely.html#setCustomTag(java.lang.String, java.lang.String)) for more details.

### <a name="foregrounding"></a> Experiment Reload
By default, Optimizely will try to activate experiments whenever the user opens the app. This includes when the app might be live in the backgroudn, but not visible to the user. If you want experiment activation to occur only when your app is "cold started," you can disable the activation behavior by calling

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

## <a name="goaltracking"></a> Goal Tracking

### Track Event <a name="customgoals"></a>
Custom goals allow you to track events other than taps and view changes. There are two steps to creating a custom goal. The first step occurs in the web editor. Click "Goals", then "New Goal", and select "Custom Goal" from the drop-down. You will be prompted for a string to uniquely identify your custom goal. In order to track this goal, send this same string as a parameter to

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

### Revenue Goal <a name="revenuegoal"></a>
The Revenue goal allows you to track purchases made by your users. There are two steps to adding the revenue goal to your experiment. The first step occurs in the web editor. Click "Goals", then "Add Saved Goal", and select "Revenue." In order to track this goal, use the revenue API by passing an integer number of cents:

```java
private void userCompletedPurchase() {
    Optimizely.trackRevenue(275));
    //The rest of your handler
}
```

## <a name="analytics"></a> Analytics Integrations

You can also access the experiments and variations active for a given user directly using the `Optimizely.getActiveExperiments()` and pass that data to internal or other analytics frameworks.  For more details about this property, you can refer to the [API documentation](/android/help/reference/com/optimizely/Optimizely.html#getActiveExperiments()).

 We are working on deeper integrations with 3rd party analytics platforms and will update these documents as those integrations are added to the Optimizely SDK.

## <a name="networksettings"></a> Network Settings
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

Please refer to the documentation for [trackEvent](/android/help/reference/com/optimizely/Optimizely.html#trackEvent(String)), and [sendEvents](/android/help/reference/com/optimizely/Optimizely.html#sendEvents())for more details.

## <a name="upgrade"></a>Upgrading to a new SDK

If you are using Maven or Gradle, simply replace the dependency declaration in your `pom.xml` or `build.gradle` with a dependency on the new version.

If you are using manual integration, please repeat the [Manual Installation Steps](/android/guide/index.html#manualinstall) for your platform.

## <a name="uninstall"></a>Uninstalling Optimizely

If you installed via Maven or Gradle, simply remove the dependency on Optimizely. If you installed manually, you need to delete Optimizely.jar from your app.
