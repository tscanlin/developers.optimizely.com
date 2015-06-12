/**
 * Add a collapsibe directive.
 * Example: <a data-collapser>I will collapse you!</a>
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

module.exports = function() {
  var each = [].forEach;
  // var some = [].some;

  // Selectors.
  var collapsers = document.querySelectorAll('[data-collapser]');

  // Classes.
  var IS_COLLAPSED_CLASS = 'is-collapsed';

  // Make pseudo directive for collapsible sections.
  each.call(collapsers, function(collapser) {
    collapser.addEventListener('click', function(e) {
      e.preventDefault();

      var collapsible = collapser.nextElementSibling;
      var isCollapsed = collapsible.classList.contains(IS_COLLAPSED_CLASS);
      if (isCollapsed) {
        collapsible.classList.remove(IS_COLLAPSED_CLASS);
      } else {
        collapsible.classList.add(IS_COLLAPSED_CLASS);
      }
    });
  });
};
