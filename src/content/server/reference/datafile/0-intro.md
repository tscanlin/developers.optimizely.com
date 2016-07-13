---
template: multi-example
title: Datafile
anchor: datafile
code_examples:
  python:
    lang: python
    request: |
      {
        projectId: "5810298591",
        accountId: "4910295812",
        revision: "10",
        experiments: [
          {
            status: "Not started",
            audienceIds: [],
            percentage: 9500,
            variations: [
              {
                id: "9501848592",
                key: "variation_a",
                endOfRange: 5000
              }
              {
                id: "1849205928",
                key: "variation_b",
                endOfRange: 10000
              }
            ],
            id: "5928401928",
            key: "my_experiment"
          },
        ],
        events: [
          {
            id: "8182957192",
            key: "booking_complete"
          },
        ],
        dimensions: [
          {
            id: "5910296728",
            segmentId: "9581738457"
            key: "device"
          },
          {
            id: "5910296728",
            segmentId: "7581658482"
            key: "ad_source"
          }
        ],
      }
  java:
    lang: java
    request: |
      {
        projectId: "5810298591",
        accountId: "4910295812",
        revision: "10",
        experiments: [
          {
            status: "Not started",
            audienceIds: [],
            percentage: 9500,
            variations: [
              {
                id: "9501848592",
                key: "variation_a",
                endOfRange: 5000
              }
              {
                id: "1849205928",
                key: "variation_b",
                endOfRange: 10000
              }
            ],
            id: "5928401928",
            key: "my_experiment"
          },
        ],
        events: [
          {
            id: "8182957192",
            key: "booking_complete"
          },
        ],
        dimensions: [
          {
            id: "5910296728",
            segmentId: "9581738457"
            key: "device"
          },
          {
            id: "5910296728",
            segmentId: "7581658482"
            key: "ad_source"
          }
        ],
      }
  ruby:
    lang: ruby
    request: |
      {
        projectId: "5810298591",
        accountId: "4910295812",
        revision: "10",
        experiments: [
          {
            status: "Not started",
            audienceIds: [],
            percentage: 9500,
            variations: [
              {
                id: "9501848592",
                key: "variation_a",
                endOfRange: 5000
              }
              {
                id: "1849205928",
                key: "variation_b",
                endOfRange: 10000
              }
            ],
            id: "5928401928",
            key: "my_experiment"
          },
        ],
        events: [
          {
            id: "8182957192",
            key: "booking_complete"
          },
        ],
        dimensions: [
          {
            id: "5910296728",
            segmentId: "9581738457"
            key: "device"
          },
          {
            id: "5910296728",
            segmentId: "7581658482"
            key: "ad_source"
          }
        ],
      }
  javascript:
    lang: javascript
    request: |
      {
        projectId: "5810298591",
        accountId: "4910295812",
        revision: "10",
        experiments: [
          {
            status: "Not started",
            audienceIds: [],
            percentage: 9500,
            variations: [
              {
                id: "9501848592",
                key: "variation_a",
                endOfRange: 5000
              }
              {
                id: "1849205928",
                key: "variation_b",
                endOfRange: 10000
              }
            ],
            id: "5928401928",
            key: "my_experiment"
          },
        ],
        events: [
          {
            id: "8182957192",
            key: "booking_complete"
          },
        ],
        dimensions: [
          {
            id: "5910296728",
            segmentId: "9581738457"
            key: "device"
          },
          {
            id: "5910296728",
            segmentId: "7581658482"
            key: "ad_source"
          }
        ],
      }
---

The datafile compactly represents all of the "instructions" needed to activate experiments in your code and send conversion events back to Optimizely. The SDKs work by reading from a datafile in JSON format which represents the experiments you've set up for the project. For example, the datafile at right represents the project from the [Getting started](/server/getting-started) guide.

Unless you are building your own SDK, there shouldn't be any need to interact with the datafile directly.

<div class="attention attention--warning push--bottom">*Please note:* The format of the datafile is still not finalized and subject to change.</div>

You can fetch the datafile for your Optimizely project in two ways:

* *Use the Optimizely CDN.*  For example, if the ID of your project is `12345` you can access the file at https://cdn.optimizely.com/json/12345.json.
* *Use the Optimizely REST API.* For example, if the ID of your project is `12345` you can access the file at https://www.optimizelyapis.com/experiment/v1/projects/12345/json. Please note that as with other requests to the REST API, you will have to [authenticate with an API token](/rest/getting-started).

