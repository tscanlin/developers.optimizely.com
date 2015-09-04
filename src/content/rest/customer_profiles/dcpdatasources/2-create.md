---
template: sidebyside
endpoint: dcp_services/567/
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: POST
title: Create a Datasource
anchor: create-dcpdatasource
request:
  name: "My Data Warehouse"
  keyfield_locator_type: "cookie"
  keyfield_locator_name: "_my_hashedEmailcookie"  
response: |
  {
    "id": 678,
    "archived": false,
    "attributes": [],
    "aws_access_key": "AKfakekeyV8SH8XTJBUPO",
    "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
    "created": "2015-08-20T23:26:08.414110Z",
    "dcp_service_id": 567,
    "description": null,
    "is_optimizely": false,
    "keyfield_locator_name": "_my_hashedEmailcookie",
    "keyfield_locator_type": "cookie",
    "last_modified": "2015-08-20T23:26:08.414140Z",
    "name": "My Data Warehouse",
    "s3_path": "dcp/567/678"
  }
---

Create a Datasource for the specified DCP Service.

#### Required Fields  
- `name`
- `keyfield_locator_type`: Must be one of 
  - `"cookie"`
  - `"query parameter"`
  - `"js_variable"`
  - `"uid"`
- `keyfield_locator_name`: Name of keyfield locator. Required for all `keyfield_locator_types` except `"uid"`, and must
  match the regular expression `/^[a-zA-Z_][a-zA-Z_0-9\$]*$/`.
