---
template: sidebyside
endpoint: projects/1234/audiences/
endpoint_prefix: projects/
endpoint_option: 1234
endpoint_suffix: /audiences/
type: POST
title: Create an audience
anchor: create-audience
request:
  name: "Chinese food buyers"
response: |
  {
      "description": "",
      "project_id": 1234,
      "id": 568,
      "name": "Chinese food buyers",
      "created": "2014-05-24T00:13:52.784580Z",
      "conditions": "[]",
      "last_modified": "2014-06-10T22:12:21.707170Z",
      "segmentation": false,
      "archived": false
  }
---

The only required field in the request is `name`, and you can optionally add a `description`. The `project_id` is also required in the URL.

By default, the `conditions` field will just be an empty list `[]`. In this case, the audience won't match anyone automatically. Instead, you can add visitors to it by `id` using the `addToAudience` function in our [Javascript API]({{site.paths.js}}#audiences). See our [audiences API sample]({{site.paths.samples}}#dmp) for more information.

Platinum customers can also set the `segmentation` field. The default value is false, but you can set it to true to track the audience's behavior on the results page. See the section below on [updating audiences](#update-audience) for more information.
