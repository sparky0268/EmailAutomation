exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect:true,
    specs: ['../tests/specOne.js'],
    capabilities: {
      'browserName': 'chrome'
    },
    framework: 'jasmine',
    //on preppare-{maximize window ,(global prameter-presenceof)}
    //The  onPrepare function is run before the test suites
    onPrepare: function() {
      browser.driver.manage().window().maximize();//maximize window size   
       browser.driver.get("https://mail.google.com/")
       browser.manage().timeouts().implicitlyWait(5000);
       browser.ignoreSynchronization = true;
      //configure junit xml report
      // var jasmineReporters = require('jasmine-reporters');
      // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      //     consolidateAll: true,
      //     filePrefix: 'guitest-xmloutput',
      //     savePath: 'test/reports'
      // })
      // );
    },

    //jasmine-default-parameter
    jasmineNodeOpts: {
     isVerbose:true,//read out error
      showColors:true,//If true, print colors to the terminal.
      defaultTimeoutInterval: 1800000,//Default time to wait in ms before a test fails. 
    }
    
    //email add as g-var -- before launch
    //play with it
    //life cycle
//     --- beforeLaunch           
//     --- onPrepare          (set in conf) ***reporters initialized here
//       --- jasmineStarted   (set in reporter)
//         --- beforeAll
//          --- suiteStarted  (set in reporter)
//           --- specStarted  (set in reporter)
//            --- beforeEach  (set in testFile)
//            +++ afterEach   (set in testFile)
//           +++ specDone     (set in reporter)
//          +++ suiteDone     (set in reporter)
//         +++ afterAll
//       +++ jasmineDone      (set in reporter)
//     +++ onComplete         (set in conf)
// +++ afterLaunch
  };