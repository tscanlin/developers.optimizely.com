---
template: page-sidebar
title: "Optimizely REST API FAQs"
---

# Optimizely REST API FAQs

Below are some frequently asked questions about the REST API. You may also want to check out [general product FAQs](https://help.optimizely.com/hc/en-us/articles/200904580).

Can't find an answer to your question? We're happy to answer your question on <a href="developers@optimizely.com">developers@optimizely.com</a>.

<a href="#run-tests">*Q:* Can I run A/B tests with the REST API?</a><br>
<a href="#run-mvt-tests">*Q:* Can I run multivariate or multipage tests with the REST API?</a><br>
<a href="#rate-limits">*Q:* What are the rate limits on the REST API?</a><br>
<a href="#client-libraries">*Q:* Do you provide any client libraries for the REST API?</a><br>
<a href="#api-permissions">*Q:* What REST API endpoints do I have access to?</a><br>
<a href="#create-variation-web">*Q:* How do I create a variation (for web)?</a><br>
<a href="#create-variation-mobile">*Q:* How do I create a variation (for mobile)?</a><br>
<a href="#start-experiment">*Q:* How do I start or stop an experiment?</a><br>
<a href="#get-results">*Q:* How do I get the results of an experiment?</a><br>
<a href="#archive-experiment">*Q:* How do I archive an experiment?</a><br>


<a name="run-tests"></a>
##### *Q: Can I run web A/B tests with the REST API?*
*A:* Yes! The REST API allows you to create projects, experiments, variations, audiences, and goals analogous to using the Optimizely interface. Check out [Life of an experiment](../../overview#life-of-an-experiment) to see what's involved in setting up an experiment and which API endpoints are needed.

<a name="run-mvt-tests"></a>
##### *Q: Can I run multivariate or multipage tests with the REST API?*
*A:* We currently don't support creating and editing multivariate or multipage tests via the API.

<a name="rate-limits"></a>
##### *Q: What are the rate limits on the REST API?*
*A:* We do not currently publish rate limits or quotas for the REST API. If you are writing an application that requires an unusually high volume of API calls, please reach out to <a href="developers@optimizely.com">developers@optimizely.com</a> so we can ensure that your plan will allow it.

<a name="client-libraries"></a>
##### *Q: Do you provide any client libraries for the REST API?*
*A:* Yes! We've started with a client library in [Python Client Library](https://github.com/optimizely/optimizely-client-python) and we are working on adding more languages. See [API Libraries](../reference#libraries) for a list of libraries supported by Optimizely and 3rd parties.

<a name="api-permissions"></a>
##### *Q: What REST API endpoints do I have access to?*
*A:* In general, permissions in the REST API match the role of the user for which the API token was generated:

* *Administrators* have full read/write access to all endpoints across all projects
* *Project owners* have full read/write access to all endpoints within a project
* *Editors* have full read/write access within a project, except starting experiments
* *Viewers* have read-only access within a project

If you are connecting to Optimizely via OAuth, the same rules apply based on the role of the user who authorizes your application. For a full description of user roles see [Managing collaborators and user roles](https://help.optimizely.com/hc/en-us/articles/200040775).

<a name="create-variation-web"></a>
##### *Q: How do I create a variation (for web)?*
*A:* To create a variation on the web, you'll want to use the [POST variation](../reference#create-variation) endpoint and include a `js_component` with the jQuery code for your variation. To see an example, check out the [WordPress headline testing](../samples#technology-integrations-cms) code sample.

<a name="create-variation-mobile"></a>
##### *Q: How do I create a variation (for mobile)?*
*A:* We do not currently support creating variations for iOS and Android through the REST API.

<a name="start-experiment"></a>
##### *Q: How do I start or stop an experiment?*
*A:* To start or stop an experiment, you'll want to use the [PUT experiment](../reference#update-experiment) endpoint to update the `status` field of the experiment to `Running` (to start) or `Paused` (to stop).

<a name="get-results"></a>
##### *Q: How do I get the results of an experiment?*
*A:* You can get the results of an experiment by using the [Get experiment results](../reference#get-stats) endpoint. To see an example check out the our [samples code](../../samples#results) for a web application that pulls results through the API.

<a name="archive-experiment"></a>
##### *Q: How do I archive an experiment?*
*A:* To archive an experiment, use the [PUT experiment](../reference#update-experiment) endpoint to update the `status` field of the experiment to `Archived`.
