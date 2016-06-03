/**
 * Make redirects work for URL hashes
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

module.exports = function() {
  var each = [].forEach;
  var body = document.body;

  var redirects = require('../../../redirects.js');
  var pathAndHash = window.location.pathname + window.location.hash;
  pathAndHash = pathAndHash.split('');
  pathAndHash.shift(); // Remove first slash.
  pathAndHash = pathAndHash.join('');

  if (redirects[pathAndHash]) {
    window.location.replace(redirects[pathAndHash].redirectTo);
  }
};
