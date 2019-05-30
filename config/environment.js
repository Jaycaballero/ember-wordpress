'use strict';

module.exports = function(environment) {
  let ENV = {
    wordpressHost: process.env.SITE_HOST,
    modulePrefix: 'systematix',
    podModulePrefix: 'systematix/pods',
    environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
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
        host: process.env.COURSES_API_URL,
        namespace: 'api/site',
        subtype: 'systematix',
        standardsTree: 'x',
        version: 'v1'
      }
    },

    fastboot: {
      hostWhitelist: ['www.systematix.co.uk', 'www2.systematix.co.uk', 'www3.systematix.co.uk', /^localhost:\d+$/]
    }
  };




  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  return ENV;
};
