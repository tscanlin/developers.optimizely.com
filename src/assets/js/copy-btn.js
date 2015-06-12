/**
 * Add a copy code button to all code samples on the developer docs site.
 *
 * @author Tim Scanlin (tim.scanlin@optimizely.com)
 */

var ZeroClipboard = require('zeroclipboard');

module.exports = function() {
  // Add copy code buttons.
  var copyCodeTemplate = '<div class="copy-code-button">\
  <svg class="lego-icon">\
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#clipboard"></use>\
  </svg></div>';

  $('pre code').after(copyCodeTemplate);

  $('.copy-code-button').each(function(i, el) {
    var clip = new ZeroClipboard(el, {
      forceHandCursor: true,
    });
    clip.on('copy', function(event) {
      var clipboard = event.clipboardData;
      clipboard.setData('text/plain', $(el).prev().text());
    });
  });
};
