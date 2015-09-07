---
template: page-sidebar
title: "Code Samples"
---

# Code Samples

In order to help you get up and running quickly, we have provided a number of code samples that you can use.
Be sure to modify the code appropriately before running in production!

## *Developer QA*

To learn how to use Optimizely's debug APIs, you can refer to the following [article](https://help.optimizely.com/hc/en-us/articles/205156117-QA-Your-Optimizely-iOS-and-Android-Experiments).

## *Advanced Use Cases*

### *Experiment from App to Webview*
At a high level, in order to run an experiment across your native app and various webviews, you will need to have 2 projects set up: [1 web project](https://help.optimizely.com/hc/en-us/articles/200040095-Implement-the-Optimizely-Snippet) and [1 iOS project](https://help.optimizely.com/hc/en-us/articles/202296994-Get-Started-on-Mobile-Optimization).  You will create an iOS experiment on your native app and a separate experiment on your mobile website.  You will follow the steps below in order to get your hybrid app experiment set up:
1. Set up your web experiment
2. Set up your iOS experiment and configure Optimizely cookies to show the proper experience
3. [QA](../ios/guide/index.html#\35 -qa) both experiments in your staging/development environment to make sure things work as expected.
4. Run both experiments by pressing the play button!

1. Set up your web experiment
Create a web experiment
From the experiment, extract the experiment_id from the URL & variation_id from the diagnostic report.  We will use this information later.

2. Set up your iOS experiment

For setting up the iOS experiment, you will need to instrument your code with code blocks and set up an experiment as you normally would (you can follow the steps here).

You will need to set Optimizely cookies before the app loads.  A first party cookie is a cookie whose domain is set to your website (i.e. .yoursite.com). Optimizely sets the first party cookies to the highest level domain available on your site. This ensures that a user will be tracked through all subdomains.

There are two main things that you will need to do with Optimizely cookies.  Prior to loading your webview:
Set the Optimizely buckets cookie with the proper experiment_id and variation_id (from the diagnostic report)
Pull the optimizelyEndUserId cookie from the first time the webview loads and be sure to load the same optimizelyEndUserId in order to ensure that conversions are tracked properly.

```obj-c
OptimizelyCodeBlocksKeyWithBlockNames(myHybridCodeBlocksKey, 
                                    @"Hybrid_Web_View_1", 
                                    @"Hybrid_Web_View_2");

@implementation MyViewController

- (void) someFunction {

    // This line defines Code Blocks "Hybrid_Web_View_1", "Hybrid_Web_View_2", and a 
    // default block that is executed in the case that the experiment is 
    // not activated.
    [Optimizely codeBlocksWithKey:myHybridCodeBlocksKey
                       blockOne:^{
        // This block is executed when myHybridCodeBlocksKey -> Hybrid_Web_View_1
         [cookieProperties setObject:@"optimizelyBuckets" forKey:NSHTTPCookieName];
    [cookieProperties setObject:@"%7B%<EXPERIMENT_ID>%22%3A%<VARIATION_1_ID>%22%7D" forKey:NSHTTPCookieValue];
    [cookieProperties setObject:@".<YOUR_DOMAIN>.com" forKey:NSHTTPCookieDomain];
    [cookieProperties setObject:@".<YOUR_DOMAIN>.com" forKey:NSHTTPCookieOriginURL];
    [cookieProperties setObject:@"/" forKey:NSHTTPCookiePath];
    [cookieProperties setObject:@"0" forKey:NSHTTPCookieVersion];

    // set expiration to 10 years from now like on web
    [cookieProperties setObject:[[NSDate date] dateByAddingTimeInterval:344453720] forKey:NSHTTPCookieExpires];
    NSHTTPCookie *newCookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
    [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:newCookie];
    NSString *urlAddress = @"http://<YOUR_DOMAIN>.com";

    }
                       blockTwo:^{
        // This block is executed when myHybridCodeBlocksKey -> Hybrid_Web_View_2
        ...    
    }
                   defaultBlock:^{
          [Optimizely codeBlocksWithKey:myHybridCodeBlocksKey
                       blockOne:^{
        // This block is executed when myHybridCodeBlocksKey -> Hybrid_Web_View_1
         [cookieProperties setObject:@"optimizelyBuckets" forKey:NSHTTPCookieName];
    [cookieProperties setObject:@"%7B%<EXPERIMENT_ID>%22%3A%<ORIGINAL_VARIATION_ID>%22%7D" forKey:NSHTTPCookieValue];
    [cookieProperties setObject:@".<YOUR_DOMAIN>.com" forKey:NSHTTPCookieDomain];
    [cookieProperties setObject:@".<YOUR_DOMAIN>.com" forKey:NSHTTPCookieOriginURL];
    [cookieProperties setObject:@"/" forKey:NSHTTPCookiePath];
    [cookieProperties setObject:@"0" forKey:NSHTTPCookieVersion];

    // set expiration to 10 years from now like on web
    [cookieProperties setObject:[[NSDate date] dateByAddingTimeInterval:344453720] forKey:NSHTTPCookieExpires];
    NSHTTPCookie *newCookie = [NSHTTPCookie cookieWithProperties:cookieProperties];
    [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:newCookie];
    NSString *urlAddress = @"http://<YOUR_DOMAIN>.com";


   
    }];
}
// This block is executed by default
        //Create a URL object.
        NSURL *url = [NSURL URLWithString:urlAddress];
        //URL Request Object
        NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
        //Load the request in the UIWebView.
        [self.testWebView loadRequest:requestObj];

// Extract the optimizelyEndUserId for future use (and be sure to set the same user id going forward).  Optimizely will generate a unique optimizelyEndUserId for each user.

    NSHTTPCookie *cookie;
    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];
    for (cookie in [cookieJar cookies]) {
            if ([[cookie name] isEqualToString:@"optimizelyEndUserId"]) {
               NSString *optly_user_id_val = [cookie value];

           }

    }


@end
```

## *Helper Functions*

This section will include helper functions that you can use for different experiments.

### *Show variation after X action*

In this example, if you want to test out the number of times to show a user a certain experience, you can set up the experiment in the following way:

```objective-c
if (number_of_days == 3) {
  Optimizely dummyLiveVariable = 0
   [Optimizely trackEvent:@"number_of_days_3"];
}

if (number_of_days == 5) {
   Optimizely dummyLiveVariable = 1
   [Optimizely trackEvent:@"number_of_days_5"];
}
```
