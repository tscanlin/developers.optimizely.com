---
template: sidebyside
endpoint: /conslidatedCustomerProfileView/:dcpServiceId/:customerId
endpoint_prefix: customer_profile/
type: GET
title: Retrieve consolidated customer profile
anchor: consolidated-profile
response: |
  [
    {
      'datasourceId': 123,
      'data': {
        'avg_session_length': 10,
        'most_viewed_page': 'www.optimizely.com'
      }
    },
    {
      'datasourceId': 890,
      'data': {
        'mrr': 10000
      }
    }
  ]
---

Retrieves consolidated view (aliased via alias APIs across different datasourceIds) of customer_profile for given dcpServiceId and optimizely datasource customer_profile id.
