---
template: sidebyside
endpoint: dcp_services/567/
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: POST
title: Create a Datasource
anchor: create-dcpdatasource
request:
  name: "Datawarehouse"
  keyfield_locator_type: "cookie"
  keyfield_locator_name: "_my_hashedEmailcookie"  
response: |
  {
    "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
    "archived": false,
    "s3_path": "dcp/567/678",
    "description": "Optimizely DW - First Party Data",
    "name": "Optimizely DW",
    "created": "2015-08-20T23:26:08.41	4110Z",
    "keyfield_locator_type": "js_variable",
    "keyfield_locator_name": "_hashedEmailId",
    "is_optimizely": false,
    "last_modified": "2015-08-20T23:26:08.414140Z",
    "attributes": [],
    "aws_access_key": "AKfakekeyV8SH8XTJBUPO",
    "id": 678,
    "dcp_service_id": 567
  }
---

Create a Datasource.

The keyfield_locator represents the location of the Datasources' IDs in the browser.

`keyfield_locator_type` can be "cookie", "query parameter", "js_variable" or "uuid"

All `keyfield_locator_types` except "uuid" should match the expression `/^[a-zA-Z_][a-zA-Z_0-9\$]*$/`
