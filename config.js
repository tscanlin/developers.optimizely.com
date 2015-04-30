var build = './build/';
var src = './src/';
var assets = 'assets/';

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
      title: 'REST API'
    },
    javascript: {
      path: '/javascript/',
      title: 'Javascript API'
    },
    ios: {
      path: '/ios/',
      title: 'iOS SDK'
    },
    android: {
      path: '/android/',
      title: 'Android SDK'
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
