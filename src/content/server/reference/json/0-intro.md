---
template: multi-example
title: Project JSON
anchor: json
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
            variations: [
              {
                id: "9501848592",
                key: "ALGORITHM_A",
                endOfRange: 4999
              }
              {
                id: "1849205928",
                key: "ALGORITHM_B",
                endOfRange: 9999
              }
            ],
            id: "5928401928",
            key: "SEARCH_RANKING_TEST_24"
          },
        ],
        events: [
          {
            id: "8182957192",
            key: "BOOKING_COMPLETE"
          },
        ],
        dimensions: [
          {
            id: "5910296728",
            segmentId: "9581738457"
            key: "DEVICE"
          },
          {
            id: "5910296728",
            segmentId: "7581658482"
            key: "AD_SOURCE"
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
            variations: [
              {
                id: "9501848592",
                key: "ALGORITHM_A",
                endOfRange: 4999
              }
              {
                id: "1849205928",
                key: "ALGORITHM_B",
                endOfRange: 9999
              }
            ],
            id: "5928401928",
            key: "SEARCH_RANKING_TEST_24"
          },
        ],
        events: [
          {
            id: "8182957192",
            key: "BOOKING_COMPLETE"
          },
        ],
        dimensions: [
          {
            id: "5910296728",
            segmentId: "9581738457"
            key: "DEVICE"
          },
          {
            id: "5910296728",
            segmentId: "7581658482"
            key: "AD_SOURCE"
          }
        ],
      }
 
---

All of Optimizely's Server-Side SDKs work by reading from a JSON configuration file that represents the experiments you've set up for the project. For example, the JSON at right represents the project from the [Getting started](/server/getting-started) guide.

<div class="attention attention--warning push--bottom">*Please note:* The format of this JSON configuration is still under development and subject to change.</div>

This JSON file contains all of the "instructions" needed to activate experiments in your code and send conversion events back to Optimizely.

You can fetch the JSON file in two ways:

* *Use the Optimizely CDN.*  For example, if the ID of your project is `12345` you can access the file at http://cdn.optimizely.com/json/12345.json.
* *Use the Optimizely REST API.* (Details TBD)
