---
template: sidebyside
endpoint: dcp_services/567
endpoint_prefix: /dcp_services/
endpoint_option: 567
type: POST
title: Create DCP Service
anchor: create-dcpservice
request:
  name: "Datawarehouse"
response: |
  {
    "id": 567,
    "account_id": 555650815,
    "name": "My DCP Service",
    "last_modified": "2015-08-18T21:38:55.927670Z",
    "aws_access_key": "123423asfakedf12vh451234",
    "aws_secret_key": "1234fake12341asdfas234zc",
    "s3_path": "dcp/11111111",
  }
---

Creates a new DCP Service under customer's account.

<div class="lego-attention lego-attention--warning push--bottom">
*NOTE:* The service is not yet attached to any project use project. After creating a DCPService, be sure to associate a project to a DCP Service using [Update Project](/rest/reference/index.html#update-project)
</div>
