---
template: sidebyside
endpoint: schedules/1234
endpoint_prefix: schedules/
endpoint_option: 1234
type: GET
title: Read a schedule
anchor: read-schedule
fields:
  status: Indicates whether this schedule is active for the experiment. Either `ACTIVE` or `INACTIVE`.
  start_time: Start time of the scheduled experiment in UTC, or `null`.
  stop_time: Stop time of the scheduled experiment in UTC, or `null`.
  experiment_id: ID of the scheduled experiment.
  id: ID of the schedule.
response: |
  {
    "status": "ACTIVE",
    "start_time": "2015-01-01T08:00:00Z",
    "stop_time": null,
    "experiment_id": 5678,
    "id": 1234
  }
---
Get data about a particular schedule, including the start time and stop time of the associated experiment.
