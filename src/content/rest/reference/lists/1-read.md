---
template: sidebyside
endpoint: targeting_lists/123/
endpoint_prefix: targeting_lists/
endpoint_option: 123
type: GET
title: Read a user list
anchor: read-list
fields:
  name: A unique, human-readable name for the user list
  description: A brief description of the user list
  list_type: The type of user list (`1` = cookies, `2` = query parameters, `3` = zip codes)
  key_fields: A comma-separated list of cookies (if <b>list&#95;type</b> is `1`) or query parameters (if <b>list&#95;type</b> is `2`) to target on
  id: The unique identifier for the user list
  project_id: The unique identifier for the parent Optimizely project
  account_id: The unique identifier for the parent Optimizely account
  format: Format of the user list (should always be `csv`)
response: |
  {
      "name": "List_1", 
      "description": "Description of List_1",
      "list_type": 2, 
      "key_fields": "user_id",
      "id": 123, 
      "project_id": 456,
      "account_id": 789,
      "format": "csv"
  }
---

Get metadata for a single user list.
