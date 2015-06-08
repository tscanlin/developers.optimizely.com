---
template: inline
title: Create an offline conversion
anchor: technology-integrations-offline
---
This sample uses a calltracking tool as an example. Offline conversions are often used by calltracking tools to create a "call conversion" within Optimizely. The best calltracking integrations are apps or plugins that live within the calltracking software. 

#### 1. Installation

Option 1 (manual):

1. The user creates a custom goal within Optimizly manually ([custom goals explained](https://help.optimizely.com/hc/en-us/articles/200039925-Custom-event-goals))
2. The user continues to the calltracking software and installs the plugin / app
3. During the installation or after in a settings window, the user should be prompted to fill in the custom event name that was defined when the goal was created within Optimizely

Option 2 (REST):

1. The user goes to the calltracking software and installs the plugin / app
2. The user is prompted for Optimizely authentication (token or oAuth)
3. The user can select a project where a call tracking goal can be installed / selected.
4. Users can select the newly created goal from the list of saved goals within Optimizely when they create a new experiment

#### 2. Get all data for a visitor
To create an offline conversion, pieces of data regarding a visitor are required. All of the information can be fetched client side and added as a custom variable (or something similar) in the calltracking technology.

An offline conversion needs the following pieces of information:

1. Account id

```
/**
 * Gets Account ID
 *
 * @return {Number} the account id 
 */
function getAccountId() {
    return optimizely.getAccountId();
}
```

2. Project id

```
/**
 * Gets Project IDs (sometimes the same as the project id)
 *
 * @return {Number} the project id
 */
function getProjectId() {
    return optimizely.getProjectId();
}
```

3. Experiment IDs

```
/**
 * Gets experiment IDs using a cookie.
 *
 * @return {String} a string that displays all the experiments and variations in a list of query parameters
 */
function getVariationsInParameters() {

    var variations = JSON.parse(decodeURIComponent(getCookie("optimizelyBuckets")));
    resultstring = "";
    for (var variation in variations) {
        resultstring += "&x" + variation + "=" + variations[variation];
    }
    return resultstring;
}
```

4. Segment values

```
/**
 * Segment values using a cookie.
 *
 * @return {String} a string that displays all the segments and their values in a list of query parameters
 */
function getSegmentsInParameters() {
    var segments = JSON.parse(decodeURIComponent(getCookie("optimizelySegments")));
    var resultstring = "";
    for (var seg in segments) {
        resultstring += "&s" + seg + "=" + segments[seg];
    }
    return resultstring;
}
```

4. Optimizely user id

```
/**
 * Getting the user id is only possible using the cookie value
 *
 * @return {String} a JSON formatted string that contains all the segments and their values  
 */
function getUserId() {
    return getCookie("optimizelyEndUserId");
}
```


#### 3. Creating an offline converion
The format of an offline conversion url is the following:

```
http://{{project_id}}.log.optimizely.com/event?a=1
                               &n={{goal identified}}}
                               &u={{ Optimizely user id }}
                               &x{{experiment id 1}}={{variation id 1}}
                               &s{{segment id 1}}={{segment value 1}}                               
                               
```
All the paramters are more extensively described in this article:
[Tracking offline conversion events with Optimizely](https://help.optimizely.com/hc/en-us/articles/200040195)


*Example code to generate a valid offline converions url:*
```
/** 
 * Generate the entire URL that you can use to create a conversion, given a goalname. The goalname 
 * is required, if you also provide a value, there will be a revenue value added to the conversion call. 
 * The goalname will be encoded if it isn't already. 
 *
 * @param {String} goalname (the goal were you are creating a conversion for)
 * @param {Number} value (a value representing the revenue of the conversion)
 * @return {String} a JSON formatted string that contains all the segments and their values   
 */
function generateConversionUrl(goalname, value) {
    var goalname = decodeURIComponent(goalname) == goalname ? encodeURIComponent(goalname) : goalname;


    var result = "http://" + getProjectId() + ".log.optimizely.com/event?a=" + getAccountId() + "&n=" + goalname + "&u=" + getUserId() + getVariationsInParameters() + getSegmentsInParameters();
    if (typeof (value) != "undefined") {
        result += "&v=" + value;
    }
    return result;
}

```

The valid url needs to be used to trigger a conversion in Optimizely.
