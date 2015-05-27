---
template: page-sidebar
title: "Optimizely iOS SDK Reference"
---
## <a name="Key Documentation"></a> Key Documentation
[![SDK Version](http://img.shields.io/cocoapods/v/Optimizely-iOS-SDK.svg?style=flat)](http://developers.optimizely.com/ios/help/html/index.html)

SDK Download [ZIP](http://github.com/optimizely/Optimizely-iOS-SDK/zipball/master) | [TAR](http://github.com/optimizely/Optimizely-iOS-SDK/tarball/master) | [GitHub](http://github.com/optimizely/Optimizely-iOS-SDK)

## Optimizely Class Reference
Link to [Optimizely Class Reference Documentation](http://developers.optimizely.com/ios/help/html/index.html)

## <a name="custom configuration"></a> Customize Your Variations

### <a name="tag your views"></a> Visual Editor Configuration

The Optimizely Visual Editor allows you to modify existing views in your app. The first time you connect your app to Optimizely's Visual Editor, you can see which views are automatically detected by Optimizely.  Optimizely is able to detect and allows you to modify these views by:

- Dynamically tagging all views with an Optimizely ID
- Optimizely uses swizzling to enable view changes

If you decide you do not want views to be automatically tagged with an optimizelyId, you can set the [shouldNotGenerateDynamicIds](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/shouldNotGenerateDynamicIds) property to YES.

If you decide you want to exclusively use live variables and code blocks, you can set the  [disableSwizzle](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/shouldNotGenerateDynamicIds) property to YES.

There are some cases where Optimizely will not be able to detect your views.  For those views, you should give them a unique `optimizelyId`.  An example of how to do this is below:

```objective-c
UILabel *label = [[UILabel alloc] initWithFrame:...];
label.optimizelyId = @"pricing-title-label";
```

Cases where you will typically have to tag your views include if you would like to be able to modify a specific [TableView cell](#tableview).

### <a name="variables"></a> Register Live Variables

[Live Variables](help/html/Classes/Optimizely.html#task_Live%20Variables) allow you to designate variables in your app that can be assigned values in the Optimizely editor.  These values can be modified by Optimizely's editor even after you have released your app to the app store.  For example, you might want to create an experiment that tests various values for gravity.  In order to create an Optimizely Live Variable, first define a corresponding `OptimizelyVariableKey` as follows:

```objective-c
#import <Optimizely/Optimizely.h>

// This line defines an OptimizelyVariableKey called myGravityVariable with a default value of 9.8
OptimizelyVariableKeyForNumber(myGravityVariable, @9.8f);

@implementation MyViewController

...

@end
```

or, if you're using Swift, declare your `OptimizelyVariableKey`s in your AppDelegate's `application:didFinishLaunchingWithOptions:` method as follows:

```swift
// Define and register live variable with type NSNumber
var myGravityVariableKey: OptimizelyVariableKey = OptimizelyVariableKey.optimizelyKeyWithKey("myGravityVariable", defaultNSNumber: 9.8)
Optimizely.preregisterVariableKey(myGravityVariableKey)
```

This defines an Optimizely variable key called `myGravityVariable` with a default value of 9.8.  Once a variable key is defined, variations can change the value for variables accessed via this key.

The provided `OptimizelyVariableKeyFor[type]` macro ([list of types](help/html/Classes/Optimizely.html#task_Live%20Variables)) is the suggested method for defining an `OptimizelyVariableKey` as it will allow the web editor to detect live variables right when it connects your application. **Note that keys must be defined outside of the function scope.**

In order to access the variable, call `numberForKey` and provide the corresponding variable key:

```objective-c
#import <Optimizely/Optimizely.h>

// This line defines an OptimizelyVariableKey called myGravityVariable
OptimizelyVariableKeyForNumber(myGravityVariable, @9.8f);

@implementation MyViewController

- (void) someFunction {
	// This line reads myGravityVariable and stores it in "gravity"
	NSNumber *gravity = [Optimizely numberForKey:myGravityVariable];

	// Use gravity...
	NSLog(@"Gravity for this variation is %@", gravity);
}

@end
```

or, in Swift:

```swift
// Load live variable
var myGravityVariableKey = OptimizelyVariableKey.optimizelyKeyWithKey("myGravityVariable", defaultNSNumber: 9.8)
var gravity: NSNumber = Optimizely.numberForKey(myGravityVariableKey)

// Use gravity...
println("Gravity for this variation is \(gravity)")
```

*Note: in Swift, you'll need to preregister live variables in your AppDelegate, so it may make sense to store your `OptimizelyVariableKey`s somewhere to use later, when you access that variable. In this example, we're reconstructing the key using the same key name and default value, which is less efficient.*

You're now ready to implement your experiment using the Optimizely web editor:

1. Load your application and connect in edit mode.
2. Navigate to the variables section of the editor.
<img src="/assets/img/ios/editor-variablestab.png" alt="Drawing" style="width: 100%;"/>
3. The editor will allow you to modify the variable value for different variations.
4. While in edit mode, changes to the variable will be applied on subsequent reads, thereby allowing you to quickly test your variable logic.  However, we recommend that you verify your variable tests in [preview mode](https://help.optimizely.com/hc/en-us/articles/202296994#preview) prior to going live with the experiment.

For more details, please see the [Live Variables API Reference](help/html/Classes/Optimizely.html#task_Live%20Variables)

### <a name="codeblocks"></a> Code Blocks

Code Blocks allow developers to create variations that execute different code paths.  For example, one use case might be to test various checkout flows.   In order to create a Code Block, first define a corresponding `OptimizelyCodeBlocksKey` as follows:

```objective-c
#import <Optimizely/Optimizely.h>

// This line defines an OptimizelyCodeBlocksKey called myCheckoutTest
// Arguments after the first are descriptive names for the blocks
OptimizelyCodeBlocksKeyWithBlockNames(myCheckoutBlocksKey,
                                    @"shortCheckout",
                                    @"longCheckout");

@implementation MyViewController

...

@end
```

or, in Swift:

```swift
var myCheckoutBlocksKey = OptimizelyCodeBlocksKey("myCheckoutBlocksKey", blockNames: ["shortCheckout", "longCheckout"])
Optimizely.preregisterBlockKey(myCheckoutBlocksKey)
```

*Note: again, in Swift you'll need to preregister code blocks in your AppDelegate, so it may make sense to store your `OptimizelyBlockKey`s somewhere so you can access them later if you don't plan to use them in that scope.*

This defines an `OptimizelyCodeBlocksKey` called myCheckoutTest associated with block names "shortCheckout" and "longCheckout." A Code Block can contain up to 4 named blocks.  Once a Code Block key is defined, variations can change the block that is executed for a particular variation.

The provided `OptimizelyCodeBlocksKeyWithBlockNames` macro is the suggested method for defining an OptimizelyCodeBlocksKey as it will allow the web editor to detect Code Blocks right when it connects to your application. Note that keys must be defined outside of the function scope.

Next, implement the Code Block as follows:


```objective-c
#import <Optimizely/Optimizely.h>

// This line defines an OptimizelyCodeBlocksKey called myCheckoutBlocksKey
OptimizelyCodeBlocksKeyWithBlockNames(myCheckoutBlocksKey,
                                    @"shortCheckout",
                                    @"longCheckout");

@implementation MyViewController

- (void) someFunction {

    // This line defines Code Blocks "shortCheckout", "longCheckout", and a
    // default block that is executed in the case that the experiment is
    // not activated.
    [Optimizely codeBlocksWithKey:myCheckoutBlocksKey
                       blockOne:^{
        // This block is executed when myCheckoutTest -> shortCheckout
        [self performSegueWithIdentifier:@"shortCheckoutFlow" sender:self];
    }
                       blockTwo:^{
        // This block is executed when myCheckoutTest -> longCheckout
        [self performSegueWithIdentifier:@"longCheckoutFlow" sender:self];
    }
                   defaultBlock:^{
        // This block is executed by default
        [self performSegueWithIdentifier:@"checkoutFlow" sender:self];
    }];
}

@end
```

or, in Swift:

```swift
Optimizely.codeBlocksWithKey(myCheckoutBlocksKey,
    blockOne: { self.performSegueWithIdentifier("shortCheckoutFlow" sender:self) },
    blockTwo: { self.performSegueWithIdentifier("longCheckoutFlow" sender:self) },
    defaultBlock: { self.performSegueWithIdentifier("checkoutFlow" sender:self) }
)
```

You're now ready to implement your experiment using the Optimizely web editor:

1. Load your application and connect in edit mode.
2. Navigate to the Code Blocks section of the editor.
<img src="/assets/img/ios/editor-codeblocks.png" alt="Drawing" style="width: 100%;"/>
3. The editor will display your Code Blocks.  Use the drop down to select the desired Code Block for this variation.
4. While in edit mode, changes to the active block will be applied on subsequent executions, thereby allowing you to quickly test your Code Block's logic.  However, we recommend that you verify your Code Blocks in [preview mode](https://help.optimizely.com/hc/en-us/articles/202296994#preview) prior to going live with the experiment.

For more details, please see the [Code Blocks API Reference](help/html/Classes/Optimizely.html#//api/name/codeBlocksWithKey:blockOne:defaultBlock:)

## <a name="targeting"></a> Custom Targeting

### Universal User ID (Beta) <a name="uuid"></a>

Set a unique (logged-in) identifier to be used by Optimizely for bucketing and tracking. Once set, Optimizely will bucket visitors in all new and future experiments so that visitors will see the same variation across devices (e.g. iPad app to iPhone app). Note that bucketing only happens upon app foregrounding or cold start. We will store this identifier in `NSUserDefaults` and continue to use it until a new one is set.

Optimizely will also track unique visitors in experiment results using this ID; we will count an [anonymous ID](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/index.html#//apple_ref/occ/instp/UIDevice/identifierForVendor) and a Universal ID as two distinct visitors, and prefer the Universal ID when counting experiment traffic and goals. *Make sure to target your experiments to "Has Universal User ID" to ensure consistent counting and bucketing across devices.*

```objective-c
[Optimizely sharedInstance].userId = @"userid";
```

*This is a beta feature, and is subject to change.* To learn more, visit our [Help Center](https://help.optimizely.com/hc/en-us/articles/203626830), or consult our [API reference](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/userId). For support, please visit [Optiverse](http://www.optiverse.com/) or contact your Customer Success Manager.

<div class="lego-attention lego-attention--warning push--bottom">Note: By using this API call, you agree not to pass personally identifiable (PII) information to Optimizely in accordance with our <a href="http://optimizely.com/terms">Terms of Service</a> or your Master Service Agreement. If your login identifier is personally identifiable (such as an email address) you must hash it first before sending to Optimizely.</div>

### Custom Tags <a name="customtags"></a>
Custom Tags allow you to target users based on variables and attributes. You will be able to run your experiment and target visitors based on those custom attributes, effectively **only** bucketing those who meet your targeting conditions.  To be able to use Custom Tags in Optimizely, there are some lines of code that need to be added to your app.

For example, to create the Custom Tag "returning_customer" with a value of "true":

 ```objective-c
[Optimizely setValue:@"true" forCustomTag:@"returning_customer"];
  ```

*`setValue` will only handle NSString objects.*

`setValue:forCustomTag:` should be called prior to `startOptimizely` and any time custom tag values are expected to change.  To do that you can make the `setValue:forCustomTag:` call in the following ways:

- Prior to `startOptimizely` so that Optimizely knows all of the targeting conditions prior to experiment activation
- `setValue:forCustomTag:` can also be called in conjunction with [refreshExperiments](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/refreshExperiments) while the app is still running.  For more details on how this works, you can refer to the section [below](#experimentreload).

From there, to create an experiment [targeting a Custom Tag](https://help.optimizely.com/hc/en-us/articles/202296994-Get-Started-on-Mobile-Optimization#targeting), open the Optimizely editor, click on "Options," followed by "Targeting" and selecting "Custom Tag" within the Optimizely editor.


### Experiment Reload <a name="experimentreload"></a>

[refreshExperiments](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/refreshExperiments) should be called any time custom tag values are expected to change.  [refreshExperiments](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/refreshExperiments) allows Optimizely to take into account a user's newly added or changed custom tag values and rebuckets users based on updated targeting.

For example, here's an use case where the user logs in, the developer sets a logged in custom tag, and then calls [refreshExperiments](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/refreshExperiments):


```objective-c
- (void)handlerForUserLogin {
      // The user just logged in and we can set a custom tag to track this
      // and then we'll call a refresh
      [Optimizely setValue:@"logged_in" forCustomTag:@"customer_state"];
      [Optimizely refreshExperiments];
}
```
## <a name="goaltracking"></a> Goal Tracking

For additional information about any of the experimental approaches below, see the full [API Documentation](http://developers.optimizely.com/ios/help/html/index.html).

### <a name="revenuegoal"></a> Revenue
The revenue goal allows you to [track revenue](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/trackRevenue:) in your app. There are two steps to creating a custom goal.

1. Add the tracking code to your app, you can add this tracking call by adding the code below:

      ```objective-c
      [Optimizely trackRevenue:(NSNumber *)];
      ```

      For example, if we wanted a goal for users that completed a purchase, and you could make the tracking call in your purchaseConfirmation method where `price` is the variable that holds the dollar amount that has been spent:

      ```objective-c
      - (void)purchaseConfirmation:(id)sender {
          [Optimizely trackRevenue:price*100];
          //The rest of your handler
      }
      ```

2. To create an experiment that tracks revenue, click Goals -> Saved Goal -> Select "Total Revenue" from the drop-down.

### <a name="trackevent"></a> Track Event
Custom goals allow you to track events other than taps and view changes. There are two steps to creating a custom goal.

1. In order to track this goal, send this same string as a parameter to:

      ```objective-c
      [Optimizely trackEvent:(NSString *)];
      ```

2. To create an experiment that tracks custom goals, open the Optimizely editor, click "Goals," then "New Goal," and select "Custom Goal" from the drop-down. You will be prompted for a string to uniquely identify your custom goal.  You should enter in the same string used in your trackEvent method call in the previous step.

      For example, if we wanted a goal for users deleting a task with a swipe, we might create a custom goal "User Deleted Task" and then call [trackEvent](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/trackEvent:) with this string in our event handler as follows:

      ```objective-c
      - (void)userDidSwipeTask:(id)sender {
          [Optimizely trackEvent:@"User Deleted Task"];
          //The rest of your handler
      }
      ```
      For more details, you can refer to the following [article](https://help.optimizely.com/hc/en-us/articles/200039925#add) from our Knowledge Base.

## Advanced Configuration

### <a name="analytics"></a> Analytics Integrations

Optimizely integrates with popular analytics frameworks to allow you to slice and dice your experiment results. The integration sends information about the experiment and variation a user is bucketed into.  Currently we support the following frameworks in our iOS SDK:

- [Mixpanel](help/html/Classes/Optimizely.html#//api/name/activateMixpanelIntegration)
- [Google Analytics](https://help.optimizely.com/hc/en-us/articles/204628347)

*Note: You must instantiate your analytics SDK in `application:didFinishLaunchingWithOptions:` before calling `startOptimizelyWithAPIToken` and enabling any integrations.*

You can also access experiments and variations that a user has visited directly using the `[Optimizely sharedInstance].visitedExperiments` property and pass that data to internal or other analytics frameworks.  You can pass the values of `[Optimizely sharedInstance].visitedExperiments.experimentName` and `[Optimizely sharedInstance].visitedExperiments.variationName` to your analytics tool.  You can learn more about the [allExperiments](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/allExperiments) and [visitedExperiments](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/visitedExperiments) properties via our API reference.

### <a name="networksettings"></a> Network Settings
There are only two instances when the Optimizely iOS SDK uses a network connection: when downloading the config file (which contains all experiment configuration information) and when returning event tracking data.  By default, network calls are automatically made every 2 minutes.  The Optimizely iOS SDK allows you to customize how often these network calls are made by:

1. Customizing the 2 minute interval
2. By turning off automatic sending of events and allowing you to sending events manually.

The first option is to customize the interval for how often you want network calls to be made. To adjust the interval in seconds, you can use the [dispatchInterval](help/html/Classes/Optimizely.html#//api/name/dispatchInterval) method, which should be called prior to `startOptimizely` at the beginning of your `application:didFinishLaunchingWithOptions:` method:

 ```objective-c
    // Configure a network call to be made every minute
    [Optimizely sharedInstance].dispatchInterval = 60;

    [Optimizely startOptimizelyWithAPIToken:YOUR_API_TOKEN launchOptions:launchOptions];
  ```

The second option is to turn off the interval and manually make network calls.  Setting `dispatchInterval` to 0 or a negative value will disable the automatic sending of events. You will need to send events manually using [dispatch](http://developers.optimizely.com/ios/help/html/Classes/Optimizely.html#//api/name/dispatch), which is also when the config file will be downloaded.

To turn off the automatic sending of events, you can set the value of [dispatchInterval](help/html/Classes/Optimizely.html#//api/name/dispatchInterval) to 0 at the beginning of your `application:didFinishLaunchingWithOptions:` method:

 ```objective-c

#ifdef DEBUG
    [Optimizely enableEditor];
#endif

    // Configure a network call to be made every minute
    [Optimizely sharedInstance].dispatchInterval = 0;

    [Optimizely sharedInstance].shouldReloadExperimentsOnForegrounding = YES;
    [Optimizely startOptimizelyWithAPIToken:YOUR_API_TOKEN launchOptions:launchOptions];
  ```

To manually send events, in the appropriate function (e.g. where you make other network calls or after a custom event goal is triggered):

```objective-c
- (void)userDidSwipeTask:(id)sender {
    [Optimizely trackEvent:@"User Deleted Task"];

    // Dispatch events to the network
    [Optimizely dispatch];

    //The rest of your handler
}
```


  
## Optimizely Debug <a name="debug"></a>
### Subscribe to NSNotifications <a name="Notifications"></a>
Optimizely provides a couple NSNotificationCenter notifications for developers to observe.  Some use cases for implementing a notification include debugging and a way to interact with your other analytics tools.

`OptimizelyExperimentVisitedNotification` is triggered when an experiment is viewed by the user. The userInfo in the notification will have metadata which includes experiment Id, variation Id, experiment description and variation description for the experiment that was visited..

`OptimizelyGoalTriggeredNotification` is triggered when an Optimizely goal is tracked and a conversion is counted. The user info in the notification will list the experiment IDs for which this was counted as a conversion.

`OptimizelyNewDataFileLoadedNotification` is triggered when an application resumes from foregrouding and a new experiment datafile is applied. This notification only triggers in Normal Mode, and not in Edit Mode.

The following sample shows how to register for a notification:

```objective-c
-(void)registerForOptimizelyNotifications {

    [[NSNotificationCenter defaultCenter] addObserver:self
		selector:@selector(experimentDidGetViewed:)
			name:OptimizelyExperimentVisitedNotification object:nil];

}
```

### Experiment Data Object <a name="experimentdata"></a>
Optimizely's Experiment Object will provide information about what part of the experiment lifecycle a user is part of.  There are two main objects: `allExperiments` and `visitedExperiments`.  `allExperiments` contains all running, paused, and draft experiments in your Optimizely project.  `visitedExperiments` contains all experiments in your Optimizely project that a user has actually visited.

Each experiment is represented as an `OptimizelyExperimentData` object. For more info on the properties contained there, see the class reference for [OptimizelyExperimentData](http://developers.optimizely.com/ios/help/html/Classes/OptimizelyExperimentData.html).

Sample usage of how this data looks is listed below:

 ```objective-c
for (OptimizelyExperimentData *data in [Optimizely sharedInstance].allExperiments) {
// Lists all running, paused, and draft experiments
        NSLog(@"All Experiments: %@, %@, %u, visitedEver: %s, visitedCount: %ld", data.experimentName, data.variationName, data.state, data.visitedEver ? "true" : "false", (unsigned long) data.visitedCount);

}

for (OptimizelyExperimentData *data in [Optimizely sharedInstance].visitedExperiments) {
// Lists all experiments that a user has visited
        NSLog(@"Visited Experiments: %@, %@, %u, visitedEver: %s, visitedCount: %ld", data.experimentName, data.variationName, data.state, data.visitedEver ? "true" : "false", (unsigned long)data.visitedCount);

}
  ```


## <a name="upgrade"></a>Upgrading to a new SDK

To keep up with SDK updates, you can refer to our [change log](https://github.com/optimizely/Optimizely-iOS-SDK/blob/master/CHANGELOG.md).

#### Using CocoaPods
Simply run `pod update`.

#### Manual Installation Upgrade
Repeat steps 1 and 2 [above](#manualinstall). You may need to remove Optimizely.framework from your Frameworks directory before you drag in the new copy.

#### SDK Specific Upgrade Instructions (for upgrading to SDK 0.8)
0. [![SDK Version](http://img.shields.io/cocoapods/v/Optimizely-iOS-SDK.svg?style=flat)](https://github.com/optimizely/Optimizely-iOS-SDK/releases/) For manual upgrades, please follow steps 1 and 2 [above](#manualinstall).

1. Remove the run script build phase (prior to version 0.8).
  Click on your project and for any target that was using Optimizely, select
  the run script build phase for `OptimizelyPrepareNibs.rb` and click the little
  'x' on the right hand side of the build phase.

2. If you haven't already, be sure to implement the [URL scheme](#urlscheme).




## <a name="FAQ"></a>FAQ

You can find the General Optimizely's iOS SDK FAQ in our Optiverse:

[General FAQ](https://help.optimizely.com/hc/en-us/articles/201893400)

## <a name="troubleshooting"></a>Troubleshooting
**<a name="cantseeappineditor"></a>Q: My device is running the app but I can't see it in the editor.**

A: First, confirm your device is connected to the internet and make sure that the API token that you passed into

```objective-c
[Optimizely startOptimizelyWithAPIToken:@"YOUR-API-TOKEN"
						  launchOptions:launchOptions];
```
matches what you see in the Project Code box within Optimizely.

**Q: What should I do if I get a `Could not read from remote repository.` error?**

A: Please make sure you have a Github account with [SSH access](https://help.github.com/articles/generating-ssh-keys) installed.

**<a name="tableview"></a>Q: How do I modify a Table View Cell?**

A: By default, each instance of a UITableViewCell in a UITableView will have the same changes applied to it.  If you would like to be able to modify a single UITableViewCell, you can [tag](#tag%20your%20views) the specific UITableViewCell with an optimizelyId.

**<a name="appcrash"></a>Q: My app crashes and I get a run-time error after installing:**
```this class is not key value coding-compliant for the key optimizelyId```

A: Make sure you added the `-ObjC` linker flag to your build settings (see [Manual Installation](#objc)).

**<a name="compileerror"></a>Q: My app won't compile and I get an error saying:**

```
Undefined symbols for architecture armv7s: "_OBJC_CLASS_$_Optimizely",
referenced from: MY_CLASS
```

A: Certain build configurations require you to add `-framework Optimizely` to your Build Settings under "Other Linker Flags." If you installed using CocoaPods, you may need to update or reset "Other Linker Flags" because you have settings in your project that conflict with Cocoapods's automatic addition of that flag.

**Q: My dynamically rendered image does not render while using the Editor**

A: When using Optimizely to replace a dynamically-rendered image, the new image might not consistently render while using the Editor. Please use Preview to test how the replaced image will render in production.

**<a name="visualeditorchange"></a>Q: I'm trying to make a Visual Change with Optimizely's Visual Editor, but the View is not changing.**

A: Optimizely applies changes once viewDidMoveToWindow is called.  The implication is that if you have code that modifies views after viewDidMoveToWindow is called (e.g. an animation that starts after the view is rendered), Optimizely will not be able to apply Visual Changes to the view.


## <a name="uninstall"></a>Uninstalling Optimizely
There are two steps to uninstalling Optimizely.

1. **Remove the SDK from your app.**
  If you installed via Cocoapods, simply remove the dependency on Optimizely
  and run `pod install` again. If you installed manually, you need to delete
  Optimizely.framework from your app. Whether or not you actually delete the
  framework or just remove the reference, it wont be compiled into your app any longer.

2. **Remove the run script build phase (prior to version 0.8).**
  Click on your project and for any target that was using Optimizely, select
  the run script build phase for `OptimizelyPrepareNibs.rb` and click the little
  'x' on the right hand side of the build phase.