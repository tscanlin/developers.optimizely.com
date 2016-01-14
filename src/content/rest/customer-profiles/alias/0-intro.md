---
template: sidebyside
title: Alias
anchor: alias
---

Alias APIs are used to link customer IDs across [datasources](/rest/customer-profiles#dcp_datasources).

<img src="/assets/img/dcp/alias.png">

As shown in the figure, the same customer is identified with `ANON_ID_1` in "My Datasource" and with `OEU_2` in
"Optimizely Datasource". Aliasing these ids will record the fact that this is the same customer, provides a consolidated
view of the customer across datasources, and enables you to target based on attributes across several datasources.

DCP uses the customer ID in the Optimizely datasource as the canonical customer ID; customer IDs from other datasources
are aliased to this ID. The Optimizely ID is either a
[UUID](/javascript/reference/index.html#universal-user-id-beta-a-name-uuid-a-) or the Optimizely generated user id
stored in the `optimizelyEndUserId` cookie.

You may retrieve a unified view of the customer using the [consolidated customer profile
view](/rest/customer-profiles#consolidated-profile) API call.

<div class="attention attention--warning push--bottom">
These APIs that follow use the domain https://vis.optimizely.com/api/
</div>
