// Initialize code syntax highlighting.
hljs.initHighlightingOnLoad();

var each = [].forEach;

// Document elements.
var body = document.body;
var header = document.getElementById('header');
var nav = document.getElementById('nav');
var content = document.getElementById('content');

var quickjump = document.querySelector('.quickjump');
var headings = document.querySelectorAll('h2, h3');
var collapsers = document.querySelectorAll('[data-collapser]');

var IS_COLLAPSED_CLASS = 'is-collapsed';

var topPath = '/' + window.location.pathname.split('/')[1] + '/';


// QUICKJUMP STUFF
var subGroup, lastHeading;
// Iterate over headings.
each.call(headings, function(heading) {
  // If the page has the quickjump container.
  if (quickjump && headings.length > 0) {
    if (heading.nodeName === 'H2') {
      quickjump.appendChild(makeLink(heading));
      lastHeading = heading;
    }
    else if (heading.nodeName === 'H3') {
      if (lastHeading.nodeName === 'H2') {
        subGroup = document.createElement('ul');
        subGroup.setAttribute('class', 'soft--left');
        quickjump.appendChild(subGroup);
      }
      subGroup.appendChild(makeLink(heading));
      lastHeading = heading;
    }
  }
});

// Make list item + link.
function makeLink(heading) {
  var item = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = heading.textContent;
  a.setAttribute('href', '#' + heading.id);
  a.setAttribute('class', 'quickjump__link soft--left');
  item.appendChild(a);
  return item;
}

// Listen to the scroll event to update the nav / sidebar.
window.addEventListener('scroll', updateSidebar);
window.addEventListener('resize', updateSidebar);

function updateSidebar() {
  var top = document.documentElement.scrollTop || body.scrollTop;
  var headerHeight = header.offsetHeight;

  console.log(top, headerHeight, nav)
  if (top > headerHeight) {
    nav.className = 'fixed';
  }
  else {
    nav.className = '';
  }
}



// Make pseudo directive for collapsible sections.
each.call(collapsers, function(collapser) {
  // if (collapser.getAttribute('href') === topPath) {
  //   collapser.nextElementSibling.classList.remove(IS_COLLAPSED_CLASS);
  // }

  collapser.addEventListener('click', function(e) {
    e.preventDefault();

    var collapsible = collapser.nextElementSibling;
    var isCollapsed = collapsible.classList.contains(IS_COLLAPSED_CLASS);
    if (isCollapsed) {
      collapsible.classList.remove(IS_COLLAPSED_CLASS);
    }
    else {
      collapsible.classList.add(IS_COLLAPSED_CLASS);
    }
  })
});
