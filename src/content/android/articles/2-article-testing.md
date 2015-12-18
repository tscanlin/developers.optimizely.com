---
template: page-sidebar
partial: partials/_article-summary.html
includeSiblingData: true
title: "QA Optimizely Android Experiments"
summary: |
   Learn how to use Optimizely developer tools to QA your Optimizely experiments.
   You can find examples of how to use each of the QA methods in Optimizely's TutorialApp, which can be [downloaded with the SDK](/android/getting-started/index.html).  The corresponding guide can be found [here]("/android/guide/index.html").


---

# QA Optimizely Android Experiments

*THIS ARTICLE WILL HELP YOU:*
- Learn how to use Optimizely developer tools to QA your Optimizely experiments
- Implement code samples of how to use Optimizely’s Experiment Data Object and [OptimizelyEventListener](/android/reference/index.html#adding-an-event-listener) to ensure your experiment is set up as expected
- You can find examples of how to use each of these methods in Optimizely's TutorialApp, which can be downloaded with the SDK.  The corresponding guide can be found [here](/android/guide/index.html).

### OVERVIEW

So you’ve created your experiment, finished your setup, and you’d like to QA your experiment to make sure it’s working correctly. There are two main ways to QA your experiment, which include: [Preview Mode](https://help.optimizely.com/hc/en-us/articles/202296994#preview) and Developer Debugging tools. This article will focus on how to QA your experiment with developer tools.

*Preview mode*

This lets you see your variation changes as your user would. You can easily enter this from the editor from each variation tab’s settings icon. You can learn more about Preview Mode here.

*Developer debugging tools*

You can take advantage of Optimizely’s [event listeners](/android/reference/index.html#adding-an-event-listener) and the [data object](/android/reference/index.html#experiment-data-object) in order to gain a better understanding of when your experiment is running. These tools will allow you to check that you are creating the experience, targeting the audience, and tracking the goals that you expect.


TIP:
> Enable logging for QA (be sure to disable this feature when your app is live in the Play store) ``Optimizely.verboseLogging(true)``. The logs include a number of useful messages such as: the SDK version, a log for each event that’s triggered, etc.

In the following sections, we'll provide steps to follow to QA your experiment.


NOTE:
> For information about the APIs that are being described in this article, including [listeners](/android/reference/index.html#adding-an-event-listener) and experiment [data object](/android/reference/index.html#experiment-data-object), you can always refer back to our API documentation for definitions on how these methods work!

### DEBUGGING YOUR EXPERIMENTS

In addition to the methods laid out in this article, our Developer Docs provide additional methods for debugging your experiments:

- [Adding an Event Listener](/android/reference/index.html#adding-an-event-listener)
- [Experiment Data Object](/android/reference/index.html#experiment-data-object)
- [Audience Information](/android/reference/index.html#audience-information)
- [Forcing a Variation](/android/reference/index.html#forcing-a-variation)
- [Resetting QA State](/android/reference/index.html#resetting-qa-state)

### RUN YOUR APP IN NORMAL MODE

There are two modes that you can run in your app with Optimizely:

*Edit mode:* This mode enables your device to connect to the Optimizely Editor. Your end users will not be able to put the app into this mode.

*Normal mode:* In this mode, experiments are running as they would to your end users.

To QA your experiment as a developer, make sure that your app is in Normal mode so that you can see what your users will experience (you will not see the Edit mode status bar in your app).


TIP:
> If your app is in Edit mode (you should see the Edit Mode dark blue icon in your app), disconnect from the Editor.  Do this by running the app in Android Studio again or clicking on the *Connected* to button next to Options, and disconnecting.


> If you are running your app for the first time with the SDK installed, you will see that the app should already be in Normal mode. You can also verify that your app is in normal mode by looking at your console logs (if you have verboseLogging enabled). The Optimizely experiment also has to have been started. You can see whether it's started by looking at the Start/Pause button in the Editor, or by looking at the experiment on the Home page.



NOTE:
> Before pressing Start, you will want to make sure that you either have [custom tags](/android/reference/index.html#custom-tags) set up or a separate project in a staging environment so that your live users do not see your experiment.

<img src="/assets/img/start_experiment.png" alt="Drawing" style="width: 50%;"/>



*CHECK TARGETING CONDITIONS, TRAFFIC ALLOCATION, AND STATUS*

An experiment is running when the datafile is successfully downloaded, the user meets the targeting conditions, traffic allocation is met, and the experiment is not locked. An experiment is locked when you modify the same view, variable or code block in multiple active experiments. An experiment can be in one of three states:

- `OptimizelyExperimentDataStateDisabled`
- `OptimizelyExperimentDataStateRunning`
- `OptimizelyExperimentDataStateDeactivated`

For more details about how an experiment can be in each of these states, refer to our documentation of [how the SDK works](/android/articles/1-article-testing.html).

For Android, you can drill down into Optimizely's `allExperiments` data object by setting a breakpoint and see the same information about targeting and experiment state.

<img src="/assets/img/android/android_qa_targeting_2.png" alt="Drawing" style="width: 80%;"/>


TIP:
If you don’t see the *\_targetingConditions* and *\_targetingMet* values that you expect, the app may need to be foregrounded or a call to refreshExperiments may need to be made.

When the application is next brought to the foreground (after being backgrounded), the SDK re-checks targeting conditions, and if they have changed this will be reflected in the *\_targetingConditions* property. You can also force re-checking of targeting conditions by calling `Optimizely.refreshExperiments()`.

*CHECK WHETHER THE VARIATION HAS BEEN VISITED*

A visitor is considered part of an experiment when they visit a variation. To check whether a visitor has seen visited an experiment by using the `onOptimizelyExperimentViewed` listener. To verify that your experiment is running as expected, you can use this method to add a log statement to verify that the method was called and verify that the log statement appears in the console.

On Android, you can register the OptimizelyEventListener prior to `startOptimizelyWithAPIToken`.  The code you can use is shown below.  For more details, you can refer to the article here.

<img src="/assets/img/android/android_qa_visited_code_3.png" alt="Drawing" style="width: 80%;"/>

You can set breakpoints to view useful experiment data properties such as visitedEver or visitedThisSession.

<img src="/assets/img/android/android_qa_visited_3_2.png" alt="Drawing" style="width: 80%;"/>

*CHECK DIFFERENT VARIATIONS*

Typically, if you want to check that different variations are working as expected, you can use Optimizely’s [Preview functionality](https://help.optimizely.com/hc/en-us/articles/202296994-Get-Started-on-Mobile-Optimization#preview). If you want to test out different variations in normal mode, you'll have to delete the app from the device and re-install it. Optimizely stores which variation a users sees and makes sure they will always see this variation. Deleting the app treats the fresh installation as a new user.

TIP:
> Optimizely’s Traffic Allocation will randomly bucket users into a variation based on the percentages that are set in the Optimizely Editor. When you change a variation’s traffic allocation mid-experiment, all new users will be allocated accordingly from then on.

> However, all users that have entered your experiment prior to the change will be bucketed into the same variation they entered previously, thus altering the results and making it difficult to interpret conversion rate. This is one reason we recommend that people do not alter individual traffic allocation to a single variation.

*CHECK WHETHER THE GOAL IS FIRING*

A goal is tracked for a given experiment only if the experiment has been *\_visitedEver*. To check whether your goals are being triggered as expected when you want them to, you can use the `onGoalTriggered` listener.

Once you have tapped, viewed, or sent off your custom event goal, the app should stop for the new goal triggered callback method. Backgrounding and foregrounding the app will also send the goal.

For Android, you can use the onGoalTriggered listener to see when a goal is triggered as shown in the code below.

```java
public void onGoalTriggered(String description,
                                List<OptimizelyExperimentData> affectedExperiments) {
      Log.i(tag, format("Optimizely goal {%s} part of experiments {%s} achieved.",
                          description, affectedExperiments));
    }
```

*RUN DIFFERENT VARIATIONS ON MULTIPLE DEVICES*

Now that you have your experiment set up as expected, try running your experiment on different devices. To get bucketed into different variations, you can delete the app and run the app again.

Once you’re done going through these steps, you’re ready to run your experiment live on your app.
