---
template: page-sidebar
title: "Optimizely REST API Guide"
---

# REST API Guide

## What is the REST API?

The REST API allows you to manage Optimizely accounts programmatically. Using the REST API, you can create, start, stop, and archive experiments in your own application. The REST API includes full read/write access to all the data you store in Optimizely, including goals, audiences, dimensions, and more.

At Optimizely, we've built our core product on top of the REST API as we want to expose our key functionality to developers. Applications built on the REST API can get full access to the capabilities of our product without requiring users to ever log into Optimizely.

To see a full list endpoints supported in the REST API, refer to our [API reference](/rest/docs). If you're using the REST API for the first time, keep reading for simple instructions to get started.


## Getting started

### 1. Create an Optimizely account

If you don't have an Optimizely account already, just sign up for a [free developer account](http://developers.optimizely.com/signup). This account will give you full feature access to Optimizely with a limited traffic allocation. No credit card is required, but you can always upgrade your account to a paid plan later if needed.

### 2. Generate an API token

Visit <a target="_blank" href="http://www.optimizely.com/tokens">optimizely.com/tokens</a> to generate a API token.

Using the REST API requires an API token. If you're an account Administrator or Project Owner, you can generate a token for yourself. Otherwise, please ask your Administrator to generate a token for you.

### 3. Access your account

To use the REST API, simply include your API token in the request header. For example, the following request returns a list of projects in your account.

```curl
curl \
  -H "Token: abcdefghijklmnopqrstuvwxyz:123456" \
  -X GET "https://www.optimizelyapis.com/experiment/v1/projects/"
```

Running the command above should return a list of projects in your account.

### 4. Register an OAuth application

Register your application in your [account settings](http://app.optimizely.com/accountsettings/developer).

If you're developing an application for use by other customers, we recommend using OAuth 2.0 to authenticate with the API. OAuth 2.0 will allow customers to use your application without requiring them to share their Optimizely username and password. For more information on how to use OAuth, refer to our [OAuth documentation](/#oauth).

### 5. Start building!

You're now ready to start building an application with Optimizely! Please refer to our full [API reference](/rest/docs) to see a full list of the supported endpoints. You may also want to check out [example use cases](/rest/examples) of the REST API to quickly get the answers you need.

If you have any questions about using the REST API, please reach out to [developers@optimizely.com](mailto:developers@optimizely.com). Our developer support team is happy to help support you building your application.
