Feature: Interact with the Accordion on the Accordion page

Scenario: Click the first accordion section
  Given I am on the Accordion page
  When I click the first accordion section
  Then the content of the first accordion section should be visible
Scenario: Click the second accordion section
  Given I am on the Accordion page
  When I click the second accordion section
  Then the content of the second accordion section should be visible  
Scenario: Click the third accordion section
  Given I am on the Accordion page
  When I click the third accordion section
  Then the content of the third accordion section should be visible  
Scenario: Click the fourth accordion section and wait for the text to change
  Given I am on the Accordion page
  When I click the fourth accordion section
  Then I wait until the text in the text-appear-box has changed