---
template: page-sidebar
partial: partials/_article-summary.html
includeSiblingData: true
title: "QA Optimizely iOS Experiments"
summary: |
   Learn how to use Optimizely developer tools to QA your Optimizely experiments.
   You can find examples of how to use each of the QA methods in Optimizely's TutorialApp, which can be [downloaded with the SDK](/ios/getting-started/index.html).  The corresponding guide can be found [here]("/android/guide/index.html").


---

# QA Optimizely iOS Experiments

*THIS ARTICLE WILL HELP YOU:*
- Learn how to use Optimizely developer tools to QA your Optimizely experiments
- Implement code samples of how to use Optimizely’s Experiment Data Object and NSNotifications to ensure your experiment is set up as expected
- You can find examples of how to use each of these methods in Optimizely's TutorialApp, which can be downloaded with the SDK.  The corresponding guide can be found [here]("/ios/guide/index.html").

### OVERVIEW

So you’ve created your experiment, finished your setup, and you’d like to QA your experiment to make sure it’s working correctly. There are two main ways to QA your experiment, which include: [Preview Mode](https://help.optimizely.com/hc/en-us/articles/202296994#preview) and Developer Debugging tools. This article will focus on how to QA your experiment with developer tools.

*Preview mode*

This lets you see your variation changes as your user would. You can easily enter this from the editor from each variation tab’s settings icon. You can learn more about Preview Mode here.

*Developer debugging tools*

You can take advantage of Optimizely’s notifications and the data object in order to gain a better understanding of when your experiment is running. These tools will allow you to check that you are creating the experience, targeting the audience, and tracking the goals that you expect.


TIP:
> Enable logging for QA (be sure to disable this feature when your app is live in the app store) ``[Optimizely sharedInstance].verboseLogging = YES``. The logs include a number of useful messages such as: the SDK version, a log for each event that’s triggered, etc.

In the following sections, we'll provide steps to follow to QA your experiment.


NOTE:
> For information about the APIs that are being described in this article, including [NSNotifications](/ios/reference/index.html#subscribe-to-nsnotifications) and [experiment data object](/ios/reference/index.html#experiment-data-object), you can always refer back to our [API documentation](/ios/help/html/index.html) for definitions on how these methods work!

### DEBUGGING YOUR EXPERIMENTS

In addition to the methods laid out in this article, our Developer Docs provide additional methods for debugging your experiments:

- [Subscribe to NSNotifications](/ios/reference/index.html#subscribe-to-nsnotifications)
- [Experiment Data Object](/ios/reference/index.html#experiment-data-object)
- [Audience Information](/ios/reference/index.html#audience-information)
- [Forcing a Variation](/ios/reference/index.html#forcing-a-variation)
- [Resetting QA State](/ios/reference/index.html#resetting-qa-state)

### RUN YOUR APP IN NORMAL MODE

There are two modes that you can run in your app with Optimizely:

*Edit mode:* This mode enables your device to connect to the Optimizely Editor. Your end users will not be able to put the app into this mode.

*Normal mode:* In this mode, experiments are running as they would to your end users.

To QA your experiment as a developer, make sure that your app is in Normal mode so that you can see what your users will experience (you will not see the Edit mode status bar in your app).


TIP:
> If your app is in Edit mode (you should see the Edit Mode status bar in your app), disconnect from the Editor.  Do this by running the app in Xcode again or clicking on the Connected to button next to Options, and disconnecting.


> If you are running your app for the first time with the SDK installed, you will see that the app should already be in Normal mode. You can also verify that your app is in normal mode by looking at your console logs (if you have verboseLogging enabled). The Optimizely experiment also has to have been started. You can see whether it's started by looking at the Start/Pause button in the Editor, or by looking at the experiment on the Home page.



NOTE:
> Before pressing Start, you will want to make sure that you either have [custom tags](/ios/reference/index.html#custom-tags) set up or a separate project in a staging environment so that your live users do not see your experiment.

<img src="/assets/img/start_experiment.png" alt="Drawing" style="width: 50%;"/>



*CHECK TARGETING CONDITIONS, TRAFFIC ALLOCATION, AND STATUS*

An experiment is running when the datafile is successfully downloaded, the user meets the targeting conditions, traffic allocation is met, and the experiment is not locked. An experiment is locked when you modify the same view, variable or code block in multiple active experiments. An experiment can be in one of three states:

- `OptimizelyExperimentDataStateDisabled`
- `OptimizelyExperimentDataStateRunning`
- `OptimizelyExperimentDataStateDeactivated`

For more details about how an experiment can be in each of these states, refer to our documentation of [how the SDK works](/ios/articles/1-article-test.html).

For iOS, you can check the experiment state by creating a variable to hold `allExperiments` array, and setting a breakpoint after in order to see the *\_state* property of the `OptimizelyExperimentData` object. An experiment will be marked as `OptimizelyExperimentDataStateRunning` if the experiment is running.

<img src="/assets/img/ios/ios_qa_targeting_2.png" alt="Drawing" style="width: 80%;"/>

To check the targeting conditions of the current visitor, read the Optimizely data object’s *\_targetingConditions* property, to see what the conditions are currently. Creating a variable and setting a breakpoint, from 1, will allow you to see this.


TIP:
If you don’t see the *\_targetingConditions* and *\_targetingMet* values that you expect, the app may need to be foregrounded or a call to refreshExperiments may need to be made.

When the application is next brought to the foreground (after being backgrounded), the SDK re-checks targeting conditions, and if they have changed this will be reflected in the *\_targetingConditions* property. You can also force re-checking of targeting conditions by calling `[Optimizely refreshExperiments]`.

*CHECK WHETHER THE VARIATION HAS BEEN VISITED*

A visitor is considered part of an experiment when they visit a variation. To check whether a visitor has seen visited an experiment by using the `OptimizelyExperimentVisitedNotification`. To verify that your experiment is running as expected, you can use this notification to fire when you expect it to.

The syntax for this notification is shown below:

```obj-c
[[NSNotificationCenter defaultCenter] addObserver:self
    selector:@selector(experimentReceivedNotification:)
    name:OptimizelyExperimentVisitedNotification
    object:nil];
```

<img src="/assets/img/ios/ios_qa_visited_3.png" alt="Drawing" style="width: 80%;"/>

Now, once you’ve navigated to the view controller where your variation is, you can view useful experiment data properties such as *\_visitedEver*, *\_visitedThisSession* and *\_state*.

*CHECK DIFFERENT VARIATIONS*

Typically, if you want to check that different variations are working as expected, you can use Optimizely’s [Preview functionality](https://help.optimizely.com/hc/en-us/articles/202296994-Get-Started-on-Mobile-Optimization#preview). If you want to test out different variations in normal mode, you'll have to delete the app from the device and re-install it. Optimizely stores which variation a users sees and makes sure they will always see this variation. Deleting the app treats the fresh installation as a new user.


TIP:
> Optimizely’s Traffic Allocation will randomly bucket users into a variation based on the percentages that are set in the Optimizely Editor. When you change a variation’s traffic allocation mid-experiment, all new users will be allocated accordingly from then on.

> However, all users that have entered your experiment prior to the change will be bucketed into the same variation they entered previously, thus altering the results and making it difficult to interpret conversion rate. This is one reason we recommend that people do not alter individual traffic allocation to a single variation.

*CHECK WHETHER THE GOAL IS FIRING*

A goal is tracked for a given experiment only if the experiment has been *\_visitedEver*. To check whether your goals are being triggered as expected when you want them to, you can subscribe to the `OptimizelyGoalTriggeredNotification`.

Once you have tapped, viewed, or sent off your custom event goal, the app should stop for the new goal triggered callback method. Backgrounding and foregrounding the app will also send the goal.

If you check the `optlyVisitedExperiments` array, you will be able to see a list of experiments for which the goal was fired. An example of how to implement this is below:

```obj-c
[[NSNotificationCenter defaultCenter] addObserver:self
    selector:@selector(goalReceivedNotification:)
    name:OptimizelyGoalTriggeredNotification
    object:nil];
```

<img src="/assets/img/ios/ios_qa_goal_4.png" alt="Drawing" style="width: 80%;"/>


*RUN DIFFERENT VARIATIONS ON MULTIPLE DEVICES*

Now that you have your experiment set up as expected, try running your experiment on different devices. To get bucketed into different variations, you can delete the app and run the app again.

*EXPERIMENT CHANGE UPDATES IN DATAFILE*

When experiment changes are made, the datafile is updated on the Optimizely CDN. Once the datafile is changed, the app downloads the updated datafile within 2 minutes.

For the datafile to take effect, the app must be foregrounded or refreshExperiments must be called. It can take up to a few minutes for changes to propagate to the datafile.

To see if the datafile needs to be updated, check the Optimizely data object for the *\_state* property. Subscribe to the `OptimizelyNewDataFileLoadedNotification` to determine when the datafile has been updated.

By default, the SDK will try to download a new datafile with your updated experiment data every 2 minutes, which is configurable in your network settings.

When refreshing the data file, please note that backgrounding and then foregrounding the app will force goal triggers.

To configure this, do the following:

- Create a method to call when the `NSNotification` has been received
- Subscribe to `OptimizelyNewDataFileLoadedNotification` and using your new method as a callback
- In the callback method, creating an `OptimizelyExperimentsData` object
- Set a breakpoint after this has been created

Below is an example of this implementation. Note that the data file version has been updated from 1028 to 1031, and in this example, the datafile update happened when the app was backgrounded and then foregrounded.

<img src="/assets/img/ios/ios_qa_datafile_5.png" alt="Drawing" style="width: 80%;"/>

Once you’re done going through these steps, you’re ready to run your experiment live on your app.
