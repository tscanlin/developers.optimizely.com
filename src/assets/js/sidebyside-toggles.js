/**
 * Add toggles for sections in the sidebar on /rest/reference.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

module.exports = function() {
  var each = [].forEach;
  var body = document.body;

  // Enable toggles anywhere.
  var toggleClass = 'visible';
  var toggleContainer = body.querySelector('.sidebyside-toggles');

  if (toggleContainer !== null) {
    var allToggleSections = body.querySelectorAll('[data-toggle-section]');
    var toggles = toggleContainer.querySelectorAll('.toggle');
    each.call(toggles, function(elm) {
      elm.addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        each.call(toggleContainer.querySelectorAll('.background--brand'), function(el) {
          el.classList.remove('background--brand');
        });
        target.classList.add('background--brand');

        var toggleSectionId = target.getAttribute('data-toggle');

        // Remove visible class from all toggle sections.
        each.call(allToggleSections, function(el) {
          el.classList.remove(toggleClass);
        });

        // Add visible class to toggle sections that have a matching id.
        var sectionsToToggle = body.querySelectorAll('[data-toggle-section="' + toggleSectionId + '"]');
        each.call(sectionsToToggle, function(el) {
          el.classList.add(toggleClass);
        });
      });
    });
  }
};
