/**
 * Add toggles for sections in the sidebar on /rest/reference.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

module.exports = function() {
  var each = [].forEach;
  var body = document.body;

  // Add state.js for managing and persisting state.
  var LS = require('./ls.js');
  var ls = LS({
    uniqueKey: 'oDevDocs',
  });

  // Constants.
  var TOGGLE_CONTAINER_CLASS = 'js-toggle-container';
  var TOGGLE_SECTION_ATTRIBUTE = 'data-toggle-section';
  var TOGGLE_TRIGGER_ATTRIBUTE = 'data-toggle-trigger';
  var TOGGLE_TRIGGER_CLASS_ATTRIBUTE = 'data-toggle-trigger-class';
  var TOGGLE_TRIGGER_PROP_ATTRIBUTE = 'data-toggle-trigger-prop';
  var TOGGLE_CLASS = 'visible';

  var toggleContainer = body.querySelector('.' + TOGGLE_CONTAINER_CLASS);

  if (toggleContainer !== null) {
    var toggleSections = body.querySelectorAll('[' + TOGGLE_SECTION_ATTRIBUTE + ']');
    var toggleTriggers = toggleContainer.querySelectorAll('[' + TOGGLE_TRIGGER_ATTRIBUTE + ']');
    each.call(toggleTriggers, function(elm) {
      elm.addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        // Support multiple classes.
        var toggleTriggerClasses = target.getAttribute(TOGGLE_TRIGGER_CLASS_ATTRIBUTE).split(' ');
        var toggleSectionId = target.getAttribute(TOGGLE_TRIGGER_ATTRIBUTE);
        var toggleProp = target.getAttribute(TOGGLE_TRIGGER_PROP_ATTRIBUTE);

        // Persist value in localStorage if it has TOGGLE_TRIGGER_PROP_ATTRIBUTE.
        if (toggleProp) {
          var val = toggleSectionId.split('-code').join('');
          ls.setItem(toggleProp, val);
        }

        each.call(toggleContainer.querySelectorAll('.' + toggleTriggerClasses.join('.')), function(el) {
          // Support multiple classes.
          el.classList.remove.apply(el.classList, toggleTriggerClasses);
        });
        // Support multiple classes.
        target.classList.add.apply(target.classList, toggleTriggerClasses);

        // Remove visible class from all toggle sections.
        each.call(toggleSections, function(el) {
          el.classList.remove(TOGGLE_CLASS);
        });

        // Add visible class to toggle sections that have a matching id.
        var sectionsToToggle = body.querySelectorAll('[' + TOGGLE_SECTION_ATTRIBUTE + '="' + toggleSectionId + '"]');
        each.call(sectionsToToggle, function(el) {
          el.classList.add(TOGGLE_CLASS);
        });
      });
    });
  }
};
