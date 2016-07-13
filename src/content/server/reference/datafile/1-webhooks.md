---
template: multi-example
title: Webhooks
anchor: datafile
code_examples:
  python:
    lang: python
    request: |
      {  
        "project_id":1234,
        "timestamp":1468447113,
        "event":"project.datafile_updated",
        "data":{
          "revision":1,
          "origin_url":"https://optimizely.s3.amazonaws.com/json/1234.json",
          "cdn_url":"https://cdn.optimizely.com/json/1234.json"
        }
      }
  java:
    lang: java
    request: |
      {  
        "project_id":1234,
        "timestamp":1468447113,
        "event":"project.datafile_updated",
        "data":{
          "revision":1,
          "origin_url":"https://optimizely.s3.amazonaws.com/json/1234.json",
          "cdn_url":"https://cdn.optimizely.com/json/1234.json"
        }
      }
  ruby:
    lang: ruby
    request: |
      {  
        "project_id":1234,
        "timestamp":1468447113,
        "event":"project.datafile_updated",
        "data":{
          "revision":1,
          "origin_url":"https://optimizely.s3.amazonaws.com/json/1234.json",
          "cdn_url":"https://cdn.optimizely.com/json/1234.json"
        }
      }
  javascript:
    lang: javascript
    request: |
      {  
        "project_id":1234,
        "timestamp":1468447113,
        "event":"project.datafile_updated",
        "data":{
          "revision":1,
          "origin_url":"https://optimizely.s3.amazonaws.com/json/1234.json",
          "cdn_url":"https://cdn.optimizely.com/json/1234.json"
        }
      }
---

We recommend configuring webhooks to maintain the most up-to-date version of the datafile for a project. Your supplied endpoint will be sent a POST request whenever the respective project is modified. Anytime the datafile is updated, you must re-instantiate the Optimizely object for the changes to take affect. 

You can setup a webhook by navigating to Settings > Webhooks and add the URL the webhook service should ping.

The webhook payload structure is defined on the right. For now, we have one event type: `project.datafile_updated` 
