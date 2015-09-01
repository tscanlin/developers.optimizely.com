---
template: sidebyside
endpoint: alias/<dcp_service_id>/<dcp_datasource_id>/<optimizely_id>
endpoint_domain: https://vis.optimizely.com/api/
type: GET
title: Get Aliases
anchor: get-alias
response: |
  [
   "data": {
     "8905": "sfdc1223a3_ji$ddd",
     "1232": "mkto1245433:213ad"
   }
  ]
---

Return all customerIds aliased to the primary customer_id in the Optimizely Datasource. Customer_id's are returned alongside their corresponding datasource_id.  

The `dcp_datasource_id` for this call should be the dcp_datasource_id of the Optimizely Datasource. You can find this id using [List Datasources](/rest/customer_profiles/#list-dcpservice-datasources)

The `optimizely_id` for this call should be the Optimizely User ID.
