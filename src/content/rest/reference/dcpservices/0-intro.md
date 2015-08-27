---
template: sidebyside
title: DCP Services
anchor: customer_profile_service
---

A DCP Service is a set of databases and servers that handle all related Customer Profile operations including storage, processing, and delivery. A DCP Service holds a set of [Datasources](/customer_profiles#datasources) (a collection of profile attributes within an ID space) and all the [Aliases](/customer_profiles#aliases) (identity links) to reconcile Profile attributes across datasources.

Upon associating an Optimizely Project with a DCP Service, a DCPService will create a Datasource to store Optimizely created Customer Profiles. To upload visitor attributes from other sources, add Datasources to a DCP Service. Each DCPService contains a provisioned [AWS](#linktocome) account used for bulk Customer Profile uploads.

Details on sending data to a Datasource can be found [here](/customer_profiles#datasources). You can send visitor attributes to a Data source in a streaming manner using our REST APIs or in batch using a Datasources S3 bucket.

Upon creation a DCP Service must be added to an Optimizely Project using [Update Project](/rest/reference/index.html#update-project) .
