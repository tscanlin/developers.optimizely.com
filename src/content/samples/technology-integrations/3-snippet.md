---
template: inline
title: Snippet implementation
anchor: technology-integrations-snippet
---

The WordPress integration does headline testing in addition to a snippet integration. Below a code sample that uses a WordPress function to add the Optimizely snippet to the page. Implementing the Optimizely snippet is straightforward: a customer needs to implement 1 line ("snippet") to their html template. There are a few things to consider when this line is added to the template:

* The snippet needs to be added synchronously and as high as possible in the head section of the page to make sure Optimizely can execute before a browser shows the page to a visitor. If Optimizely is implemented correctly, Optimizely can prevent a flicker on the page when an experiments is running.
* If synchronous implementation isn't possible, we recommend to implement a timeout that blocks the Optimizely script from executing when it isn't loaded within 2 seconds (due to a bad connection for example).
* If a snippet isn't implemented synchronously we still recommend to ad the snippet to the page as high as possible.

Every project has their own snippet. The snippet has this format:

`<script src="//cdn.optimizely.com/js/{{project_id}}.js"></script>`

where {{project_id}} is replaced by the id of an Optimizely project. An example:

`<script src="//cdn.optimizely.com/js/2734370016.js"></script>`

#### 1. Create a 'project id' dialog
To implement the correct snippet, you need to know which project to implement.

*Option 1*

Within the technology you are working with, create a dialog that requests the Optimizely project id.

*Option 2*
Create a page where the user can authenticate with Optimizely oAuth. When the user is authenticated, you can let him choose from their list of projects. To get a list of functions use the following rest function:

[List of projects](/rest/reference/index.html#list-projects)

The objects returned contain a project id. Save the project id of the chosen project somewhere.

##### Example dialog
<img src="../../assets/img/wordpress_dialog.png">


#### 2. Implement snippet in the head section of every page
Write custom code to add the Optimizely snippet to every page automatically, using that project id that was chosen by the user.

##### Example PHP

```php
/**
 * Generates the Optimizely script tag.
 * @param int $project_code
 * @return string
 */
function optimizely_generate_script( $project_id ) {
	return '<script src="//cdn.optimizely.com/js/' . abs( floatval( $project_id ) ) . '.js"></script>';
}

/**
 * Force Optimizely to load first in the head tag.
 */
function optimizely_add_script() {
	$project_id = get_option( 'optimizely_project_id' );
	if ( ! empty( $project_id ) ) {
		// This cannot be escaped since optimizely_generate_script returns a script tag.
		// The output of this script is fully escaped within the function below
		echo optimizely_generate_script( $project_id );
	}
}
add_action( 'wp_head', 'optimizely_add_script', -1000 );
```

[WordPress documentation regarding the wp_head function](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_head)

