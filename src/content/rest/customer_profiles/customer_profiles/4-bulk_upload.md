---
template: sidebyside
endpoint_prefix: customer_profile/
title: Bulk Upload
anchor: bulk
---

You can also upload a CSV (comma-separated values) to the `optimizely-import` S3 bucket using the provided datasource S3
path.  We will parse the given CSV, validate each row of data against the registered
[attributes](/rest/customer_profiles#dcp_attributes), and store the successfully processed rows.  Each row is treated as
a [write](/rest/customer_profiles#update-customer-profile) request.

Using the provided AWS credentials, it's possible to upload CSV files in a variety of ways.  The simplest approach is to
use an S3 client application, such as [Cyberduck](http://www.cyberduck.io/?l=en).

It's also possible to upload files programmatically, using the [AWS
CLI](http://docs.aws.amazon.com/cli/latest/userguide/using-s3-commands.html), an available
[SDK](https://aws.amazon.com/tools/), or [library](http://boto3.readthedocs.org/en/latest/reference/services/s3.html).

You can retrieve the AWS credentials and S3 path from the [datasource](/rest/customer_profiles#read-dcpdatasource).

##### The CSV must follow this format
- Each column in the header row must be a registered [attribute](/rest/customer_profiles#dcp_attributes) `name`. A CSV
  may contain a subset of the registered [attributes](/rest/customer_profiles#dcp_attributes)
- The header row must include a `customerId` column. All rows must also contain a valid customer ID
- If a column header does not correspond to a registered [attribute](/rest/customer_profiles#dcp_attributes) `name`, the
  upload will fail
- If an attribute value does not respect the [attribute's](/rest/customer_profiles#dcp_attributes) `datatype`/`format`,
  the upload will fail


<img src="/assets/img/dcp/csv.png">