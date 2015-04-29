---
template: sidebyside
type: GET
endpoint: projects/
title: Connect a project
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

First, you'll need to [authenticate](/rest/#authentication) with our REST API. This will let you create audiences in the right account.

You'll also need to choose a project to create the audiences in. If you're building an integration, you could ask for a `project_id` directly from the user.

Alternatively, you can [list out all the projects](/rest/#list-projects) in a user's account and have them pick from a dropdown, as the example at right shows.
