---
template: page-sidebar
title: "Optimizely Android SDK Changelog"
---

# Optimizely Android SDK Changelog

### 1.3.0
November 6, 2015

*Announcements:*
*Twitter Fabric Integration.* We're excited to announce our partnership with Fabric, Twitter's modular mobile platform that makes it easy for developers to install and maintain SDKs within their apps. Find out more [here](https://blog.optimizely.com/2015/10/21/optimizely-twitter-fabric/)

*New Features:*
- *Developer Improvements.* We've added a litany of testing methods to our SDK to help you debug your experiments much more quickly and easily
	- isUserInAudience - Check if the user is in a particular audience
	- getExperimentDataById - Get an experiment's metadata with that experiment's ID
	- resetUserBucketing - Remove a user's bucketing information for all experiments
	- forceVariationOfExperiment - Force a user into a certain experiment variation
Read more in-depth descriptions [here](/android/reference/index.html#debugging-your-experiments)
- *Manual activation.* You can now manually specify, in code, when you want your experiments to activate (by default, all active experiments are activated when start Optimizely is called). Some important use cases include setting additional targeting metadata before activating an experiment and only bucketing users who visit a certain activity in your app
Read more in-depth descriptions [here](/android/reference/index.html#experiment-activation-modes)
- *Code Block Callbacks in Edit Mode.* Please note that code block callbacks will only work in edit mode
- *Automatic Crash Disabling.* Our Android SDK is now more stable than ever!
	- Optimizely-related crashes in the main thread will cause Optimizely SDK disable itself on that device until an Optimizely SDK version change or an app version change
	- Optimizely-related crashes in background threads will cause the thread to quietly shut down
	- Optimizely SDK automatically disables itself for that session if no running experiments are detected on app start

*Bug Fixes:*
- Improved preview mode access from URL scheme consistency 
- Improved visual editor button resizing consistency 
- Fixed counting bug affecting custom events when used with UUID

### 1.2.4
October 16, 2015

*Code Deprecation*

    Optimizely.startOptimizely(String, Application)

is deprecated in favor of:

    Optimizely.startOptimizelyWithAPIToken(String, Application)

*Bug Fixes*
- Added Fabric properties to core as well as bundle

### 1.2.3
October 15, 2015

*Bug Fixes*
- Added Fabric properties

### 1.2.2
October 14, 2015

*New Features* 
- Proguard configuration for SDK is now bundled with the SDK

*Bug Fixes*
- Fixes conflict between Proguard and Gson
- Removes unecessary elements from the library's Manifest

### 1.2.1
October 6, 2015

*Bug Fixes*
- Remove backup settings from AndroidManifest.xml

### 1.2.0
October 5, 2015

*New Features*
- *Audience targeting.* Improve your app’s retention by creating audiences of similar users and targeting them with relevant content.
- *Connection-free changes.* Make changes to Live Variables and Code Blocks without connecting your device to Optimizely.
- *Streamlined goal setting.* Save time during instrumentation with a faster and more accurate goal selection experience.
- *Multi-target goals.* Accurately test entirely different variations by connecting multiple view or tap events to a single goal.
- *Advanced preview and QA modes.* Release new features confidently with a rebuilt preview mode that allows you to simulate a live user experience in real time.
- *Analytics integrations.* See your Android experiment results in your Google Analytics, Mixpanel, Localytics, or Amplitude dashboard.