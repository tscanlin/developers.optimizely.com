---
template: page-sidebar
title: "Data Export"
---
# Data Export Guide


## Intro

Data Export allows developers to access all of their Optimizely event data. This data is computed daily and contain the last 24 hours of events for all A/B testing experiments in an account. The data will be written securely to an S3 bucket, which you can then programmatically access via Amazon’s APIs and a set of secure credentials provided by Optimizely.

You can use Data Export to integrate Optimizely experiment data with your own data warehouse.

<div class="attention attention--warning push--bottom">If you have any questions, please contact [developers@optimizely.com](mailto:developers@optimizely.com) for help.</div>

## Availability 

Currently, this feature is available to Enterprise customers; please reach out to your CSM if you wish to utilize this feature. 

## Technical Details 

Data is written out for all experiments in all projects running under an Optimizely account, and one file will be written per experiment per day. Each file will contain 24 hours worth of data, thru midnight UTC of the previous night. These files are gzipped tab-delimited files with the format described below. Also, if you currently receive a data export via the Technical Support team, the data will be in the same format as the current exports, with the addition of one column indicating user_agent for web experiment data. There is also a standard header row.

The S3 bucket location will follow the format: `/optimizely-export/{account_id}/{project_id}/yyyy/mm/dd/{file_name}`

The file name follows the format: `experiment_id-yyyy-mm-dd.tsv.gz` . Example: `123-2016-03-20.tsv.gz`

<img alt="Data Export Chart" width="500px" src="/assets/img/data/data-export-chart.png" />


### Status File

A status file will be provided to track the success or failure of that day's experiment event files. This file is named `status.yaml` and is included in the daily folder per project. The format contains: `failed_exports`, `successful_exports`, and a timestamp in UTC seconds since epoch. View a <b>sample YAML <a href="/data/sample-status.yaml">file</a>.</b>



### Web Data Dictionary 


<h4>Definitions</h4>
<table class="table">
   <tbody>
      <tr>
         <td align="left"><b>timestamp</b></td>
         <td class="desc">
            <p>The timestamp of when the event was received, not necessarily when it occurred in the browser. The format is YYYY-MM-DDTHH24:MI:SS.sssZ (ISO format), and the timezone is UTC.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>project_id</b></td>
         <td class="desc">
            <p>Your Optimizely project ID on which the experiment lives.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>experiment_id</b></td>
         <td class="desc">
            <p>The experiment ID.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>variation_id</b></td>
         <td class="desc">
            <p>The id we use to identify the variation the user saw. This should correspond to the variation id in the Diagnostic Report in the Options menu of the Visual Editor.
            </p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>end_user_id</b></td>
         <td class="desc">
            <p> This is the anonymous optimizelyEndUserId cookie value.  It represents a unique visitor.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>uuid</b></td>
         <td class="desc">
            <p> Similar in scope to end_user_id, but this is the customer's API-provided unique ID they want to track in lieu of the optimizelyEndUserId cookie value.  This was renamed from the legacy ppid on Thursday 5/19/2016.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>user_ip</b></td>
         <td class="desc">
            <p> IP of the user associated with this tracking call.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>user_agent</b></td>
         <td class="desc">
            <p> User-Agent header passed from the browser.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>revenue</b></td>
         <td class="desc">
            <p> If applicable, the amount of the transaction in cents (399 corresponds to $3.99). This will only be populated with a non-zero value for revenue goals.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>event_name</b></td>
         <td class="desc">
            <p> The event name of the tracking call, for pageviews this is the URL of the page, for engagement it is 'engagement', for everything else it is the custom event name.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>mobile visitors</b></td>
         <td class="desc">
            <p> For accounts with segmentation a true or false value of whether or not the user was using a mobile device (this is an Optimizely default segment, so tablets are considered mobile here).</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>browser</b></td>
         <td class="desc">
            <p>  For accounts with segmentation this is the browser that was being used by the user when the tracking call was made.  gc is Google Chrome, ff is Firefox, and ie is Internet Explorer.  safari, opera, and <a href="https://en.wikipedia.org/wiki/UC_Browser"> ucbrowser </a> are listed as-is.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>source type</b></td>
         <td class="desc">
            <p> For accounts with segmentation this is the value of the <a href="https://help.optimizely.com/hc/en-us/articles/201876450#traffic"> traffic source </a> that the user falls into (campaign, direct, referral, search).</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>campaign</b></td>
         <td class="desc">
            <p> The value of the campaign segment (i.e. AdWords utm_campaign parameter value) tied to this user.  Default value is "none." Any fields after this are your segmented audiences or dimension names.</p>
         </td>
      </tr>
   </tbody>
</table>

**Please Note**: 
   * Any fields after this are your segmented audiences or dimension names.
   * Adding or removing segments or dimensions could alter the layout of the event data files. Please account for this if you build an automated import of this data. 
   * Redirect tests might have the redirect page views out of order due to the timing of the log request being sent to our system.


