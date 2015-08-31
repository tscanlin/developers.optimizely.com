---
template: sidebyside
endpoint: dcp_services/567
endpoint_prefix: dcp_services/
endpoint_option: 567
type: PUT
title: Update DCP Service
anchor: update-dcpservice
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
Update name of DCPService

#### Editable Fields  
- `name`
