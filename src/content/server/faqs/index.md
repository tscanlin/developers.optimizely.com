---
template: page-sidebar
title: "Optimizely Server-Side FAQs"
---

# Server-Side Testing FAQs

Below are some frequently asked questions about Server-Side Testing. 

Can't find an answer to your question? We're happy to answer your question on <a href="developers@optimizely.com">developers@optimizely.com</a> or our Live Chat.

<a href="#target-users">*Q:* How do I target my experiment to a group of users?</a><br>
<a href="#preview">*Q:* How do I QA or preview my experiment?</a><br>
<a href="#mutex">*Q:* How do I make experiments mutually exclusive?</a><br>
<a href="#bot">*Q:* Do your SDKs handle bot detection?</a><br>
<a href="#raw">*Q:* How do I access the raw events I’ve sent to Optimizely?</a><br>
<a href="#performance">*Q:* What is the SDK performance?</a><br>
<a href="#user-id">*Q:* What user IDs should I use in activate() and track()?</a><br>
<a href="#bucketing">*Q:* How does Optimizely consistently bucket users across SDKs?</a><br>
<a href="#client">*Q:* How do I track user events that occur client-side in a web browser?</a><br>
<a href="#build-custom">*Q:* My language of choice isn’t listed. Can I build my own SDK?</a><br>

<a name="target-users"></a>
##### *Q: How do I target my experiment to a group of users?*
*A:* Our SDKs allow you to [conditionally activate](http://developers.optimizely.com/server/reference/index.html#targeting) experiments based on user attributes you provide. You can define user attributes in the Optimizely UI as well as audiences consisting of one or more user attributes.  Unlike our web and mobile solutions, our SDKs are completely platform-agnostic so we don’t provide default user attributes out of the box.

<a name="preview"></a>
##### *Q: How do I QA or preview my experiment?*
*A:* You can use our [Whitelisting feature](http://developers.optimizely.com/server/whitelist/index.html) to force users into specific variations for QA purposes. The whitelist feature allows you to specify a list of user IDs and their corresponding variations. In addition, we’re working on updating our SDKs so you can force users into variations via code.

<a name="mutex"></a>
##### *Q: How do I make experiments mutually exclusive?*
*A:* Custom Projects support mutually exclusive experiments out of the box.  Simply create an [experiment group](http://developers.optimizely.com/server/groups/index.html#mutually-exclusive) and check the mutually exclusive setting. This option ensures that none of the experiments in the group will overlap and eliminate any interaction effects. 

<a name="bot"></a>
##### *Q: Do your SDKs handle bot detection?*
*A:* Our SDKs do not handle bot detection out of the box. If you’re using your own bot detection, we recommend calling activate() only for users that have passed your bot detection filter to remove bots from your experiments.


<a name="raw"></a>
##### *Q: How do I access the raw events I’ve sent to Optimizely?*
*A:* Our [raw data export](http://developers.optimizely.com/events/export/index.html) feature allows you to export all of the events you’ve sent to Optimizely on a daily basis. Talk to your customer success manager to have data export enabled for your account.

<a name="performance"></a>
##### *Q: What is the SDK performance?*
*A:* We’ve built our SDKs so you can split traffic to experiments without any network requests.  All decisions are made in-memory based on the [datafile](http://developers.optimizely.com/server/reference/index.html#datafile) cached in your application so there is negligible impact on latency, unlike cloud-based solutions that can add several milliseconds. Please contact us if you’re interested in seeing performance benchmarks for our SDKs.


<a name="user-id"></a>
##### *Q: What user IDs should I use in activate() and track()?*
*A:* We’ve designed our SDKs to be platform-agnostic, so it’s up to you what user IDs make the most sense based on the experiments you’re running.  If you’re experimenting on a website backend, we recommend using an anonymous 1st party cookie or a user ID from your analytics provider.  If you’re experimenting on a logged in application or device, or experimenting across multiple channels, you can use a hashed email address or other anonymous UUID. Note: User IDs should be anonymous.


<a name="bucketing"></a>
##### *Q: How does Optimizely consistently bucket users across SDKs?*
*A:* All of our SDKs use deterministic bucketing via [MurmurHash3](https://en.wikipedia.org/wiki/MurmurHash) to determine what experiments and variations should be active for a user.  This ensures that users will be given the same treatment across multiple visits or on different channels We’ve also ensured that all of our SDKs give the same output no matter what language you’re using.

<a name="client"></a>
##### *Q: How do I track user events that occur client-side in a web browser?*
*A:* We’ve created a lightweight [JavaScript SDK](http://developers.optimizely.com/server/reference/index.html#webtracking) that can be used for tracking conversion events from a web browser. Note that this is different than our standard [JavaScript snippet](https://help.optimizely.com/Set_Up_Optimizely/Implement_the_Optimizely_snippet), so it won’t interfere with any experiments that you’re running client-side in the browser. 

<a name="build-custom"></a>
##### *Q: My language of choice isn’t listed. Can I build my own SDK?*
*A:* Yes! You can use our [datafile](http://developers.optimizely.com/server/reference/index.html) and our [event API](http://developers.optimizely.com/events/api/) to build an SDK in any language of your choice.  We’ll publish an SDK developer guide shortly.  In the meantime, please let us know if you’re interested in developing your own SDK and we’ll provide you the documentation and support you need.
