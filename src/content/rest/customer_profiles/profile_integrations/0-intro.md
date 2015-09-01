---
template: sidebyside
title: Profile Integrations
anchor: cust_integrations
---

*Customer Profile Integrations* allow you to upload customer attributes to enrich a Customer Profile.

This section walks through how to build an integration with Optimizely that uploads customer attributes to Optimizely.

### Prerequisites

* Your application stores customer_ids (user identifiers e.g. hashed email addresses or other unique IDs)
* User identifiers are not personally identifiable, according to Optimizely's [Terms of Service](https://www.optimizely.com/terms/)
* User identifiers can be accessed via the user's browser (e.g. in a cookie, query parameter, or other client location)
* Comfortable using REST APIs

### 1. Get Access

Customer Profiles are currently in Beta and are only available for whitelisted accounts. This means the APIs are subject to change pending feedback from early customers. If you would like early access to these APIs please contact us at [customer-profiles@googlegroups.com](mailto:customer-profiles@googlegroups.com)! We are eager to hear your feedback!

### 2. Register your application

We highly recommend that you use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide a seamless experience to users in your application and periodically send data to Optimizely in the background. [Learn how to connect to Optimizely using OAuth 2.0](/rest/reference/#oauth).

### 3. Create a datasource

After connecting with Optimizely you should [create a Datasource](/rest/customer_profiles#create-dcpdatasource) in Optimizely. This will be the location for all of your application's customer data. This allows you to send customer data to Optimizely, by Datasource, without worrying about the relationship of customers across datasources.

### 4. Register Attributes

Register Attributes for the Datasource with [Create Attribute](/rest/customer-profiles#create-dcpattribute). Without registering Attributes, you will not be able to send actual Customer Profile data to Optimizely.

### 5. Upload data

Next, use [Write Customer Profile](/rest/customer_profiles#create-customer-profile) to upload Attribute values for the Attributes you registered. You can also use [Bulk Upload](/rest/customer_profiles#bulk) to upload attribute data in bulk.

### 6.  QA integration

To test the integration end-to-end, you should verify the following:
- A Datasource has been creating in the the Datasource dashboard
- Datasource Attributes appear in the Audience Builder under "Dynamic Customer Profiles"
- You can run a targeted experiment based on uploaded data.
