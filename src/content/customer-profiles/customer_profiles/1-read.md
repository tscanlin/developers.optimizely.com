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
      "Life-time value": 10,
      "most_viewed_category": "jeans"
    },
    "dcpServiceId": "567",
    "datasourceId": "678",
    "customerId": "oeu1234.5678"
  }
---

Get a single customer profile.  The `dcp_service_id`, `datasource_id`, and `customer_id_in_datasource` are required in the URL.
