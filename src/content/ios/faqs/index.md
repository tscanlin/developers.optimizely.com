---
template: page-sidebar
title: "Optimizely iOS SDK FAQs"
---

# <a name="FAQ"></a>Optimizely iOS SDK FAQs

Below are some frequently asked questions about the iOS SDK. You may also want to check out [general product FAQs](https://help.optimizely.com/hc/en-us/articles/201893400).

Can't find an answer to your question? We're happy to answer your question on <a href="mobile-support@optimizely.com">mobile-support@optimizely.com</a>.

<a href="#cantseeappineditor">*Q:* My device is running the app but I can't see it in the editor.</a><br>
<a href="#remoterepo">*Q:* What should I do if I get a `Could not read from remote repository.` error?</a><br>
<a href="#tableview">*Q:* How do I modify a Table View Cell?</a><br>
<a href="#appcrash">*Q:* My app crashes and I get a run-time error after installing.</a><br>
<a href="#compileerror">*Q:* My app won't compile.</a><br>
<a href="#dynamicimage">*Q:* My dynamically rendered image does not render while using the Editor.</a><br>
<a href="#visualeditorchange">*Q:* I'm trying to make a Visual Change with Optimizely's Visual Editor, but the View is not changing.</a><br>

<a name="cantseeappineditor"></a>
#####*Q: My device is running the app but I can't see it in the editor.*
*A:* First, confirm your device is connected to the internet and make sure that the API token that you passed into

```objective-c
[Optimizely startOptimizelyWithAPIToken:@"YOUR-API-TOKEN"
						  launchOptions:launchOptions];
```
matches what you see in the Project Code box within Optimizely.

<a name="remoterepo"></a>
#####*Q: What should I do if I get a `Could not read from remote repository.` error?*
*A:* Please make sure you have a Github account with [SSH access](https://help.github.com/articles/generating-ssh-keys) installed.

<a name="tableview"></a>
#####*Q: How do I modify a Table View Cell?*
*A:* By default, each instance of a UITableViewCell in a UITableView will have the same changes applied to it.  If you would like to be able to modify a single UITableViewCell, you can [tag](#tag%20your%20views) the specific UITableViewCell with an optimizelyId.

<a name="appcrash"></a>
#####*Q: My app crashes and I get a run-time error after installing:*
```this class is not key value coding-compliant for the key optimizelyId```
*A:* Make sure you added the `-ObjC` linker flag to your build settings (see [Manual Installation](#objc)).

<a name="compileerror"></a>
#####*Q: My app won't compile and I get an error saying:*
```
Undefined symbols for architecture armv7s: "_OBJC_CLASS_$_Optimizely",
referenced from: MY_CLASS
```
*A:* Certain build configurations require you to add `-framework Optimizely` to your Build Settings under "Other Linker Flags." If you installed using CocoaPods, you may need to update or reset "Other Linker Flags" because you have settings in your project that conflict with Cocoapods's automatic addition of that flag.

<a name="dynamicimage"></a>
#####*Q: My dynamically rendered image does not render while using the Editor.*
*A:* When using Optimizely to replace a dynamically-rendered image, the new image might not consistently render while using the Editor. Please use Preview to test how the replaced image will render in production.

<a name="visualeditorchange"></a>
#####*Q: I'm trying to make a Visual Change with Optimizely's Visual Editor, but the View is not changing.*
*A:* Optimizely applies changes once viewDidMoveToWindow is called.  The implication is that if you have code that modifies views after viewDidMoveToWindow is called (e.g. an animation that starts after the view is rendered), Optimizely will not be able to apply Visual Changes to the view.
