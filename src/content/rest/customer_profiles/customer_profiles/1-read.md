---
template: sidebyside
endpoint: customer_profile/567/678/oeu1234.5678
endpoint_domain: https://vis.optimizely.com/api/
type: GET
title: Read customer profile
anchor: read-customer_profile
response: |
  {
    "data": {
      "LTV": 10,
      "most_viewed_category": "jeans"
    },
    "dcpServiceId": "567",
    "datasourceId": "678",
    "customerId": "oeu1234.5678"
  }
---

Gets the customer profile attributes for the specified DCP Service, datasource, and customer's ID in that datasource.
