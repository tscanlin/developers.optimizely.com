---
template: sidebyside
endpoint: dcp_datasources/3383760141/
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: GET
title: Read a Datasource
anchor: read-dcpdatasource
fields:
  aws_secret_key: Secret key for provisioned aws account, used for large bulk updates
  archived: True if the DCP Datasource has been archived
  s3_path: S3Path for the entire the DCP Service
  description: A short description
  name: The name of the Datasource
  created: When this Datasource was created
  keyfield_locator_type: Type of keyfield locator. The keyfield locator is the client location for this Datasource.
  keyfield_locator_name: Name of keyfield locator. The Optimizely Datasource storing visitor attributes created by Optimizely
  last_modified: Last modified date of this Datasource
  attributes: An array of all attribues inside this Datasource
  aws_access_key: Access key for provisioned aws account, used for large bulk updates
  id: Datasource ID
  dcp_service_id: The id of the parent DCPService  
response: |
  {
    "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
    "archived": false,
    "s3_path": "dcp/11111111/2222222",
    "description": "Optimizely DW - First Party Data",
    "name": "Optimizely DW",
    "created": "2015-08-20T23:26:08.41	4110Z",
    "keyfield_locator_type": "js_variable",
    "keyfield_locator_name": "_hashed_email_id",
    "is_optimizely": false,
    "last_modified": "2015-08-20T23:26:08.414140Z",
    "attributes": [],
    "aws_access_key": "AKfakekeyV8SH8XTJBUPO",
    "id": 3389230072,
    "dcp_service_id": 3383760141
  }
---

Read metadata for a single datasource
