---
template: sidebyside
endpoint: audiences/567/
endpoint_prefix: audiences/
endpoint_option: 567
type: GET
title: Read an audience
anchor: read-audience
fields:
  id: The unique identifier for the audience
  project_id: The project the audience was created in
  name: The name of the audience
  description: A short description
  conditions: A string defining the targeting rules for an audience. See the sections on [audience conditions](/rest/conditions) for more information.
  segmentation: True if the audiences is available for [segmentation](https://help.optimizely.com/hc/en-us/articles/200039935#segmenting) on the results page (Platinum only).
  archived: True if the audience has been archived
response: |
  {
      "description": "People from Canada",
      "project_id": 1234,
      "id": 567,
      "name": "Canadians",
      "created": "2014-05-24T00:13:52.784580Z",
      "conditions": '["and", {"type":"browser", "value":"gc"}, {"type":"query", "name":"utm_campaign", "value":"true"}]',
      "last_modified": "2014-06-10T22:12:21.707170Z",
      "segmentation": false,
      "archived": false
  }
---

Get metadata for a single audience.
