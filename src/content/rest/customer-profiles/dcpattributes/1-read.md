---
template: sidebyside
endpoint: dcp_datasource_attributes/789
endpoint_prefix: dcp_datasources/
endpoint_option: 789
type: GET
title: Read Attribute
anchor: read-dcpattribute
fields:
  archived: Whether the attribute is archived.
  created: Creation date of the attribute.
  datatype: Datatype of the attribute. Must be one of `"string"`, `"bool"`, `"long"`, `"double"`, `"datetime"`.
  dcp_datasource_id: ID of the [datasource](/rest/customer-profiles/#dcp_datasources) to which the attribute belongs.
  description: Description of the attribute.
  format: When datatype is date, must be one of `"yyyy-mm-dd"`, `"yyyy-mm-ddThh:mm:ssZ"`, `"epoch"`.
  is_value_public: Whether the attribute can be used to deliver [content](https://help.optimizely.com/hc/en-us/articles/216307487#content_attributes).
  last_modified: Last modified date of the attribute
  name: Name of the attribute. Used to identify an attribute across our REST APIs and bulk upload. Note that this
        name is case-sensitive.
response: |
  {
    "archived": false,
    "created": "2015-08-18T21:38:55.927670Z",
    "datatype": "long",
    "dcp_datasource_id": 678,
    "description": "Predicted LTV, per growth team",
    "format": null,
    "id": 789,
    "is_value_public": false,
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "name": "Life-time value"
  }
---
Get metadata for the specified attribute.  The `attribute_id` is required in the URL.
