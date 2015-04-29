---
template: sidebyside
title: Redirection
anchor: redirection
fields:
  access_token: An API access token which you can use to access the REST API on behalf of the authorizing user.
  token_type: As of March 2015, the only supported type is `bearer`.
  state: The state you provided in the authorization request. You should verify this value matches the state you provided earlier.
  expires_in: The TTL for this token in seconds. As of March 2015, all Implicit Grant tokens will expire in 2 hours (`7200`).
request_url: |
    http://myapplication.com/
      #access_token=abcdefghijklmnopqrstuvwxyz
      &token_type=bearer
      &state=somesecurestate
      &expires_in=7200

    http://myapplication.com/
      #error=access_denied
      &state=somesecurestate
---

If the user accepts (or rejects) authorization, Optimizely will send the user to the <b>redirect URI</b> provided during authorization with the values described below in the URL fragment. The examples on the right show redirects to `http://myapplication.com` in both cases where the user accepts and rejects authorization.
