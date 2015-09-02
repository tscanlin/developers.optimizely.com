---
template: sidebyside
title: DCP Services
anchor: customer_profile_service
---

A DCP Service is a set of databases and servers that handle all related Customer Profile operations including storage, processing, and delivery. A DCP Service holds a set of [Datasources](/rest/customer_profiles#datasources) (a collection of profile attributes within an ID space) and all the [Aliases](/customer_profiles#aliases) (identity links) to reconcile Profile attributes across datasources.

##### Associating Optimizely Projects to a DCPService
Upon creation, a DCPService provisions a Datasource to store Optimizely created Customer Profiles. Once a Project is associated to a DCPService using [Update Project](/rest/reference/index.html#update-project), the Optimizely Datasource will store project-specific attributes. Multiple Optimizely projects can be associated to a single DCPService.

##### Uploading Data
To upload customer data from other sources, add Datasources to a DCP Service. Each DCPService contains a provisioned [AWS](www.aws.amazon.com/) account used for bulk Customer Profile uploads. Details on sending data to a Datasource can be found [here](/rest/customer_profiles#dcp_datasources). You can send visitor attributes to a Data source in a streaming manner using the [Customer Profile APIs](/rest/customer_profiles#customer_profiles) or in batch using the [Datasources S3 bucket](/rest/customer_profiles#create-customer-profile).


<img src="/assets/img/dcp/DCP_Service.png">
