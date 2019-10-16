const timeConfig=require('test/shreya/timeTracking.json');
const index=require('test/shreya/index.json');
const maxWaitTime = 10000;

module.exports['default'] = class TimeTrackingPage {


  navigateToTwoDaysBeforeEntry()
  {
    let todayDate= $(timeConfig.todaysDate).getText();
    let dayBeforeYesterday=todayDate-2;
    browser.$(timeConfig.selectDate[0]+dayBeforeYesterday+timeConfig.selectDate[1]).click();
  }

  isVisible(elementSelector) {
    return browser.waitForVisible(elementSelector, maxWaitTime);
  }

};