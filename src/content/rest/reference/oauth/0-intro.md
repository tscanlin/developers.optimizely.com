---
template: sidebyside
title: OAuth 2.0
anchor: oauth
---

Optimizely provides the OAuth 2.0 protocol to allow users to authorize third party applications to access Optimizely data via the REST API. It allows any Optimizely customer to grant access to an application without the need to share their Optimizely username and password. Customers can view and revoke applications they've authorized in their <a href="https://help.optimizely.com/hc/en-us/articles/204477398#oauth" target="_blank">account settings</a>.

To build an OAuth 2.0 flow in your application, you'll need to complete the following steps:

* Decide which [Grant Type](#grant-type) is most appropriate for your application
* [Register](#registration) your application with Optimizely
* In your application, point customers to Optimizely's [authorization](#authorization) URL
* Process a [redirect](#redirection) after the user accepts (or rejects) your application's access
* Obtain an access token, via an [authorization code](#authorization-code-exchange) or [refresh token](#refresh-tokens), depending on the authorization flow you're using
* [Authenticate](#authentication) with the REST API using the provided access token

The following sections walk through each of these steps in detail.

If at any point you have any questions or need some help building out an OAuth 2.0 flow, please contact [developers@optimizely.com](mailto:developers@optimizely.com).
