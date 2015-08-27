---
template: sidebyside
endpoint: customer_profile/:dcpServiceId/:datasourceId/:customerId
endpoint_prefix: customer_profile/
type: GET
title: Read customer profile
anchor: read-customer_profile
response: |
  {
    'data': {
      'avg_session_length': 10,
      'most_viewed_page': 'www.optimizely.com'
    }
  }
---

Retrieves customer profile attributes for given dcpServiceId, datasourceId and customerId.
