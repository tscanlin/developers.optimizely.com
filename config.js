var extend = require('xtend');
var build = './build/';
var src = './src/';
var assets = 'assets/';

// Sections for each navigation item.
var BASE_NAV_SECTIONS = {
  'introduction': {
    path: 'introduction',
    title: 'Introduction',
  },
  'getting-started': {
    path: 'getting-started',
    title: 'Getting started',
  },
  'reference': {
    path: 'reference',
    title: 'Reference',
  },
  'faqs': {
    path: 'faqs',
    title: 'FAQs',
  },
  'code-samples': {
    path: 'code-samples',
    title: 'Code Samples',
  },
};


var DATA_NAV_SECTIONS = {
  'introduction': {
    path: 'introduction',
    title: 'Introduction',
  },
  'events': {
    path: 'events',
    title: 'Event API',
  },
  'export': {
    path: 'export',
    title: 'Event Data Export',
  },
};

var JS_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS, {
  'personalization': {
    path: 'personalization',
    title: 'Personalization',
  },
});

var REST_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS, {
  'customer-profiles': {
    path: 'customer-profiles',
    title: 'Dynamic Customer Profiles',
  },
  'conditions': {
    path: 'conditions',
    title: 'Conditions',
  },
});


var MOBILE_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS, {
  'guide': {
    path: 'guide',
    title: 'Tutorial',
  },
  'changelog': {
    path: 'changelog',
    title: 'Changelog',
  },
  'articles': {
    path: 'articles',
    title: 'Articles',
  },
});

var SERVER_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS);
delete SERVER_NAV_SECTIONS ['faqs'];
delete SERVER_NAV_SECTIONS ['code-samples'];

var paths = {
  // Used by gulp tasks to build / compile pages and assets.
  src: src,
  build: build,

  assets: assets,
  img: assets + 'img/',
  js: assets + 'js/',
  scss: assets + 'scss/',
  css: assets + 'css/',

  content: 'content/',
  files: 'files/',
  pages: 'pages/',
  partials: 'partials/',
  templates: 'templates/',
};

// New nav object.
var nav = {};


var overview = {
  path: 'overview',
  title: 'Overview',
  singlePage: true,
};

nav.overview = {
  label: false,
  sections: [
    overview
  ]
};


var javascript = {
  path: 'javascript',
  title: 'JS API',
  sections: JS_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

var ios = {
  path: 'ios',
  title: 'iOS SDK',
  sections: MOBILE_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

var android = {
  path: 'android',
  title: 'Android SDK',
  sections: MOBILE_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

var server = {
  path: 'server',
  title: 'Server-Side SDKs',
  sections: SERVER_NAV_SECTIONS,
  // Hide if its a hidden section unless its the current path (users go direct to the url)
  hiddenSection: true,
};

nav.solutions = {
  label: 'Solutions',
  sections: [
    javascript,
    ios,
    android,
    server,
  ]
};

var rest = {
  path: 'rest',
  title: 'REST API',
  sections: REST_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

nav.management = {
  label: 'Management',
  sections: [
    rest
  ]
};

var data = {
  path: 'data',
  title: 'Data Access',
  sections: DATA_NAV_SECTIONS,
  hiddenSection: true,
};

nav.dataServices = {
  label: 'Data Services',
  sections: [
    data
  ],
};

var integrations = {
  path: 'integrations',
  title: 'Integrations',
  singlePage: true,
  showInHeaderDropdown: true,
};

var apps = {
  path: 'apps',
  title: 'Apps',
  singlePage: true,
  showInHeaderDropdown: true,
};

nav.addOns = {
  label: 'Add Ons',
  sections: [
    integrations,
    apps
  ],
};

nav.community = {
  label: '',
  hidden: true,
  sections: []
};

// Add new nav data to paths object.
paths.nav = nav;
paths.leftNav = [
  'overview',
  'solutions',
  'management',
  'dataServices',
  'addOns',
  'community',
];
// Used on homepage.
paths.allSections = {
  overview: overview,
  javascript: javascript,
  ios: ios,
  android: android,
  server: server,
  rest: rest,
  data: data,
  integrations: integrations,
  apps: apps,
};

// Declare redirects.
var redirects = require('./redirects.js');

module.exports = {
  paths: paths,
  redirects: redirects,
};
