---
template: page-sidebar
title: "Optimizely Android SDK FAQs"
---

# <a name="FAQ"></a>Optimizely Android SDK FAQs

Below are some frequently asked questions about the Android SDK. You may also want to check out [general product FAQs](https://help.optimizely.com/hc/en-us/articles/201893400).

Can't find an answer to your question? We're happy to answer your question on <a href="mobile-support@optimizely.com">mobile-support@optimizely.com</a>.

<a href="#negativesize">*Q:* Why are there negative values (-1, -2) for width and height in the Visual Editor?</a><br>
<a href="#matchwrap">*Q:* How do I use `MATCH_PARENT` or `WRAP_CONTENT` for width and height in the Visual Editor?</a><br>
<a href="#blocking">*Q:* Is `Optimizely#startOptimizely()` a blocking method?</a><br>
<a href="#startoptimizely">*Q:* Where and when can I call `Optimizely#startOptimizely()`?</a><br>
<a href="#codeblockmemory">*Q:* Should we unregister or nullify OptimizelyCodeBlock with anonymous handlers that have a reference to an Activity after finishing the `OptimizelyCodeBlock#execute()` method call?</a><br>
<a href="#threadsafety">*Q:* Are LiveVariable evaluations thread-safe?</a><br>
<a href="#proguard">*Q:* Do I need to include any ProGuard configuration rules to use the Optimizely SDK?</a><br>
<a href="#cantseeappineditor">*Q:* My device is running the app but I can't see it in the editor.</a><br>
<a href="#3rdparty">*Q:* Does Optimizely work with my other 3rd party SDKs?</a><br>
<a href="#resultspage">*Q:* I am not seeing conversions or visitors on the results page.</a><br>

<a name="negativesize"></a>
#####*Q: Why are there negative values (-1, -2) for width and height in the Visual Editor?*
*A:* Android uses `-1` for the constant `MATCH_PARENT` and `-2` for `WRAP_CONTENT`. To set the size of the view to an explicit pixel value, enter a positive number of pixels
in the width or height fields in the visual editor. We are working on an update to the editor that will better understand these special values.

<a name="matchwrap"></a>
#####*Q: How do I use `MATCH_PARENT` or `WRAP_CONTENT` for width and height in the Visual Editor?*
*A:* Android uses `-1` for the constant `MATCH_PARENT` and `-2` for `WRAP_CONTENT`. To set the width or height of the view to `WRAP_CONTENT`, enter `-2` in the corresponding field. Similarly, to set the width or height to `MATCH_PARENT`, ENTER `-1` in the corresponding field in the visual editor. We are working on an update to the editor that will better understand these special values.

<a name="blocking"></a>
#####*Q: Is `Optimizely#startOptimizely()` a blocking method?*
*A:* Yes, `Optimizely#startOptimizely()` is blocking. It will exit and return `true` if the configuration file was downloaded and parsed, or `false` if it hits the network timeout (or another error occurred). The default timeout is 2.5 seconds and is configurable through the `setNetworkTimeout()` API. Calls to `startOptimizely()` are not synchronized, and are not thread safe.

<a name="startoptimizely"></a>
#####*Q: Where and when can I call `Optimizely#startOptimizely()`?*
*A:* `Optimizely#startOptimizely()` must be called from the UI thread, but may be called as many times as you like. Multiple calls after the first activation call are no-ops. `Optimizely#startOptimizely()` may be called from any UI thread method (such as `onCreate()` in an `Application` or `Activity` subclass).

<a name="codeblockmemory"></a>
#####*Q: Should we unregister or nullify OptimizelyCodeBlock with anonymous handlers that have a reference to an Activity after finishing the `OptimizelyCodeBlock#execute()` method call?*
*A:* OptimizelyCodeBlocks are long-lived, so any references to Activities/Views/Applications should be weak references. This is a known issue that is being addressed.

<a name="threadsafety"></a>
#####*Q: Are LiveVariable evaluations thread-safe?*
*A:* In production mode, all live variable values are set when Optimizely starts up. Any further access to the LiveVariable is a read-only action and is thus thread safe.

<a name="proguard"></a>
#####*Q: Do I need to include any ProGuard configuration rules to use the Optimizely SDK?*
*A:* The Optimizely SDK works with the default ProGuard rules (found in SDK/tools/proguard/proguard-android.txt) with the following addendums for the GSON serialization:

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

<a name="permissions"></a>
#####*Q: Does the Optimizely SDK require any permissions?*
*A:* The Optimizely SDK only requires the [INTERNET](http://developer.android.com/reference/android/Manifest.permission.html#INTERNET) permission.

<a name="cantseeappineditor"></a>
#####*Q: My device is running the app but I can't see it in the editor.*
*A:* First, confirm your device is connected to the internet and make sure that the API token in your call to `startOptimizely` matches what you see in the Project Code box within Optimizely. For more information, you can set `Optimizely.setVerboseLogging(true);` and look for error messages in Logcat.

<a name="3rdparty"></a>
#####*Q: Does Optimizely work with my other 3rd party SDKs?*
*A:* Optimizely works with many 3rd party SDKs. If we encounter specific 3rd party SDKs that cause conflicts with Optimizely we will list them here.

<a name="resultspage"></a>
#####*Q: I am not seeing conversions or visitors on the results page.*
*A:* There are two things to check if you not being counted as a visitor or seeing conversions on the results page as you're doing QA: that you meet targeting conditions and goals are being triggered properly.

To be counted as a visitor and show up on the results page, you actually have to see the change that you made to the app (i.e. the live variable code has to actually execute or you have to see the change you made via the visual editor).  Goals are only sent to the server every 2 minutes (the app must be open for at least 2 minutes), or you need to background and foreground the app in order for events store locally to be sent to the server.

To check that goals are triggering properly, you can use our developer APIs including: [OptimizelyEventListener](http://developers.optimizely.com/android/help/reference/com/optimizely/integration/OptimizelyEventListener.html) and [getVisitedExperiments](/android/help/reference/com/optimizely/Optimizely.html#getVisitedExperiments(%29) to check that:

- Your experiment is running 
- Your goals are triggered properly
