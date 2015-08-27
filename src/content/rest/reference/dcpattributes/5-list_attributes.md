---
template: sidebyside
endpoint: /dcp_datasources/1234/dcp_datasource_attributes
endpoint_prefix: dcp_datasources/
endpoint_option: 1234
type: GET
title: List all Attributes
anchor: list-dcpattribute
request:
  name: "is_high_value_customer"
  datatype: "long"
fields:
  format: When datatype is date, format is date format
response: |
  [
  	{
    	"archived": false,
    	"description": null,
    	"format": null,
    	"datatype": "long",
    	"version": 1,
    	"id": 3324671622,
    	"name": "admin_account_id"
  	},
  	{
    	"archived": false,
    	"description": null,
    	"format": null,
    	"datatype": "long",
    	"version": 1,
    	"id": 3326101711,
    	"name": "alexa_rank"
  	}
  ]
---
Fetches all Attributes and Metadata for a given DCPDatasource
