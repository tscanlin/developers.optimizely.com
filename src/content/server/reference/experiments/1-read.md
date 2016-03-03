---
template: sidebyside
endpoint: experiments/15/
endpoint_prefix: experiments/
endpoint_option: 15
type: GET
title: Read an experiment
anchor: read-experiment
code_examples:
  python:
    request: |
      from datetime import datetime
      now = datetime.now()
      mm = str(now.month)
      dd = str(now.day)
      yyyy = str(now.year)
      hour = str(now.hour)
      mi = str(now.minute)
      ss = str(now.second)
      print mm + "/" + dd + "/" + yyyy + " " + hour + ":" + mi + ":" + ss
    response: |
      {
        foo: "bar"
      }
  java:
    request: |
      String a = String.valueOf(2);   //integer to numeric string
      int i = Integer.parseInt(a); //numeric string to an int
    response: |
      {
        foo: "bar"
      }
---

Get metadata for a single experiment.
