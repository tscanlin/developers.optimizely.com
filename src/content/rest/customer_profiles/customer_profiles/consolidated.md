---
template: sidebyside
endpoint: https://vis.optimizely.com/api/onsolidated_customer_profile_view/<dcp_service_id>/<optimizely_id>
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

Retrieves consolidated view (consolidated via alias APIs across different datasourceIds) of customer_profile for given dcp_service_id and Optimizely User ID.
