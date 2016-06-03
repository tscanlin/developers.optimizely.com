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
  'api': {
    path: 'api',
    title: 'Event API',
  },
  'export': {
    path: 'export',
    title: 'Data Export',
  },
};

var JS_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS, {
  'personalization': {
    path: 'personalization',
    title: 'Personalization',
  },
});

delete JS_NAV_SECTIONS['faqs'];

var REST_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS, {
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
delete SERVER_NAV_SECTIONS['faqs'];
delete SERVER_NAV_SECTIONS['code-samples'];

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
  title: 'Web',
  sections: JS_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

var ios = {
  path: 'ios',
  title: 'iOS',
  sections: MOBILE_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

var android = {
  path: 'android',
  title: 'Android',
  sections: MOBILE_NAV_SECTIONS,
  showInHeaderDropdown: true,
};

var server = {
  path: 'server',
  title: 'Server-Side',
  sections: SERVER_NAV_SECTIONS,
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

var oauth = {
  path: 'oauth',
  title: 'OAuth 2.0',
  singlePage: true,
}

nav.management = {
  label: 'Management',
  sections: [
    rest
  ]
};

nav.authentication = {
  label: "Authentication",
  sections: [
    oauth
  ]
}

var events = {
  path: 'events',
  title: 'Event Access',
  sections: DATA_NAV_SECTIONS,
  hiddenSection: true,
};

var dcp = {
  path: 'customer-profiles',
  title: 'Customer Profiles',
  singlePage: true,
}

var results = {
  path: 'results',
  title: 'Experiment Results',
  singlePage: true,
}

nav.dataServices = {
  label: 'Data Services',
  sections: [
    events,
    dcp,
    results
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

var extensions = {
  path: 'extensions',
  title: 'Extensions',
  singlePage: true,
  showInHeaderDropdown: true,
}

nav.addOns = {
  label: 'Add Ons',
  sections: [
    integrations,
    apps,
    extensions
  ],
};

var libs = {
  path: 'libs',
  title: 'Libraries',
  singlePage: true
};

nav.community = {
  label: 'Community',
  sections: [
    libs
  ]
};

// Add new nav data to paths object.
paths.nav = nav;
paths.leftNav = [
  'overview',
  'solutions',
  'management',
  'authentication',
  'dataServices',
  'addOns',
  'community'
];
// Used on homepage.
paths.allSections = {
  overview: overview,
  javascript: javascript,
  ios: ios,
  android: android,
  server: server,
  rest: rest,
  events: events,
  integrations: integrations,
  apps: apps,
  libs: libs
};

// Declare redirects.
var redirects = require('./redirects.js');

module.exports = {
  paths: paths,
  redirects: redirects,
};
