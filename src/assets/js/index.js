/**
 * Main entry point for js on the developer docs website.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

// Initialize code syntax highlighting.
var hljs = require('highlight.js');
hljs.initHighlightingOnLoad();

// Add 'tocly' to generate a table of contents.
var tocly = require('./tocly.js');
tocly();

// Add collapsible directive for nav and header dropdown.
var collapsible = require('./collapsible.js');
collapsible();

// Add sidebysideToggles for interactive mode on /rest/reference.
var sidebysideToggles = require('./sidebyside-toggles.js');
sidebysideToggles();

// Add copy code buttons.
var copyBtn = require('./copy-btn.js');
copyBtn();

// Include optimizelyApi for sandbox / interactive mode.
var optimizelyApi = require('./optly-api.js'); // eslint-disable-line

// DOCSEARCH
var docsearch = require('./3rd-party/docsearch.js');
docsearch({
  apiKey: 'cda6ef128f16e7689d91dabb1821d23a',
  indexName: 'optimizely2',
  inputSelector: '#site-search',
});
