---
template: sidebyside
endpoint_prefix: customer_profile/
title: Bulk Upload
anchor: bulk
---


You can also upload a CSV (comma-separated values) to the `optimizely-import` S3 bucket and provided path for a given Datasource
We will parse the given CSV, validate the data against the registered [Attributes](/rest/customer_profiles#dcp_attributes), and store the successfully processed profiles.

Using the provided AWS credentials, it's possible to upload CSV files in a variety of ways.
The simplest approach is to use an S3 client application, such as [Cyberduck](www.cyberduck.io/?l=en).

It's also possible to upload files programmatically, using the [AWS
cli](http://docs.aws.amazon.com/cli/latest/userguide/using-s3-commands.html), an available
[SDK](https://aws.amazon.com/tools/), or [Library](http://boto3.readthedocs.org/en/latest/reference/services/s3.html).

You can retrieve the AWS credentials and S3 path from the [Datasource](/rest/customer_profiles#dcp_datasources).

##### The CSV must follow the below format
- Each column in the header row must be a registered [Attribute](/rest/customer_profiles#dcp_attributes) `name`. A CSV may contain a subset of the available [Attributes](/rest/customer_profiles#dcp_attributes)
- The header row must include a `customerId` column. All rows must contain a valid `customer_id`
- If a column header does not correspond to registered [Attribute](/rest/customer_profiles#dcp_attributes) `name`, the upload will fail
- If an Attribute value does respect the associated [Attribute](/rest/customer_profiles#dcp_attributes) `datatype`, the Upload will fail

Each row is treated as a [Write](/rest/customer_profiles#dcp_attributes)

<img src="/assets/img/dcp/csv.png">
