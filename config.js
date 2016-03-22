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


  // Used in the UI to build the navigation.
  navigation: {
    overview: {
      path: 'overview',
      title: 'Overview',
    },
    rest: {
      path: 'rest',
      title: 'REST API',
      sections: REST_NAV_SECTIONS,
    },
    javascript: {
      path: 'javascript',
      title: 'JS API',
      sections: JS_NAV_SECTIONS,
    },
    ios: {
      path: 'ios',
      title: 'iOS SDK',
      sections: MOBILE_NAV_SECTIONS,
    },
    android: {
      path: 'android',
      title: 'Android SDK',
      sections: MOBILE_NAV_SECTIONS,
    },
    server: {
      path: 'server',
      title: 'Server',
      sections: SERVER_NAV_SECTIONS,
    },
    integrations: {
      path: 'integrations',
      title: 'Integrations',
    },
    apps: {
      path: 'apps',
      title: 'Apps',
    },
  },
};

module.exports = {
  paths: paths,
};
