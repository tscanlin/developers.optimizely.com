---
template: page-sidebar
title: "Event API"
---

# Event API

## Intro

The Event API allows developers to send impression or conversion event data to Optimizely from anywhere. Our JavaScript API and mobile SDKs include out-of-the-box tracking for impressions and conversion events on your site or app, but you might want to send conversion data that occurs offline or server-side. In cases like this, event calls may be sent directly to Optimizely's logging servers. Let’s walk through the details!

## Endpoint Structure

All conversion events are communicated to Optimizely via GET requests to `log.optimizely.com/event` with the form:

```bash
http://{project_id}.log.optimizely.com/event
```

Note: HTTPS is also supported.

## Sending Conversion Data

The Event API can be used to send conversion goals to Optimizely. See below for the expected parameters for conversion goals.

### Parameter Overview

* `d`: Account ID
* `a`: Project ID
* `x`: Experiment/Variation mapping per visitor
* `u`: A unique identifier to track a visitor
* `n`: Event goal name
* `g`: (Optional) Goal ID(s)
* `v`: (Optional) Integer that represents a goal’s value
* `time`: (Optional) Timestamp

Logging conversion event data follows this format:

```bash
http://1234567.log.optimizely.com/event?a=1234567
                               &n=example_event
                               &u=1316548451038r0
                               &x87654321=1111111
                               &v=500
                               &g=1234567
                               &d=8511325
                               &s983745985=gc
                               &time=1462472175

```

### Parameter Reference

