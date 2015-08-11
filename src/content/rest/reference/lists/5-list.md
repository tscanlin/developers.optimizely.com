---
template: sidebyside
endpoint: projects/456/targeting_lists/
endpoint_prefix: projects/
endpoint_option: 456
endpoint_suffix: /targeting_lists/
type: GET
title: List uploaded audiences in a project
anchor: list-uploaded-audiences
response: |
  [
    {
        "name": "List_1",
        "description": "Description of List_1",
        "list_type": 2,
        "key_fields": "user_id",
        "id": 123,
        "project_id": 456,
        "account_id": 789,
        "format": "csv"
    },
    {
        "name": "List_2",
        "description": "Description of List_2",
        "list_type": 2,
        "key_fields": "user_id",
        "id": 124,
        "project_id": 456,
        "account_id": 789,
        "format": "csv"
    }
  ]
---

Show all of the uploaded audiences that have been uploaded to a project.
