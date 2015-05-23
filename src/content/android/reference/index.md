---
template: page-sidebar
title: "Optimizely Android SDK Reference"
---
## Optimizely Class Reference Documentation
Link to [Optimizely Class Reference Documentation](/android/help/reference/packages.html)

## <a name="custom configuration"></a> Customize Your Variations

### <a name="variables"></a> Register Live Variables

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

Optimizely defines different  `<type>Variable()` functions for all the basic Java types. See the [Class Documentation](help/reference/com/optimizely/Optimizely.html) for more information.  In order to access the variable, call `Optimizely.<type>Variable` and provide the corresponding variable name. Variables are scoped at an application level, thus repeated calls to `Optimizely.<type>Variable` will return the same value throughout your application.

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
<img src="/assets/img/android/editor-variablestab.png" alt="Live Variables Tab"/>
3. The editor will allow you to modify the variable value for different variations.  
4. While in edit mode, changes to the variable will be applied on subsequent reads, thereby allowing you to quickly test your variable logic.  However, we recommend that you verify your variable tests in [preview mode](#preview) prior to going live with the experiment.

### Code Blocks <a name="codeblocks"></a>

Code Blocks allow developers to create variations that execute different code paths. CodeBlocks are declared as static variables and then can be accessed anywhere in your application.

**Note: The syntax for Code Blocks was changed in 0.2.6**

For example, one use case might be to test various checkout flows. First, define your CodeBlock as a static variable, then, add handlers for each of the possible branches in your code:


```java
public class CommerceActivity extends Activity {
  private static OptimizelyCodeBlock checkoutFlow = Optimizely.codeBlockWithBranchNames("CheckoutFlow", "shortCheckout", "longCheckout");

  private void checkout {
    // This line defines Code Blocks "shortCheckout", "longCheckout", and a
    // default block that is executed in the case that the experiment is
    // not activated.
    checkoutFlow.execute(new DefaultCodeBlock() {
            @Override
            public void execute() {
                // This block is executed by default
                goToDefaultCheckout();
            }
        }, new CodeBlock("shortCheckout") {
            @Override
            public void execute() {
                // This block is executed when myCheckoutTest -> shortCheckout
                goToShortCheckout();
            }
        }, new CodeBlock("longCheckout") {
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
<img src="/assets/img/android/editor-codeblocks.png" alt="Code Blocks Tab"/>
3. The editor will display your Code Blocks.  Use the drop down to select the desired Code Block for this variation.  
4. While in edit mode, changes to the active block will be applied on subsequent executions, thereby allowing you to quickly test your Code Block's logic.  However, we recommend that you verify your Code Blocks in [preview mode](#preview) prior to going live with the experiment.

For more details, please see the [Code Blocks API Reference](help/reference/com/optimizely/CodeBlocks/OptimizelyCodeBlock.html)

## <a name="targeting"></a> Custom Targeting

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

## <a name="goaltracking"></a> Goal Tracking

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

Please refer to our [API Docs](help/reference/com/optimizely/Optimizely.html#setCustomTag(java.lang.String, java.lang.String)) for more details.

### <a name="analytics"></a> Analytics Integrations

You can also access the experiments and variations active for a given user directly using the `Optimizely.getActiveExperiments()` and pass that data to internal or other analytics frameworks.  For more details about this property, you can refer to the [API documentation](help/reference/com/optimizely/Optimizely.html#getActiveExperiments()).

 We are working on deeper integrations with 3rd party analytics platforms and will update these documents as those integrations are added to the Optimizely SDK.


## Advanced Configuration

### <a name="networksettings"></a> Network Settings
There are only two instances when the Optimizely Android SDK uses a network connection: when downloading the config file (which contains all experiment configuration information) and when returning event tracking data.  By default, the config file is automatically downloaded every 2 minutes. Event tracking data is automatically uploaded whenever the user leaves a screen of your application (on every `Activity.onPause`). The Optimizely Android SDK allows you to customize how often these network calls are made by:

1. Customizing the 2 minute interval
2. By turning off automatic sending of events and allowing you to sending events manually.

The first option is to customize the interval for how often you want network calls to be made. To adjust the interval in seconds, you can call `Optimizely.setDataFileDownloadInterval(long)`. Setting the download interval to 0 or a negative value will completely disable downloading of the data file (Not recommended).
For example, to set the data file download to 5 minutes (300,000ms):
`Optimizely.setDataFileDownloadInterval(5 * 60 * 1000);`

The second option is to turn off the automatic event sends and manually make network calls. Calling `Optimizely.setAutomaticEventSending(false);` will disable the automatic sending of events. You will need to send events manually using `Optimizely.dispatchEvents()` in order to collect experiment results.

```java
Optimizely.setAutomaticEventSending(false);
```

To manually send events, in the appropriate function (e.g. where you make other network calls or after a custom event goal is triggered):

```java
  private void userClickedImportantButton() {
      Optimizely.trackEvent("ImportantButtonClicked");
      Optimizely.dispatchEvents(); // Manually send the event logs back to the server
  }
```

Please refer to the documentation for [trackEvent](help/reference/com/optimizely/Optimizely.html#trackEvent(String)), and [dispatchEvents](help/reference/com/optimizely/Optimizely.html#dispatchEvents())for more details.

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


## <a name="upgrade"></a>Upgrading to a new SDK

If you are using Maven or Gradle, simply replace the dependency declaration in your `pom.xml` or `build.gradle` with a dependency on the new version.

If you are using manual integration, please repeat the [Manual Installation Steps](#manualinstall) for your platform.

## <a name="FAQ"></a>FAQ

**<a name="negativesize"></a>Q: Why are there negative values (-1, -2) for width and height in the Visual Editor?**

A: Android uses `-1` for the constant `MATCH_PARENT` and `-2` for `WRAP_CONTENT`. To set the size of the view to an explicit pixel value, enter a positive number of pixels
in the width or height fields in the visual editor. We are working on an update to the editor that will better understand these special values.

**<a name="matchwrap"></a>Q: How do I use `MATCH_PARENT` or `WRAP_CONTENT` for width and height in the Visual Editor?**

A: Android uses `-1` for the constant `MATCH_PARENT` and `-2` for `WRAP_CONTENT`. To set the width or height of the view to `WRAP_CONTENT`, enter `-2` in the corresponding field. Similarly, to set the width or height to `MATCH_PARENT`, ENTER `-1` in the corresponding field in the visual editor. We are working on an update to the editor that will better understand these special values.


**<a name="blocking"></a>Q: Is `Optimizely#startOptimizely()` a blocking method?**

A: Yes, `Optimizely#startOptimizely()` is blocking. It will exit and return `true` if the configuration file was downloaded and parsed, or `false` if it hits the network timeout (or another error occurred). The default timeout is 2.5 seconds and is configurable through the `setNetworkTimeout()` API. Calls to `startOptimizely()` are not synchronized, and are not thread safe.

**<a name="startoptimizely"></a>Q: Where and when can I call `Optimizely#startOptimizely()`?**

A: `Optimizely#startOptimizely()` must be called from the UI thread, but may be called as many times as you like. Multiple calls after the first activation call are no-ops. `Optimizely#startOptimizely()` may be called from any UI thread method (such as `onCreate()` in an `Application` or `Activity` subclass).

**<a name="codeblockmemory"></a>Q: Should we unregister or nullify OptimizelyCodeBlock with anonymous handlers that have a reference to an Activity after finishing the `OptimizelyCodeBlock#execute()` method call?**

A: OptimizelyCodeBlocks are long-lived, so any references to Activities/Views/Applications should be weak references. This is a known issue that is being addressed.

**<a name="threadsafety"></a>Q: Are LiveVariable evaluations thread-safe?**

A: In production mode, all live variable values are set when Optimizely starts up. Any further access to the LiveVariable is a read-only action and is thus thread safe.

**<a name="proguard"></a>Q: Do I need to include any ProGuard configuration rules to use the Optimizely SDK?**

A: The Optimizely SDK works with the default ProGuard rules (found in SDK/tools/proguard/proguard-android.txt) with the following addendums for the GSON serialization:

```
# Gson uses generic type information stored in a class file when working with fields. Proguard
# removes such information by default, so configure it to keep all of it.
-keepattributes Signature

# Gson specific classes
-keep class sun.misc.Unsafe { *; }
#-keep class com.google.gson.stream.** { *; }

# Classes that will be serialized/deserialized over Gson
-keep class com.optimizely.JSON.** { *; }

# DrawerLayout Listener
-keepclassmembers class android.support.v4.widget.DrawerLayout {
    private android.support.v4.widget.DrawerLayout$DrawerListener mListener;
}
```

**<a name="permissions"></a>Q: Does the Optimizely SDK require any permissions?**

A: The Optimizely SDK only requires the [INTERNET](http://developer.android.com/reference/android/Manifest.permission.html#INTERNET) permission.

## <a name="troubleshooting"></a>Troubleshooting

**<a name="cantseeappineditor"></a>Q: My device is running the app but I can't see it in the editor.**

A: First, confirm your device is connected to the internet and make sure that the API token in your call to `startOptimizely` matches what you see in the Project Code box within Optimizely. For more information, you can set `Optimizely.setVerboseLogging(true);` and look for error messages in Logcat.

**<a name="3rdparty"></a>Q: Does Optimizely work with my other 3rd party SDKs?**

A: Optimizely works with many 3rd party SDKs. If we encounter specific 3rd party SDKs that cause conflicts with Optimizely we will list them here.

## <a name="uninstall"></a>Uninstalling Optimizely

If you installed via Maven or Gradle, simply remove the dependency on Optimizely. If you installed manually, you need to delete Optimizely.jar from your app.
