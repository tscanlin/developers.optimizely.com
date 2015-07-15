---
template: inline
title: Headline testing
anchor: technology-integrations-cms
---

This sample goes through a simplified version of our WordPress plug-in, which lets editors write alternate headlines for a blog post and A/B test them directly from their WordPress editor. A [PDF version](https://blog.optimizely.com/wp-content/uploads/2015/05/OptimizelyHeadlineTesting.pdf) is also available, which includes screenshots.

To see the full source of our plug-in or download it to use on your own site, click the button below. Note that this plug-in is just a proof of concept -- we encourage you to fork it, improve it for your own needs, and share it with the community.

<a class="lego-button" target="_blank" href="https://github.com/optimizely/wordpress-plugin">Download source code</a>

The plug-in uses jQuery to make the API calls, as described in our [AJAX code sample](#ajax).

#### 1. Create an experiment

Now, when users go to write their posts, they'll see a new section for A/B testing headlines. This section will include two inputs for users to write alternate headlines and a button to create the experiment.

When the button is pressed, we run the `createExperiment` function. This function [creates an experiment]({{site.paths.rest}}#create-experiment) by providing a `description` based on the post's title and an `edit_url` based on the permalink of the WordPress post. We send these as a POST request and register a callback to run the `onExperimentCreated` function when it completes.

We aren't done yet. The experiment we created has two built-in variations, but now we need to add a third and update the content. Since we're adding a variation, we also need to calculate the traffic weight to use for each one. Once we've done this, we'll call the `createVariation` function explained below.

#####Example HTML
    <h1>Variation #1</h1>
    <input type="text" id="post_title1" class="optimizely_variation" placeholder="Alternate Title 1">
    <h1>Variation #2</h1>
    <input type="text" id="post_title2" class="optimizely_variation" placeholder="Alternate Title 2">
    <a id="optimizely_create" class="button-primary">Create Experiment</a>

#####Example Javascript
    $('#optimizely_create').click(createExperiment);

    function createExperiment() {
      $('#optimizely_create').text('Creating...');

      experiment = {}
      experiment.description = "Wordpress: " + $('#title').val();
      experiment.edit_url = $('#post-preview').attr('href');

      optly.post('projects/' + projectId + '/experiments', experiment, onExperimentCreated);

    }

    function onExperimentCreated(experiment) {

      var variations = $('.optimizely_variation').filter(function(){return $(this).val().length > 0})

      // Set variation weights
      var numVariations = variations.length + 1;
      var variationWeight = Math.floor(10000 / numVariations);
      var leftoverWeight = 10000 - variationWeight*numVariations;

      // Create variations
      variations.each(function(index, input) {
        var weight = variationWeight + (index == 0 ? leftoverWeight : 0);
        createVariation(experiment, index + 1, $(input).val(), weight);
      });

    }

#### 2. Connect a project
Our plug-in starts with a configuration page that lets users connect their Optimizely account to WordPress. It requests all the information needed to authenticate and run experiments.

First, we ask the user for their API token on our plug-in configuration page. We use this to [authenticate]({{site.paths.rest}}#authentication) with the REST API.

We also ask them to choose a project to create the experiment in. They make this choice using a drop-down menu that we will populate using the "Connect Optimizely button."

When the user presses that button, we call the `GET projects/` endpoint to [list out all the projects]({{site.paths.rest}}#list-projects) in their account. For each project, we show its name in the dropdown and store its ID in the value attribute for submission to a form.

#####Example HTML
    <h3>Enter Your API Token</h3>
    <input id="token" type="text" />
    <button id="connect_optimizely">Connect Optimizely</button>
    <h3>Choose a Project</h3>
    <select id="project_id">
      <option value="">Connect Optimizely to choose a project...</option>
    </select>

#####Example Javascript
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

#### 3. Create variations

To create a variation, we first generate the variation code. We use a template based on the WordPress theme, and then we drop in the values for our variation. The result would be:

```javascript
$(".post-27 .entry-title a").text("Alternate Title #1");
```

Once we've generated this variation code, we include it in the `js_component` parameter of our API request. We also add a variation title and weight.

In this example, we have two alternate headlines plus an original. When we created the experiment, it also came with two variations that were created automatically. We'll leave variation 0 alone as the original, update variation 1 to use the first alternate headline, and create a new variation 2 with the second alternate headline.

Once all the PUT and POST requests have returned, we're done! At this point, we can let the user know that the experiment is created and ready.
#####Example Javascript
    function createVariation(experiment, index, newTitle, weight) {

      // Generate variation code
      var variationTemplate = '$(".post-$POST_ID .entry-title a").text("$NEW_TITLE");';
      var postId = $('#post_ID').val();
      var originalTitle = $('#title').val();
      var code = variationTemplate
        .replace(/\$OLD_TITLE/g, originalTitle)
        .replace(/\$NEW_TITLE/g, newTitle)
        .replace(/\$POST_ID/g, postId);

      // Request data
      var variation = {
        "description": newTitle,
        "js_component": code,
        "weight": weight,
      }

      // Update variation #1, create the others
      if (index == 1) {
        optly.put('variations/' + experiment.variation_ids[1], variation, onVariationCreated);
      } else {
        optly.post('experiments/' + experiment.id + '/variations', variation, onVariationCreated);
      }

    }

    function onVariationCreated(variation) {
      // When all requests are done, we're finished!
      if (optly.outstandingRequests == 0) {
        alert("Experiment Created!");
      }
    }


#### 4. Start the experiment
Finally, we'll add a start button so users can run the experiment directly from WordPress. Once it's started, we'll turn it into a pause button to stop the running experiement.

This button will update the experiment's `status` to `Running` or `Paused`.

#####Example JavaScript
    function startExperiment(experiment) {
      $('#optimizely_toggle_running').text('Starting...');
      optly.put('experiments/' + experiment.id, {'status': 'Running'}, function(response) {
        // Running
        $('#optimizely_toggle_running').text('Click to pause');
      });
    }

    function pauseExperiment(experiment) {
      $('#optimizely_toggle_running').text('Pausing...');
      optly.put('experiments/' + experiment.id, {'status': 'Paused'}, function(response) {
        // Pause
        $('#optimizely_toggle_running').text('Click to start');
      });
    }
