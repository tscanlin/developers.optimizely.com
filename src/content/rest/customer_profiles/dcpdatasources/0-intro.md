---
template: sidebyside
title: Datasources
anchor: dcp_datasources
---

A Datasource stores a collection of customer attributes within the same ID space.

<img src="/assets/img/dcp/datasources_example.png">

Multiple Datasources belong to a single DCPService. In the example above, each Datasource ("Optimizely Datasource", "My Data Warehouse", "Email Platform") has its own set of IDs. This allows you to send customer data to Optimizely, by Datasource, without worrying about the relationship of customers across datasources. Using Aliases, you can link IDs across Datasources to create a unified Customer Profile.

Upon providing a key field Locator (the location of this Datasources ID in the browser), the Optimizely client will make [Alias](/rest/customer_profiles#alias) links between customer attributes for a Datasource and the Optimizely Datasource when we see Keyfield Locators from different Datasources on the same device.
