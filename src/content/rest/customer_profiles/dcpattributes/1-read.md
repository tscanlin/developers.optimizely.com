---
template: sidebyside
endpoint: dcp_datasource_attributes/789
endpoint_prefix: dcp_datasources/
endpoint_option: 789
type: GET
title: Read Attribute
anchor: read-dcpattribute
fields:
  archived: Boolean indicating if this attribute is archived
  created: Creation date of this attribute.
  datatype: Datatype of the attribute. Must be one of "string", "bool", "long", "double", "datetime"
  dcp_datasource_id: ID of datasource to which this attribute belongs
  description: Description of the attribute
  format: When datatype is date, format must be one of "yyyy-mm-dd", "yyyy-mm-ddThh:mm:ssZ", "epoch"
  last_modified: Last modified date of this attribute
  name: Name of the attribute. Used to identify an attribute across our REST APIs and bulk upload. Note that attribute
        name is case sensitive
  version: Version of the attribute. Currently attribute incremental versioning is not yet supported
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
Get metadata for the specified attribute.  The `attribute_id` is required in the URL.
