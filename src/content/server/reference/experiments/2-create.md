---
template: multi-example
endpoint: projects/1234/experiments/
endpoint_prefix: projects/
endpoint_option: 1234
endpoint_suffix: /experiments/
type: POST
anchor: create-experiment
title: Create a new experiment
code_examples:
  python:
    lang: python
    request: |
      from datetime import datetime
      now = datetime.now()
      mm = str(now.month)
      print mm + "/" + dd + "/" + yyyy + " " + hour + ":" + mi + ":" + ss
    response: |
      {
        "foo": "bar"
      }
  java:
    lang: java
    request: |
      String a = String.valueOf(2);   //integer to numeric string
      int i = Integer.parseInt(a); //numeric string to an int
    response: |
      {
        "foo": "bar"
      }
---

The `project_id` is required in the URL, and the `description` and `edit_url` are required in the body. The [other editable arguments](#update-experiment) are all optional.

When you create an experiment, Optimizely will also fill in associated data by default. These defaults mimic the behavior of Optimizely's editor and include

When you create an experiment, Optimizely will also fill in associated data by default. These defaults mimic the behavior of Optimizely's editor and include

When you create an experiment, Optimizely will also fill in associated data by default. These defaults mimic the behavior of Optimizely's editor and include:

- Two variations in `variation_ids` named "Original" and "Variation #1". The default variations have 50% traffic each and no code.
- One URL targeting condition in `url_conditions`. By default, your experiment is targeted to the `edit_url` with a simple match.
- Traffic allocated to 100% in `percentage_included`. Traffic is measured in basis points. Divide by 100 to get a percentage.
- A `status` of "Not started", meaning the experiment will not be running initially.
- Immediate `activation_mode`, rather than manual.
- The `experiment_type` will be a normal A/B test, rather than a multivariate or multipage test.

<!-- Code snippets inline would need to be written with HTML -->

<!-- Python Snippet -->
<div class="hidden visible" data-toggle-section="python-code">
<h4>Python Snippet</h4>

<pre><code class="hljs lang-python">#!/usr/bin/env python
# Some python code sample
</code></pre>
</div>

<!-- Java Snippet -->
<div class="hidden" data-toggle-section="java-code">
<h4>Java Snippet</h4>

<pre><code class="hljs lang-java">#!/usr/bin/java
// Some java code sample
</code></pre>
</div>

More explanations about the above snippets...

etc...
