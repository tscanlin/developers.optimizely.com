---
template: sidebyside
title: Grant types
anchor: grant-types
---

As of August 2015, Optimizely supports both the <b>Authorization Code</b> and <b>Implicit</b> grant types, as described in the <a href="http://tools.ietf.org/html/rfc6749" target="_blank">OAuth 2.0 spec</a>. Read below for more information on the difference between these grant types and decide which is most appropriate for your application.

#### *Authorization code grant*

The authorization code grant is used to obtain both access tokens and refresh tokens and is optimized for *confidential clients*. It’s more versatile than the implicit grant and can give an application indefinite access to Optimizely on behalf of a user with a single authorization request. However, it is more complex to implement, and it requires the application to implement server-side code as well as a means of securely storing confidential information, including both a client secret and refresh tokens.

Read more about the <a href="https://tools.ietf.org/html/rfc6749#section-4.1" target="_blank">Authorization Code Grant in the official OAuth 2.0 spec</a>.

#### *Implicit grant*

The implicit grant type is optimized for *public clients*. Such clients will receive a valid access token at their redirection URL immediately after the user authorizes their application. Access tokens expire after 2 hours.

It is important to note that the implicit grant does not support refresh tokens. Therefore, any application using the implicit grant will need to explicitly re-request authorization from the user when an access token expires.

Read more about the <a href="https://tools.ietf.org/html/rfc6749#section-4.2" target="_blank">Implicit Grant in the official OAuth 2.0 spec</a>.
