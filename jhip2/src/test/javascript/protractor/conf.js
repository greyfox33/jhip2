// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  // this came from a web fix. 
  chromeDriver: 'C:/Users/Robb/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver.exe',

  seleniumServerJar: 'C:/Users/Robb/AppData/Roaming/npm/node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
