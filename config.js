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

// Sections for each navigation item.
var JS_NAV_SECTIONS = extend({}, BASE_NAV_SECTIONS, {
  'personalization': {
    path: 'personalization',
    title: 'Personalization',
  },
});

// Sections for each navigation item.
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

// Sections for each navigation item.
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
  }
});

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
      title: 'Server-Side SDKs',
      sections: {
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
      },
    },
    integrations: {
      path: 'integrations',
      title: 'Integrations',
    },
    canvas: {
      path: 'canvas',
      title: 'Canvas',
    },
  },
};

module.exports = {
  paths: paths,
};
