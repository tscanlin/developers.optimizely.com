---
template: sidebyside
title: Alias
anchor: alias
---

Alias APIs are used to consolidate visitor attributes across Datasources.

You should always Alias an ID of a Datasource to Optimizely user ID (either a UUID or the default ID, stored in the optimizelyEndUserId cookie). Using the [/consolidated_customer_profile_view](/#) you can retrieve a unified view of the customer.

<div class="lego-attention lego-attention--warning push--bottom">
These APIs that follow use the domain https://vis.optimizely.com/api/
</div>
