---
template: inline
title: Connect a project
html: |
  <h3>Enter Your API Token</h3>
  <input id="token" type="text" />
  <button id="connect_optimizely">Connect Optimizely</button>
  <h3>Choose a Project</h3>
  <select id="project_id">
    <option value="">Connect Optimizely to choose a project...</option>
  </select>
js: |
  $("button#connect_optimizely").click(function() {

    $("#project_id").html("<option>Loading projects...</option>");

    // Authenticate and send the request
    optly = new OptimizelyAPI($("#token").val());
    optly.get('projects/', function(response) {

      $("#project_id").empty();

      $.each(response, function(key, val) {
        $("#project_id").append("<option value='" + val.id + "'>" + val.project_name + "</option>");
      });

    });
  });
---

Our plugin starts with a configuration page that lets users connect their Optimizely account to Wordpress. It requests all the information needed to authenticate and run experiments.

First, we ask the user for their API token on our plugin configuration page. We use this to [authenticate]({{site.paths.rest}}#authentication) with the REST API.

We also ask them to choose a project to create the experiment in. They make this choice using a dropdown menu that we will populate using the "Connect Optimizely button."

When the user presses that button, we call the `GET projects/` endpoint to [list out all the projects]({{site.paths.rest}}#list-projects) in their account. For each project, we show its name in the dropdown and store its ID in the value attribute for submission to a form.
