---
template: inline
title: Snippet integrations
anchor: technology-integrations-snippet
---

The wordpress integration does headline testing in addition to a snippet integration. Below a code sample that uses a Wordpress function to add the Optimizely snippet to the page.

#####Example PHP

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

[Wordpress documentation regarding the wp_head function](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_head)