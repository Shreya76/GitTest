const { expect } = require('chai');
const timeConfig=require('test/shreya/timeTracking.json');
const index=require('test/shreya/index.json');
const TimeTrackingPageObject = require('test/shreya/timeTrackingPage.js').default;

describe('Navigate to TimeTracking Page' ,()  =>{
  let scope = {};
  scope.timeTrackingPageObject = new TimeTrackingPageObject();

  it('add a new Event ', () => {
    scope.timeTrackingPageObject.navigateToTwoDaysBeforeEntry();
    browser.pause(1000);
    browser.$(timeConfig.selectProject).click();
    browser.$(timeConfig.clickOnSelectBox).click();
    browser.$(timeConfig.selectTask).click();
    browser.$(timeConfig.enterHours).setValue(index.time);
    browser.$(timeConfig.enterNotes).setValue(index.enterNotes);
    browser.$(timeConfig.clickOnLogTime).click();
  });

  it('verify the Event ', () => {
    expect(scope.timeTrackingPageObject.isVisible(timeConfig.notesInfo[0]+index.enterNotes+timeConfig.notesInfo[1],{time:500})).to.be.true;
  });
});

