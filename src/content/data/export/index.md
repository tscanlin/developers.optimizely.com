---
template: page-sidebar
title: "Raw Data Export"
---
# Raw Data Export Developer Guide

*Welcome! This page walks you through everything for Raw Data Export*

## Intro 

TBA

## Reference

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
         <td align="left"><b>user_id</b></td>
         <td class="desc">
            <p>he unique user id that we use to de-duplicate binary events, also used to count the total number of unique monthly visitors for billing purposes. Please note that the raw data is not de-duplicated.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>end_user_id</b></td>
         <td class="desc">
            <p> Similar in scope to user_id, but this is the <code>optimizelyEndUserId </code> cookie value.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>ppid</b></td>
         <td class="desc">
            <p> Similar in scope to user_id, but this is your API-provided unique ID you want to track in lieu of the optimizelyEndUserId cookie value (aka  <a href="https://help.optimizely.com/hc/en-us/articles/203626830"> UUID</a>).</p>
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
         <td align="left"><b>user_id</b></td>
         <td class="desc">
            <p>he unique user id that we use to de-duplicate binary events, also used to count the total number of unique monthly visitors for billing purposes. Please note that the raw data is not de-duplicated.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>end_user_id</b></td>
         <td class="desc">
            <p> Similar in scope to user_id, but this is the <code>optimizelyEndUserId </code> cookie value.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>ppid</b></td>
         <td class="desc">
            <p> Similar in scope to user_id, but this is your API-provided unique ID you want to track in lieu of the optimizelyEndUserId cookie value (aka  <a href="https://help.optimizely.com/hc/en-us/articles/203626830"> UUID</a>).</p>
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
            <p>The id we use to identify the variation the user saw. This should correspond to the variation id in the Diagnostic Report in the Options menu of the Visual Editor.
            </p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>user_id</b></td>
         <td class="desc">
            <p>he unique user id that we use to de-duplicate binary events, also used to count the total number of unique monthly visitors for billing purposes. Please note that the raw data is not de-duplicated.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>end_user_id</b></td>
         <td class="desc">
            <p> Similar in scope to user_id, but this is the <code>optimizelyEndUserId </code> cookie value.</p>
         </td>
      </tr>
      <tr>
         <td align="left"><b>ppid</b></td>
         <td class="desc">
            <p> Similar in scope to user_id, but this is your API-provided unique ID you want to track in lieu of the optimizelyEndUserId cookie value (aka  <a href="https://help.optimizely.com/hc/en-us/articles/203626830"> UUID</a>).</p>
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