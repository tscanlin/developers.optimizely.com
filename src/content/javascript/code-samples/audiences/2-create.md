---
partial: _inline.html
title: Create an audience
endpoint: projects/43523/audiences/
anchor: audiences-create
type: POST
request:
  name: "Truck Shoppers"
  description: "(Imported from ______)"
response: |
  {
    "name": "Truck Shoppers",
    "description": "(Imported from ______)",
    "project_id": 43523,
    "id": 85094
  }
---
Let's say you've chosen project ID 43523. You can send a POST request to the `projects/43523/audiences` entry point to create an audience in that project.

The response will include a unique `id` for the audience you created. You'll use this ID to assign visitors to the audience.
