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
      "description": null,
      "format": null,
      "datatype": "long",
      "version": 1,
      "id": 789,
      "name": "LTV"
    },
    {
      "archived": false,
      "description": null,
      "format": null,
      "datatype": "string",
      "version": 1,
      "id": 790,
      "name": "most_viewed_category"
    }
  ]
---
Fetches all attributes for a given Datasource. [GET Datasource](/rest/customer_profiles/index.html#read-dcpdatasource) also returns all attributes for a given datasource.
