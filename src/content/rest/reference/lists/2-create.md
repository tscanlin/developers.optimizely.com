---
template: sidebyside
endpoint: projects/456/targeting_lists/
endpoint_prefix: projects/
endpoint_option: 456
endpoint_suffix: /targeting_lists
type: POST
title: Create an uploaded list
anchor: create-list
request:
  name: "List_1"
  description: "Description of List 1"
  list_type: 2
  key_fields: "user_id"
  list_content: "uid1,uid2,uid3,uid4"
  format: "csv"
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

Create an uploaded list with the given name and comma-separated set of values.

`name` must be unique across all lists defined in the current project, and can only contain characters, numbers, hyphens, and underscores.

`list_type` must take one of the following values:

- `1` Cookie
- `2` Query string
- `3` Zip code

`list_content` should contain the content of the list in comma-separated format and `format` must be set to `csv`.

Currently we limit list size to 5 MB and row length to 100 characters.  If you would like to upload a list larger than 5 MB, we recommended that you split it into several lists and then use ["OR" conditions](https://help.optimizely.com/hc/en-us/articles/200039685#adding_conditions) to target users who are in any of those lists.

All fields are required with the exception of `description`.
