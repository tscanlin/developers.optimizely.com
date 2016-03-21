---
partial: _inline.html
type: GET
endpoint: projects/
title: Connect a project
anchor: results-connect
response: |
  [
    {
      "project_id": 1234,
      "project_name": "My project"
    },
    {
      "project_id": 1235,
      "project_name": "My other project"
    }
  ]
---

First, you'll need to [authenticate](/rest/reference/index.html#authentication) with our REST API and choose which project to retrieve results for.  You can [list out all the projects](/rest/reference/index.html#list-projects) in a user's account using the example request here.
