---
template: sidebyside
endpoint: alias/<dcp_service_id>/<dcp_datasource_id>/<customer_id>
endpoint_prefix: https://vis.optimizely.com/api/
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

Return all customerIds aliased to the primary customerID in the primary datasource. CustomerIDs are returned alongside their corresponding DatasourceID.  
