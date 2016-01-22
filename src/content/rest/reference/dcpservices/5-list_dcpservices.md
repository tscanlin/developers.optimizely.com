---
template: sidebyside
endpoint: dcp_services
type: GET
title: List DCP Services
anchor: list-dcpservices
response: |
  [
    {
      "id": 567,
      "account_id": 123456,
      "archived": false,
      "aws_access_key": "123423asfakedf12vh451234",
      "aws_secret_key": "1234fake12341asdfas234zc",
      "created": "2015-08-01T11:50:37.864010Z",
      "last_modified": "2015-08-18T21:38:55.927670Z",
      "name": "My DCP Service",
      "s3_path": "dcp/567"
    }
  ]
---

Get all DCP services for this account.
