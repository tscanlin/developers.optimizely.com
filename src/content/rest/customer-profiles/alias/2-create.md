---
template: sidebyside
endpoint: alias/567/678/oeu1234.5678
endpoint_domain: https://vis.optimizely.com/api/
type: POST
title: Create Alias
anchor: create-alias
request:
  data:
    8905: "sfdc1223a3_ji$ddd"
    1232: "mkto1245433:213ad"
---

Alias customer IDs to the specified Optimizely User ID.  The `dcp_service_id`, `optimizely_datasource_id`, and `optimizely_user_id` are required in the URL.

In the example, the customer IDs corresponding to datasources *8905* and *1232* are now aliased to the Optimizely User
ID *oeu1234.5678*. The Optimizely datasource ID is *678* and the DCP Service ID is *567*.

<div class="attention attention--warning push--bottom">
The `datasourceId` for this call should be the ID of the Optimizely datasource. You can find this ID using [list
datasources](/rest/customer-profiles/#list-dcpservice-datasources) and finding the datasource with `is_optimizely=true`.
In this example, it is *678*.  The `customerId` for this call should be the Optimizely User ID. In this example, it is
*oeu1234.5678*.
</div>
