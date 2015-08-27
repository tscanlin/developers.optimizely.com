---
template: sidebyside
endpoint: dcp_services/567/dcp_datasources
endpoint_prefix: dcp_services/
endpoint_option: 567
type: GET
title: List DCP Datasources
anchor: read-dcpservice-datasources
fields:
  id: The unique identifier for the audience
  project_id: The project the audience was created in
  name: The name of the audience
  description: A short description
  conditions: A string defining the targeting rules for an audience. See the sections on [audience conditions](/rest/conditions) for more information.
  segmentation: True if the audiences is available for [segmentation](https://help.optimizely.com/hc/en-us/articles/200039935#segmenting) on the results page (Platinum only).
  archived: True if the audience has been archived
response: |
  [
    {
  	"aws_secret_key": "ailL18vK/o3fy5tc8SH8SeGCh2leiuX9fu5Q5y7f",
  	"archived": false,
  	"s3_path": "dcp/3383760141/3375340400",
  	"description": "Optimizely datasource",
  	"name": "Optimizely",
  	"created": "2015-08-20T23:23:26.426000Z",
  	"keyfield_locator_type": "uid",
  	"keyfield_locator_name": null,
  	"is_optimizely": true,
  	"last_modified": "2015-08-20T23:23:26.707620Z",
  	"attributes": [],
  	"aws_access_key": "AKIAJNBO3U7VXJTT6X7A",
  	"id": 3375340400,
  	"dcp_service_id": 3383760141
    }
  ]
---

Get metadata for a single audience.
