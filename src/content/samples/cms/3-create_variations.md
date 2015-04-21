---
title: Create variations
js: |
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
---

To create a variation, we first generate the variation code. We use a template based on the Wordpress theme, and then we drop in the values for our variation. The result would be:

{% highlight js %}
$(".post-27 .entry-title a").text("Alternate Title #1");
{% endhighlight %}

Once we've generated this variation code, we include it in the `js_component` parameter of our API request. We also add a variation title and weight.

In this example, we have two alternate headlines plus an original. When we created the experiment, it also came with two variations that were created automatically. We'll leave variation 0 alone as the original, update variation 1 to use the first alternate headline, and create a new variation 2 with the second alternate headline.

Once all the PUT and POST requests have returned, we're done! At this point, we can let the user know that the experiment is created and ready.