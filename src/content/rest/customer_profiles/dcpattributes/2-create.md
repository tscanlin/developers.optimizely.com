---
template: sidebyside
endpoint: dcp_datasources/678/dcp_datasource_attributes
endpoint_prefix: dcp_datasources/
endpoint_option: 678
type: POST
title: Create Attribute
anchor: create-dcpattribute
request:
  name: "LTV"
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
    "id": 789,
    "name": "LTV"
  }
---
Creates Attribute for a given Datasource

#### Datatype options
- "string"
- "bool"
- "long"
- "double"
- "datetime": needs format to be a Datetime format

#### Datetime format options
- "yyyy-mm-dd": ISO_8601 UTC date format
- "yyyy-mm-ddThh:mm:ssZ": ISO_8601 datetime format
- "epoch": Epoch time in millis
