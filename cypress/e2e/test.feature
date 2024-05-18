Feature: Actions
  As a user
  I want to perform various actions on a webpage
  So that I can interact with different elements

    Scenario: Drag and Drop
    Given I am on the Actions page
    When I drag the draggable element onto the droppable element
    Then the draggable element should be dropped onto the droppable element

    Scenario: Double Click
    Given I am on the Actions page
    When I double click on the double click element
    Then the double click action should be performed

    Scenario: Press First Link
    Given I am on the Actions page
    When I press the first link in the dropdown content
    Then an alert with the message "Well done you clicked on the link!" should be displayed

    Scenario: Press Second Link
    Given I am on the Actions page
    When I press the second link in the dropdown content
    Then an alert with the message "Well done you clicked on the link!" should be displayed
    
    Scenario: Press Third Link
    Given I am on the Actions page
    When I press the third link in the dropdown content
    Then an alert with the message "Well done you clicked on the link!" should be displayed

    Scenario: Perform a click and hold action on an element
    Given I am on the Actions page
    When I click and hold on the element
    Then the text "Dont release me!!!" should appear
