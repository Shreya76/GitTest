const timeConfig=require('test/shreya/timeTracking.json');
const index=require('test/shreya/index.json');
const maxWaitTime = 10000;

module.exports['default'] = class TimeTrackingPage {

  isVisible(elementSelector) {
    return browser.waitForVisible(elementSelector, maxWaitTime);
  }

  navigateToTwoDaysBeforeEntry() {
    let todayDate = $(timeConfig.todaysDate).getText();

    if (todayDate != 1 || todayDate != 2) {
      let dayBeforeYesterday = todayDate - 2;
      browser.$(timeConfig.selectDate[0] + dayBeforeYesterday + timeConfig.selectDate[1]).click();
    }

    else {
      browser.$(timeConfig.goToPreviousMonth).click();
      let month = $(timeConfig.getMonth).getText();
      let getMonth = month.split(' ');
      let numOfWeeks = $$(timeConfig.numberOfWeeks).length;

      //For Months with 31 days
      if (getMonth[0] == 'JAN' || getMonth[0] == 'MAR', getMonth[0] == 'MAY' , getMonth[0] == 'JUL', getMonth[0] == 'AUG', getMonth[0] == 'OCT', getMonth[0] == 'DEC') {
        if(todayDate==1){

          //checking if 30 is present in the last row or not
          if($(timeConfig.clickOnDate30[0]+numOfWeeks+timeConfig.clickOnDate30[1]).isPresent()) {
            browser.$(timeConfig.clickOnDate30[0] + numOfWeeks + timeConfig.clickOnDate30[1]).click();
          }
          else{
              numOfWeeks--;
              browser.$(timeConfig.clickOnDate30[0]+numOfWeeks+timeConfig.clickOnDate30[1]).click();
          }
        }

        else{
            browser.$(timeConfig.clickOnDate31[0] + numOfWeeks + timeConfig.clickOnDate31[1]).click();
          }
        }

      //For Months with 30 days
      else if (getMonth[0] == 'APR' || getMonth[0] == 'JUN', getMonth[0] == 'SEP' , getMonth[0] == 'NOV') {
        if(todayDate==1){

          //checking if 29 is present in the last row or not
          if($(timeConfig.clickOnDate29[0]+numOfWeeks+timeConfig.clickOnDate29[1]).isPresent()) {
            browser.$(timeConfig.clickOnDate29[0] + numOfWeeks + timeConfig.clickOnDate29[1]).click();
          }
          else{
            numOfWeeks--;
            browser.$(timeConfig.clickOnDate29[0]+numOfWeeks+timeConfig.clickOnDate29[1]).click();
          }
        }
        else{
          browser.$(timeConfig.clickOnDate30[0] + numOfWeeks + timeConfig.clickOnDate30[1]).click();
        }

      }

      //For Feb
      else {
        if(todayDate==1){

          //checking if 28 i present in the last row or not
          if($(timeConfig.clickOnDate28[0]+numOfWeeks+timeConfig.clickOnDate28[1]).isPresent()) {
            browser.$(timeConfig.clickOnDate28[0] + numOfWeeks + timeConfig.clickOnDate28[1]).click();
          }
          else{
            numOfWeeks--;
            browser.$(timeConfig.clickOnDate28[0]+numOfWeeks+timeConfig.clickOnDate28[1]).click();
          }
        }
        else{
          browser.$(timeConfig.clickOnDate29[0] + numOfWeeks + timeConfig.clickOnDate29[1]).click();
        }

      }
    }
  }
};
