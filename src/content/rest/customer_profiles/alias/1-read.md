---
template: sidebyside
endpoint:  /alias/:dcpServiceId/:datasourceId/:customerId
endpoint_prefix: customer_profile/
type: GET
title: Get Aliases
anchor: get-alias
response: |
  [
   ‘data’: {
     '8905': 'sfdc1223a3_ji$ddd',
     '1232': 'mkto1245433:213ad
   }
  ]
---

Return all customerIds aliased to the primary customerID in the primary datasouce. CustomerIDs are returned alongside their corresponding DatasourceID.  