var build = './build/';
var src = './src/';
var assets = 'assets/';

// Sections for each navigation item.
var NAV_SECTIONS = {
  'introduction': {
    path: 'introduction/',
    title: 'Introduction',
  },
  'getting-started': {
    path: 'getting-started/',
    title: 'Getting started',
  },
  'reference': {
    path: 'reference/',
    title: 'Reference',
  },
  'faqs': {
    path: 'faqs/',
    title: 'FAQs',
  },
  'code-samples': {
    path: 'code-samples/',
    title: 'Code Samples',
  },
};

// Sections for each navigation item.
var MOBILE_NAV_SECTIONS = {
  'introduction': {
    path: 'introduction/',
    title: 'Introduction',
  },
  'getting-started': {
    path: 'getting-started/',
    title: 'Getting started',
  },
  'guide': {
    path: 'guide/',
    title: 'Guide',
  },
  'reference': {
    path: 'reference/',
    title: 'Reference',
  },
  'faqs': {
    path: 'faqs/',
    title: 'FAQs',
  },
  'code-samples': {
    path: 'code-samples/',
    title: 'Code Samples',
  },
};

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
      path: '/overview/',
      title: 'Overview',
    },
    rest: {
      path: '/rest/',
      title: 'REST API',
      sections: NAV_SECTIONS,
    },
    javascript: {
      path: '/javascript/',
      title: 'JS API',
      sections: NAV_SECTIONS,
    },
    ios: {
      path: '/ios/',
      title: 'iOS SDK',
      sections: MOBILE_NAV_SECTIONS,
    },
    android: {
      path: '/android/',
      title: 'Android SDK',
      sections: MOBILE_NAV_SECTIONS,
    },
  },
};

module.exports = {
  paths: paths,
};
