---
template: sidebyside
title: Redirection
anchor: redirection
fields:
  access_token: <b>Implicit grants only.</b> If you are using the implicit grant flow, this key will contain a valid access token you can use to access the REST API on behalf of the authorizing user. Jump to [Authentication](#authentication-oauth) for instructions on using an access token to access the REST API.
  code: <b>Authorization code grants only.</b> If you are using the authorization code flow, this parameter contains an authorization code, which you can use to exchange for an access token and refresh token. The authorization code will expire in 10 minutes and can only be used once. Jump to [Authorization Code](#authorization-code) for instructions on obtaining an access token.
  token_type: <b>Implicit grants only.</b> As of March 2015, the only supported type is `bearer`.
  state: The state you provided in the authorization request. You should verify this value matches the state you provided earlier.
  expires_in: <b>Implicit grants only.</b> The TTL for this token in seconds. As of March 2015, all access tokens will expire in 2 hours (`7200`).
request_url: |
    // Successful authorization (implicit grant)
    http://myapplication.com/
      #access_token=abcdefghijklmnopqrstuvwxyz
      &token_type=bearer
      &state=somesecurestate
      &expires_in=7200

    // Unsuccessful authorization (implicit grant)
    http://myapplication.com/
      #error=access_denied
      &state=somesecurestate

    // Successful authorization (authorization code grant)
    https://myapplication.com/
      ?code=asdbawejksd
      &state=somesecurestate

    // Unsuccessful authorization (authorization code grant)
    https://myapplication.com/
      ?error=access_denied
      &state=somesecurestate
---

If the user accepts (or rejects) authorization, Optimizely will send an HTTP GET request to the <b>redirect URI</b> provided during authorization with the values described below.

If you are using the implicit grant flow, this information will be provided in the URL fragment. The examples on the right show redirects to `http://myapplication.com` in both cases where the user accepts and rejects authorization.

If you are using the authorization code flow, this information will be provided in the redirection query parameters. The examples on the right show redirects to `http://myapplication.com` in both cases where the user accepts and rejects authorization.
