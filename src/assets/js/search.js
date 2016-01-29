/**
 * Add toggles for sections in the sidebar on /rest/reference.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

module.exports = function() {
  var flattenedArray = [];

  // Get the JSON data.
  $.getJSON('/content.json', function(data) {
    // Flatten nested structure into an array to make building search results easier.
    function flatten(d, rootPath) {
      for (var key in d) {
        if (d[key].title) {
          d[key].url = rootPath + key + '.html';
          flattenedArray.push(d[key]);
        } else {
          flatten(d[key], rootPath + key + '/');
        }
      }
    }

    // Start flattening data.
    flatten(data, '/');
  });

  var $searchBox = $('.js-search');
  var $searchResults = $('.js-search-results');
  // Bind to keyup event in search box.
  $searchBox.keyup(function(event) {
    console.log(event)
    var searchField = $searchBox.val();
    if (searchField === '') {
      $searchResults.hide();
    } else {
      // If user clicks down arrow select first item.
      if (event.keyCode === 40) {
        $searchResults.find('li:first-child a').focus();
        return;
      }

      var myExp = new RegExp(searchField, 'i');

      // Build search box HTML.
      var output = '';
      flattenedArray.forEach(function(item) {
        if (item.title.search(myExp) !== -1) {
          output += '<li class="line--tight">';
          output += '<a href="' + item.url + '" class="block-list__link flush">';
          output += '<div>';
          output += item.title;
          output += '</div>';
          output += '<div class="muted truncate">';
          output += item.url;
          output += '</div>';
          output += '</a>';
          output += '</li>';
        }
      });

      $searchResults.html(output).show();
    }
  });

  // Scroll with arrow keys.
  $(document).keyup(function(event) {
    if ($searchBox.is(event.target)) {
      return;
    }

    var $focusedEl = $searchResults.find('li a:focus');
    if ($focusedEl) {
      if (event.keyCode === 38) { // Up
        $focusedEl.parent().prev().find('a').focus();
      } else if (event.keyCode === 40) { // Down
        $focusedEl.parent().next().find('a').focus();
      }

      if ($focusedEl.parent().index() === 0 && event.keyCode === 38) {
        $searchBox.focus();
      }
    }

    if (event.keyCode === 27) { // Escape key hides results.
      $searchResults.hide();
    }
  });
};
