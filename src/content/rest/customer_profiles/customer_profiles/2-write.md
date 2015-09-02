---
template: sidebyside
endpoint: customer_profile/567/678/oeu1234.5678
endpoint_domain: https://vis.optimizely.com/api/
endpoint_option: 1234
type: POST
title: Write customer profile
anchor: Update-customer-profile
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

Creates/Updates attributes for a customer profile given `dcp_service_id`, `dcp_datasource_id` and `customer_id`.

Takes a set of key value pairs, where each key corresponds to the `name` of the [Attribute](/rest/customer_profiles#dcp_attributes) and `value` is provided in attribute's original datatype and format.

#### Note:
- If an Attribute already has a value for a given customer_id, the value for the given Attribute is updated
- A subset of defined [Attribute](/rest/customer_profiles#dcp_attributes) is ok.
- If a column header does not correspond to a [Attribute](/rest/customer_profiles#dcp_attributes) `name`, the write will fail
- If an Attribute value does respect the [Attribute](/rest/customer_profiles#dcp_attributes) `datatype`/`format`, the write will fail
