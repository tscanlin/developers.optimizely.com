---
template: _multi-example.html
endpoint: experiments/15/
endpoint_prefix: experiments/
endpoint_option: 15
type: GET
title: Read an experiment
anchor: read-experiment
code_examples:
  python:
    lang: python
    request: |
      from datetime import datetime
      now = datetime.now()
      mm = str(now.month)
      print mm + "/" + dd + "/" + yyyy + " " + hour + ":" + mi + ":" + ss
    response: |
      {
        "foo": "bar"
      }
  java:
    lang: java
    request: |
      String a = String.valueOf(2);   //integer to numeric string
      int i = Integer.parseInt(a); //numeric string to an int
    response: |
      {
        "foo": "bar"
      }
---

After you obtain an authorization code, you can exchange this authorization code for an access token by issuing an HTTPS POST request to Optimizely’s authorization server.

The code at right shows an example request and a successful response. The response will include an access token (with a lifetime of 2 hours) as well as a refresh token that can be used to request more access tokens after the initial access token expires.

After you obtain an authorization code, you can exchange this authorization code for an access token by issuing an HTTPS POST request to Optimizely’s authorization server.

After you obtain an authorization code, you can exchange this authorization code for an access token by issuing an HTTPS POST request to Optimizely’s authorization server.
