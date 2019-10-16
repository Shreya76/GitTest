const constants = require('constants/index.json');
const signInConfig = require('configurations/LoginPageConfiguration.json');
const headerPanelConfig = require('configurations/headerPanel.json');
const excludedLoginSuites = [
  'SignUp Page Test',
  'SignIn Page Test',
  'Change Password Page',
  'NonAdminOrganization Page Test',
  'Change Email Page',
  'timetracking time entry Page Test',
  'Add New Invoices Page',
  'Timesheet Tab Project Page',
];
const excludednavigateToOrganizationSuites = [
  'SignUp Page Test',
  'SignIn Page Test',
  'Change Password Page',
  'NonAdminOrganization Page Test',
  'Change Email Page',
  'timetracking time entry Page Test',
  'Add New Invoices Page',
  'Timesheet Tab Project Page',
];
exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  deprecationWarnings: false,
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  suites: {
    archiveAndUnarchiveProject: [
      './test/projects/archiveAndUnarchiveProject.js',
    ],
    verifyEditAnInvoice: ['./test/invoices/verifyEditAnInvoice.js'],
    verifySendReminderAndResendForSentInvoice: [
      './test/invoices/verifySendReminderAndResendForSentInvoice.js',
    ],
    verifyAddNewExpenseCategory: ['./test/more/verifyAddNewExpenseCategory.js'],
    verifyEditBasicAndProjectDetails: [
      './test/team/verifyEditBasicAndProjectDetails.js',
    ],
    verifyEditProjectPage: ['./test/projects/verifyEditProjectPage.js'],
    signUp: ['./test/authentication/signUp.js'],
    verifyElementsOnSignInPage: [
      './test/authentication/verifyElementsOnSignInPage.js',
    ],
    verifyElementsOnTimeTracking: [
      './test/timetracking/verifyElementsOnTimeTracking.js',
    ],
    addEditDeleteTimeEntry: ['./test/timetracking/addEditDeleteTimeEntry.js'],
    verifyElementsOnAddNewProjectPage: [
      './test/projects/verifyElementsOnAddNewProjectPage.js',
    ],
    addNewProject: ['./test/projects/addNewProject.js'],
    verifyTabsOnProjectPage: ['./test/projects/verifyTabsOnProjectPage.js'],
    addAndDeleteOrganization: [
      './test/headerSection/addAndDeleteOrganization.js',
    ],
    verifyElementsOnClients: ['./test/clients/verifyElementsOnClients.js'],
    login: ['./test/authentication/Login.js'],
    addNewTeamMember: ['./test/team/addNewTeamMember.js'],
    verifyElementsOnMorePage: ['./test/more/verifyElementsOnMorePage.js'],
    verifyElementsOnReportsPage: [
      './test/reports/verifyElementsOnReportsPage.js',
    ],
    verifyElementsOnWeeklyTimeSheets: [
      './test/reports/verifyElementsOnWeeklyTimeSheets.js',
    ],
    verifyElementsOnAddNewMemberPage: [
      './test/team/verifyElementsOnAddNewMemberPage.js',
    ],
    verifyAddNewInvoice: ['./test/invoices/verifyAddNewInvoice.js'],
    addNewService : ['./test/services/addNewService.js'],
    archiveAndUnarchiveTeamMember: [
      './test/team/archiveAndUnarchiveTeamMember.js',
    ],
    verifyElementsOnTeamPage: ['./test/team/verifyElementsOnTeamPage.js'],
    revenueByClient: ['./test/reports/revenueByClient.js'],
    verifyExpensesPage: ['./test/expenses/verifyExpensesPage.js'],
    verifyAddNewExpensesPage: ['./test/expenses/verifyAddNewExpensesPage.js'],
    addNewClient: ['./test/clients/addNewClient.js'],
    editClient: ['./test/clients/editClient.js'],
    verifyUpdateBasicDetails: [
      './test/manageAccount/verifyUpdateBasicDetails.js',
    ],
    verifyExportData: ['./test/manageAccount/verifyExportData.js'],
    verifyAddEditDeleteContactForClient: [
      './test/clients/verifyAddEditDeleteContactForClient.js',
    ],
    logout: ['./test/logout.js'],
    changePassword: ['./test/changePassword.js'],
    invoicesTabSearch: ['./test/invoices/invoicesTabSearch.js'],
    timeTracking : ['./test/shreya/timeTracking.js'],
    allSpecs: [
      './shreya/timeTracking.js',
      './test/projects/archiveAndUnarchiveProject.js',
      './test/invoices/verifySendReminderAndResendForSentInvoice.js',
      './test/invoices/verifyEditAnInvoice.js',
      './test/more/verifyAddNewExpenseCategory.js',
      './test/invoices/verifyAddNewInvoice.js',
      './test/team/verifyEditBasicAndProjectDetails.js',
      './test/projects/verifyEditProjectPage.js',
      './test/manageAccount/verifyUpdateBasicDetails.js',
      './test/manageAccount/verifyExportData.js',
      './test/clients/verifyElementsOnClients.js',
      './test/authentication/signUp.js',
      './test/authentication/verifyElementsOnSignInPage.js',
      './test/timetracking/verifyElementsOnTimeTracking.js',
      './test/timetracking/addEditDeleteTimeEntry.js',
      './test/projects/verifyTabsOnProjectPage.js',
      './test/headerSection/addAndDeleteOrganization.js',
      './test/projects/verifyElementsOnAddNewProjectPage.js',
      './test/projects/addNewProject.js',
      './test/projects/timesheetTabInProject.js',
      './test/authentication/login.js',
      './test/team/addNewTeamMember.js',
      './test/more/verifyElementsOnMorePage.js',
      './test/reports/verifyElementsOnReportsPage.js',
      './test/reports/verifyElementsOnWeeklyTimeSheets.js',
      './test/team/verifyElementsOnAddNewMemberPage.js',
      './test/reports/revenueByClient.js',
      './test/expenses/verifyExpensesPage.js',
      './test/expenses/verifyAddNewExpensesPage.js',
      './test/team/archiveAndUnarchiveTeamMember.js',
      './test/team/verifyElementsOnTeamPage.js',
      './test/clients/addNewClient.js',
      './test/clients/editClient.js',
      './test/invoices/verifyInvoicesTab.js',
      './test/invoices/verifyPaymentTransactionsTab.js',
      './test/invoices/paymentTransactionsTab.js',
      './test/headerSection/notifications.js',
      './test/headerSection/verifyElementsOnManageAccountPage.js',
      './test/invoices/verifyElementsOnAddNewInvoice.js',
      './test/invoices/verifyRecordPayment.js',
      './test/team/reportTabInTeam.js',
      './test/reports/accountAging.js',
      './test/clients/verifyAddEditDeleteContactForClient.js',
      './test/logout.js',
      './test/reports/detailedReport.js',
      './test/reports/projectSummary.js',
      './test/reports/userSummary.js',
      './test/reports/profitLossStatement.js',
      './test/invoices/invoicesTabSearch.js',
      './test/changePassword.js',
      './test/changeEmail.js',
      './test/services/addNewService.js'
    ],
    verifyInvoicesTab: ['./test/invoices/verifyInvoicesTab.js'],
    verifyPaymentTransactionsTab: [
      './test/invoices/verifyPaymentTransactionsTab.js',
    ],
    paymentTransactionsTab: ['./test/invoices/paymentTransactionsTab.js'],
    verifyRecordPayment: ['./test/invoices/verifyRecordPayment.js'],
    notifications: ['./test/headerSection/notifications.js'],
    verifyElementsOnManageAccountPage: [
      './test/headerSection/verifyElementsOnManageAccountPage.js',
    ],
    verifyElementsOnAddNewInvoice: [
      './test/invoices/verifyElementsOnAddNewInvoice.js',
    ],
    reportTabInTeam: ['./test/team/reportTabInTeam.js'],
    accountAging: ['./test/reports/accountAging.js'],
    projectSummary: ['./test/reports/projectSummary.js'],
    detailedReport: ['./test/reports/detailedReport.js'],
    userSummary: ['./test/reports/userSummary.js'],
    changeEmail: ['./test/changeEmail.js'],
    profitLossStatement: ['./test/reports/profitLossStatement.js'],
    timesheetTabInProject: ['./test/projects/timesheetTabInProject.js'],
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 1,
      //
      browserName: 'chrome',
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevel: 'debug',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - wdio-applitools-service, wdio-browserstack-service, wdio-devtools-service, wdio-sauce-service
  // - wdio-mocha-framework, wdio-jasmine-framework
  // - wdio-local-runner, wdio-lambda-runner
  // - wdio-sumologic-reporter
  // - wdio-cli, wdio-config, wdio-sync, wdio-utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  // webdriver: 'info',
  // 'wdio-applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: 'https://staging.aceinvoice.com/sign_in',
  //
  // Default timeout for all waitFor* commands.
  // ...
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 9000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['selenium-standalone'],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  // reporters: ['dot'],
  reporters: ['spec'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results',
    },
  },
  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before: function (capabilities, specs) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  beforeSuite: function(suite) {
    browser.url('/');
    browser.windowHandleSize({ width: 1366, height: 768 });
    if (!excludedLoginSuites.includes(suite.title)) {
      $(signInConfig.emailInput).setValue("shreya.shetty@bigbinary.com");
      $(signInConfig.passwordInput).setValue(constants.password);
      $(signInConfig.loginInput).click();
      browser.waitForExist('a=Time Tracking', 10000);
    }
    if (!excludednavigateToOrganizationSuites.includes(suite.title)) {
      if (
        browser.getText(headerPanelConfig.organizationName) !=
        constants.bigBinaryText
      ) {
        $(headerPanelConfig.hamburgerMenu).click();
        $(`//a[contains(text(),'BigBinary')]`).click();
        browser.waitForExist(
          "//a[contains(text(),'BigBinary') and @class='logo']",
          10000
        );
      }
    }
  },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function (test) {

  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // afterTest: function (test) {
  // },
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};