### Android Dictionary 

<h4>Definitions</h4>
<table class="table">
   <tbody>
      <tr>
         <td align="left"><b>timestamp</b></td>
         <td class="desc">
            <p>The timestamp of when the event was received, not necessarily when it occurred in the browser. The format is YYYY-MM-DDTHH24:MI:SS.sssZ (ISO format), and the timezone is UTC.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>project_id</b></td>
         <td class="desc">
            <p>Your Optimizely project ID on which the experiment lives.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>experiment_id</b></td>
         <td class="desc">
            <p>The experiment ID.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>variation_id</b></td>
         <td class="desc">
            <p>The id we use to identify the variation the user saw. This should correspond to the variation id in the Diagnostic Report in the Options menu of the Visual Editor.
            </p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>end_user_id</b></td>
         <td class="desc">
            <p>  This is the anonymous optimizelyEndUserId value.  It represents a unique visitor.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>uuid</b></td>
         <td class="desc">
            <p>  Similar in scope to end_user_id, but this is the customer's API-provided unique ID they want to track in lieu of the anonymous value.  This was renamed from the legacy ppid on Thursday 5/19/2016.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>user_ip</b></td>
         <td class="desc">
            <p> IP of the user associated with this tracking call.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>revenue</b></td>
         <td class="desc">
            <p>  If applicable, the amount of the transaction in cents (399 corresponds to $3.99). This will only be populated with a non-zero value for revenue goals.  For event_name values of "mobile_session," this will also show the length of the session in seconds..</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>event_name</b></td>
         <td class="desc">
            <p>  The event name of the tracking call.  A value of "mobile_session" means a new session was recorded (a session is a period of activity during which the app is foregrounded, without a break longer than 30 seconds).  A value of "visitor-event" shows the first time a visitor sees an experiment.  A tap or view goal will show the view name with #tap or #view appended.  For everything else it is the custom event name.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>Android App Version</b></td>
         <td class="desc">
            <p> The numeric version of your Android app running on the user’s device.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>Android SDK Version</b></td>
         <td class="desc">
            <p> The numeric version of Optimizely’s Android SDK running in your app on the user’s device.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>Android Device Model</b></td>
         <td class="desc">
            <p> The device’s name as returned to Optimizely’s SDK, e.g. Google Galaxy Nexus - 4.2.2 - API 17 - 720x1280.</p>
         </td>
      </tr>
   </tbody>
</table>


### iOS Dictionary 

<h4>Definitions</h4>
<table class="table">
   <tbody>
      <tr>
         <td align="left"><b>timestamp</b></td>
         <td class="desc">
            <p>The timestamp of when the event was received, not necessarily when it occurred in the browser. The format is YYYY-MM-DDTHH24:MI:SS.sssZ (ISO format), and the timezone is UTC.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>project_id</b></td>
         <td class="desc">
            <p>Your Optimizely project ID on which the experiment lives.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>experiment_id</b></td>
         <td class="desc">
            <p>The experiment ID.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>variation_id</b></td>
         <td class="desc">
            <p>The id we use to identify the variation the user saw. This should correspond to the variation id in the Diagnostic Report in the Options menu of the Editor.
            </p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>end_user_id</b></td>
         <td class="desc">
            <p>This is the anonymous optimizelyEndUserId value set in NSUserDefaults.  It represents a unique visitor.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>uuid</b></td>
         <td class="desc">
            <p> Similar in scope to end_user_id, but this is the customer's API-provided unique ID they want to track in lieu of the anonymous value.  This was renamed from the legacy ppid on Thursday 5/19/2016.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>user_ip</b></td>
         <td class="desc">
            <p> IP of the user associated with this tracking call.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>revenue</b></td>
         <td class="desc">
            <p>  If applicable, the amount of the transaction in cents (399 corresponds to $3.99). This will only be populated with a non-zero value for revenue goals.  For event_name values of "mobile_session," this will also show the length of the session in seconds.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>event_name</b></td>
         <td class="desc">
            <p> The event name of the tracking call.  A value of "mobile_session" means a new session was recorded (a session is a period of activity during which the app is foregrounded, without a break longer than 30 seconds).  A value of "visitor-event" shows the first time a visitor sees an experiment.  A tap or view goal will show the view name with #tap or #view appended.  For everything else it is the custom event name.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>iOS App Version</b></td>
         <td class="desc">
            <p> The numeric version of your iOS app running on the user’s device.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>iOS Device Model </b></td>
         <td class="desc">
            <p> The device’s name as returned to Optimizely’s SDK, e.g. iPhone.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>iOS SDK Version</b></td>
         <td class="desc">
            <p> The numeric version of Optimizely’s iOS SDK running in your app on the user’s device.</p>
         </td>
      </tr>
   </tbody>
</table>

**Please Note: (web, iOS & Android)**

* Data is de-duplicated on the results screen but not in the Data Export. Revenue goals are never de-duplicated.
