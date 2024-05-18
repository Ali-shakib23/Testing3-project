import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Accordion page', () => {
  cy.visit("https://www.webdriveruniversity.com/Accordion/index.html");
});

When('I click the first accordion section', () => {
  cy.get('#manual-testing-accordion').click(); 
});
When('I click the second accordion section', () => {
    cy.get('#cucumber-accordion').click(); 
  });
When('I click the third accordion section', () => {
    cy.get('#automation-accordion').click(); 
  });
  When('I click the fourth accordion section', () => {
    cy.get('#click-accordion').click();
  });
Then('the content of the first accordion section should be visible', () => {
  cy.get('#manual-testing-accordion + div').should('be.visible'); 
});
Then('the content of the second accordion section should be visible', () => {
    cy.get('#cucumber-accordion + div').should('be.visible'); 
  });
Then('the content of the third accordion section should be visible', () => {
    cy.get('#automation-accordion + div').should('be.visible'); 
  });
  Then('I wait until the text in the text-appear-box has changed', () => {
    // Initial text content before clicking the accordion
    let initialText;
  
    // Capture the initial text
    cy.get('#text-appear-box').then(($el) => {
      initialText = $el.text();
    });
  
    // Wait for the text to change
    cy.get('#text-appear-box', { timeout: 10000 }).should(($el) => {
      expect($el.text()).not.to.eq(initialText);
    });
  });