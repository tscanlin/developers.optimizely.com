/**
 * Tocly is similar to tocify (http://gregfranko.com/jquery.tocify.js/) (except its native w/ no jquery UI)
 * This creates a toble of contents base on headings that allows users to easily jump to different sections.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

var smoothScroll = require('smooth-scroll');
var each = [].forEach;
var some = [].some;

module.exports = function() {
  // Document elements.
  var body = document.body;
  var header = document.getElementById('header');
  var nav = document.getElementById('nav');

  // Selectors.
  var toc = document.querySelector('.active + .toc');
  var headings = document.querySelectorAll('h2, h3');
  var tocLinks; // = toc.querySelectorAll('.toc-link');

  // Classes.
  var IS_COLLAPSED_CLASS = 'is-collapsed';
  var ANIMATION_DURATION = 300;
  // No header offset needed because of the ::before pseudo element on headers.
  var HEADER_OFFSET = 0;

  // Build Table of Contents Links.
  var subGroup;
  var lastHeading;
  // Iterate over headings.
  each.call(headings, function(heading, i) {
    // If the page has the toc container the build the toc.
    if (toc && headings.length > 0) {
      if (lastHeading) {
        var lastHeadingLevel = +lastHeading.nodeName.split('H').join('');
        var currentHeadingLevel = +heading.nodeName.split('H').join('');
        if (currentHeadingLevel > lastHeadingLevel) {
          subGroup = document.createElement('ul');
          subGroup.setAttribute('class', 'unstyled soft--left collapsible ' + IS_COLLAPSED_CLASS);
          toc.appendChild(subGroup);
        } else if (currentHeadingLevel < lastHeadingLevel) {
          subGroup = undefined;
        }
      }

      if (!subGroup) {
        toc.appendChild(makeLink(heading));
      } else {
        subGroup.appendChild(makeLink(heading));
      }

      lastHeading = heading;
    }

    // Init smooth scroll when toc is built.
    if (toc && i === (headings.length - 1)) {
      smoothScroll.init({
        easing: 'easeInOutCubic',
        offset: HEADER_OFFSET,
        speed: ANIMATION_DURATION,
        updateURL: true,
      });

      tocLinks = toc.querySelectorAll('.toc-link');
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

  var highlight = true;
  function updateSidebar() {
    var top = document.documentElement.scrollTop || body.scrollTop;
    var headerHeight = header.offsetHeight;

    if (top > headerHeight) {
      header.classList.remove('background--brand-darker');
    } else {
      header.classList.add('background--brand-darker');
    }

    if (nav) {
      // Fix the nav on scroll.
      if (top > headerHeight) {
        nav.className = 'fixed';
      } else {
        nav.className = '';
      }

      if (toc && highlight && headings.length > 0) {
        // Highlight the toc based on scroll position.
        var collapsibleLists = toc.querySelectorAll('ul.collapsible');
        var headingsOffset = HEADER_OFFSET - 30;
        var topHeader;
        // Using some instead of each so that we can escape early.
        some.call(headings, function(heading, i) {
          if (heading.offsetTop > top + headingsOffset) {
            // Don't allow negative index value.
            var index = (i === 0) ? i : i - 1;
            topHeader = headings[index];
            return true;
          // This allows scrolling for the last heading on the page.
          } else if (i === headings.length - 1) {
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
        // NOTE: Right now this only supports two levels.
        var activeList;
        if (activeTocLink.classList.contains('toc-link--H2')) {
          activeList = activeTocLink.parentNode.nextElementSibling;
        } else {
          activeList = activeTocLink.parentNode.parentNode;
        }

        // activeList may not exist if the H2 doesn't have any sub-sections.
        if (activeList) {
          activeList.classList.remove(IS_COLLAPSED_CLASS);
        }
      }
    }
  }

  // Bind to tocLink clicks to temporarily disable highlighting
  // while smoothScroll is animating.
  if (tocLinks) {
    each.call(tocLinks, function(tocLink) {
      tocLink.addEventListener('click', function() {
        highlight = false;
        window.setTimeout(function() {
          highlight = true;
        }, ANIMATION_DURATION);
      });
    });
  }
};