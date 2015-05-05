var build = './build/';
var src = './src/';
var assets = 'assets/';

// Sections for each navigation item.
var NAV_SECTIONS = {
  guide: {
    path: 'guide/',
    title: 'Guide'
  },
  api: {
    path: 'api/',
    title: 'API Documentation'
  },
  examples: {
    path: 'examples/',
    title: 'Examples'
  }
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
  pages: 'pages/',
  partials: 'partials/',
  templates: 'templates/',


  // Used in the UI to build the navigation.
  navigation: {
    rest: {
      path: '/rest/',
      title: 'REST API',
      sections: NAV_SECTIONS
    },
    javascript: {
      path: '/javascript/',
      title: 'Javascript API',
      sections: NAV_SECTIONS
    },
    ios: {
      path: '/ios/',
      title: 'iOS SDK',
      sections: NAV_SECTIONS
    },
    android: {
      path: '/android/',
      title: 'Android SDK',
      sections: NAV_SECTIONS
    },
    samples: {
      path: '/samples/',
      title: 'Code Samples'
    }
  },
};

module.exports = {
  paths: paths
}
