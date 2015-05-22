OptimizelyAPI = function(token) {
  this.outstandingRequests = 0;
  this.token = token;
}

OptimizelyAPI.prototype.call = function(type, endpoint, data, success_callback, complete_callback) {
  var self = this;

  var options = {
    url: "https://www.optimizelyapis.com/experiment/v1/" + endpoint,
    type: type,
    headers: {"Token": this.token},
    contentType: 'application/json',
    success: function(response) {
      self.outstandingRequests -= 1;
      success_callback(response);
    },
    complete: function(jqXhr, textStatus) {
      complete_callback(jqXhr, textStatus);
    }
  }

  if (data) {
    options.data = JSON.stringify(data);
    options.dataType = 'json';
  }

  this.outstandingRequests += 1;
  $.ajax(options);

}

OptimizelyAPI.prototype.get = function(endpoint, success_callback, complete_callback) {
  this.call('GET', endpoint, "", success_callback, complete_callback);
}

OptimizelyAPI.prototype.delete = function(endpoint, success_callback, complete_callback) {
  this.call('DELETE', endpoint, "", success_callback, complete_callback);
}

OptimizelyAPI.prototype.post = function(endpoint, data, success_callback, complete_callback) {
  this.call('POST', endpoint, data, success_callback, complete_callback);
}

OptimizelyAPI.prototype.put = function(endpoint, data, success_callback, complete_callback) {
  this.call('PUT', endpoint, data, success_callback, complete_callback);
}

var curlGetTemplate = _.template(
  'curl \\\n\
    -H "Token: <%- token %>" \\\n\
    -X GET "https://www.optimizelyapis.com/experiment/v1/<%- endpoint %>"'
)

var curlDataTemplate = _.template(
  'curl \\\n\
    -H "Token: <%- token %>" \\\n\
    <%- headers %> \\\n\
    <%- data %> \\\n\
    -X <%- method %> "https://www.optimizelyapis.com/experiment/v1/<%- endpoint %>"'
)

var showTokenError = function() {
  $('#apiTokenFormGroup').addClass('has-error');
  $('.api-token-error').show();
  $('#apiTokenField').show();
  $('#expandSign').removeClass('glyphicon-plus-sign');
  $('#expandSign').addClass('glyphicon-minus-sign');
};

$(document).ready(function() {
  var clip = new ZeroClipboard($('.copy-btn'), {
      moviePath: '/images/zeroclipboard.swf',
      forceHandCursor: true,
  });

  $('#sandbox_token').on('blur', function() {
    optly = new OptimizelyAPI($(this).val());
    if (!optly.token) {
      showTokenError();
    }
    else {
      $('#apiTokenFormGroup').removeClass('has-error');
      $('.api-token-error').hide();
    }
  });

  $('.sandbox_run').each(function(){
    $(this).on('click', function(){
      if (!optly.token) {
        showTokenError();
        return;
      }
      var id = this.id;
      var requestDiv = $('#' + id + '-request'),
          statusDiv = $('#' + id + '-status'),
          headerDiv = $('#' + id + '-headers'),
          responseDiv = $('#' + id + '-response'),
          copyBtnDiv = $('#' + id + '-copy-btn');
      statusDiv.hide();
      headerDiv.hide();
      responseDiv.hide();
      var path = $('#' + id + '-endpoint-prefix').text() +
                 $('#' + id + '-endpoint-option').val() +
                 $('#' + id + '-endpoint-suffix').text();

      var highlightedResponse = hljs.highlightAuto(curlGetTemplate({token: optly.token, endpoint: path})).value;
      requestDiv.find('code').html(hljs.fixMarkup(highlightedResponse));
      requestDiv.show();

      optly.get(path,
                function(response) {
                  var responseString = JSON.stringify(response, undefined, 2);
                  var highlightedResponse = hljs.highlightAuto(responseString).value;
                  highlightedResponse = hljs.fixMarkup(highlightedResponse);
                  responseDiv.find('code').html(highlightedResponse);
                  responseDiv.show();
                },
                function(jqXhr, textStatus) {
                  statusDiv.find('pre').html(jqXhr.status + ' ' + textStatus);
                  headerDiv.find('pre').html(jqXhr.getAllResponseHeaders());
                  statusDiv.show();
                  headerDiv.show();
                });
    });
  });
});

module.exports = OptimizelyAPI;
