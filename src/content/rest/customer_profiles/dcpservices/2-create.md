---
template: sidebyside
endpoint: dcp_services/567
endpoint_prefix: /dcp_services/
endpoint_option: 1234
type: POST
title: Create DCP Service
anchor: create-dcpservice
request:
  name: "Datawarehouse"
response: |
  {
    "id": 567,
    "account_id": 1111111,
    "name": "Datawarehouse",
    "last_modified": "2015-08-18T21:38:55.927670Z",
    "aws_access_key": "123423asfakedf12vh451234",
    "aws_secret_key": "1234fake12341asdfas234zc",
    "s3_path": "dcp/11111111",
  }
---

Creates a new DCP Service under customer's account. The service is not yet attached to any project; use project API calls below to do that.
NOTE: Be sure to update projects with DCP Service field after DCP Service creation using [Update Project](/rest/reference/index.html#update-project)
