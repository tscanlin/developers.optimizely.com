---
template: page-sidebar
title: "Optimizely REST API Guide"
---

# Getting started with Optimizely's REST API

Get started with the REST API in 5 minutes by following the instructions below:

### 1. Create an Optimizely account

If you don't have an Optimizely account already, just sign up for a [free developer account](https://www.optimizely.com/?modal=devsignup). This account will give you access to core Optimizely features and API access, but with limited traffic allocation. No credit card is required, but you can always upgrade your account to a paid plan later.

### 2. Generate an API token

Visit <a target="_blank" href="https://app.optimizely.com/tokens">app.optimizely.com/tokens</a> to generate a API token, which you'll need to authenticate with the API.

*Note:* If you didn't create your own developer account you'll need to make sure you have Administrator or Project Owner permissions to generate a token.  If you don't have permissions, ask your Administrator or Project Owner to generate a token for you.

### 3. Access your account

To use the REST API, you'll need to include your API token in the request header. For example, the following request returns a list of projects in your account.

```curl
curl \
  -H "Token: abcdefghijklmnopqrstuvwxyz:123456" \
  -X GET "https://www.optimizelyapis.com/experiment/v1/projects/"
```

### 4. Register your application

Register your application in your [account settings](http://app.optimizely.com/accountsettings/developer).

If you're developing an application for use by other customers, we recommend registering your application so you can use OAuth 2.0 to authenticate with the API. OAuth 2.0 will allow customers to use your application without requiring them to share their Optimizely username and password. For more information on how to use OAuth, refer to our [OAuth documentation](/rest/reference#oauth).

### 5. Start building!

You're now ready to start building an application with Optimizely! Please refer to our full [API reference](/rest/reference) to see a full list of the supported endpoints. You may also want to check out our [FAQs](/rest/faqs) to quickly get the answers you need.

If you have any questions about using the REST API, please reach out to [developers@optimizely.com](mailto:developers@optimizely.com). Our developer support team is happy to help support you building your application.
