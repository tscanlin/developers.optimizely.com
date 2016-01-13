---
template: sidebyside
endpoint: consolidated_customer_profile_view/567/oeu1234.5678
endpoint_prefix: consolidated_customer_profile_view/
endpoint_domain: https://vis.optimizely.com/api/
endpoint_option: 567
type: GET
title: Read consolidated customer profile
anchor: consolidated-profile
response: |
  [
    {
      "dcpServiceId": "567"
      "datasourceId": "789",
      "customerId": "oeu1234.5678"
      "data": {
        "LTV": 10,
        "most_viewed_category": "jeans"
      }
    },
    {
      "dcpServiceId": "567"
      "datasourceId": "790",
      "customerId": "sfdc1223a3_ji$ddd"
      "data": {
        "mrr": 10000
      }
    }
  ]
---

Get a consolidated view of a single customer profile.  The `dcp_service_id` and `optimizely_user_id` are required in the URL.

The profile is consolidated by [aliasing](/rest/customer_profiles#alias) across different datasources in the DCP Service.
