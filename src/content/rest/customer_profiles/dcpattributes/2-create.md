---
template: sidebyside
endpoint: dcp_datasources/678/dcp_datasource_attributes
endpoint_prefix: dcp_datasources/
endpoint_option: 678
type: POST
title: Create Attribute
anchor: create-dcpattribute
request:
  name: "is_high_value_customer"
  datatype: "long"
response: |
  {
    "dcp_datasource_id": 678,
    "archived": false,
    "description": null,
    "format": null,
    "datatype": "long",
    "created": "2015-08-18T21:38:55.927670Z",
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "version": 1,
    "id": 3324671622,
    "name": "admin_account_id"
  }
---
Creates Attribute Metadata for a given Datasource

#### Datatype options
- "string"
- "bool"
- "long"
- "double"
- "datetime"

#### Datetime formats
- ISO_8601_DATE = 'yyyy-mm-dd'
- ISO_8601_DATE_TIME_UTC = 'yyyy-mm-ddThh:mm:ssZ'
- EPOCH = 'epoch'
