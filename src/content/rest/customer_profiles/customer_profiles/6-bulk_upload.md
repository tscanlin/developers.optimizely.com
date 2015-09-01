---
template: sidebyside
endpoint_prefix: customer_profile/
title: Bulk Upload
anchor: bulk
---


You can also upload a CSV to the S3 Path of a given Datasource to perform bulk uploads.

Instructions for uploading to S3 can be found [here](http://docs.aws.amazon.com/AmazonS3/latest/UG/UploadingObjectsintoAmazonS3.html). You can also use S# tools like [Cyberduck](/www.cyberduck.io/?l=en).
You can get credentials and S3 path from the  [Datasource](/rest/customer_profiles#dcp_datasources).


##### The CSV should take the following format
- Each column in the header row is a previously defined [Attribute](/rest/customer_profiles#dcp_attributes) `name`. You can have a subset of defined attributes.
- One column should have a row called "customerID", which should contain customer_id
- Each row should represent a customer, with each data entry corresponding to a header row
- If a column header does not correspond to a [Attribute](/rest/customer_profiles#dcp_attributes) `name`, the upload will fail
- If an Attribute value does respect the [Attribute](/rest/customer_profiles#dcp_attributes) `datatype`, the Upload will fail

Each row is treated as a [Write](/rest/customer_profiles#dcp_attributes)
