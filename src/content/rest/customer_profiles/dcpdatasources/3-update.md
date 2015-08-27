---
template: sidebyside
endpoint: dcp_datasources/3383760141/
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: PUT
title: Update a Datasource
anchor: update-dcpdatasource
request:
  name: 'Datawarehouse'
  keyfield_locator_type: "cookie"
  keyfield_locator_name: "_my_hashedEmailcookie"
response: |
  {
    "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
    "archived": false,
    "s3_path": "dcp/11111111/2222222",
    "description": "Optimizely DW - First Party Data",
    "name": "Optimizely DW",
    "created": "2015-08-20T23:26:08.41	4110Z",
    "keyfield_locator_type": "js_variable",
    "keyfield_locator_name": "_hashedEmailId",
    "is_optimizely": false,
    "last_modified": "2015-08-20T23:26:08.414140Z",
    "attributes": [],
    "aws_access_key": "AKfakekeyV8SH8XTJBUPO",
    "id": 3389230072,
    "dcp_service_id": 3383760141
  }
---

Updates a Datasource.

#### Editable fields
- `keyfield_locator_type`
- `keyfield_locator_name`
