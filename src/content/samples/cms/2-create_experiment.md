---
template: inline
title: Create an experiment
html: |
  <h1>Variation #1</h1>
  <input type="text" id="post_title1" class="optimizely_variation" placeholder="Alternate Title 1">
  <h1>Variation #2</h1>
  <input type="text" id="post_title2" class="optimizely_variation" placeholder="Alternate Title 2">
  <a id="optimizely_create" class="button-primary">Create Experiment</a>

js: |
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
---

Now, when users go to write their posts, they'll see a new section for A/B testing headlines. This section will include two inputs for users to write alternate headlines and a button to create the experiment.

When the button is pressed, we run the `createExperiment` function. This function [creates an experiment]({{site.paths.rest}}#create-experiment) by providing a `description` based on the post's title and an `edit_url` based on the permalink of the Wordpress post. We send these as a POST request and register a callback to run the `onExperimentCreated` function when it completes.

We aren't done yet. The experiment we created has two built-in variations, but now we need to add a third and update the content. Since we're adding a variation, we also need to calculate the traffic weight to use for each one. Once we've done this, we'll call the `createVariation` function explained below.
