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
    "description": "Predicted LTV, per growth team",
    "format": null,
    "id": 789,
    "is_value_public": false,
    "last_modified": "2015-08-18T21:38:55.927680Z",
    "name": "Long-term value"
  }
---
Create a single attribute for customer profiles in a datasource.  The `datasource_id` is required in the URL.

#### Datatype options
- `"string"`
- `"bool"`
- `"long"`
- `"double"`
- `"datetime"`: Needs format to be a Datetime format

#### Datetime format options
- `"yyyy-mm-dd"`: ISO_8601 UTC date format
- `"yyyy-mm-ddThh:mm:ssZ"`: ISO_8601 datetime format
- `"epoch"`: Epoch time in milliseconds
