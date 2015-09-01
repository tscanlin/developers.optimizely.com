---
template: sidebyside
endpoint: dcp_services/567/dcp_datasources
endpoint_prefix: dcp_services/
endpoint_option: 567
type: GET
title: List Datasources
anchor: list-dcpservice-datasources
response: |
  [
    {
  	"aws_secret_key": "ailL18vK/o3fy5tc8SH8SeGCh2leiuX9fu5Q5y7f",
  	"archived": false,
  	"s3_path": "dcp/567/678",
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
  	"dcp_service_id": 567
    }
  ]
---

Get all datasources for given DCPService
