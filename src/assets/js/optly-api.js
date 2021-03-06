/*eslint-disable */
var hljs = require('highlight.js');
/*eslint-enable */

// This replaces underscore templates (_.template)
function formatString(format) {
  var args = Array.prototype.slice.call(arguments, 1);
  return format.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] !== 'undefined'
      ? args[number]
      : match;
  });
}

var OptimizelyAPI = function(token) {
  this.outstandingRequests = 0;
  this.token = token;
};

OptimizelyAPI.prototype.call = function(type, endpoint, data, success_callback, complete_callback) {
  var self = this;

  var options = {
    url: 'https://www.optimizelyapis.com/experiment/v1/' + endpoint,
    type: type,
    headers: {'Token': this.token},
    contentType: 'application/json',
    success: function(response) {
      self.outstandingRequests -= 1;
      success_callback(response);
    },
    complete: function(jqXhr, textStatus) {
      complete_callback(jqXhr, textStatus);
    },
  };

  if (data) {
    options.data = JSON.stringify(data);
    options.dataType = 'json';
  }

  this.outstandingRequests += 1;
  $.ajax(options);
};

OptimizelyAPI.prototype.get = function(endpoint, success_callback, complete_callback) {
  this.call('GET', endpoint, '', success_callback, complete_callback);
};

OptimizelyAPI.prototype.delete = function(endpoint, success_callback, complete_callback) {
  this.call('DELETE', endpoint, '', success_callback, complete_callback);
};

OptimizelyAPI.prototype.post = function(endpoint, data, success_callback, complete_callback) {
  this.call('POST', endpoint, data, success_callback, complete_callback);
};

OptimizelyAPI.prototype.put = function(endpoint, data, success_callback, complete_callback) {
  this.call('PUT', endpoint, data, success_callback, complete_callback);
};

var curlGetTemplate = 'curl \\\n\
    -H "Token: {0}" \\\n\
    -X GET "https://www.optimizelyapis.com/experiment/v1/{1}"';

// var curlDataTemplate = _.template(
//   'curl \\\n\
//     -H "Token: <%- token %>" \\\n\
//     <%- headers %> \\\n\
//     <%- data %> \\\n\
//     -X <%- method %> "https://www.optimizelyapis.com/experiment/v1/<%- endpoint %>"'
// )

var showTokenError = function() {
  var tokenContainer = $('.token-link');
  tokenContainer.find('.collapsible').removeClass('is-collapsed');
  tokenContainer.find('.form-container').addClass('form-bad-news');
};

var hideTokenError = function() {
  var tokenContainer = $('.token-link');
  tokenContainer.find('.collapsible').addClass('is-collapsed');
  tokenContainer.find('.form-container').removeClass('form-bad-news');
};

$(document).ready(function() {
  var optimizelyApi;
  var $apiTokenInput = $('#api-token-input');
  var $apiTokenForm = $('#api-token-form');

  function tokenEntered(event) {
    event.preventDefault();
    var val = $apiTokenInput.val();
    optimizelyApi = new OptimizelyAPI(val);
    if (!optimizelyApi.token) {
      showTokenError();
    } else {
      hideTokenError();
    }
  }

  $apiTokenInput.on('blur', tokenEntered);
  $apiTokenForm.on('submit', tokenEntered);

  $('.sandbox_run').each(function() {
    $(this).on('click', function() {
      if (!optimizelyApi || !optimizelyApi.token) {
        showTokenError();
        return;
      }
      var id = this.id;
      var requestDiv = $('#' + id + '-request');
      var loaderDiv = $('#' + id + '-loader');
      var statusDiv = $('#' + id + '-status');
      var headerDiv = $('#' + id + '-headers');
      var responseDiv = $('#' + id + '-response');
      statusDiv.hide();
      headerDiv.hide();
      responseDiv.hide();
      var path = $('#' + id + '-endpoint-prefix').text() +
                 $('#' + id + '-endpoint-option').val() +
                 $('#' + id + '-endpoint-suffix').text();

      var highlightedResponse = hljs.highlightAuto(formatString(curlGetTemplate, optimizelyApi.token, path));
      requestDiv.find('code').html(hljs.fixMarkup(highlightedResponse).value);
      requestDiv.show();
      loaderDiv.removeClass('hidden');

      optimizelyApi.get(path,
        function(response) {
          loaderDiv.addClass('hidden');
          var responseString = JSON.stringify(response, undefined, 2);
          highlightedResponse = hljs.highlightAuto(responseString).value;
          highlightedResponse = hljs.fixMarkup(highlightedResponse);
          responseDiv.find('code').html(highlightedResponse);
          responseDiv.show();
        },
        function(jqXhr, textStatus) {
          loaderDiv.addClass('hidden');
          statusDiv.find('pre').html(jqXhr.status + ' ' + textStatus);
          headerDiv.find('pre').html(jqXhr.getAllResponseHeaders());
          statusDiv.show();
          headerDiv.show();
        });
    });
  });
});

module.exports = OptimizelyAPI;
