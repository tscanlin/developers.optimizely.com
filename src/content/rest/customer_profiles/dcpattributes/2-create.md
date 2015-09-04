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
  description: "Long term value"
response: |
  {
    "archived": false,
    "created": "2015-08-18T21:38:55.927670Z",
    "datatype": "long",
    "dcp_datasource_id": 678,
    "description": "Long term value",
    "format": null,
    "id": 789,
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "name": "LTV"
    "version": 1
  }
---
Creates an attribute for a given datasource

#### Datatype options
- "string"
- "bool"
- "long"
- "double"
- "datetime": Needs format to be a Datetime format

#### Datetime format options
- "yyyy-mm-dd": ISO_8601 UTC date format
- "yyyy-mm-ddThh:mm:ssZ": ISO_8601 datetime format
- "epoch": Epoch time in milliseconds
