---
partial: _inline.html
title: Calling the API
anchor: calling-the-api
js: |
  OptimizelyAPI.prototype.call = function(type, endpoint, data, callback) {

    var self = this;

    var options = {
      url: "https://www.optimizelyapis.com/experiment/v1/" + endpoint,
      type: type,
      headers: {"Token": this.token},
      contentType: 'application/json',
      success: function(response) {
        self.outstandingRequests -= 1;
        callback(response);
      }
    }

    if (data) {
      options.data = JSON.stringify(data);
      options.dataType = 'json';
    }

    this.outstandingRequests += 1;
    $.ajax(options);

  }
---

To call the API, we use jQuery's `$.ajax` function, which sends an asynchronous request based on a set of `options`.

Our function takes four arguments:

* The request `type`, like GET or POST

* The `endpoint` to hit, like `projects/27`

* The `data` to send along with a POST or PUT request

* A `callback` function to run when the operation is done. The callback should take one argument, the `response`.

We construct the URL by appending the endpoint to the base API link, and we authenticate by adding the token in the headers section.

To send data, we set content type to JSON and encode the array as a JSON string to send over the wire.
