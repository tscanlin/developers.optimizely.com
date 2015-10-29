---
template: page-sidebar
title: "Optimizely Android SDK Changelog"
---

# Optimizely Android SDK Changelog

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

### 1.2
October 5, 2015

*New Features*
- *Audience targeting.* Improve your app’s retention by creating audiences of similar users and targeting them with relevant content.
- *Connection-free changes.* Make changes to Live Variables and Code Blocks without connecting your device to Optimizely.
- *Streamlined goal setting.* Save time during instrumentation with a faster and more accurate goal selection experience.
- *Multi-target goals.* Accurately test entirely different variations by connecting multiple view or tap events to a single goal.
- *Advanced preview and QA modes.* Release new features confidently with a rebuilt preview mode that allows you to simulate a live user experience in real time.
- *Analytics integrations.* See your Android experiment results in your Google Analytics, Mixpanel, Localytics, or Amplitude dashboard.
- *Bug fixes.* We’ve squashed a bunch of bugs under the hood to make sure Optimizely works the way you expect it to.