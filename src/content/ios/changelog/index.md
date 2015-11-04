---
template: page-sidebar
title: "Optimizely iOS SDK Changelog"
---

# Optimizely iOS SDK Changelog

### 1.3.0
November 5, 2015

*Announcements:*
*Twitter Fabric Integration.* We're excited to announce our partnership with Fabric, Twitter's modular mobile platform that makes it easy for developers to install and maintain SDKs within their apps. Find out more [here](https://blog.optimizely.com/2015/10/21/optimizely-twitter-fabric/)

*New Features:*
- *Developer Improvements.* We've added a litany of testing methods to our SDK to help you debug your experiments much more quickly and easily
isUserInAudience - Check if the user is in a particular audience
getExperimentDataById - Get an experiment's metadata with that experiment's ID
resetUserBucketing - Remove a user's bucketing information for all experiments
forceVariationOfExperiment - Force a user into a certain experiment variation
Read more in-depth descriptions [here](/ios/reference/index.html#debugging-your-experiments)
- *Manual activation.* You can now manually specify, in code, when you want your experiments to activate (by default, all active experiments are activated when start Optimizely is called). Some important use cases include setting additional targeting metadata before activating an experiment and only bucketing users who visit a certain activity in your app
Read more in-depth descriptions [here](/ios/reference/index.html#experiment-activation-modes)
- *New notification types:*
OptimizelyFailedToStartNotification 
OptimizelyStartedNotification
- *Code Block Callbacks in Edit Mode.* Please note that code block callbacks will only work in edit mode
- *Upgrade dialogs.* Dialogs now apppear in our web interface to alert you of new SDK updates

*Bug Fixes:*
- iOS - Fixed bug in language Audience condition 
- iOS - Improved edit-mode connection gesture reliability 

### 1.2.2 
October 12, 2015

*Bug Fixes*
- Fixed more warnings in Xcode 7

### 1.2.1 
October 6, 2015

*Bug Fixes*
- Fixed warnings stemming from Xcode 7 and static libraries
- Re-added armv7s which was removed by default in Xcode 7

### 1.2.0
October 5, 2015

*New Features*
- *Audience targeting.* Improve your app’s retention by creating audiences of similar users and targeting them with relevant content.
- *Connection-free changes.* Make changes to Live Variables and Code Blocks without connecting your device to Optimizely.
- *Streamlined goal setting.* Save time during instrumentation with a faster and more accurate goal selection experience.
- *Multi-target goals.* Accurately test entirely different variations by connecting multiple view or tap events to a single goal.
- *Advanced preview and QA modes.* Release new features confidently with a rebuilt preview mode that allows you to simulate a live user experience in real time.
- *Localytics integration.* See the impact your Optimizely experiments have on the key business metrics you track using Localytics.