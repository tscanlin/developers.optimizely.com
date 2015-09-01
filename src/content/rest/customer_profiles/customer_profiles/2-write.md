---
template: sidebyside
endpoint: customer_profile/<dcp_service_id>/<dcp_datasource_id>/<customer_id>
endpoint_domain: https://vis.optimizely.com/api/
endpoint_option: 1234
endpoint_suffix: /audiences/
type: POST
title: Write customer profile
anchor: Update-customer-profile
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

Creates / Updates attributes for customer profiles, given dcp_service_id, dcp_datasource_id and customer_id.

Takes a set of key value pairs, where each key corresponds to the `name` of the [Attribute](/rest/customer_profiles#dcp_attributes).

#### Note:
- If an Attribute already has a value for a given customer_id, the value for the given Attribute is updated
- A subset of defined [Attribute](/rest/customer_profiles#dcp_attributes) is ok.
- If a column header does not correspond to a [Attribute](/rest/customer_profiles#dcp_attributes) `name`, the write will fail
- If an Attribute value does respect the [Attribute](/rest/customer_profiles#dcp_attributes) `datatype`, the write will fail
