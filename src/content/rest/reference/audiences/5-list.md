---
template: sidebyside
endpoint: projects/758824777/audiences/
endpoint_prefix: projects/
endpoint_option: 758824777
endpoint_suffix: /audiences/
type: GET
title: List audiences in project
anchor: list-audiences
response: |
  [
    {
        "description": "People from Canada",
        "project_id": 758824777,
        "conditions": "[\"and\", {\"type\": \"location\", \"value\": \"CA\"}]",
        "id": 1338260223,
        "name": "Canadians",
        "created": "2014-05-24T00:13:52.784580Z",
        "last_modified": "2014-06-10T22:12:21.707170Z",
        "segmentation": false,
        "archived": true
    },
    {
        "description": "People from Mexico",
        "project_id": 758824777,
        "conditions": "[\"and\", {\"type\": \"location\", \"value\": \"MX\"}]",
        "id": 1339160093,
        "name": "Mexicans",
        "created": "2014-03-28T22:12:21.707170Z",
        "last_modified": "2014-04-12T19:10:53.806650ZZ",
        "segmentation": true,
        "archived": false
    }
  ]
---

Get a list of all the audiences in a project. The `project_id` in the URL is required.
