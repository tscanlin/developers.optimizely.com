module.exports = {
  // Default redirects from before (relative redirects).
  'android/index.html': {
    redirectTo: 'introduction/index.html'
  },
  'canvas/index.html': {
    redirectTo: '../apps/index.html'
  },
  'ios/index.html': {
    redirectTo: 'introduction/index.html'
  },
  'javascript/index.html': {
    redirectTo: 'introduction/index.html'
  },
  'javascript/guide/index.html': {
    redirectTo: '../getting-started/index.html'
  },
  'rest/index.html': {
    redirectTo: 'introduction/index.html'
  },
  'rest/guide/index.html': {
    redirectTo: '../reference/index.html'
  },
  'samples/index.html': {
    redirectTo: '../javascript/code-samples/index.html'
  },
  'server/index.html': {
    redirectTo: 'reference/index.html'
  },

  // Absolute path redirects.
  'rest/customer-profiles/index.html': {
    redirectTo: '/customer-profiles/index.html'
  },

  // Data export and Event API redirects.
  'data/index.html': {
    redirectTo: '/events/introduction/index.html'
  },
  'data/introduction/index.html': {
    redirectTo: '/events/introduction/index.html'
  },
  'data/export/index.html': {
    redirectTo: '/events/export/index.html'
  },
  'data/events/index.html': {
    redirectTo: '/events/api/index.html'
  },

  // URL hash redirects.
  'rest/reference/index.html#oauth': {
    redirectTo: '/oauth/index.html'
  },
  'rest/reference/index.html#libraries': {
    redirectTo: '/libs/index.html'
  },
  'rest/reference/index.html#get-results': {
    redirectTo: '/results/index.html#get-results'
  },
  'rest/reference/index.html#get-stats': {
    redirectTo: '/results/index.html#get-stats'
  },
  'javascript/personalization/index.html#widgets': {
    redirectTo: '/extensions/index.html'
  },
  'events/events/index.html': {
    redirectTo: '/events/export/index.html'
  },
};
