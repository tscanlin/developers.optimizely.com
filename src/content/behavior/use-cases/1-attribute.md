---
template: page-sidebar--full
title: Custom Behavioral Attributes
anchor: attribute
---

Every Custom Behavioral Attribute is backed by a behavioral query.

Your customers' events, stored in their individual browsers, are used to compute values for each Custom Behavioral Attribute that you have defined.  The resulting value is recorded (along with other types of attributes) in the appropriate [customer profile](/customer-profiles/).

Notes:
- This type of behavioral query must evaluate to a number, boolean, or string.  If it evaluates to any other type of value, like a list or an [event object](#event-objects) or `undefined` (as may be the case for visitors with incomplete browsing history), then that invalid value will be ignored and left out of the customer profile.
- Optimizely can automatically define a behavioral query when you use the user interface for creating Custom Behavioral Attributes.  But you can switch to "code mode" and specify the query object yourself, if you need to evaluate a more advanced behavior.
