---
template: sidebyside
endpoint: customer_profile/567/678/oeu1234.5678
endpoint_domain: https://vis.optimizely.com/api/
type: POST
title: Write customer profile
anchor: update-customer-profile
request:
  data:
    "LTV": 10,
    "most_viewed_category": "jeans"
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

Creates/Updates the attributes for the specified customer's profile; the DCP Service, datasource, and customer's ID in
that datasource must be specified.

The request data is a set of key value pairs, where each key is the `name` of the
[attribute](/rest/customer_profiles#dcp_attributes) and its `value` must conform to the attribute's datatype and format.

#### Note:
- The specified attribute value overwrites any existing value specified earlier.
- The request may contain a subset of defined [attributes](/rest/customer_profiles#dcp_attributes).
- If a key does not correspond to a registered [attribute](/rest/customer_profiles#dcp_attributes) `name`, the write
  will fail
- If a value does not respect the [attribute's](/rest/customer_profiles#dcp_attributes) `datatype`/`format`, the write
  will fail
