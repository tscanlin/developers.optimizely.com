/**
 * Manage state on the dev docs using localStorage.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

module.exports = function(options) {
  var UNIQUE_KEY = options.uniqueKey;
  var PREFIX = UNIQUE_KEY + '.';
  var ls = window.localStorage;
  var SUPPORTED = !!ls;
  var state = {
    lang: 'python'
  };

  // Declare localstorage function wrappers.
  var fns = {};
  if (SUPPORTED) {
    fns.getItem = function(key) {
      var val = ls.getItem(PREFIX + key);
      state[key] = val;
      window[UNIQUE_KEY] = state;
      return val;
    }

    fns.setItem = function(key, val) {
      ls.setItem(PREFIX + key, val);
      state[key] = val;
      window[UNIQUE_KEY] = state;
      return state;
    }

    fns.removeItem = function(key) {
      ls.removeItem(PREFIX + key);
      delete state[key];
      window[UNIQUE_KEY] = state;
      return state;
    }

    fns.clear = function() {
      ls.clear();
      state = {};
      window[UNIQUE_KEY] = state;
      return state;
    }
  }

  // Convert query params to an object.
  var queryParams = window.location.search;
  if (queryParams) {
    queryParams = queryStringToObject(queryParams);
    function queryStringToObject(paramString) {
      var obj = {};
      paramString = paramString.split('');
      paramString.shift(); // Remove first question mark.
      paramString = paramString.join('');
      kvArray = paramString.split('&');
      kvArray.forEach(function(kv) {
        var splitKv = kv.split('=');
        if (splitKv.length === 2) {
          obj[splitKv[0]] = splitKv[1];
        }
      });
      return obj;
    }
  } else {
    queryParams = {};
  }

  // If localStorage exists.
  if (SUPPORTED) {
    // Then update it with values from query params.
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        // If it has the unique key prefix then add to localStorage
        // and the state object.
        if (key.indexOf(PREFIX) === 0) {
          var k = key.split(PREFIX).join('');
          var val = queryParams[key];
          fns.setItem(k, val);
        }
      }
    }

    // And also make sure to set the values on the state object
    // from keys already in localStorage.
    for (var key in ls) {
      if (ls.hasOwnProperty(key)) {
        if (key.indexOf(PREFIX) === 0) {
          var k = key.split(PREFIX).join('');
          var val = fns.getItem(k);
          fns.setItem(k, val);
        }
      }
    }
  }

  return fns;
};
