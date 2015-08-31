---
template: sidebyside
endpoint: dcp_services/567
endpoint_prefix: dcp_services/
endpoint_option: 567
type: GET
title: Read a DCP Service
anchor: read-dcpservice
fields:
  id: DCP ServiceID
  account_id: Account Id this DCP Service belongs too
  name: The name of the DCP Service
  last_modified: Last modified date of DCP Service
  aws_access_key: Access key for provisioned aws account
  aws_secret_key: Secret key for provisioned aws account
  s3_path: S3Path for the entire the DCP Service
response: |
  {
    "id": 567,
    "account_id": 555650815,
    "name": "My DCP Service",
    "last_modified": "2015-08-18T21:38:55.927670Z",
    "aws_access_key": "123423asfakedf12vh451234",
    "aws_secret_key": "1234fake12341asdfas234zc",
    "s3_path": "dcp/11111111",
    "archived": false
  }
---

Gets data for a dynamic customer profile service. Every DCP Service has AWS credentials that are provisioned for every DCPService. You can use these AWS credentials to upload bulk data to a [Datasource specific S3 path](/rest/customer_profiles#create-customer-profile)
