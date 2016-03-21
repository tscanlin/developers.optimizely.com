---
partial: _inline.html
title: Initialization
anchor: initialization
js: |
  OptimizelyAPI = function(token) {
    this.outstandingRequests = 0;
    this.token = token;
  }

  optly = new OptimizelyAPI("abcdefghijklmnop:12345");
---

The `OptimizelyAPI` class provides a connection to the API via JavaScript and lets you make authenticated calls without repeating yourself.

We store the API `token` in each instance of the object, and we can connect to multiple different accounts by creating new instances of the `OptimizelyAPI` class.

Finally, we keep track of how many requests are outstanding so we can tell when all the calls are complete.
