---
template: twocol
title: Redirect - New path
anchor: commonsamples-new path
js: |

  /*
   *  Usage
   *    This JavaScript will redirect a visitor to a new path.
   */

  /* _optimizely_redirect = custom_new_path */
  var newPath = "/[NEW_PATH]";  // Replace [NEW_PATH] with your new path, but keep the '/'
  var _optly = {redir: document.createElement("a")};
  _optly.redir = {protocol: "https:" == document.location.protocol ? "https://" : "http://",
                  domain: window.location.hostname,
                  query: window.location.search
                 };
  _optly.redir.href = _optly.redir.protocol + _optly.redir.domain + newPath + _optly.redir.query;
  window.location.replace(_optly.redir.href);

---

This JavaScript will redirect a visitor to a new path, preserving the rest of the URL.  
