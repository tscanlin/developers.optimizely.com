---
template: sidebyside
endpoint:  https://vis.optimizely.com/api/customer_profile/<dcp_service_id>/<dcp_datasource_id>/<customer_id>
endpoint_prefix: customer_profile/
type: GET
title: Read customer profile
anchor: read-customer_profile
response: |
  {
    "data": {
      "avg_session_length": 10,
      "most_viewed_page": "www.optimizely.com"
    }
  }
---

Retrieves customer profile attributes for given dcp_service_id, dcp_datasource_id and customer_id.
A customer_id is a Datasources' identifier for a given visitor
