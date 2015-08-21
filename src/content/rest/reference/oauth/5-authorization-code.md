---
template: sidebyside
title: Authorization code
anchor: authorization-code
fields:
  code: The authorization code returned in the redirect.
  client_id: The client ID for your application (see <a href="http://app.optimizely.com/account_settings/apps/developers" target="_blank">app settings</a>).
  client_secret: The client secret for your application (see <a href="http://app.optimizely.com/account_settings/apps/developers" target="_blank">app settings</a>).
  redirect_uri: The redirect URI that was used when requesting the authorization code.
  grant_type: As defined in the OAuth 2.0 spec, this field must contain a value of `authorization_code`.
request_url: |
    POST https://app.optimizely.com/oauth2/token
      ?code=asdbawejksd
      &client_id=123
      &client_secret=iamverysecret
      &redirect_uri=http%3A%2F%2Fmyapplication.com
      &grant_type=authorization_code

    {
      "access_token":"abcdefghijklmnopqrstuvwxyz",
      "expires_in":7200,
      "token_type":"bearer",
      "refresh_token":"1234567890abcdefghijklmnopqrstuvwxyz"
    }
---

*For authorization code grants only.*

After you obtain an authorization code, you can exchange this authorization code for an access token by issuing an HTTP POST request to Optimizely’s authorization server.

The code at right shows an example request and a successful response. The response will include an access token (with a lifetime of 2 hours) as well as a *refresh token* that can be used to request more access tokens after the initial access token expires.
