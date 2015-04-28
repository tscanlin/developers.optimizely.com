---
template: twocol
title: Authentication
endpoint: "projects/"
anchor: authentication
---
<div class="alert alert-warning">Visit <a target="_blank" href="http://www.optimizely.com/tokens">optimizely.com/tokens</a> to generate an API token.</div>

Every API request needs to be authenticated. To authenticate, use a token generated from the link above in the request header, as shown in the example to the right. All API request examples in this documentation use the same header.

You can also write applications that authenticate with the REST API via OAuth 2.0. Tokens generated via OAuth should use the format `Authorization: Bearer [token]` instead of `Token: [token]` as the request header. For more details on connecting applications via OAuth 2.0, refer to our [OAuth 2.0 documentation](#oauth).

Using the wrong token, or including the token in the request body rather than the header, will fail with error `Authentication Failed`.
