---
template: sidebyside
endpoint: consolidatedCustomerView/567/oeu1234.5678
endpoint_prefix: consolidatedCustomerView/
endpoint_domain: https://vis.optimizely.com/api/
endpoint_option: 567
type: GET
title: Read consolidated customer profile
anchor: consolidated-profile
response: |
  [
    {
      "dcpServiceId": "567",
      "datasourceId": "789",
      "customerId": "oeu1234.5678",
      "data": {
        "Life-time value": 10,
        "most_viewed_category": "jeans"
      }
    },
    {
      "dcpServiceId": "567",
      "datasourceId": "790",
      "customerId": "sfdc1223a3_ji$ddd",
      "data": {
        "mrr": 10000
      }
    }
  ]
---

Get a consolidated view of a single customer profile.  The `dcp_service_id` and `optimizely_user_id` are required in the URL.

The profile is consolidated by [aliasing](/customer-profiles/index.html#alias) across different datasources in the DCP Service.
