// Initialize code syntax highlighting.
hljs.initHighlightingOnLoad();

var smoothScroll = require('smooth-scroll');
var each = [].forEach;
var some = [].some;

// Document elements.
var body = document.body;
var header = document.getElementById('header');
var nav = document.getElementById('nav');
var content = document.getElementById('content');

// Selectors.
var toc = document.querySelector('.active + .toc');
var headings = content.querySelectorAll('h2, h3');
var collapsers = document.querySelectorAll('[data-collapser]');

// Classes.
var IS_COLLAPSED_CLASS = 'is-collapsed';


// Build Table of Contents Links.
var subGroup, lastHeading;
// Iterate over headings.
each.call(headings, function(heading, i) {
  // If the page has the toc container the build the toc.
  if (toc && headings.length > 0) {
    if (heading.nodeName === 'H2') {
      toc.appendChild(makeLink(heading));
      lastHeading = heading;
    }
    else if (heading.nodeName === 'H3') {
      if (lastHeading.nodeName === 'H2') {
        subGroup = document.createElement('ul');
        subGroup.setAttribute('class', 'unstyled soft--left collapsible ' + IS_COLLAPSED_CLASS);
        toc.appendChild(subGroup);
      }
      subGroup.appendChild(makeLink(heading));
      lastHeading = heading;
    }
  }

  // Init smooth scroll when toc is built.
  if (toc && i === (headings.length - 1)) {
    smoothScroll.init({
      easing: 'easeInOutCubic',
      offset: 20,
      speed: 500,
      updateURL: true,
    });
  }
});


// Make list item + link.
function makeLink(heading) {
  var item = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = heading.textContent;
  a.setAttribute('data-scroll', '');
  a.setAttribute('href', '#' + heading.id);
  a.setAttribute('class', 'soft--left toc-link toc-link--' + heading.nodeName);
  item.appendChild(a);
  return item;
}

// Listen to the scroll event to update the nav / sidebar.
window.addEventListener('scroll', updateSidebar);
window.addEventListener('resize', updateSidebar);

function updateSidebar() {
  var top = document.documentElement.scrollTop || body.scrollTop;
  var headerHeight = header.offsetHeight;

  if (nav) {
    // Fix the nav on scroll.
    if (top > headerHeight) {
      nav.className = 'fixed';
    }
    else {
      nav.className = '';
    }

    if (toc) {
      // Highlight the toc based on scroll position.
      var tocLinks = toc.querySelectorAll('.toc-link');
      var collapsibleLists = toc.querySelectorAll('ul.collapsible');
      var headingsOffset = 30;
      var topHeader;
      // Using some instead of each so that we can escape early.
      some.call(headings, function(heading, i) {
        if (heading.offsetTop > body.scrollTop - headingsOffset) {
          // Don't allow negative index value.
          var index = (i === 0) ? i : i - 1;
          topHeader = headings[index];
          return true;
        }
        // This allows scrolling for the last heading on the page.
        else if (i === headings.length - 1) {
          topHeader = headings[headings.length - 1];
          return true;
        }
      });

      // Remove the active class from the other tocLinks.
      each.call(tocLinks, function(tocLink) {
        tocLink.classList.remove('active');
      });

      // Add the active class to the active tocLink.
      var activeTocLink = toc.querySelector('.toc-link.toc-link--' + topHeader.nodeName + '[href="#' + topHeader.id + '"]');
      activeTocLink.classList.add('active');

      // Collapse the other collapsible lists.
      each.call(collapsibleLists, function(collapsibleList) {
        collapsibleList.classList.add(IS_COLLAPSED_CLASS);
      });

      // Expand the active link's collapsible list.
      var parentList = activeTocLink.parentNode.parentNode;
      if (parentList.classList.contains(IS_COLLAPSED_CLASS)) {
        parentList.classList.remove(IS_COLLAPSED_CLASS);
      }
    }
  }
}


// Make pseudo directive for collapsible sections.
each.call(collapsers, function(collapser) {
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
