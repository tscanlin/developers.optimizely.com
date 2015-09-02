---
template: sidebyside
endpoint: alias/567/678/oeu1234.5678
endpoint_domain: https://vis.optimizely.com/api/
type: POST
title: Create Alias
anchor: create-alias
request:
  data:
    8905: "sfdc1223a3_ji$ddd"
    1232: "mkto1245433:213ad"
---

Alias customerId from one Datasource with the customerId of the Optimizely Datasource.

In the example above, the displayed Ids in Datasources *8905* and *1232* are now linked the Optimizely User ID *oeu1234.5678* (*678* is the Optimizely DatasourceID and *567* is the DCP Service ID).

The payload for this POST rest api call should have the content type `application/json`.

<div class="lego-attention lego-attention--warning push--bottom">

The `datasourceId` for this call should be the datasourceId of the Optimizely Datasource. You can find this id using [List Datasources](/rest/customer_profiles/#list-dcpservice-datasources)

The `customerId` for this call should be the Optimizely User ID.

</div>
