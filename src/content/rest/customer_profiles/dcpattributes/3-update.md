---
template: sidebyside
endpoint: dcp_datasource_attributes/789
endpoint_prefix: dcp_datasources/
endpoint_option: 567
type: PUT
title: Update Attribute
anchor: update-dcpattribute
request:
  name: 'is_high_value_customer'
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
    "name": "admin_account_id"
  }
---
Updates Attribute Metadata for a given Datasource

#### Editable fields
- `datatype`
- `description`
- `format`
