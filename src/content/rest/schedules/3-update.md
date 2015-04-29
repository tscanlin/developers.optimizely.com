---
template: sidebyside
endpoint: schedules/1234
endpoint_prefix: experiments/
endpoint_option: 1234
type: PUT
title: Update a schedule
anchor: update-schedule
request:
  stop_time: '2015-01-02T08:00:00Z'

response: |
  {
    "status": "ACTIVE",
    "start_time": "2015-01-01T08:00:00Z",
    "stop_time": "2015-01-02T08:00:00Z",
    "experiment_id": 5678,
    "id": 1234
  }
---
Update a schedule. You must specify either a `start_time` or `stop_time`, or both. All times are in UTC and must be specified in the format `2015-01-01T08:00:00Z`.
