---
partial: _inline.html
title: Experiment results (pre-Stats-Engine)
anchor: results
---
To illustrate how to [get experiment results](/rest/reference/index.html#get-results) via the REST API, as served prior
to the launch of the [Optimizely Stats Engine](https://help.optimizely.com/hc/en-us/articles/200039895), we've built a
basic web application that gets the top-level results for the active experiments in a project.  This code sample walks
through all of the REST API calls that are used by the web application.

You can download the full source code from the link below.

<a class="btn btn-primary" target="_blank" href="https://github.com/optimizely/optimizely-api-samples/tree/master/results_api_sample">Download source code</a>

The application uses jQuery to make the API calls, as described in our [AJAX code sample](#ajax).
