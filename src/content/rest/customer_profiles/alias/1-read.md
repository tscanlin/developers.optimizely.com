---
template: sidebyside
endpoint: alias/567/678/oeu1234.5678
endpoint_domain: https://vis.optimizely.com/api/
type: GET
title: Get Aliases
anchor: get-alias
response: |
  {
   "dcpServiceId": "567",
   "datasourceId": "678",
   "customerId": "oeu1234.5678"
   "data": {
     "8905": "sfdc1223a3_ji$ddd",
     "1232": "mkto1245433:213ad"
   }
  }
---

Return all customerIds aliased to the primary customerId in the Optimizely Datasource. CustomerIds are returned alongside their corresponding datasourceIds.

The `datasourceId` for this call should be the datasourceId of the Optimizely Datasource. You can find this id using [List Datasources](/rest/customer_profiles/#list-dcpservice-datasources). In this example it is *678*.
The `customerId` for this call should be the Optimizely User ID. In this example it is *oeu1234.5678*.

In the `data` section of the response the key-value pairs are the datasource_ids and the corresponding customer_ids that were aliased to the given optimizely customer_id.

<div class="lego-attention lego-attention--warning push--bottom">

The `datasourceId` for this call should be the datasourceId of the Optimizely Datasource. You can find this id using [List Datasources](/rest/customer_profiles/#list-dcpservice-datasources)

The `customerId` for this call should be the Optimizely User ID.

</div>
