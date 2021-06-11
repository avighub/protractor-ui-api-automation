// require("babel-register")({
//   presets: ["env"]
// });

var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  //This will start webDriver-manager automatically without having to start it manually
  directConnect: true,

  // seleniumAddress: 'http://localhost:4444/wd/hub',

  //Capabilities to be passed to webdriver instance
  Capabilities: {
    'browserName': 'chrome'
  },

  //Framework to use: Jasmine is recommended
  framework: 'jasmine',

  //Spec patterns are relative to the current working directory 
  //when protractor is called.
  //*Provide the relative path of the spec files if not in same folder */
  // specs: ['..//Testcases//ThirdApi_request.js'],
  // specs: ['..//Testcases//SecondApiTest.js'],
  specs: ['..//Testcases//api//axios_api.js'],
  // specs: ['..//Testcases//SuperAgentApi.js'],

  //Options to be passed to Jasmine
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //Reporting
  onPrepare: function () {

    var today = new Date();
    var myTime = today.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").replace(/:/g, '-');
    var myDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
    var reportDir = 'Reports/ProtractorReporter/Report-' + myDate + 'T' + myTime
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: reportDir
    }).getJasmine2Reporter());

  }

};
