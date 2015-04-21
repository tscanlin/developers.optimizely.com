---
title: OAuth 2.0
anchor: oauth
---

Optimizely provides the OAuth 2.0 protocol to allow users to authorize third party applications to access Optimizely data via the REST API. It allows any Optimizely customer to grant access to an application without the need to share their Optimizely username and password. This section describes how to register a new application with Optimizely and send users through an authorization flow.

As of March 2015, we only support the <b>implicit grant</b> authorization type. Implicit grants do not support the issuance of refresh tokens. For more details on grant types and the OAuth 2.0 standards, refer to the official spec <a target="_blank" href="http://tools.ietf.org/html/rfc6749">here</a>.

If you have any questions about OAuth 2.0 support, please contact [developers@optimizely.com](mailto:developers@optimizely.com).
