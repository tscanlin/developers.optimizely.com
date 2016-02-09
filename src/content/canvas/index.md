---
template: page-sidebar
title: "Canvas"
---

# Optimizely Canvas

Optimizely Canvas allows developers to embed third party applications directly in the Optimizely interface.

Such applications are context-aware, meaning Optimizely informs the app of the current user, the Optimizely account the
user is currently in, and the Optimizely project the user is currently in. Optimizely also provides apps embedded in
Canvas with OAuth credentials for the current user, allowing the app to interact with Optimizely’s REST APIs on behalf
of the user and build truly rich and seamless experiences.

For instance, below is a screenshot of the *Templates* app, which allows users to create re-usable base templates for
experiments and create any number of experiments based on these templates. The entire interface below the *Templates*
tab, which looks and feels like part of the native Optimizely product, is in fact an iframe to an application hosted
entirely outside of Optimizely and integrated via Canvas.

<img src="/assets/img/canvas/templates_app_screenshot.png">

Optimizely Canvas empowers developers to build rich experiences on the Optimizely platform in an incredibly
low-friction way. We're excited to see what you build!

<div class="attention attention--warning push--bottom">
We're trying out Gitter for questions and discussion during the Canvas beta.
<a href="https://gitter.im/optimizely/canvas" target="_blank">Join in!</a>
</div>

## Getting Started

<h3 id="register-your-app">Register Your App</h3>

At the moment, if you'd like to create your own app using Optimizely Canvas, you can register one through the form
<a href="http://link.optimizely.com/canvas-registration-form" target="_blank">here</a>. After initial setup, you can
iterate on your app indefinitely without depending on the Optimizely team.

While we cannot guarantee it, we aim to complete initial setup within one business day of your request.

<h3 id="change-your-app-config">Changing Your App's Configuration</h3>

If at any time you need to change your app's configuration (such as the display name, the app URL, or the app logo),
just re-submit the <a href="http://link.optimizely.com/canvas-registration-form" target="_blank">registration form</a>
with the updated information.

<h3 id="turn-on-your-app">Turn On Your App</h3>

Once you've received confirmation that your app is available, you'll find it listed in the *Integrations* tab of any
project under the account(s) you requested we whitelist:

<img src="/assets/img/canvas/turning_on_an_app.png">

After you switch the app to "On", you'll see a new tab appear in your project navigation:

<img src="/assets/img/canvas/templates_tab_closeup.png">

If you click this tab, your app's URL will be loaded via an iframe below the tab, with a signed payload as described
below.

## The Canvas Payload

When loading your app in the Canvas iframe, Optimizely provides a `signed_request` URL parameter, which includes
context information for the user who opened your app.

<h3 id="parsing-the-context">Parsing the Context</h3>

This `signed_request` parameter has a value of the format:

```
{{hashed_base64_context}}.{{unhashed_base64_context}}
```

Note the period (`.`) delimiter. The `hashed_base64_context` component is used to authenticate the request as coming
from Optimizely, which is covered in more detail in the "Verifying the Context" section below.

The `unhashed_base64_context` component is base64-encoded JSON with this format:

```
{"context":
    {"user":
        {"email": "jon@optimizely.com"},
     "environment":
         {"current_account": 123456,
          "current_project": 78910},
     "client":
         {"access_token": "abcdefg1234543",
          "token_type": "bearer",
          "expires_in": 7200}
}
```

You can use this information to identify the user, discern their current account and project, and issue any REST API
requests on their behalf, as with any other OAuth access token as described at
http://developers.optimizely.com/rest/reference/index.html#authentication-oauth.

With this information, the possibilities for building rich experiences directly in the Optimizely product are endless.

<h3 id="verifying-the-context">Verifying the Context</h3>

As mentioned, you should use the `hashed_base64_context` portion of the `signed_request` parameter value to verify that
the unhashed context is authentically from Optimizely, and not a malicious third party trying to impersonate the user.

You do this by:
1. HMAC SHA-256 hashing the unhashed context *to lowercase hexits*, using your OAuth client secret as the
   HMAC key,
2. base64-encoding the hash, and
3. verifying that the result matches the provided `hashed_base64_context`.

If the result does not match, *you should immediately return an HTTP 401 to the user and assume the request was
malicious*. Do not do any processing for the user or expose any data to the user.

<div class="attention attention--warning push--bottom">
*NOTE:* This verification should never be done client-side or in any other environment accessible to the user, as your
client secret must be used to perform the verification and is a highly sensitive secret.
</div>

<h3 id="canvas-sdks">SDKs</h3>

Optimizely provides a node npm package that will do this verification for you
<a href="https://www.npmjs.com/package/optimizely-canvas-sdk" target="_blank">here</a>, and we welcome contributions
of libraries in other languages.

<h3 id="access-token-expiration">Access Token Expiration</h3>

Per the `"expires_in": 7200` section in the example context above, the access token provided by Optimizely to your app
lasts for 2 hours (7,200 seconds). See the FAQ below for information on what to do when this access token expires, or
is revoked by the user.

## Security Guidance

As a developer using Optimizely Canvas, you should be intensely mindful of security. Below are a number of security
recommendations. This is a not intended to be an exhaustive list, and many apps will have unique attack vectors and
security requirements that developers should think through in detail.

* Use `X-Frame-Options` headers to restrict iframing of your app to exclusively `app.optimizely.com`.
* Always use HTTPS/SSL for your app URL (insecure HTTP to localhost is acceptable for development purposes).
* Monitor the the <a href="https://en.wikipedia.org/wiki/HTTP_referer" target="_blank">`Referer` header</a> for the
  initial page load, which should come from `app.optimizely.com`, to detect possible attacks.
* Always verify the authenticity of the Canvas payload as described above, and, if verification fails, immediately
  return an HTTP 401 to the user and assume the request was malicious. Do not do any processing for the user or
  expose any data to the user.
* Store credentials and tokens securely, ensuring your OAuth client secret is never accessible to users, and ensuring
  one user can never access another user’s data or secrets, such as OAuth tokens.
* Follow security best practices for web applications. Some resources we find useful to this end are:
  * https://www.owasp.org/index.php/Cheat_Sheets
  * http://webdevchecklist.com
* Check and frequently re-check 3rd party software (OS, server, frameworks, libraries) for known vulnerabilities.
* Do not redirect the initial Canvas request to another URL.
* Provide an emergency contact in your app's UI and documentation (preferably a team).
* Contact Optimizely as soon as possible, and at latest within 24 hours, in the event of a compromise.

## Design Guidelines

To the maximum extent reasonable, use Optimizely design patterns in your app as described at
http://design.optimizely.com, including using the
<a href="http://design.optimizely.com/oui/index.html" target="_blank">Optimizely User Interface (OUI)</a> custom CSS
framework.

## Frequently Asked Questions

<h3 id="faq-token-expiration">What do I do if the access token from the signed request expires or is revoked?</h3>

In the event the access token provided to your app in the signed request expires (after 2 hours) or is revoked by the
user, the Optimizely REST API will begin returning HTTP 401 responses to your requests. In that case, you should prompt
the user to reload the page, which will result in your app receiving a fresh signed request with a fresh OAuth access
token.

<h3 id="faq-user-clicks-different-tab">What happens if a user clicks a different tab, then clicks my app's tab again?</h3>

Every time a user clicks the tab for your app from a different tab, or reloads app.optimizely.com, your app will
receive a fresh signed request with a new OAuth access token.
