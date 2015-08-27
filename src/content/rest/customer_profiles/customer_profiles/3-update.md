---
template: sidebyside
endpoint:  /customer_profile/:dcpServiceId/:datasourceId/:customerId
endpoint_prefix: customer_profile/
endpoint_option: 1234
endpoint_suffix: /audiences/
type: PUT
title: Update customer profile
anchor: update-customer-profile
request:
  data:
    avg_session_length: 10
    most_viewed_page: 'www.optimizely.com'
response: |
  {
    'data': {
      'avg_session_length': 10,
      'most_viewed_page': 'www.optimizely.com'
    }
  }
---

Updates attributes for customer profiles, given dcpServiceId, datasourceId and customerId
