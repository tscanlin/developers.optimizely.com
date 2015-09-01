---
template: sidebyside
endpoint: alias/<dcp_service_id>/<dcp_datasource_id>/<optimizely_id>
endpoint_domain: https://vis.optimizely.com/api/
type: POST
title: Create Alias
anchor: create-alias
request:
  data:
    8905: "sfdc1223a3_ji$ddd"
    1232: "mkto1245433:213ad"
---

Alias customer_id from one Datasource with of other customer_id in different Datasource

In the example above, the displayed Ids in Datasources *8905* and *1232* are now linked the Optimizely User ID.

<div class="lego-attention lego-attention--warning push--bottom">

The `dcp_datasource_id` for this call should be the dcp_datasource_id of the Optimizely Datasource. You can find this id using [List Datasources](/rest/customer_profiles/#list-dcpservice-datasources)

The `optimizely_id` for this call should be the Optimizely User ID.

</div>
