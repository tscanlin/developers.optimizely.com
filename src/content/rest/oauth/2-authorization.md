---
title: Authorization
anchor: authorization
fields:
  client_id: A unique identifier for your application, obtained during registration.
  redirect_uri: A URL-encoded redirect URI to which the user will be redirected after successful (or failed) authorization. Must match one of the URIs provided during registration. You can always add more redirect URIs to your application on the <a target="_blank" href="https://www.optimizely.com/accountsettings/developer">registration page</a>.
  response_type: The grant type your application requests for authorization. As of March 2015, the only supported value is `token` (representing the Implicit Grant type).
  scopes: A string denoting the access scope(s) your application requires after authorization. As of March 2015, the only supported value is `all`, meaning the generated token will have permissions that match the <a target="_blank" href="https://help.optimizely.com/hc/en-us/articles/200040775">user role</a> of the authorizing user.
  state: A value you provide that will be relayed back to you in the response, to protect against CSRF attacks. For more information, see the <a target="_blank" href="https://tools.ietf.org/html/rfc6749#section-10.12">CSRF section</a> of the OAuth 2.0 spec.
request_url: |
  https://app.optimizely.com/oauth2/authorize
    ?client_id=123
    &redirect_uri=http%3A%2F%2Fmyapplication.com
    &response_type=token
    &scopes=all
    &state=somesecurestate
---

To enable users to authorize your application, you must link to Optimizely's authorization endpoint on `app.optimizely.com` using the <b>client ID</b> and a <b>redirect URI</b> provided during registration. For example, the link shown on the right will send the user to an authorization flow for client ID `123` with a redirect to `http://myapplication.com`. After clicking this link, users will be prompted to log in to Optimizely if they aren't already, then will be given the option to accept or deny authorization for your application.

We recommend you use the <b>Connect with Optimizely</b> button below, which you may resize as needed:

<div align="center">
<img src="../images/connect.png" width=250px><br>
<a href="../images/connect.png" download="ConnectWithOptimizelyButton.png">Click to download</a>
</div><br>

Users can revoke your application's access to their data at any time in their <a target="_blank" href="https://www.optimizely.com/accountsettings/access">API Access</a> settings.

