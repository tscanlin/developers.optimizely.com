---
template: sidebyside
endpoint:  /customer_profile/<dcp_service_id>/<dcp_datasource_id>/<customer_id>
endpoint_prefix: customer_profile/
endpoint_option: 1234
endpoint_suffix: /audiences/
type: POST
title: Create customer profile
anchor: create-customer-profile
request:
  data:
    avg_session_length: 10
    most_viewed_page: "www.optimizely.com"
response: |
  {
    "data": {
      "avg_session_length": 10,
      "most_viewed_page": "www.optimizely.com"
    }
  }
---

Creates attributes for customer profiles, given dcp_service_id, dcp_datasource_id and customer_id. 

Takes a set of key value pairs, where each key corresponds to the name of the Attribute.
