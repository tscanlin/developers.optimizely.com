---
template: sidebyside
title: Refresh tokens
anchor: refresh-tokens
fields:
  refresh_token: The refresh token returned from the authorization code exchange.
  client_id: The client ID for your application (see <a href="http://app.optimizely.com/account_settings/apps/developers" target="_blank">app settings</a>).
  client_secret: The client secret for your application (see <a href="http://app.optimizely.com/account_settings/apps/developers" target="_blank">app settings</a>).
  grant_type: As defined in the OAuth 2.0 spec, this field must contain a value of `refresh_token`.
request_url: |
    POST https://app.optimizely.com/oauth2/token
      ?refresh_token=1234567890abcdefghijklmnopqrstuvwxyz
      &client_id=123
      &client_secret=iamverysecret
      &grant_type=authorization_code

    {
      "access_token":"abcdefghijklmnopqrstuvwxyz",
      "expires_in":7200,
      "token_type":"bearer",
    }
---

*For authorization code grants only.*

After the authorization code exchange, you can exchange a refresh token for an access token by issuing an HTTP POST request to Optimizely’s authorization server.

The code at right shows an example request and a successful response. In the event the user has revoked your access, you will receive an HTTP 403 response.
