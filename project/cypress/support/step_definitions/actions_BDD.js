const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('I am on the Actions page', () => {
  cy.visit("https://www.webdriveruniversity.com/Actions/index.html#");
});

When('I drag the draggable element onto the droppable element', () => {
  cy.get('#draggable').drag('#droppable', { force: true });
});

When('I double click on the double click element', () => {
  cy.get('#double-click').dblclick();
});

When('I press the first link in the dropdown content', () => {
  cy.get('div.dropdown-content').first().invoke('show'); 
  cy.get('div.dropdown-content').first()
    .trigger('mouseenter', { force: true })
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true });
  cy.get('div.dropdown-content a').first().click(); 
});

When('I press the second link in the dropdown content', () => {
  cy.get('div.dropdown-content').eq(1).invoke('show'); 
  cy.get('div.dropdown-content').eq(1)
    .trigger('mouseenter', { force: true })
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true });
  cy.get('div.dropdown-content a').eq(1).click(); 
});

Then('the draggable element should be dropped onto the droppable element', () => {
  cy.get('#droppable').should('contain', 'Dropped!');
});

Then('an alert with the message {string} should be displayed', (expectedMessage) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(expectedMessage);
  });
});
