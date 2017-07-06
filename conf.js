
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//require('protractor/built/logger').Logger.logLevel = 1;


exports.config={
    framework:'jasmine',
    //rootElement: 'body',
    seleniumAddress:"http://localhost:4444/wd/hub",
    jasmineNodeOpts:{
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },
    specs:["code_spec.js"],
    capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },
  onPrepare:function(){
      //browser.manage().window().setSize(1280,1024);
      jasmine.getEnv().addReporter(new SpecReporter({
          spec:{
              displayStacktrace:true
          },
          summary:{
              displayDuration:false
          }

      }));
  }

};