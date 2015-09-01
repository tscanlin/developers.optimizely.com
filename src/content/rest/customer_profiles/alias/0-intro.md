---
template: sidebyside
title: Alias
anchor: alias
---

Alias APIs are used to associate `customer_id`s across [Datasources](//rest/customer_profile#datasources)

<img src="/assets/img/dcp/alias.png">

You should always Alias an ID of a Datasource to Optimizely user ID (either a UUID or the default ID, stored in the optimizelyEndUserId cookie). Using the [/consolidated_customer_profile_view](/rest/customer_profile#consolidated-profile) you can retrieve a unified view of the customer.

To use these APIs make sure you have read the sections on [DCPServices](/rest/customer_profiles#customer_profile_service), [Datasources](/rest/customer_profiles#customer_profile_service), and [Attributes](/rest/customer_profiles#dcp_attributes)

<div class="lego-attention lego-attention--warning push--bottom">
These APIs that follow use the domain https://vis.optimizely.com/api/
</div>
