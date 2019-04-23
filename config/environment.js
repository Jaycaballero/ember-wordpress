'use strict';

module.exports = function(environment) {
  let ENV = {
    wordpressHost: 'https://newdev.systematix.co.uk/',
    modulePrefix: 'systematix',
    podModulePrefix: 'systematix/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-cli-google': {
      recaptcha: {
        siteKey: '6Lfu5ogUAAAAAD0n-fJta20GLvMoWEtacLCSgjW7'
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      coursesApi: {
        host: '',
        namespace: 'api/site',
        subtype: 'systematix',
        standardsTree: 'x',
        version: 'v1'
      }
    },

    fastboot: {
      hostWhitelist: ['www.systematix.co.uk', 'www2.systematix.co.uk', /^localhost:\d+$/]
    }
  };

  if (environment === 'development') {
    ENV.APP.coursesApi.host = 'http://bifrost.localhost:8080';
    ENV.APP.coursesApi.version = 'v1'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.APP.coursesApi.host = 'https://www2.systematix.co.uk';
  }

  return ENV;
};
