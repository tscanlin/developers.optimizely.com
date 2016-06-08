---
template: page-sidebar
title: "Apps"
---

<h1 id="apps-developers-guide">Apps Developer Guide</h1>

**Welcome! This page walks you through everything you need to know so you can build apps using Optimizely.**

<div class="attention attention--warning push-double--bottom">
**Optimizely Canvas is a beta feature, and we're eager to hear your feedback!** If you're developing an app or
would like to provide feedback, then please chat with us at
<a href="https://gitter.im/optimizely/apps" target="_blank">https://gitter.im/optimizely/apps</a>.
<br><br>
**If you don't see Apps in your dashboard**, or if you have trouble accessing Apps the product, please email [developers@optimizely.com](mailto:developers@optimizely.com).
</div>


At Optimizely, we’re working hard to expand our developer platform to empower customers and developers to extend and integrate with Optimizely in new ways.

In addition to our APIs, we’ve also built the Optimizely Canvas framework, which allows developers to embed custom experiences inside the native Optimizely interface.

We’re excited for customers and developers to leverage these powerful tools to build apps that extend the Optimizely experience.

<h2 id="what-are-apps">What are Optimizely Apps?</h2>

You may already be familiar with Optimizely Integrations. Integrations are connectors between Optimizely and other technologies. You can read more about developing your own integrations [here](/integrations/).

Optimizely Apps are extensions to Optimizely that don’t depend on other technologies. They can be third-party applications that integrate with Optimizely using Optimizely Canvas.


<h2 id="what-is-canvas">What is Optimizely Canvas?</h2>

Optimizely Canvas allows developers to embed Optimizely Apps directly in the Optimizely interface using an iframe.

<img src="/assets/img/apps/full-width.png" />

<p class="muted line--tight proceed"><i>Your App will be shown directly under a unique tab of your naming. This location will provide a canvas space for the full width of the page.</i></p>

Such applications are context-aware, meaning Optimizely informs the app about a user’s attributes like their account ID and current project ID.

Optimizely also provides apps embedded in Canvas with **OAuth credentials** for the current user, allowing the app to interact with Optimizely’s REST APIs on behalf of the user and build truly rich and seamless experiences.

<h2 id="example-apps">Example Apps</h2>

#### Headline Testing
Headline Testing allows users to create article headline experiments in just a few clicks without using the Optimizely visual editor. The entire interface below the Headline Testing tab—which looks and feels like part of the native Optimizely product—is in fact an iframe to an application hosted entirely outside of Optimizely and integrated via Canvas.

<img src="/assets/img/apps/headline-testing-screenshot.png" />

#### Sheets Embed
Sheets Embed allows users to access Google spreadsheets related to their Optimizely projects directly within Optimizely.

<img src="/assets/img/apps/sheets-embed-screenshot.png" />


## Getting Started

Optimizely Canvas empowers developers to build rich experiences on the Optimizely platform in an incredibly low-friction way. In fact, you can use whatever tech stack you’d like. We're excited to see what you build!

<h3 id="ideate">1. Come up with an idea for your app</h3>

Need an app idea? <a href="https://optimize.ly/app-ideas" target="_blank">Check out the Optiverse</a> for app ideas that have been suggested by the community!

You can also get inspiration from our existing apps by going to your Optimizely Dashboard and clicking on the “Apps” tab.

<h3 id="register-your-app">2. Register your app</h3>

If you'd like to develop an app using Optimizely Canvas, register your app through the form
<a href="http://link.optimizely.com/canvas-registration-form" target="_blank">here</a>. After initial setup, you can
iterate on your app indefinitely without depending on the Optimizely team.

While we cannot guarantee it, we aim to complete initial setup within one business day of your request.

<h3 id="turn-on-your-app">3. Turn on your app</h3>

Once you've received confirmation that your app is available, you'll find it listed in the *Apps* tab of any project under the account(s) you requested we whitelist:

<img src="/assets/img/canvas/turning_on_an_app.png" />

After you switch the app to "On", you'll see a new tab appear in your project navigation:

<img src="/assets/img/canvas/templates_tab_closeup.png" style="width: 60%;" />

If you click this tab, your app's URL will be loaded via an iframe below the tab, with a signed payload as described below in <a href="#canvas-payload">Section 4. Use the Canvas payload</a>.


<h3 id="canvas-payload">4. Use the Canvas payload</h3>

#### The Canvas Payload

When loading your app in the Canvas iframe, Optimizely provides a `signed_request` URL parameter, which includes
contextual information for the user who opened your app.

#### Parsing the Context

This `signed_request` parameter has a value of the format:

```
{{hashed_base64_context}}.{{unhashed_base64_context}}
```

