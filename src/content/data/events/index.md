---
template: page-sidebar
title: "Events API"
---

# Events API Developer Guide

*Welcome! This page walks you through everything for the Events API*

## Intro

<p>Optimizely exposes a simple&nbsp;<a href="http://developers.optimizely.com/javascript/introduction/index.html">JavaScript API</a>&nbsp;for tracking arbitrary conversion goals on your site, but what about events that occur off-line, or not in a browser? For events like this, event tracking calls may be sent directly to Optimizely's logging servers. In this article, we detail how these calls work so that you can integrate your off-line systems with Optimizely.</p>

## Data Structure

<p>All conversion events are communicated to Optimizely via GET requests to&nbsp;<code><a class="external" href="http://1234567.log.optimizely.com/event" rel="freeklink" title="http://1234567.log.optimizely.com/event">http://1234567.log.optimizely.com/event</a>&nbsp;</code>(HTTPS is also supported) and are of the following form:

<pre>
<code>http://1234567.log.optimizely.com/event?a=1234567&amp;n=example_event&u=oeu1316548451038r0.12412704364396632&x987654321=1111111&x876543210=2222222_3333333&av=500&g=1234567</code>
</pre>
or, formatted for clarity:</p>

<pre>
<code>http://1234567.log.optimizely.com/event?a=1234567
                               &amp;n=example_event
                               &amp;u=oeu1316548451038r0.12412704364396632
                               &amp;x987654321=1111111
                               &amp;x876543210=2222222_3333333
                               &amp;v=500
                               &amp;g=1234567
</code>                       
</pre>

<p><br />
Here, the URL parameters specify the Optimizely account, event name, etc. In the above, example, you would be tracking a project with these details:</p>

<ul>
	<li>project ID = 1234567&nbsp;</li>
	<li>experiment IDs = 987654321, 876543210&nbsp;</li>
	<li>variation ID for the first experiment =&nbsp;1111111</li>
	<li>variation IDs for the second (multivariate) experiment = 2222222,&nbsp;3333333</li>
	<li>name of custom event = example_event&nbsp;</li>
	<li>goal id = 1234567&nbsp;</li>
	<li>revenue value = $5.00&nbsp;</li>
</ul>

## Reference


<p>Here are the parameters used:</p>


<table class="table">
   <tbody>
      <tr>
         <td align="left"><b>A</b></td>
         <td class="desc">
            <p>(Required) Project ID. This number can be found in your Optimizely snippet, replacing the Xs in the following sample:</p>

			<p><code>&lt;script src="//cdn.optimizely.com/js/XXXXXXX.js"&gt;&lt;/script&gt;</code></p>
         </td>
      </tr>


      <tr>
         <td align="left"><b>N</b></td>
         <td class="desc">
				<p>(Required) Event name. This&nbsp;string should match the name of your <a href="mks://localhost/Track_Conversion_Goals/Custom_event_goals">custom event goal</a>, which you add in the <em>Custom event to track</em>&nbsp;field.</p>
         </td>
      </tr>

       <tr>
         <td align="left"><b>X</b></td>
         <td class="desc">
				<p>(Required) Experiment/Variation mappings for this visitor. These parameters specify which experiments and corresponding variations a given visitor has seen. These parameters are of the form:</p>

				<p><code>x987654321=1111111 // x&lt;Experiment ID&gt;=&lt;Variation ID&gt;</code><br />
				<br />
				or, for multivariate experiments:</p>

				<p><code>x876543210=2222222_3333333 // x&lt;Experiment ID&gt;=&lt;Section 1 Var. ID&gt;_&lt;Section 2 Var. ID&gt;_...</code><br />
				<br />
				Multiple such parameters may be included, as they are in the above example. For a given visitor, these mappings may be found in the "optimizelyBuckets" cookie, whose value is of the following form:</p>

				<p><code>%7B%22987654321%22%3A%221111111%22%2C%22876543210%22%3A%222222222_3333333%22%7D</code><br />
				<br />
				or, after applying&nbsp;<code>decodeURIComponent()</code></p>

				<p><code>{"987654321":"1111111","876543210":"2222222_3333333"}</code><br />
				<br />
				If you're ever curious what these IDs are for a given experiment, you can always find them by navigating to the Optimizely Editor, then selecting&nbsp;<em>Options &gt; Diagnostic Report</em>.<br />
				<br />
				<img alt="" src="/assets/img/data/image.png" style="" /></p>
         </td>
      </tr>

            <tr>
         <td align="left"><b>G</b></td>
         <td class="desc">
				<p>(Optional) The Goal ID. &nbsp;Each goal in your project has a unique goal ID. &nbsp;You can fetch this through the REST API, found&nbsp;<a href="http://developers.optimizely.com/rest/reference/index.html#goals">here.</a></p>

         </td>
      </tr>

                  <tr>
         <td align="left"><b>P</b></td>
         <td class="desc">
				<p>(Optional) The "Universal User ID" is ID you may provide Optimizely that will be used to identify the user for tracking and bucketing.&nbsp; Please refer to our <a href="http://developers.optimizely.com/javascript/reference/index.html#universal-user-id-beta-a-name-uuid-a-" target="_blank">developer documentation</a> for&nbsp;implementation.</p>

         </td>
      </tr>

	<tr>
         <td align="left"><b>V</b></td>
         <td class="desc">
				<p>(Optional) Revenue in cents. This should be an integer denoting the number of cents in revenue associated with this event. For example:&nbsp;<code>v=500</code>&nbsp;denotes $5.00 in revenue.</p>

         </td>
      </tr>
                              <tr>
         <td align="left"><b>U</b></td>
         <td class="desc">
			<p>(Optional) The "Optimizely End User ID." This is a unique ID given by Optimizely to each of your website visitors who load the Optimizely snippet. It is stored in a first-party cookie called&nbsp;<code>optimizelyEndUserId</code>. If this parameter is not supplied, the conversion event is considered "anonymous" and will not be de-duplicated.</p>

         </td>
      </tr>

      	<tr>
         <td align="left"><b>S</b></td>
         <td class="desc">
				<p>(Optional) The segment value in the following format&nbsp;s[ID]=[segment_value]. For example:</p>

<p><code>s235362744=gc</code></p>

<p>If you're looking to sort your offline conversions by any segments (including default segments), you'll need to send the segment information along with your offline conversion. Please refer to our <a href="http://developers.optimizely.com/javascript/code-samples/index.html#advanced-use-cases-get-conversion-info">developer documentation</a>&nbsp;for implementation.</p>

         </td>
      </tr>

   </tbody>
</table>



