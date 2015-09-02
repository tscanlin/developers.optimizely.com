---
template: sidebyside
title: DCP Services
anchor: customer_profile_service
---

A DCP Service provides all Customer Profile related services including storage, processing, and delivery. A DCP Service
stores customer data in a set of [Datasources](/rest/customer_profiles#datasources). A datasource stores a set of
related customer attributes under a common ID space. For example, all customer attributes collected by Optimizely are
stored under the Optimizely datasource; customer attributes from your data warehouse may be stored in a separate
datasource.  Because the same customer will likely be identified using different IDs in different datasources, a DCP
Service also stores [Aliases](/customer_profiles#aliases) (identity links) to reconcile attributes of the same customer
across datasources.

##### Associating Optimizely Projects to a DCP Service
Upon creation, a DCP Service provisions a datasource to store attributes collected by Optimizely. Once a Project is
associated to a DCP Service using [Update Project](/rest/reference/index.html#update-project), the Optimizely datasource
will begin storing project-specific attributes. You may create other datasources in the DCP Service to store related
customer attributes from other sources. Multiple Optimizely projects can be associated to a single DCP Service.

##### Uploading Data
To upload customer attributes from a particular source, add a datasource to your DCP Service. Each DCP Service contains
a provisioned [AWS](www.aws.amazon.com/) account used for bulk data uploads. Details on sending data to a datasource can
be found [here](/rest/customer_profiles#dcp_datasources). You can send customer attributes to a datasource in a
streaming manner using the [Customer Profile APIs](/rest/customer_profiles#customer_profiles) or in batch using the
[Datasources S3 bucket](/rest/customer_profiles#create-customer-profile).


<img src="/assets/img/dcp/DCP_Service.png">