Note the period (`.`) delimiter. The `hashed_base64_context` component is used to authenticate the request as coming
from Optimizely, which is covered in more detail in the <a href="#verifying-the-context">Verifying the Context</a> section below.

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
}
```

You can use this information to identify the user, discern their current account and project, and issue any REST API requests on their behalf using their OAuth access token, as described in our [REST API Authentication](/oauth/index.html#authentication-oauth) docs.

With this information, the possibilities for building rich experiences directly in the Optimizely product are endless.

#### Verifying the Context

As mentioned, you should use the `hashed_base64_context` portion of the `signed_request` parameter value to verify that
the unhashed context is authentically from Optimizely, and not a malicious third party trying to impersonate the user.

You do this by:

1. HMAC SHA-256 hashing the unhashed context **to lowercase hexits**, using your OAuth client secret as the
   HMAC key,
2. base64-encoding the hash, and
3. verifying that the result matches the provided `hashed_base64_context`.

If the result does not match, **you should immediately return an HTTP 401 to the user and assume the request was
malicious**. Do not do any processing for the user or expose any data to the user.

<div class="attention attention--warning push--bottom">
*NOTE:* This verification should never be done client-side or in any other environment accessible to the user, as your
client secret must be used to perform the verification and is a **highly sensitive** secret.
</div>

#### Canvas SDKs

We've developed SDKs to help with decoding the `signed_request` parameter. Check out <a href="#starter-kits-sdks">our section on Canvas SDKs below</a>.

#### Access Token Expiration

Per the `"expires_in": 7200` section in the example context above, the access token provided by Optimizely to your app
lasts for 2 hours (7,200 seconds). See the <a href="#faqs">FAQs</a> for information on what to do when this access token expires, or
is revoked by the user.


<h3 id="build-your-app">5. Build your app using our App Guidelines </h3>

In order for us to accept your app, and for the app review process to go smoothly, please use our app guidelines to build your app. See the <a href="#app-guidelines">App Guidelines</a> sections for more.

<h3 id="submit-your-app">6. Submit your app</h3>

Once you've built your app, send us an email at [developers@optimizely.com](mailto:developers@optimizely.com). We will start the app review process and work with you to get it listed on the Optimizely platform.

<h3 id="change-app-config">7. Change your app's configuration (optional)</h3>

If at any time you need to change your app's configuration (such as the display name, the app URL, or the app logo),
just re-submit the <a href="http://link.optimizely.com/canvas-registration-form" target="_blank">registration form</a>
with the updated information.

<h2 id="starter-kits-sdks">Starter Kits & Canvas SDKs</h2>

We've built starter kits and SDKs for developers interested in building on the Optimizely platform. If you’re interested in contributing, let us know at <a href="https://gitter.im/optimizely/apps" target="_blank">https://gitter.im/optimizely/apps</a>.

<h4 id="starter-kits">Starter Kits</h4>

We've put together starter kits to help kickstart your app development. Check this section in the future for more. We welcome contributions of libraries in other languages.

* [Python Canvas Starter Kit](https://github.com/optimizely/canvas-getting-started-python)
* [Node Canvas Starter Kit](https://github.com/optimizely/canvas-node-quickstart)

<h4 id="canvas-sdks">Canvas SDKs</h4>

These SDKs help with decoding the `signed_request` parameter to get the Canvas context. We welcome contributions of libraries in other languages.

* [Node SDK](https://www.npmjs.com/package/optimizely-canvas-sdk)
* [Python SDK](https://github.com/optimizely/canvas_python_SDK)
* [PHP SDK](https://github.com/conversion-com/optimizely-canvas-php-starter-kit) by [Conversion.com](http://conversion.com/)

## App Guidelines

<h3 id="content-requirements">Content Requirements</h3>

All apps must include a **Terms of Service** in the UI.

<h3 id="design-requirements">Design Requirements</h3>

In order to provide a great user experience that feels like a core part of Optimizely, we recommend using our open source CSS framework, [OUI (Optimizely User Interface)](http://design.optimizely.com/oui/index.html). This framework defines standard components — grids, buttons, form elements, breadcrumbs — that are cross-browser compatible and easily combined into larger interfaces. It's also the same CSS framework that Optimizely's engineers use to build Optimizely.

You can get started with OUI in two ways:

1. Use the pre-compiled version, as described below (recommended).
2. Or, use the `optimizely-oui` npm module. Read <a href="https://github.com/optimizely/oui/blob/devel/README.md" target="_blank">https://github.com/optimizely/oui/blob/devel/README.md</a> for more.

#### Pre-compiled CSS

Install the pre-compiled version of OUI in your application:

```
<link rel="stylesheet" href="https://oui.cdn.optimizely.com/9.0.1/oui.css">
```

For the latest version, replace the `9.0.1` with the <a href="https://github.com/optimizely/oui/releases" target="_blank">latest release</a>.

Here is a basic HTML template to get started using OUI:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Base OUI Template</title>

    <!-- OUI CSS -->
    <link rel="stylesheet" href="https://oui.cdn.optimizely.com/9.0.1/oui.css">

  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

#### OUI Core Components
As you add each component style to your app, reference the <a href="http://design.optimizely.com/oui/core/api/" target="_blank">OUI Core Components</a> to learn the semantic markup for each component.

#### Designing your app
In addition to aligning to the OUI style, please be aware of the context within which you’re designing your app. Since Optimizely’s header is at the top of the page, **you should avoid adding in a secondary header to the top of your app**. A secondary header will confuse users and will create an awkward information architecture.

Secondly, all the contents inside Optimizely’s UI is left aligned. **You should avoid center aligning the contents of your app** as this will be inconsistent with Optimizely’s UI.

<img src="/assets/img//apps/anti-pattern.png" />
#### Codepens

To get started quickly with OUI, check out these codepens:
* <a href="http://codepen.io/kwalker3690/pen/vGNYRv?editors=1010" target="_blank">Tab Navigation</a>
* <a href="http://codepen.io/kwalker3690/pen/pyjoLb?editors=1000" target="_blank">Right Sidebar</a>

#### Further Reading
* [Optimizely OUI on Github](https://github.com/optimizely/oui) (includes instructions for using [SVG icons](https://github.com/optimizely/oui#svg-icons), too)
* [OUI Documentation](http://design.optimizely.com/oui/index.html)
* [Optimizely’s Design Guide](http://design.optimizely.com/design-patterns/index.html), which includes [brand colors](http://design.optimizely.com/brand/colors.html) and [design patterns](http://design.optimizely.com/design-patterns/product/index.html).


<h3 id="security-guidance">Security Guidance</h3>

Optimizely takes security very seriously, and as a developer using Optimizely Canvas, so should you. During the
application review process, Optimizely will strive to identify any security issues in your app, but security is
ultimately your responsibility as the developer.

Below are a number of security recommendations. This is a not intended to be an exhaustive list, and many
apps will have unique attack vectors and security requirements that developers should think through in detail.

* Use `X-Frame-Options` headers to restrict iframing of your app to exclusively `app.optimizely.com`.
* Always use HTTPS/SSL for your app URL. Note that insecure HTTP to localhost is acceptable for development purposes,
  but use of insecure HTTP with any non-localhost URL will result in an error when attempting to use an app.
* Monitor the <a href="https://en.wikipedia.org/wiki/HTTP_referer" target="_blank">`Referer` header</a> for the
  initial page load, which should come from `app.optimizely.com`, to detect possible attacks.
* Always verify the authenticity of the Canvas payload as described above, and, if verification fails, immediately
  return an HTTP 401 to the user and assume the request was malicious. Do not do any processing for the user or
  expose any data to the user.
* Store credentials and tokens securely, ensuring your OAuth client secret is never accessible to users, and ensuring
  one user can never access another user’s data or secrets, such as OAuth tokens.
* Follow security best practices for web applications. Some resources we find useful to this end are:

	* [OWASP Cheat Sheet Series](https://www.owasp.org/index.php/Cheat_Sheets)
	* [Web Developer Checklist](http://webdevchecklist.com )


* Check and frequently re-check 3rd party software (OS, server, frameworks, libraries) for known vulnerabilities.
* Do not redirect the initial Canvas request to another URL.
* Provide an emergency contact in your app's UI and documentation (preferably a team).
* Contact Optimizely as soon as possible, and at latest within 24 hours, in the event of a compromise.
* All apps must include emergency contact information in your app's UI and documentation (preferably for a team).

<h3 id="technical-requirements">Other Technical Requirements</h3>

All links must open externally in a new tab or window, i.e: `target="_blank"`

<h2 id="resources">Resources</h2>

Here is the definitive list of documents related to developing an App in Optimizely Canvas:

##### Design:
* [Optimizely OUI on Github](https://github.com/optimizely/oui)
* [Optimizely Design Guide: OUI](http://design.optimizely.com/oui/index.html)
* [Optimizely Design Guide: Product Design Patterns](http://design.optimizely.com/design-patterns/product/index.html)

##### Development:
* [Canvas App ideas @ Optiverse](https://optimize.ly/app-ideas) (community driven)
* [Apps Developer Guide](http://developers.optimizely.com/apps) (these docs)



<h2 id="faqs">FAQs</h2>

#### What do I do if the access token from the signed request expires or is revoked?

In the event the access token provided to your app in the signed request expires (after 2 hours) or is revoked by the
user, the Optimizely REST API will begin returning HTTP 401 responses to your requests. In that case, you should prompt
the user to reload the page, which will result in your app receiving a fresh signed request with a fresh OAuth access
token.

#### What happens if a user clicks a different tab, then clicks my app's tab again?

Every time a user clicks the tab for your app from a different tab, or reloads app.optimizely.com, your app will
receive a fresh signed request with a new OAuth access token.

#### How can I contact you?
If you're developing an app or would like to provide feedback or get help, please chat with us at [https://gitter.im/optimizely/apps](https://gitter.im/optimizely/apps) or email us at [developers@optimizely.com](developers@optimizely.com).

If you've built your app and are ready to submit, please email us at [developers@optimizely.com](developers@optimizely.com) and we'll start the app review process.
