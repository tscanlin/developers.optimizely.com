---
template: sidebyside
endpoint: customer_profile/<dcp_service_id>/<dcp_datasource_id>/<customer_id>
endpoint_domain: https://vis.optimizely.com/api/
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

Takes a set of key value pairs, where each key corresponds to the `name` of the [Attribute](/rest/customer_profiles#dcp_attributes).

If an Attribute already has a value for a given customer_id, the value for the given Attribute is updated.

#### Bulk Uploading

You can also upload a CSV to the S3 Path of a given Datasource to perform bulk uploads. Instructions for uploading to S3 can be found [here](http://docs.aws.amazon.com/AmazonS3/latest/UG/UploadingObjectsintoAmazonS3.html). You can get credentials and S3 path from the  [Datasource](/rest/customer_profiles#dcp_datasources).
##### The CSV should take the following format
- The header row should correspond to [Attribute](/rest/customer_profiles#dcp_attributes) `name`
- Each row should represent a customer.
- The first column should contain the the customer_id  
- Each subsequent column should correspond to an Attribute
- If a column header does not correspond to a [Attribute](/rest/customer_profiles#dcp_attributes) `name`, the upload will fail

Each row is treated as a POST request above.
