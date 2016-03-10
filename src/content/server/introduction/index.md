---
template: page-sidebar
title: "Optimizely Server-Side SDKs"
---

# Optimizely Server-Side SDKs

*Our Server-Side SDKs allow you to run experiments in any platform.*

<div class="attention attention--warning push--bottom">Server-side testing is not yet generally available to Optimizely customers. Please contact [developers@optimizely.com](mailto:developers@optimizely.com) if you are interested in getting early access or giving us feedback.</div>

Optimizely offers several server-side SDKs that allow you to run experiments in your own server-side application. Our SDKs allow you to activate experiments anywhere in your code and track conversion events in Optimizely.

There are numerous reasons why you may want to run experiments server-side instead of client-side:

* *Performance.* To minimize page load times and app load times, you should keep your client code as thin as possible. By activating experiments on the server instead of the client, you can decide which experiments to run as soon as a request hits your servers and not incur any additional latency. Our SDKs perform bucketing without making any network requests.

* *Complexity.* If you'd like to experiment with more complex changes in your backend, you can use our server-side SDKs to route traffic to different code blocks. Our server-side SDKs allow you to experiment with any part of your technology stack, based on what's important to your business.

* *Multi-channel.* If your backend code is serving content to multiple different channels, then using our server-side SDKs will allow you to create experiments that impact all your channels. Many of our customers want to experiment in their API or backend layer so they can impact all of their channels.

* *Extensibility.* All of our SDKs are available open source. If you'd like to build a custom implementation then you can fork any of our SDKs or build your own wrapper around our underlying API. Creating your own SDK requires adding just a thin layer around Optimizely's API and JSON configuration.

To get started using our SDKs please read the [Getting Started](../getting-started/index.html) page that explains how to install our SDKs and run your first experiment.

If you have any questions about using our server-side SDKs, please reach out to [developers@optimizely.com](mailto:developers@optimizely.com). Our developer support team is happy to help and support building your application.

<a class="button button--highlight anchor--middle display--block width--200 text--center" href="../getting-started/index.html">Get started!</a>
