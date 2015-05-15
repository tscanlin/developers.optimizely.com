---
template: page-sidebar
title: "Optimizely iOS SDK Guide"
---

## Getting Started

### <a name="Key Documentation"></a> SDK Download
[![SDK Version](http://img.shields.io/cocoapods/v/Optimizely-iOS-SDK.svg?style=flat)](http://developers.optimizely.com/ios/help/html/index.html)

[ZIP](http://github.com/optimizely/Optimizely-iOS-SDK/zipball/master) | [TAR](http://github.com/optimizely/Optimizely-iOS-SDK/tarball/master) | [GitHub](http://github.com/optimizely/Optimizely-iOS-SDK)

### <a name="Introduction"></a> Introduction
Welcome to the Guide for installing the Optimizely iOS SDK!

Optimizely enables fast and scalable A/B testing for iOS apps.  Submit once.  Iterate daily.  This page includes a list of all the SDK Install Instructions that you'll need to get started.

## <a name="SDK Installation"></a> Install Optimizely iOS SDK

### <a name="accountcreation"></a> Step 1: Create an iOS Project

To create an iOS project, select "Create New Project" in the [Optimizely Dashboard](https://www.optimizely.com/dashboard):

   <img src="/assets/img/ios/create-project.png" alt="Drawing" style="width: 80%;"/>

<a name="project-code"></a>Once you've created a project, please take a look at the `Settings` tab to find your project ID and API key which you will use during installation:

<img src="/assets/img/ios/project-code.png" alt="Project Code Dialog">

### <a name="installation"></a> Step 2: SDK Integration
To use Optimizely's iOS SDK you must first integrate the SDK into your app. You can either install the Optimizely SDK using [CocoaPods](#cocoapods) (recommended) or via [Manual Installation](#manualinstall).  Our SDK supports iOS 7.0 and above.  We have partial support of Swift with [limited functionality](https://help.optimizely.com/hc/en-us/articles/201893400#swift).

#### <a name="cocoapods"></a> Using CocoaPods

0. Your Xcode project must be set up for CocoaPods. Refer to [CocoaPods Getting Started](http://cocoapods.org/#getstarted) if you haven't yet configured your project to work with CocoaPods.

1. Our SDK only supports iOS 7.0 and above, so please make sure your `Podfile` specifies a [deployment target](http://guides.cocoapods.org/syntax/podfile.html#platform) of iOS 7.0 (or above). Then, add Optimizely to your `Podfile`:

	```ruby
	platform :ios, '7.0'
	# Other Pods
	pod 'Optimizely-iOS-SDK'
	```


2. Run `pod install` from the command line.  This will add and install the Optimizely iOS SDK in your generated CocoaPods workspace.

 *Note: By default CocoaPods installs to the first build target in the project.*

#### <a name="manualinstall"></a> Manual Installation

For new installations, please follow all steps. For upgrades, please follow steps 1 and 2.

0. Clone the Optimizely SDK using `git clone https://github.com/optimizely/Optimizely-iOS-SDK`

1. Drag `Optimizely.framework` from the SDK repository into your project. Check "Copy items into destination group's folder" and make sure the appropriate targets are checked.

2. Open the "Build Phases" tab for the app's target. Under "Link Binary with Libraries," add the required frameworks if they're not already included:
   * CFNetwork.framework
   * Foundation.framework
   * libicucore.dylib
   * libsqlite3.dylib
   * Security.framework
   * SystemConfiguration.framework
   * UIKit.framework
<br  />
3. <a name="objc"></a>Switch to the "Build Settings" tab. Add `-ObjC` to the "Other Linker Flags" build setting.

### <a name="apitoken"></a> Step 3: Add Your API token
1. Now, you're ready to write some code!  Include this file at the top of your `AppDelegate` class implementation. This is usually found in a file called `AppDelegate.m` in the Project Navigator.

	```objective-c
	#import <Optimizely/Optimizely.h>
	```

2. Add the following to the beginning of `application:didFinishLaunchingWithOptions:` in your
app delegate. The code can be copied from your `Project Code`, which you can find by selecting the appropriate iOS Project in your [Optimizely Dashboard](https://www.optimizely.com/dashboard).  For more details, you can refer back to [Step 1: Create an iOS project](#accountcreation).

    ```objective-c
    // You can find the following code snippet in your project code.

    [Optimizely startOptimizelyWithAPIToken:YOUR_API_TOKEN launchOptions:launchOptions];

    // The rest of your initialization code...
  	```
*Note: We recommend putting this code at the beginning of your `application:didFinishLaunchingWithOptions:` function.*

3. <a name="urlscheme"></a> In order to enter Edit Mode (which will allow your app to be detected by Optimizely's Editor), you'll have to define a URL scheme for Optimizely.

   0. Add `[Optimizely handleOpenURL:]` to `application:openURL` in your app delegate.  This will notify Optimizely when the application has been loaded from a URL:

         ```objective-c
         - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation{
            if ([Optimizely handleOpenURL:url]) {
               return YES;
            }
            return NO;
         }
         ```

   1. <a name="urlschemeInfo"></a> In the project editor, click on "Targets" -> Your app name -> "Info" tab.
   2. Locate the section called "URL Types" and click the plus icon (+) to expand the section.
   3. Paste the following into the field called "Identifer":

         ```objective-c
         com.optimizely
         ```

   4. Add `optly{PROJECT_ID}` to "URL Schemes."  Your Project ID is available at the bottom of the <a href="#project-code">Project Code</a> dialog box. For instance, if your Project ID is `123456`, your URL Scheme would be `optly123456`.
      Once completed, your `URL Scheme` should look like this:
      <img src="/assets/img/ios/project-plist.png" alt="Drawing" style="width: 100%; padding-bottom:10px;"/>

   5. <a name="urllinkgenerate"></a>Once you run your app in DEBUG mode with the SDK installed, you should see the image below in your [Optimizely Dashboard](https://www.optimizely.com/dashboard).  Once the SDK is detected, the Create Experiment button will appear, and you can continue to Step 4 to create your experiment.

        <img src="/assets/img/ios/editor-follow-link2.png" alt="Drawing" style="width: 80%;"/>

   6. <a name="editliveappstore"></a>(Optional) By default, you will not be able to connect your app to the Optimizely editor once your app is live in the App Store.  If you would like to enable Edit Mode when the app is live, you can add the following line of code before `startOptimizelyWithAPIToken`:

         ```objective-c
            [Optimizely enableGestureInAppStoreApp];
         ```

### <a name="createexperiment"></a> Step 4: Create an Experiment
After creating an iOS project and installing the SDK, reference [this guide in our Knowledge Base](https://help.optimizely.com/hc/en-us/articles/202296994), which will walk you through how to set up an experiment.

### <a name="qa"></a> Step 5: QA
Now that you've created an experiment and successfully installed the Optimizely iOS SDK, below is a checklist to go through prior to releasing your app to the app store with the SDK:

1. In order to set up your app such that you can QA experiments (beyond using Preview), we recommend either having a separate [Project](#accountcreation) for development and production or inserting [Custom Tags](#customtags), that are only set for certain QA devices.  If you decide to go with setting up 2 separate projects, we recommend setting up an `#ifdef` to ensure that only one project code snippet is defined at any given time.

2. Were you able to connect to Optimizely's Visual Editor?  If you ran into issues, you can try out this [troubleshooting tip](#cantseeappineditor).

3. [Configure your app](#urlscheme) so that non-technical members of your team can set up and run experiments using the visual editor on a physical device without the need of XCode.  You can try downloading the development build on your device and try opening the [link](#urllinkgenerate) to make sure that this is set up properly.

4. (Optional) If you have a separate project for development and production, you can run your experiments in your development environment to check that results are updating and that you are seeing the different variations.
    - A useful debugging tool is to enable logging (be sure to disable this feature when your app is live in the app store) `[Optimizely sharedInstance].verboseLogging = YES`  For each event that is triggered, you will see a log statement.  Be sure to check that verboseLogging is *not* enabled in production.
    - You will want to make sure that each experiment does not make changes to the same element (otherwise only one of the experiments will run).
    - Optimizely tracks unique visitors, so that we make sure that the same user sees the same experience.  If you would like to check that you are getting a random experience, you will need to delete the app to be counted as a new visitor.
    - By default, Optimizely sends network calls every 2 minutes or upon backgrounding. (You can find more details about modifying the SDK network settings [here](#networksettings)). In order to check that your event data is being updated in Optimizely's dashboard as expected, you can either:
       1. Trigger events in the app and keep the app foregrounded for 2 minutes
       2. Background the app so that events are sent to our servers.
<br  />
5. Once you've checked all these steps, you're ready to release to the app store!  To learn more about how to use Optimizely's editor and get additional testing ideas, you can check out our articles in [Optiverse](https://help.optimizely.com/hc/en-us/sections/200666084-Mobile-Optimization).

### <a name="swift"></a>(Optional) SDK Setup with Swift
1. Follow the installation steps above through [Step 2](#installation).
2. To enable access to the Optimizely SDK, which is written in Objective-C, you will need to add an Objective-C bridging header. You can create a bridging header by adding a new file to your project, choosing Objective-C as the file type, and naming it anything. When you save it, Xcode will prompt you to configure an Objective-C bridging header. Confirm that you do want to configure a bridging header. This will create two files: `<target>-Bridging-Header.h` and a `.m` file with the name you chose. You can delete the `.m` file -- the bridging header file is all you need.
3. Add the following lines to your bridging header:

      ```objective-c
      #import <UIKit/UIKit.h>
      #import <Optimizely/Optimizely.h>
      ```

4. The Objective-C `Project Code`, which you can find by selecting the appropriate iOS Project in your [Optimizely Dashboard](https://www.optimizely.com/dashboard) will need to be modified for a Swift project. For more details on finding your `Project Code`, you can refer back to [Step 1: Create an iOS project](#accountcreation). The original Objective-C project code should look like:

      ```objective-c
      [Optimizely startOptimizelyWithAPIToken:@"YOUR_API_TOKEN" launchOptions:launchOptions];
      ```
Copy your API token, and add the following to the beginning of `application:didFinishLaunchingWithOptions:` in your
app delegate:

      ```swift
      Optimizely.startOptimizelyWithAPIToken("YOUR_API_TOKEN", launchOptions: launchOptions)

      // The rest of your initialization code...
      ```
*Note: We recommend putting this code at the beginning of your `application:didFinishLaunchingWithOptions:` function.*
5. At this point, you can jump back to [adding a url scheme](#urlschemeInfo) in **Add Your App Token** and follow along with the rest of the setup instructions.

*Special thanks to user [IAmMalte](https://github.com/IAmMalte) for a [detailed writeup](https://github.com/IAmMalte/swift-example-optimizely) on using our SDK in Swift.*

