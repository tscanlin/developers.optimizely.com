---
template: sidebyside
endpoint: dcp_datasources/1234/dcp_datasource_attributes
endpoint_prefix: dcp_datasources/
endpoint_option: 1234
type: POST
title: Create DCP Attribute
anchor: create-dcpattribute
request:
  name: "is_high_value_customer"
  datatype: "long"
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
    "name": "admin_account_id"
  }
---
Creates DCP Attribute Metadata for a given DCP Datasource
