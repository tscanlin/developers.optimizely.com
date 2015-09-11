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

Gets all customer IDs aliased to the Optimizely datasource customer ID.

The `data` section of response is a map of datasource IDs to their corresponding Customer IDs, each aliased to the
canonical Optimizely User ID.

<div class="lego-attention lego-attention--warning push--bottom">
The `datasourceId` for this call should be the ID of the Optimizely datasource. You can find this ID using [list
datasources](/rest/customer_profiles/#list-dcpservice-datasources) and finding the datasource with `is_optimizely=true`.
In this example, it is *678*.  The `customerId` for this call should be the Optimizely User ID. In this example, it is
*oeu1234.5678*.
</div>
