---
template: sidebyside
title: Overview
anchor: overview
---

Dynamic Customer Profiles (DCP) are a collection of your customers' attributes, including demographic data, behavioral
characteristics, or any other information particular to your industry and customers. DCP provides a consolidated,
dynamic view of your customers, enabling you to refine this view as you obtain more information, and to take action
based on this view.

A single customer profile contains attributes collected by Optimizely and attributes collected by you, or by services
that you use, and provided to Optimizely to create a single view of the customer. These attributes are organized and
stored by [datasource](/rest/reference#dcp_datasources) and linked across datasources using identity
[aliases](/customer-profiles/index.html#alias).

<img src="/assets/img/dcp/overview.png">

Customer profiles can be used to create audiences for targeting, and exported for use in other integrations, or
analysis.

Use the customary [REST API](/rest/getting-started) to configure DCP [Services](/rest/reference/#dcp_services),
[datasources](/rest/reference/#dcp_datasources), and
[attributes](http://developers.optimizely.com/rest/reference/#dcp_attributes).  Then use the DCP REST API,
detailed below, to work with individual customer profiles.

To enable DCP for your account, please contact [techpartners@optimizely.com](mailto:techpartners@optimizely.com)

<div class="attention attention--warning push--bottom">
<p>
Remember, your terms of service prohibit you from collecting or sending any *personally identifiable information*
(such as names, social security numbers, email addresses, or any similar data)
to Optimizely's services or systems through Dynamic Customer Profiles or any other feature.
</p>

<p>
Please read the article on [PII](https://help.optimizely.com/hc/en-us/articles/215757948)
to learn more about sending data to Optimizely and handling personally identifiable information.
</p>
</div>
