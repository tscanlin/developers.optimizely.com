---
template: sidebyside
endpoint: dcp_datasource_attributes/789
endpoint_prefix: dcp_datasources/
endpoint_option: 789
type: GET
title: Read Attribute
anchor: read-dcpattribute
fields:
  dcp_datasource_id: ID of parent datasource
  archived: Boolean flag whether an Attribute has been archived
  description: Description of the attribute
  format: When datatype is date, format can be "yyyy-mm-dd", "yyyy-mm-ddThh:mm:ssZ", "epoch"
  datatype: Datatype of the Attribute. Can be "string", "bool", "long", "double", "datetime"
  version: Version of the attribute, currently attribute incremental versioning is not supported
  name: Name of the Attribute, use this name to upload customer_profile data using REST API or bulk upload. Note that attribute name is case sensitive
response: |
  {
    "dcp_datasource_id": 678,
    "archived": false,
    "description": "Long term value",
    "format": null,
    "datatype": "long",
    "created": "2015-08-18T21:38:55.927670Z",
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "version": 1,
    "id": 789,
    "name": "LTV"
  }
---
Get metadata for a single attribute.
