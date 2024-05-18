import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ActionsPage from '../POM/ActionsPage';
import '@4tw/cypress-drag-drop';

const actionsPage = new ActionsPage();

Given('I am on the Actions page', () => {
  actionsPage.visit();
});

When('I drag the draggable element onto the droppable element', () => {
  cy.get('#draggable').drag('#droppable', { force: true });
});

When('I double click on the double click element', () => {
  actionsPage.getDoubleClickElement().dblclick();
});

When('I press the first link in the dropdown content', () => {
  actionsPage.getDropdownContent().first().invoke('show')
    .trigger('mouseenter', { force: true })
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true });
  actionsPage.getDropdownContent().first().find('a').first().click(); 
});

When('I press the second link in the dropdown content', () => {
  actionsPage.getDropdownContent().eq(1).invoke('show')
    .trigger('mouseenter', { force: true })
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true });
  actionsPage.getDropdownContent().eq(1).find('a').eq(0).click(); 
});

When('I press the third link in the dropdown content', () => {
  actionsPage.getDropdownContent().eq(2).invoke('show')
    .trigger('mouseenter', { force: true })
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true });
  actionsPage.getDropdownContent().eq(2).find('a').eq(0).click({ force: true }); 
});

When('I click and hold on the element', () => {
  actionsPage.getClickBox().trigger('mousedown', { which: 1 });
  cy.wait(5000);
  actionsPage.getClickBox().trigger('mouseup');
});

Then('the draggable element should be dropped onto the droppable element', () => {
  actionsPage.getDroppableElement().should('contain', 'Dropped!');
});
Then('an alert with the message {string} should be displayed', (expectedMessage) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(expectedMessage);
  });
});

Then('the double click action should be performed', () => {
  actionsPage.getDoubleClickElement().should('have.class', 'double');
});

Then('the text {string} should appear', (expectedText) => {
  cy.contains(expectedText).should('be.visible');
});
