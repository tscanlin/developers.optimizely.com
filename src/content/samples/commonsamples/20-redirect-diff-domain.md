---
title: Redirect - Same path on different domain
anchor: commonsamples-diff domain
js: |

  /*
   *  Usage
   *    This JavaScript will redirect a visitor to the same path on a different domain.  Make sure NOT to include the protocol when passing in the NEW_DOMAIN.
   */

  /* _optimizely_redirect = custom_new_domain */
  var _optly = {redir: document.createElement("a")};
  _optly.redir.href = window.location.href;
  _optly.redir.hostname = "[NEW_DOMAIN]";  // Change [NEW_DOMAIN] to the new domain, NOT including the protocol
  window.location.replace(_optly.redir.href);

---

This JavaScript will redirect a visitor to a new domain, preserving the rest of the URL.