---
template: sidebyside
endpoint: /dcp_services/567
endpoint_prefix: dcp_services/
endpoint_option: 567
type: GET
title: Read a DCPService
anchor: read-dcpservice
fields:
  id: DCPServiceID
  account_id: Account id this dcp service belongs too
  name: The name of the DCP Service
  last_modified: Last modified date of DCPService
  aws_access_key: Access key for provisioned aws account, used for large bulk updates
  aws_secret_key: Secret key for provisioned aws account, used for large bulk updates
  s3_path: S3Path for the entire the DCPService
response: |
  {
    ‘id’: 567,
    ‘account_id’: 1111111,
    ‘name’: "Datawarehouse",
    'last_modified': '<todogetdateformat>',
    ‘aws_access_key’: '<S3 bucket provisioned for service>',
    ‘aws_secret_key’: '<Access key to bucket>',
    's3_path': '<getexample>',
  }
---

Gets data for a dynamic customer profile service. Every DCPService has a corresponding Amazon S3 bucket path. This path is where you can upload large CSVs to perform bulk updates to a datasource.
