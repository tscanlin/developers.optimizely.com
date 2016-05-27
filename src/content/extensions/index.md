---
template: page-sidebar
title: "Extensions"
---

## Extensions

Widgets are reusable templates for making changes in the visual editor. A developer can build a widget with HTML, CSS, and JavaScript. Then, a non-technical user can insert the widget in the editor and tweak parameters. For example, a developer could build a carousel widget styled for a homepage and coded to rotate between images, and then a merchandiser could insert it and choose the right images for a specific campaign.


You can create a widget under **Implementation > Widgets**. Each widget has a unique **ID** that identifies it on the page. If the same widget is inserted in multiple places, the code will only be included once and each instance will call into it by ID. Widgets can be inserted on multiple pages, but you can choose one **Editor URL** that will appear in the widget builder. The **Name** and **Description** are human-readable text in the Optimizely interface.

![](/assets/img/js/widget-builder.png)

### Fields

Once you create the widget, you'll land in the Widget Builder. In the left sidebar, you can add optional fields. Each field defines a property that can be customized on the widget. For example, on a popup, you could provide fields to customize the message, the call to action, the width and height, and the timing of when it should appear.

Each field requires an API name, which you can use to reference it in HTML. For example, if you create a field with the **API Name** "height", you can reference it in HTML as `{{ widget.height }}` or in JS as ``widget.height``. The **Label** is a human readable name like "Popup Height", and you can add an optional **Default Value** like `400`.


You can use the widget fields and define its behavior by using the top code boxes.

### HTML

The body of the widget can be written in the HTML box. You can write any HTML here and then decide where it gets injected in the Apply JS section. In addition to vanilla HTML, you can use [mustache syntax](http://mustache.github.io/mustache.5.html) to add more advanced logic like loops and conditionals.

You can reference field values by using the API name on the widget object like ``{{ widget.title }}``. For non-escaped values like an HTML or rich text field, use triple brackets like ``{{{ widget.contents }}}``.

##### Example
```
<div class="banner" style="background-color: {{widget.color}}">
  {{{ widget.text }}}. 
  <a href="{{widget.link}}">{{{ widget.link_text }}}</a>
</div>
```

### CSS

Some widgets may not need any CSS because they inherit styles from the page itself. However, you can add additional styling in the CSS box. This will be injected on the page through a `<style>` tag.

Note that CSS doesn't support field values, so if you want to use those in styling you can do it directly in the HTML via inline styles, e.g. `<div class="banner" style="background-color: {{widget.color}}">`.

##### Example
```
.banner {
  color: white;
  padding: 10px;
  position: fixed;
  top: 0px;
  z-index: 100000000;
  width: 100%;
  text-align: center;
  height: 45px;
}

.banner a {
  text-decoration: underline;
  color: white;
}

body {
 margin-top: 45px; 
}
```

### Apply JS

The Apply JS code is used to inject the widget onto the page. At a minimum, it should take the HTML and insert it at a selector (which can itself be specified as a field, or hard-coded). You can use [utilities like waitForElement](#waitForElement) to [control the timing](#timing) of how your code runs. Some widgets will also have more complex logic, like calling out to an external service.

The scope of the apply JS code includes:
- `widget`: the configuration of the widget, including all fields as properties e.g. `widget.height`
- `widget.$html`: the compiled HTML
- `widget.$render`: a function to compile the HTML template on the fly, useful when dealing with asynchronous data (see below)
- `widget.$id`: the ID of the widget, e.g. `top_banner`
- `widget.$instance`: a unique identifier for a specific instance of the widget. If the widget is used more than once on a page, each one will have its own instance. Example: `AE8D40E3-785E-4A31-A9DF-4ED6E0681366`

When all the template data is available immediately, `widget.$html` will automatically render the template into final HTML. But when you want to use a widget with asynchronous data, e.g. based on an AJAX request, you can use `widget.$render` to compile the HTML template with a specific context. The render function takes an object with each value to pass through to the template.

##### Examples
```js
var utils = window.optimizely.get('utils');

// Insert at a hard-coded position
$(document).ready(function() {
  $('body').prepend(widget.$html);  
})

// Let the user choose the selector
utils.waitForElement(widget.selector).then(function() {
  $(widget.selector).append(widget.$html)  
})

// Render using asynchronous data
recommender.fetchRecommendations(productId).then(function(recos) {
  var products = recos.slice(0, widget.max);
  var html = widget.$render({
    widget: widget,
    products: products,
  });
  $(widget.selector).after(html);
}
```

### Undo JS

Undo JS is used to "clean up" after a widget. It's used in the editor, when changing field values or removing an existing widget. Undo JS should remove the element and any other side-effects.

One way to write undo JS is to use the `widget.$instance` value. For example, you could create a widget with HTML starting like this:
```html
<div class="banner" data-widget-instance="{{widget.$instance}}">
```

Then remove it using Undo JS like:
```js
$("[data-widget-instance=" + widget.$instance + "]").remove();
```