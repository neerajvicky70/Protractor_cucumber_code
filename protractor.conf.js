var cucumberReportDirectory = 'Execution_report';
var jsonReportFile = cucumberReportDirectory + '/log.json';
var logPath='Execution_report/';
var fs= require('fs');
exports.config={


  onComplete: function () {
      var CucumberHtmlReport = require('cucumber-html-report');

      return CucumberHtmlReport.create({
          source: jsonReportFile,
          dest: cucumberReportDirectory,
          title: 'OptiRoute - Protractor Test Run',
          component: new Date().toString()
      }).then(console.log).catch(console.log);
  },
//seleniumAddress: "http://localhost:4444/wd/hub",

//seleniumSessionId:"ec048fe14aedea5dba823ba9406b2c8f",
seleniumServerJar:"/home/neeraj/Downloads/selenium-server-standalone-3.141.59.jar",
chromeDriver:'/home/neeraj/Downloads/chromedriver_linux64/chromedriver.exe',
getPageTimeout:60000,
ignoreUncaughtExceptions: true,
framework: 'custom',
baseURL: 'http://localhost:35171/',
frameworkPath: require.resolve('protractor-cucumber-framework'),
specs:['./features/*.feature' ],
 cucumberOpts: {
 tags: ['@first'],
 //'dry-run':true,
 require: ['./step/*.js'],
 format: 'json:' + logPath+"log.json",
 isVerbose:true,
 includeStackTrace:true
  },

  capabilities: {
   'browserName': 'chrome',
   'platform': 'Any',
   'version': 'Any',

    chromeOptions:{
    'args': ['--safe-mode']

    },
   },

   onPrepare: function () {
           browser.manage().window().maximize(); // maximize the browser before executing the feature files
           browser.waitForAngularEnabled(false);
       }

  };