---
template: sidebyside
title: DCP Services
anchor: dcp_services
---

A DCP Service provides all Customer Profile related services including storage, processing, and delivery. A DCP Service
stores customer data in a set of [datasources](/rest/customer-profiles#dcp_datasources). A datasource stores a set of
related customer attributes under a common ID space. For example, all customer attributes collected by Optimizely are
stored under the Optimizely datasource; customer attributes from your data warehouse may be stored in a separate
datasource.  Because the same customer will likely be identified using different IDs in different datasources, a DCP
Service also stores [aliases](/rest/customer-profiles#alias) (identity links) to reconcile attributes of the same customer
across datasources. In the figure below, because the customer identified by `ANON_ID_1` in "My Data Warehouse" is the
same customer identified by `OEU_2` in "Optimizely Datasource", the Alias Table records this identity as a row.

<img src="/assets/img/dcp/DCP_Service.png">

##### Associating Optimizely Projects to a DCP Service
Upon creation, a DCP Service provisions a datasource to store attributes collected by Optimizely. Once a Project is
associated to a DCP Service using [update project](/rest/reference/index.html#update-project), the Optimizely datasource
will begin storing project-specific attributes. You may create other datasources in the DCP Service to store related
customer attributes from other sources. Multiple Optimizely projects can be associated to a single DCP Service.

##### Uploading Data
To upload customer attributes from a particular source, [add a datasource](/rest//customer_profiles#create-dcpdatasource)
to your DCP Service. Each DCP Service contains a provisioned [AWS](http://aws.amazon.com/) account used for bulk data
uploads.  Details on uploading data to a datasource can be found [here](/rest/customer-profiles#customer_profiles). You
can upload customer attributes to a datasource in a streaming manner using the [customer profile
APIs](/rest/customer-profiles#update-customer_profile) or in bulk using the [datasources S3
bucket](/rest/customer-profiles#bulk).
