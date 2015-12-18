---
template: page-sidebar
partial: partials/_article-summary.html
includeSiblingData: true
title: "How Optimizely's Android SDK Works"
summary: |
   Learn about how Optimizely's Android SDK Order of execution, experiment activation, and goals.
   Specifically, the article discusses how Optimizely's SDK executes in an app, the order of operations for how an experiment runs,
   and how conversions are counted in Optimizely.
---

# How Optimizely's Android SDK Works

*THIS ARTICLE WILL HELP YOU:*
- Understand *how Optimizely's SDK executes* in an app
- Understand the *order of operations* for how an experiment runs
- *Use Optimizely's Android APIs* to provide visibility into what experiments are running
- *Activate experiments manually* based on a user action (SDK versions 1.3 and above)
- Understand *how conversions are counted* in Optimizely


### OPTIMIZELY'S SDKS ORDER OF EXECUTION

The following diagram illustrates how experiments are activated by the Optimizely SDK.

<img src="/assets/img/ios/optimizely_sdk_execution.png" alt="Drawing" style="width: 100%;"/>

When your application starts up and the Optimizely SDK is initialized, Optimizely downloads a JSON data file containing all experiment data. This datafile is downloaded with a (configurable) 2 second timeout. If the datafile can’t be downloaded, a cached data file is used. If no data file is found, no experiments are run. While the app is running, a new datafile is fetched by Optimizely every 2 minutes (configurable).

After downloading the data file, each experiment is evaluated to see if it can be run. First, the SDK checks to see if the experiment passes targeting conditions. If it passes targeting conditions, it is then run through traffic allocation and a variation is chosen. Once this variation is chosen, this is saved and the user will always see this variation. As a last check, the Optimizely SDK checks to see if this experiment conflicts with another experiment. If it does, the experiment becomes locked and will not run. If the experiment passes all those checks, it is now set to running in the application.


TIP:
> An experiment conflicts with another when you modify the same view, variable, or code block in multiple experiments. In this case, one of the experiments will not run. You can identify whether or not a conflict exists by looking at verboseLogging.

When the application resumes or is brought the foreground after being backgrounded, the Optimizely SDK runs through the same process as above, but does not attempt to download a new datafile. This means that some experiments that were running before may now stop, and some experiments that were not running before may start.


TIP:
> refreshExperiments allows targeting conditions to be reevaluated while the app is running (and does not require an app to be foregrounded).

### MOBILE EXPERIMENT STATES

The above diagram shows how experiments are activated and eventually put into the “running” state. But what does this mean?

An Optimizely mobile experiment has 3 possible states:

- Disabled
- Running
- Deactivated

*Disabled:* This means the experiment has been paused from the Optimizely dashboard.

*Running:* This means the experiment is running and ready to be viewed. This doesn’t necessarily mean it has been viewed.

*Deactivated:* This means the experiment failed a condition required to run, either targeting, traffic allocation, or it is locked or conflicts with another experiment.

Once an experiment is running, it is ready to be viewed. But running doesn’t necessarily mean it has been viewed.

You can use the following APIs on both iOS and Android to see the state of experiments.

On Android, you can call:

``Optimizely.getAllExperiments()``
This returns a Map of OptimizelyExperimentData objects that represent every experiment the SDK knows about
``Optimizely.getVisitedExperiments()``
This returns a Map of OptimizelyExpermentData objects that represent every experiment that has been seen and visited by the user across all sessions

*When is an experiment marked as viewed?*

Once an experiment is running, it is marked as viewed the first time it is seen by an end user. For visual experiments, the first time a visual treatment is shown, the experiment is marked as viewed.

For programmatic experiments, the first time a live variable or code block from that experiment is accessed, it is marked as viewed.

The Optimizely SDKs keep track of which experiments have been visited across all sessions, as well as which experiments have been visited in a given session. Simply use the visitedExperiments API to get a list.


