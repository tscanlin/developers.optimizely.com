---
template: sidebyside
endpoint: dcp_datasources/3383760141/
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: GET
title: Read a Datasource
anchor: read-dcpdatasource
fields:
  aws_secret_key: Secret key for provisioned aws account
  archived: True if the Datasource has been archived
  s3_path: S3Path for this Datasource
  description: A short description
  name: The name of the Datasource
  created: When this Datasource was created
  keyfield_locator_type: Type of keyfield locator. The keyfield locator is the client location for customer id for this Datasource
  keyfield_locator_name: Name of keyfield locator.
  last_modified: Last modified date of this Datasource
  attributes: An array of all attribues inside this Datasource
  aws_access_key: Access key for provisioned aws account
  id: Datasource ID
  dcp_service_id: The DCPService this datasource is associated with
response: |
  {
    "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
    "archived": false,
    "s3_path": "dcp/3383760141/3389230072",
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

`keyfield_locator_type` can be "cookie", "query parameter", "js_variable" or "uuid"

All `keyfield_locator_types` except "uuid" should match the expression `/^[a-zA-Z_][a-zA-Z_0-9\$]*$/`
