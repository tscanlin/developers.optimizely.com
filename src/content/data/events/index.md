---
template: page-sidebar
title: "Data Ingest"
---

# Data Ingest Developer Guide

*Welcome! This page walks you through everything for Raw Data Export*

## Intro

<p>Optimizely exposes a simple&nbsp;<a href="http://developers.optimizely.com/javascript/introduction/index.html">JavaScript API</a>&nbsp;for tracking arbitrary conversion goals on your site, but what about events that occur off-line, or not in a browser? For events like this, event tracking calls may be sent directly to Optimizely's logging servers. In this article, we detail how these calls work so that you can integrate your off-line systems with Optimizely.</p>



<h3>Structure of conversion event tracking requests</h3>

<p>All conversion events are communicated to Optimizely via GET requests to&nbsp;<code><a class="external" href="http://1234567.log.optimizely.com/event" rel="freeklink" title="http://1234567.log.optimizely.com/event">http://1234567.log.optimizely.com/event</a>&nbsp;</code>(HTTPS is also supported) and are of the following form:</p>

<pre>
<code>http://1234567.log.optimizely.com/event?a=1234567&amp;n=example_event&amp;u=oeu1316548451038r0.12412704364396632&amp;x987654321=1111111&amp;x876543210=2222222_3333333&amp;v=500&amp;g=1234567</code>
</pre>

<p><br />
or, formatted for clarity:</p>

<pre>
<code>http://1234567.log.optimizely.com/event?a=1234567
                               &amp;n=example_event
                               &amp;u=oeu1316548451038r0.12412704364396632
                               &amp;x987654321=1111111
                               &amp;x876543210=2222222_3333333
                               &amp;v=500
</code>                               &amp;g=1234567</pre>

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


        

   </tbody>
</table>



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


        

   </tbody>
</table>



