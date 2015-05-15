---
template: page-sidebar
title: "Optimizely Android SDK Guide"
---

## Android SDK Guide

### <a name="Key Documentation"></a> Key Documentation
[Releases](https://github.com/optimizely/Optimizely-Android-SDK/)

SDK Download [JAR](https://github.com/optimizely/Optimizely-Android-SDK/raw/master/Optimizely-1.0.0-SNAPSHOT.jar) | [GitHub](https://github.com/optimizely/Optimizely-Android-SDK)

Change history: [Changelog](https://github.com/optimizely/Optimizely-Android-SDK/raw/master/Changelog.md)


## <a name="SDK Installation"></a> Install Optimizely Android SDK

### <a name="installation"></a> Step 1: SDK Installation
To use Optimizely for Android you must first integrate the SDK into your app. You can either install the Optimizely SDK using [Gradle](#gradle) (recommended for Android Studio users), [Maven](#maven) (recommended for IDEA/Eclipse users), or via [Manual Installation](#manualinstall).

**We strongly recommend using a version control system (such as [Git](http://git-scm.com/)) and checking in your app before installing Optimizely.**

#### <a name="gradle"></a> Using Gradle

Your project must be set up to build with Gradle. Refer to [Gradle Getting Started](http://developer.android.com/sdk/installing/studio-build.html) if you haven't yet configured your project to work with Gradle.

Our SDK only supports Android API 14 (Ice Cream Sandwich) and above, so please make sure your `build.gradle` specifies a [minimum sdk](https://developer.android.com/tools/building/configuring-gradle.html#buildFileBasics) of 14 (or above). Then, add the Optimizely-Android-SDK repository as a maven repository to your project's top-level `build.gradle` file:

```groovy
allprojects {
  repositories {
    jcenter()
    maven {
      url 'http://dl.bintray.com/optimizely/optimizely'
    }
  }
}
```
Make sure you add the repository to the `allprojects` configuration, *not* the `buildscript` configuration.

Then, add Optimizely as a dependency in your app's `build.gradle`:

```groovy
dependencies {
    compile('com.optimizely:optimizely:+@aar') {
        transitive = true
    }
}
```

#### <a name="maven"></a> Using Maven

0. Your project must be set up to build with Maven. Refer to [Maven in 5 Minutes](http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html) guide if you haven't yet configured your project to work with Maven.

1. Our SDK only supports Android API 14 (Ice Cream Sandwich) and above, so please make sure your `AndroidManifest.xml` specifies a [minimum sdk](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html) of 14 (or above). Then, add the Optimizely repository and the dependency to your `pom.xml`:

Repository:

```xml
<repository>
  <id>optimizely</id>
  <name>Optimizely</name>
  <url>http://dl.bintray.com/optimizely/optimizely</url>
</repository>
```

Dependency:

```xml
<dependency>
    <groupId>com.optimizely</groupId>
    <artifactId>optimizely</artifactId>
    <version>LATEST</version>
</dependency>
```

#### <a name="manualinstall"></a> Manual Installation

**Dependencies**
The Optimizely SDK depends on:

  - Google's [GSON](http://search.maven.org/remotecontent?filepath=com/google/code/gson/gson/2.3/gson-2.3.jar) library.
  - The [Android Support v4](http://developer.android.com/tools/support-library/features.html#v4) library.
  - Square's popular [OkHTTP](http://search.maven.org/remote_content?filepath=com/squareup/okhttp/okhttp/2.3.0/okhttp-2.3.0.jar) library
  - OkHTTP depends on [OkIO](https://search.maven.org/remote_content?g=com.squareup.okio&a=okio&v=LATEST)

  [Download](https://github.com/optimizely/Optimizely-Android-SDK/) the latest jar file.

##### Eclipse
 If you are using ADT (Eclipse), copy the dependencies and Optimizely.jar to your `libs/` folder inside your project:

  <img src="eclipse-libs.png" alt="Eclipse Project Structure" style="width: 40%;"/>

 Then right-click on each dependency jar as well as Optimizely.jar and select `Build Path > Add to Build Path`:

  <img src="eclipse-add-build-path.png" alt="Eclipse add to build path" style="width:60%"/>

##### IntelliJ IDEA
If you are using IntelliJ with the Android plugin, add each dependency jar and Optimizely.jar as a library dependency for your app module:

Under Project Structure > Libraries click the `+` button.
  <img src="ij-add-library.png" alt="IntelliJ Module Library Step 1" style="width: 80%;"/>

Select the Optimizely.jar library (you may wish to copy the jar into your project before this step).
  <img src="ij-locate-optimizely.png" alt="IntelliJ Module Library Step 2" style="width: 80%;"/>

Select your application module as a target for the library.
  <img src="ij-confirm-library.png" alt="IntelliJ Module Library Step 3" style="width: 80%;"/>

##### Android Studio
If you are using Android Studio, please see the [Gradle](#gradle) configuration above.

### <a name="accountcreation"></a> Step 2: Create an Android Project

To create an Android project, select "New Project" from the left drawer in your [Optimizely Home](https://app.optimizely.com/projects/):

   <img src="create-project.png" alt="Create Project Dialog" style="width: 80%;"/>


<a name="project-code"></a>Once you've created a project, please take a look at the `Implementation` section under the `Settings` tab to find your project ID and API key which you will use during integration:

![Project Code Dialog](project-code.png)

### <a name="apitoken"></a> Step 3: Activate Optimizely
Now, you're ready to add some code so your app can connect with your Optimizely account.
Optimizely assigns each project a unique identifier known as an API token. Your app identifies itself to the Optimizely Android SDK by initializing the SDK with this token.
Open the Java source file corresponding to your app's main activity (the one declared as a launcher activity in your `AndroidManifest.xml`), and add the following import:

  ```java
  import com.optimizely.Optimizely;
  ```

Add the following to the end of your main activity's `onCreate()` function. The code can be copied from your `Implementation Settings`, which you can find by selecting on the appropriate Android Project in your [Optimizely Home](https://app.optimizely.com/projects).  For more details, you can refer back to [Step 2: Create an Android project](#accountcreation).

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    // more create logic

    // You can find the following code snippet in your project code.
    Optimizely.startOptimizely("<API Token>", getApplication());
}
```

Optimizely needs to connect to the internet to allow you to use our online editor and to download new experiments once you've published them. If you don't already have the `INTERNET` permission declared in your `AndroidManifest.xml`, you will need to add the following permission line:

```xml
 <uses-permission android:name="android.permission.INTERNET" />
 ```

 For more information on Android permissions, see the [Android Manifest Intro](http://developer.android.com/guide/topics/manifest/manifest-intro.html#perms).

At this point you should run your application to register the SDK installation. The Optimizely SDK will register itself in the background. You will see your project overview display light up, allowing you to create an experiment:

   <img src="sdk-detected.png", style="width: 70%"/>

### <a name="createexperiment"></a> Step 4: Create an Experiment

After creating an Android project and installing the SDK, click the `Create Experiment` button in the upper right hand side of your project overview.

#### Custom View Tagging

The Optimizely Android SDK identifies Views within your application using the view hierarchy of the view-- in some cases you may need to specify your own ID or mark a specific view in a collection view as unique.

See this section on [configuring the visual editor](#configure_visual_editor).

### <a name="qa"></a> Step 5: QA

#### <a name="preview"></a> Preview Mode
Preview mode allows you to force your app into a certain variation for a given experiment in order to check that your app and the experiment are both running smoothly. To enter preview mode, connect your device to the editor, select your desired variation, open the variation settings drawer, and click `Preview`

<img src="preview-mode.png" alt="Enter Preview Mode" />

#### Pre-launch Checklist

Now that you've created an experiment and successfully installed the Optimizely Android SDK, below is a checklist to go through prior to releasing your app to the app store with the SDK:

1. In order to set up your app such that you can QA experiments (beyond using Preview), we recommend either having a separate [Project](#accountcreation) for development and production or inserting [Custom Tags](#customtags), which are only set for certain QA devices.  If you decide to go with setting up 2 separate projects, we recommend setting up an `if (DEBUG)` to ensure that only one project code snippet is defined at any given time.

2. Were you able to connect to Optimizely's Visual Editor?  Before your release to the app store, you will want to make sure that `Optimizely.setEditGestureEnabled(false)` is called before `Optimizely.startOptimizely`.

3. (Optional) If you have a separate project for development and production, you can run your experiments in your development environment to check that results are updating and that you are seeing the different variations are being seen.
    - You will want to make sure that each experiment does not make changes to the same element (otherwise only one of the experiments will run).
    - Optimizely tracks unique visitors, so that we make sure that the same user sees the same experience.  If you would like to check that you are getting a random experience, you will need to delete the app to be counted as a new visitor.
    - By default, Optimizely sends network calls every 2 minutes or upon backgrounding. (You can find more details about modifying the SDK network settings [here](#networksettings)). In order to check that your event data is being updated in the Optimizely Results Page as expected, you can either:
       1. Trigger events in the app and keep the app foregrounded for 2 minutes
       2. Background the app so that events are sent to our servers.

4. Once you've checked all these steps, you're ready to release to the play store!