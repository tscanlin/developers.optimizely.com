---
template: sidebyside
endpoint:  /alias/:dcpServiceId/:datasourceId/:customerId
endpoint_prefix: customer_profile/
type: POST
title: Create Alias
anchor: create-alias
request:
  data:
    8905: 'sfdc1223a3_ji$ddd'
    1232: 'mkto1245433:213ad'
response: |
  [
   ‘data’: {
     '8905': 'sfdc1223a3_ji$ddd',
     '1232': 'mkto1245433:213ad'
   }
  ]
---

Alias customerId of one datasourceId with list of other customerIds in different datasourceIds.
