---
template: sidebyside
endpoint: dimensions/1234
endpoint_prefix: dimensions/
endpoint_option: 1234
type: PUT
title: Update a dimension
anchor: update-dimension
request:
  "description": "A new description of my dimension"
response: |
  {
    "name": "My Dimension",
    "last_modified": "2015-01-01T00:00:00.000000Z",
    "client_api_name": "my_dimension_api_name",
    "project_id": 5678,
    "id": 1234,
    "description": "A new description of my dimension"
  }
---
Update the `name`, `client_api_name`, or `description` of an existing dimension.
