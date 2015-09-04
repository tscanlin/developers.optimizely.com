---
template: sidebyside
title: Profile Integrations
anchor: cust_integrations
---

*Customer Profile Integrations* allow you to upload attributes to enrich a customer profile.

This section walks through how to build an integration that uploads customer attributes to Optimizely.

### Pre-requisites

* Your application stores customer IDs (e.g. hashed email addresses or other unique IDs)
* Customer IDs are not personally identifiable, according to Optimizely's
  [Terms of Service](https://www.optimizely.com/terms/)
* Customer IDs can be accessed via the customer's device (e.g. in a cookie, query parameter, or other device location)
* You are comfortable using REST APIs

### 1. Get Access

Dynamic Customer Profiles are currently in Beta and are only available for whitelisted accounts. The APIs are subject to
change based on feedback from early customers. If you would like early access to DCP, please contact us at
[customer-profiles@googlegroups.com](mailto:customer-profiles@googlegroups.com)! We are eager to hear your feedback!

### 2. Register your application

We highly recommend that you use OAuth 2.0 to authenticate with the Optimizely REST API. This will allow you to provide
a seamless experience to users in your application and periodically send data to Optimizely. [Learn how to connect to
Optimizely using OAuth 2.0](/rest/reference/#oauth).

### 3. Create a datasource

After connecting with Optimizely, you should [create a datasource](/rest/customer_profiles#create-dcpdatasource) in
Optimizely. This will be the location for all of your application's customer data. This allows you to send customer data
to Optimizely, organized by datasource, without worrying about the relationship of customers across datasources.

### 4. Register Attributes

Register attributes for the datasource with [create attribute](/rest/customer_profiles#create-dcpattribute). Attributes
must be registered prior to customer profile data being uploaded to that datasource.

### 5. Upload data

[Write customer profile](/rest/customer_profiles#update-customer-profile) attribute values for the registered
attributes. You can also [bulk upload](/rest/customer_profiles#bulk) attribute data by dropping a CSV (comma-separated values)
file into the datasource's [S3 path](/rest/customer_profiles#read-dcpdatasource).

### 6.  QA integration

To test the integration end-to-end, verify that:
- A datasource has been creating in the the datasource dashboard
- Datasource attributes appear in the audience builder under "Dynamic Customer Profiles" and you can create an audience
  based on these attributes
- You can run a experiment targeted to this audience based on uploaded data.
