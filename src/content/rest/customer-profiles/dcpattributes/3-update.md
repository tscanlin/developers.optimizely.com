---
template: sidebyside
endpoint: dcp_datasource_attributes/789
endpoint_prefix: dcp_datasource_attributes/
endpoint_option: 789
type: PUT
title: Update Attribute
anchor: update-dcpattribute
request:
  name: 'is_high_value_customer'
  datatype: "long"
response: |
  {
    "archived": false,
    "created": "2015-08-18T21:38:55.927670Z",
    "datatype": "long",
    "dcp_datasource_id": 678,
    "description": null,
    "format": null,
    "id": 789,
    "is_value_public": false,
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "name": "is_high_value_customer"
  }
---
Update a single attribute.  The `attribute_id` is required in the URL.

#### Editable fields
- `description`

<div class="attention attention--warning push--bottom">
*NOTE:* Updates to an attribute's name or datatype are not currently supported. We recommend archiving the
existing attribute and creating a replacement, with the desired name, datatype, and format.
</div>
