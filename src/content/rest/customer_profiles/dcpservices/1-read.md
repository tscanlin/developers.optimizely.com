---
template: sidebyside
endpoint: dcp_services/567
endpoint_prefix: dcp_services/
endpoint_option: 567
type: GET
title: Read a DCP Service
anchor: read-dcpservice
fields:
  account_id: Account ID that this DCP Service belongs to
  archived: Boolean indicating whether this DCP Service is archived
  aws_access_key: Access key for provisioned AWS account
  aws_secret_key: Secret key for provisioned AWS account
  created: Creation date of DCP Service
  last_modified: Last modified date of DCP Service
  name: The name of this DCP Service
  s3_path: S3 path for the entire DCP Service
response: |
  {
    "id": 567,
    "account_id": 123456,
    "archived": false,
    "aws_access_key": "123423asfakedf12vh451234",
    "aws_secret_key": "1234fake12341asdfas234zc",
    "created": "2015-08-01T11:50:37.864010Z",
    "last_modified": "2015-08-18T21:38:55.927670Z",
    "name": "My DCP Service",
    "s3_path": "dcp/567"
  }
---

Get metadata for a single DCP Service.  The `dcp_service_id` is required in the URL.

Every DCP Service is provisioned with AWS credentials; you may use these
credentials to upload data in [bulk to a datasource specific S3 path](/rest/customer_profiles#bulk)
