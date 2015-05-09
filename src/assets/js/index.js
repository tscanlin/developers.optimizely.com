// Initialize code syntax highlighting.
hljs.initHighlightingOnLoad();

var smoothScroll = require('smooth-scroll');
smoothScroll.init({
  easing: 'easeInOutCubic',
  offset: 20,
  speed: 1000,
  updateURL: true,
  callbackBefore: function(toggle, anchor) {
    console.log(toggle, anchor);
    debugger;
  },
  callbackAfter: function(toggle, anchor) {
    console.log(toggle, anchor);
    debugger;
  }
});

// window.root = window;
// smoothScroll.animateScroll( null, '#change-log' );

var each = [].forEach;

// Document elements.
var body = document.body;
var header = document.getElementById('header');
var nav = document.getElementById('nav');
var content = document.getElementById('content');

var toc = document.querySelector('.active + .toc');
var headings = document.querySelectorAll('h2, h3');
var collapsers = document.querySelectorAll('[data-collapser]');

var IS_COLLAPSED_CLASS = 'is-collapsed';

// var topPath = '/' + window.location.pathname.split('/')[1] + '/';


// TOC STUFF
var subGroup, lastHeading;
// Iterate over headings.
each.call(headings, function(heading, i) {
  // If the page has the toc container.
  if (toc && headings.length > 0) {
    if (heading.nodeName === 'H2') {
      toc.appendChild(makeLink(heading));
      lastHeading = heading;
    }
    else if (heading.nodeName === 'H3') {
      if (lastHeading.nodeName === 'H2') {
        subGroup = document.createElement('ul');
        subGroup.setAttribute('class', 'unstyled soft--left');
        toc.appendChild(subGroup);
      }
      subGroup.appendChild(makeLink(heading));
      lastHeading = heading;
    }
  }

  if (toc && i === (headings.length - 1)) {
    // console.log(i, smoothScroll);
    // smoothScroll.init({
    //   easing: 'easeInOutCubic',
    //   offset: 20,
    //   speed: 1000,
    //   updateURL: true,
    //   callbackBefore: function(toggle, anchor) {
    //     console.log(toggle, anchor);
    //     debugger;
    //   },
    //   callbackAfter: function(toggle, anchor) {
    //     console.log(toggle, anchor);
    //     debugger;
    //   }
    // });
  }
});


// Make list item + link.
function makeLink(heading) {
  var item = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = heading.textContent;
  a.setAttribute('data-scroll', '');
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

  if (nav) {
    if (top > headerHeight) {
      nav.className = 'fixed';
    }
    else {
      nav.className = '';
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
