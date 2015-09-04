---
template: sidebyside
endpoint: /dcp_datasources/678/dcp_datasource_attributes
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
      "description": null,
      "format": null,
      "id": 789,
      "name": "LTV"
      "version": 1
    },
    {
      "archived": false,
      "datatype": "string",
      "dcp_datasource_id": 678,
      "description": null,
      "format": null,
      "id": 790,
      "name": "most_viewed_category"
      "version": 1
    }
  ]
---
Gets all attributes for the specified datasource.
The response to [GET datasource](/rest/customer_profiles/index.html#read-dcpdatasource) also includes all attributes of
that datasource.
