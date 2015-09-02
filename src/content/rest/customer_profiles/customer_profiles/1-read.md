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

Retrieves customer profile attributes for given dcp_service_id, dcp_datasource_id and customer_id.
A customer_id is a Datasource's identifier for a given customer
