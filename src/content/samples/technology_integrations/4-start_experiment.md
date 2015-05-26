---
template: sidebyside
title: Start the experiment
anchor: technology_integrations_start
js: |
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
---

Finally, we'll add a start button so users can run the experiment directly from Wordpress. Once it's started, we'll turn it into a pause button to stop the running experiement.

This button will update the experiment's `status` to `Running` or `Paused`.
