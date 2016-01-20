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
      "id": 789,
      "archived": false,
      "attributes": [],
      "aws_access_key": "AKfakekeyV8SH8XTJBUPO",
      "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
      "created": "2015-08-26T09:50:38.886990Z",
      "description": "Optimizely datasource",
      "dcp_service_id": 567,
      "is_optimizely": true,
      "keyfield_locator_name": null,
      "keyfield_locator_type": "uid",
      "last_modified": "2015-08-26T09:50:39.202950Z",
      "name": "Optimizely",
      "s3_path": "dcp/567/789"
    },
    {
      "id": 678,
      "archived": false,
      "attributes": [{
        "archived": false,
        "datatype": "long",
        "description": "Predicted LTV, per growth team",
        "format": null,
        "id": 111,
        "name": "Long-term value"
      }, {
        "archived": false,
        "datatype": "long",
        "description": "Alexa rank",
        "format": null,
        "id": 222,
        "name": "alexa_rank"
      }],
      "aws_access_key": "AKfakekeyV8SH8XTJBUPO",
      "aws_secret_key": "ailb234vK/fakekeyc8SH8SeGCh2leiuX",
      "created": "2015-08-20T23:26:08.414110Z",
      "dcp_service_id": 567,
      "description": "First party data from my Data Warehouse",
      "is_optimizely": false,
      "keyfield_locator_name": "_my_hashedEmailcookie",
      "keyfield_locator_type": "cookie",
      "last_modified": "2015-08-20T23:26:08.414140Z",
      "name": "My Awesome Data Warehouse",
      "s3_path": "dcp/567/678"
    }
  ]
---

Get a list of all datasources in the specified DCPService.  The `dcp_service_id` is required in the URL.