TIP:
> You can register a [callback](/android/reference/index.html#adding-an-event-listener) for Android to be notified when various Optimizely events occur in the SDK life cycle.

### MANUAL ACTIVATION

You can manually activate Optimizely for your mobile app. In essence, this will force Optimizely to re-evaluate based on an in-app API call. The two activation modes for mobile experiments are automatic (default) and manual. Manual activation is only available for SDK versions 1.3 and above.

*Automatic (Default):* By default, Optimizely buckets users and activates the experiment as soon as the app starts and the `startOptimizelyWithAPIToken` method is called (either synchronously or asynchronously). Experiments are marked as visited when the end user reaches an element that has been modified in the experiment.

*Manual:* In manual activation mode, developers can specify, via an in-app API call, at which point they want to activate a given experiment. Manual activation allows you to separate the experiment start (which buckets the users and activates the experiment) from `startOptimizelyWithAPIToken`, which loads the datafile and any remote assets, such as images. Check out the developer documentation on manual activation for iOS and Android.

*Please note that visitors still must meet Audience targeting conditions for a manually activated experiment to be eligible for that experiment.* Manual activation does not bypass Audience conditions.

Toggle between manual and automatic activation mode from the Options > Activation Mode menu in the Editor:

<img src="/assets/img/ios/activation_mode.png" alt="Drawing" style="width: 50%;"/>


NOTE:
> What happens if you try to use manual activation when your experiment is on automatic activation mode, or if you try to manually activate an experiment that doesn’t exist?

> The call will simply not execute and your app will continue running as before, with the control variation as the default experience.

*Why would you want to use manual activation?* We’ve outlined some use cases below.

*Use Case #1: Set additional metadata for your audiences before evaluating targeting conditions for an unactivated experiment.*

Bucketing only occurs for your audiences when activateExperiment is called and NOT when ``startOptimizelyWithAPIToken`` is called, and thus any custom tags you set before the experiment starts will be considered for targeting.
For example, you can mark a user as a “VIP” at one point during a session, then use this tag for an experiment later in the same session.
With automatic activation mode, you can only target using tags set before the app was started (and thus set in a previous session).

*Use Case #2: Bucket only a subset of users who access less frequently used areas of your app.*

Bucketing users when the app loads, which is done in automatic mode, may not be the best choice for experiments involving an experience that not all users visit.

For example, if you want to test a feature deep in your user experience that only 10% of users visit, you wouldn’t necessarily want to bucket all users when you launch your app (as is done with automatic mode), because this could lead to skewed sampling.
If you manually activate your experiment only when users reach that experience, you can bucket users at the point where they visit that feature, and run tests on only those users.

*Use Case #3: Quick-load assets for consistency.*

Remote assets distributed by the Optimizely CDN, such as images you upload to our editor, start loading asynchronously when the app starts. As a result, if any assets fail to load before an experiment is viewed due to slow internet speeds, the user is not showed the variation and is instead shown the control even though that user has been bucketed.

The variation will be shown to the user the next time he or she opens the app, assuming the assets have loaded before he or she views the experiment, leading to an inconsistent user experience and possibly even skewed results.
In manual activation mode, you can activate experiments right when you want to show them, giving the user’s device more time to load assets associated with that experiment.

### HOW CONVERSIONS ARE COUNTED

There are several types of conversion events and goals that Optimizely captures:

- Tap Goal
- View Goal
- Custom Event Goal
- Revenue Goal

Optimizely counts conversions for these goals only when an experiment has been previously visited by the user in any session, and the experiment is not paused from the Optimizely dashboard.

For example, if you make a call to a custom event, but the user hasn’t actually visited that experiment, the conversion will not count.

Similarly, if a user visited an experiment in their first session (e.g. a sign up flow), but converts in the second session without visiting the experiment again, that conversion will still count towards the experiment.

### HOW VISUAL EXPERIMENTS EXECUTE

The Optimizely SDKs let you create visual experiments that you can run in your application without having to re-deploy to the app store! But how does it actually apply those visual treatments?

On Android, Optimizely uses reflection to attach the SDK as a listener for interaction and lifecycle events to apply visual changes to the application based on whatever experiments are active in the data file. In particular, the Optimizely SDK intercepts the following listeners:

*`ViewGroup`*
   - `OnHierarchyChangeListener:`
      - We register the view when the view moves into the window
      - We unregister the view when the view moves out of the window
      - We check to see if there are any visual changes that need to be applied to the view from any active experiments

*`AbsListView`*
   - `OnScrollListener:`
      - Only used when app is connected to Optimizely’s web app, logic used to send screenshots
      - When scrolling is complete, screenshot is sent to Optimizely Visual Editor

*`DrawerLayout`*
   - `DrawerListener:`
      - Only used when app is connected to Optimizely’s web app
      - Logic used to send screenshots
      - When drawer is open or closed, screenshot is sent to Optimizely Visual Editor

*`Animation`*
   - `AnimationListener:`
      - Only used when app is connected to Optimizely’s web app
      - Logic used to send screenshots
      - When animation is complete, screenshot is sent to Optimizely Visual Editor

*`View.OnTouchListener`*
   - `OnTouchListener:`
      - We check to see if there’s a goal attached to the view that got tapped, if so we end up storing a tap event
      - In edit mode we send a screenshot whenever the user interacts with the device through a touch
      - Used to detect edit mode gesture only in development builds

*`Application.ActivityLifecycleCallbacks`*
   - `ActivityResumed:`
      - We check to see if there is a view goal associated with the view that is coming into frame. If there is then we’ll store the view
   - `onActivityCreated:`
      - Puts the app into edit mode if necessary
