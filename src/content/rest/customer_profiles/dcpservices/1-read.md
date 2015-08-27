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
  account_id: Account id this dcp service belongs too
  name: The name of the DCP Service
  last_modified: Last modified date of DCP Service
  aws_access_key: Access key for provisioned aws account, used for large bulk updates
  aws_secret_key: Secret key for provisioned aws account, used for large bulk updates
  s3_path: S3Path for the entire the DCP Service
response: |
  {
    "id": 567,
    "account_id": 1111111,
    "name": "Datawarehouse",
    "last_modified": "2015-08-18T21:38:55.927670Z",
    "aws_access_key": "123423asfakedf12vh451234",
    "aws_secret_key": "1234fake12341asdfas234zc",
    "s3_path": "dcp/11111111",
  }
---

Gets data for a dynamic customer profile service. Every DCP Service has a corresponding Amazon S3 bucket path. This path is where you can upload large CSVs to perform bulk updates to a datasource.
