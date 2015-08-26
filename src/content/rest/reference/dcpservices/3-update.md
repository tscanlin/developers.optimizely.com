---
template: sidebyside
endpoint: /dcp_services/567
endpoint_prefix: /dcp_services/
endpoint_option: 1234
type: PUT
title: Update DCPService
anchor: update-dcpservice
request:
  name: 'Datawarehouse'
response: |
  {
    ‘id’: 567,
    ‘account_id’: 1111111,
    ‘name’: "My new DCPService name",
    'last_modified': '..',
    ‘aws_access_key’: '<S3 bucket provisioned for service>',
    ‘aws_secret_key’: '<Access key to bucket>',
    's3_path': '..',
  }
---

Creates a new DCP Service under customer’s account. The service is not yet attached to any project; use project API calls below to do that.
