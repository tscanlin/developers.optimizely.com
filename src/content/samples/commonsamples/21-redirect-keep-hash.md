---
title: Redirect - Keep hash parameter
anchor: commonsamples-keep hash
js: |

  /*
   *  Usage
   *    This JavaScript will redirect a visitor to the URL you pass in while preserving all hash parameters.  Be sure to include the protocol in the [REDIRECT_URL]
   */

  /* _optimizely_redirect = custom_keep_hash */
  var _optly = {redir:document.createElement("a")};
  _optly.redir.href = "[REDIRECT_URL]";  // Replace [REDIRECT_URL] to the new URL
  _optly.cur = window.location.search;
  if (_optly.cur) {
    _optly.redir.search = _optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;
  }
  if (window.location.hash) {
    _optly.redir.hash = window.location.hash;
  }
  window.location.replace(_optly.redir.href); 

---

This JavaScript will redirect a visitor to a new URL while preserving the hash parameters.