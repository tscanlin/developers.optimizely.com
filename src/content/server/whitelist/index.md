---
template: page-sidebar
title: "User whitelisting"
---

# User whitelisting

Whitelisting provides the ability to force users into specific variations. This is specifically useful when running QA, reviewing your experiments and writing unit tests.Our server-side SDKs will ensure that user IDs in the whitelist will be forced into the appropriate variation when calling `activate()`, `track()`, or `get_variation()`. 

To whitelist, select an experiment and edit the **Whitelist** on the right-hand side of the page. Here you can add user IDs and their variation. 

**Please note:** Currently, whitelisting supports a maximum of 10 users. Let us know if you need this increased. 