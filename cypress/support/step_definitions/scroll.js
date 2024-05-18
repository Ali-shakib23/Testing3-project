import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ScrollingPage from '../POM/ScrollingPage';

const scrollingPage = new ScrollingPage();

Given('I am on the Scrolling page', () => {
  scrollingPage.visit();
});

When('I hover over the target element', () => {
  scrollingPage.getZone1().trigger('mouseover');
});
Then('the element should display additional information', () => {
  scrollingPage.getZone1().should('Well done for scrolling to me!');
});
When('I scroll over zone2 and zone3 five times each', () => {
  for (let i = 0; i < 5; i++) {
    scrollingPage.getZone2().trigger('mouseover').wait(500);
    scrollingPage.getZone3().trigger('mouseover').wait(500);
  }
});

Then('the number should increase after each scroll', () => {
  let prevValue = 0;
  for (let i = 0; i < 5; i++) {
    scrollingPage.getZone2().trigger('mouseover').wait(500);
    scrollingPage.getZone3().trigger('mouseover').wait(500);
    scrollingPage.getZone3().invoke('text').then((text) => {
      const currentValue = parseInt(text);
      expect(currentValue).to.be.greaterThan(prevValue);
      prevValue = currentValue;
    });
  }
});

When('I hover over zone4', () => {
  scrollingPage.getZone4().trigger('mouseover');
});

Then('the coordinates should be displayed', () => {
  scrollingPage.getZone4().should('contain', 'X:').and('contain', 'Y:');
});
