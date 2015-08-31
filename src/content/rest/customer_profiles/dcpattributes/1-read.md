---
template: sidebyside
endpoint: dcp_datasource_attributes/1234
endpoint_prefix: dcp_datasources/
endpoint_option: 1234
type: GET
title: Read Attribute
anchor: read-dcpattribute
fields:
  dcp_datasource_id: Id of parent datasource
  archived: Whether Attribute has been archived
  description: Description of the attribute
  format: When datatype is date, format is date format
  datatype: Datatype of Attribute. Can be "string", "bool", "long", "double", "datetime"
  version: API version
response: |
  {
    "dcp_datasource_id": 3367160056,
    "archived": false,
    "description": null,
    "format": null,
    "datatype": "long",
    "created": "2015-08-18T21:38:55.927670Z",
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "version": 1,
    "id": 3324671622,
    "name": "is_high_value_customer"
  }
---
Reads Attribute Metadata for a given DCP Datasource
