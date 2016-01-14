---
template: sidebyside
title: Datasources
anchor: dcp_datasources
---

A datasource stores a set of related customer attributes under a common ID space.

<img src="/assets/img/dcp/Datasource.png">

A single DCP Service can have several datasources. The figure above, shows three datasources: "My Data Warehouse",
"Email Platform", "Optimizely Datasource", each with customer attributes obtained from a different source, and each with
a different way to identify the same customer. For example, the customer identified by `ANON_ID_2` in "My Data
Warehouse" could be the same customer identified by `OEU_1` in "Optimizely Datasource". Organizing customer data by
datasource allows you to send data to Optimizely without requiring you to reconcile data across datasources. This task
of reconciling data of the same customer across datasources can be achieved using the
[alias](/rest/customer-profiles#alias) operation.

When creating a Datasource, you will provide a key field locator type and name to enable Optimizely to perform aliasing
for you. A key field locator is a location on your resource (e.g. web-page) where you can place the customer id for a
particular datasource. Optimizely will read this information for each of your customers and alias each of the datasource
customer ids to the canonical Optimizely user id (UID) assigned on the customer's device. In the figure, "Email
Platform" has a key field locator type `cookie`, and name `email_platform_cookie_name`. You will place this datasource's
customer id in a `cookie` named `email_platform_cookie_name`, which Optimizely can read and alias to the Optimizely UID.

If you prefer to alias customer IDs by yourself, you can do so using the [alias](/rest/customer-profiles#alias) API.
