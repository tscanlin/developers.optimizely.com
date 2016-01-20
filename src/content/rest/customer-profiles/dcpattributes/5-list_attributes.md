---
template: sidebyside
endpoint: dcp_datasources/678/dcp_datasource_attributes
endpoint_prefix: dcp_datasources/
endpoint_option: 678
type: GET
title: List Attributes
anchor: list-dcpattribute
response: |
  [
    {
      "archived": false,
      "datatype": "long",
      "dcp_datasource_id": 678,
      "description": "Predicted LTV, per growth team",
      "format": null,
      "id": 789,
      "is_value_public": false,
      "name": "Life-time value"
    },
    {
      "archived": false,
      "datatype": "string",
      "dcp_datasource_id": 678,
      "description": null,
      "format": null,
      "id": 790,
      "is_value_public": true,
      "name": "most_viewed_category"
    }
  ]
---
Get a list of all attributes in the specified datasource.  The `datasource_id` is required in the URL.
