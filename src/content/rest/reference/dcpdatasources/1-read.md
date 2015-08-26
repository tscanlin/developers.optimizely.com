---
template: sidebyside
endpoint: dcp_datasources/3383760141/
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: GET
title: Read a DCPDatasource
anchor: read-dcpdatasource
fields:
  dcp_service_id: The id of the parent DCPService
  description: A short description
  name: The name of the DCPDatasource
  keyfield_locator_type: Type of keyfield locator. This can be a cookie, query parameter, or Optimizely UUID. The keyfield locator is the client location for this datasources ID.
  keyfield_locator_name: Name of keyfield locator. The keyfield locator is the client location for this datasources ID.
  archived: True if the DCPDatasource has been archived
  is_optimizely: True if the DCPDatasource is the Default Datasource storing Customer Profiles created by Optimizely
  last_modified: Last modified date of this DCPDatasource
  attributes: An array of all attribues inside this DCPDatasource
  aws_access_key: Access key for provisioned aws account, used for large bulk updates
  aws_secret_key: Secret key for provisioned aws account, used for large bulk updates
  id: DCPDatasource ID
response: |
  {
    "aws_secret_key": "ailL18vK/o3fy5tc8SH8SeGCh2leiuX9fu5Q5y7f",
    "archived": false,
    "s3_path": "dcp/3383760141/3389230072",
    "description": "Optimizely DW - First Party Data",
    "name": "[Anuraj] Optimizely DW",
    "created": "2015-08-20T23:26:08.41	4110Z",
    "keyfield_locator_type": "js_variable",
    "keyfield_locator_name": "_hashedEmailId",
    "is_optimizely": false,
    "last_modified": "2015-08-20T23:26:08.414140Z",
    "attributes": [],
    "aws_access_key": "AKIAJNBO3U7VXJTT6X7A",
    "id": 3389230072,
    "dcp_service_id": 3383760141
  }
---

Read metadata for a single datasource