<h4>Definitions</h4>
<table class="table">
   <tbody>
         <tr>
         <td align="left"><b>`a`</b></td>
         <td class="desc">
            <p>**Project ID**. This is your project ID. It can be found in the web dashboard or in your Optimizely snippet. <br />
      `<script src="//cdn.optimizely.com/js/{project_id}.js"></script>` </p>
         </td>
      </tr>

         <tr>
         <td align="left"><b>`x`</b></td>
         <td class="desc">
        <p>**Experiment/Variation mapping**.
      These parameters specify which experiments and corresponding variations a given visitor has seen. Every call must inform Optimizely what experiment and variation a visitor was a part of. If a user is a part of multiple experiments you can specify multiple parameters as shown below. </p>

      <i>Single Experiment:</i>
      <br />
      `x{experiment_id}={varation_id1}`
      <br /><br />
      <i>Multiple Experiments:</i>
      <br />
      `x{experiment_id1}={varation_id1}&x{exeriment_id2}={varation_id2}`
      <br /><br />

      <p>Developers must maintain their own bucket mapping by sending Optimizely the exposed experiment, as well as each variation the visitor has seen (or bucketed into). If you're tracking events for an Optimizely web project these mappings may be found in the "optimizelyBuckets" cookie, whose value is of the following form:
      `%7B%22987654321%22%3A%221111111%22%2C%22876543210%22%3A%222222222_3333333%22%7D`
      <br />
      or, after applying <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent">decodeURIComponent()</a>.
      <br /><br />
      If you're ever curious what these IDs are for a given experiment, you can always find them by navigating to the Optimizely Editor, then selecting <em>Options > Diagnostic Report</em>.</p>
       </p>
         </td>
      </tr>

        <tr>
         <td align="left"><b>`n`</b></td>
         <td class="desc">
            <p>**Event Key**. The unique string that identifies the conversion event. For web projects, this is the Custom Event To Track field.</p><img src="/assets/img/data/custom-event.png" alt="Custom Event Field Screenshot" style="max-width:56%">
         </td>
      </tr>


        <tr>
         <td align="left"><b>`d`</b></td>
         <td class="desc">
            <p>**Account ID**. Your Optimizely account ID. This can be found in <a href="https://app.optimizely.com/accountsettings/account/overview">account settings</a>. </p>
         </td>
      </tr>

              <tr>
         <td align="left"><b>`u`</b></td>
         <td class="desc">
            <p>**User ID**. A unique user identifier for tracking and bucketing.</p>
            <p>On web, our client uses a cookie to track the user and generates a unique user_id that is also stored in the cookie. Similarly, on iOS & Android the SDKs leverage a similar method for tracking users.</p>

      <!--
      <p>With other channels, the developer can choose an appropriate identifier. We recommend a universal user id -- if users are logged in a hashed email is logical, otherwise a first party cookie. </p>

      <p>Lastly, it’s important to note that user_ids should not be generated haphazardly (i.e a random generator) because each unique user counts towards a monthly quota (MUVs) . If you’ve seen a user previously, it’s important to consistently use their identifier. We also don’t recommend using Personal Identifying Information (PII) as the identifier, so hashing an email address is preferred.</p>
      -->

         </td>
      </tr>


        <tr>
         <td align="left"><b>`g`</b><br /><i>(Optional)</i></td>
         <td class="desc">
            <p>**Goal ID**. Each goal in your project has a unique goal ID. The can be fetched through the [REST API](http://developers.optimizely.com/rest/reference/index.html#goals). You can send multiple goals to Optimizely in the same request. Let’s say you have the goals “landed on a page” and “cart checkout”. Both of these goals can be triggered by a single event, so you would send an array of goals IDs back to Optimizely. Ex: `g=12345,4324234`
      </p>
         </td>
      </tr>

           <tr>
         <td align="left"><b>`v`</b><br /><i>(Optional)</i></td>
         <td class="desc">
            <p>**Goal Value**. An integer denoting the value of your goal. Within Optimizely, every goal can have a value associated. For example, if your goal is revenue, the monetary value $5.00 is represented by `v=500`. </p>
         </td>
      </tr>

         <tr>
         <td align="left"><b>`time`</b><br /> <i>(Optional)</i></td>
         <td class="desc">
            <p>**Timestamp**. Timestamps can be provided using the parameter `timestamp` in epoch time in seconds. This is helpful if conversions are not sent in real time and have been recorded previously. Optimizely will then correctly backdate these events. Ex: `time=1461708557` </p>
         </td>
      </tr>

   </tbody>
</table>


## Other Considerations
* The API will always return a 200: OK response


## Give it a try

Let’s build our own GET request to test this endpoint. We can confirm the data has been received by viewing the experiment results.

* In the optimizely dashboard create a new experiment.
* Record the project_id & experiment_id, which can be found in the URL `https://app.optimizely.com/projects/{proejct_id}/experiments/{experiment_id}`.
* Create a new variation. View the experiment results page. Click Options-> Diagnostic Report. Record a variation Id from this report under Variation Summary.
* Add a new goal with a tracked custom event. Record this name as your event_key
* Record the goal_id by clicking the "Goals" tab at the project level and examining the URL `https://app.optimizely.com/projects/{project_id}/goals/{goal_id}`.
* Record your account_id from account settings
* Provide a user identifier. For this purpose we can use a random string (i.e afsdfk).
* We now have all the information to build a request. You can also find these identifiers via the REST API.
* Build your request using the correct format: `http://{project_id}.log.optimizely.com/event?a={project_id}&n={event_key}&u={user_id}&x{variation_id}={experiment_id}&g={goal_id}&d={account_id}`.
* Use your web browser to complete this request. Remember, no response will be shown. After a minute or two, you should see the conversion event in your results page!

### Appendix (Advanced)

#### Sending Impression Data
Our Event API also supports sending impressions, in addition to conversion events --although this isn’t necessary unless you are building for another channel like a custom server-side solution.

Within Optimizely an impression is logged when a visitor is bucketed into an experiment variation . Simply put, the visitor has met the criteria for the experiment and has been exposed to a variation. On the web, an impression would translate to a page view. This concept is a bit more complicated on other channels. For example, we decide to run an experiment on our search algorithm targeted to Japanese users. An impression is logged when a Japanese user interacts with the search algorithm and is successfully bucketed into a variation. An impression becomes a conversion event when the visitor completes a goal. In our example, the visitor uses the search algorithm to find flights and completes a booking (the conversion event).

Again, our web and mobile products handle impressions out of the box, so tracking them explicitly would only be necessary when building on other channels. To do so, you must set the goal_id to the experiment_id. It’s important to note that each unique visitor will count towards your MUV limit.

Example:
```
 http://1234567.log.optimizely.com/event?a=1234567
                               &n=example_event
                               &u=1316548451038r0
                               &x987654321=1111111
                               &g={experiment_id}
                               &d=8511325
```
<br/>
<p>If you have any questions, please contact [developers@optimizely.com](mailto:developers@optimizely.com) for help.</p>
