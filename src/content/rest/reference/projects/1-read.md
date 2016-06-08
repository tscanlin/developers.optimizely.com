---
template: sidebyside
endpoint: projects/1234/
endpoint_prefix: projects/
endpoint_option: 1234
type: GET
title: Read a project
anchor: read-project
fields:
  project_name: The name of the project in Optimizely
  project_status: Can be `Active` or `Archived`
  account_id: The account the project is associated with
  include_jquery: Either `true` or `false`. If set to `true`, the recommended version (1.11.3) will be used.
  library: The prefered jQuery library you would like to use with your snippet. We support the following `jquery-1.6.4-full`, `jquery-1.6.4-trim`, `jquery-1.11.3-full`, and `jquery-1.11.3-trim`. If you do not want to include jQuery, set this field to `none` and `include_jquery` to `false`.
  project_javascript: The JavaScript code which runs before Optimizely on all pages, **regardless** of whether or not there is a running experiment.
  enable_force_variation: Set to `true` to enable the [force variation parameter](https://help.optimizely.com/hc/en-us/articles/202480860#force_variations)
  exclude_disabled_experiments: Set to `true` to [remove paused and draft experiments](https://help.optimizely.com/hc/en-us/articles/202480860#draft_pause) from the snippet
  exclude_names: Set to `true` to [mask descriptive names](https://help.optimizely.com/hc/en-us/articles/202480860#masking_descriptive_names)
  ip_filtering: The same string that you'll find in Optimizely under Project Settings > IP Filtering, or `null` if it's not set.
  socket_token: The token used to identify your mobile app to Optimizely
  dcp_service_id: The ID of the [Dynamic Customer Profile Service](/rest/reference#dcp_services) associated with this project.
response: |
  {
    "id": 859720118,
    "account_id": 555650815,
    "code_revision": 12,
    "project_name": "My even newer project name",
    "project_status": "Active",
    "created": "2014-04-16T21:33:34.408430Z",
    "last_modified": "2014-06-10T22:12:21.707170Z",
    "library": "jquery-1.6.4-trim",
    "include_jquery": false,
    "js_file_size": 23693,
    "project_javascript": "someFunction = function () {\n //Do cool reusable stuff \n}"
    "enable_force_variation": false,
    "exclude_disabled_experiments": false,
    "exclude_names": null,
    "ip_anonymization": false,
    "ip_filter": "1.2.3.4",
    "socket_token": "AABBCCDD~123456789",
    "dcp_service_id": 121234
  }
---
Get metadata for a single project.
