/**
 * Main entry point for js on the developer docs website.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

// Add redirect js for redirecting url hashes.
var redirect = require('./redirect.js');
redirect();

// Wait until DOM content has loaded.
document.addEventListener("DOMContentLoaded", function(event) {
  // Initialize code syntax highlighting.
  var hljs = require('highlight.js');
  hljs.initHighlightingOnLoad();

  // Add 'tocbot' to generate a table of contents.
  var tocbot = require('tocbot');
  tocbot.init({
    contentSelector: 'body',
    tocSelector: '.active + .toc',
    headingSelector: 'h2, h3, h4.subLink',
  });

  // Add collapsible directive for nav and header dropdown.
  var collapsible = require('./collapsible.js');
  collapsible();

  // Add toggler for interactive mode on /rest/reference.
  var toggler = require('./toggler.js');
  toggler();

  // Add copy code buttons.
  var copyBtn = require('./copy-btn.js');
  copyBtn();

  // Include optimizelyApi for sandbox / interactive mode.
  var optimizelyApi = require('./optly-api.js'); // eslint-disable-line

  // DOCSEARCH
  var docsearch = require('./3rd-party/docsearch.js');
  docsearch({
    apiKey: 'cda6ef128f16e7689d91dabb1821d23a',
    indexName: 'optimizely-developers',
    inputSelector: '#site-search',
  });
});
