---
template: sidebyside
endpoint: consolidated_customer_profile_view/567/oeu1234.5678
endpoint_prefix: consolidated_customer_profile_view/
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

Gets the consolidated view of the customer profile for the specified DCP Service and Optimizely User. The profile is
consolidated by [aliasing](/rest/customer_profiles#alias) across different datasources in the DCP Service.
