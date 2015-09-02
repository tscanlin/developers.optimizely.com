---
template: sidebyside
endpoint: /consolidated_customer_profile_view/567/oeu1234.5678
endpoint_prefix: customer_profile/
type: GET
title: Retrieve consolidated customer profile
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

Retrieves consolidated view (consolidated via alias APIs across different datasourceIds) of customer_profile for given dcp_service_id and Optimizely User ID.
