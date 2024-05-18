Feature: Interactions on the Scrolling page

Scenario: Hover over a specific element
  Given I am on the Scrolling page
  When I hover over the target element
  Then the text "Well done for scrolling to me!" should appear

Scenario: Verify scrolling increases the number
  Given I am on the Scrolling page
  When I scroll over zone2 and zone3 five times each
  Then the number should increase after each scroll

Scenario: Hover over zone4
  Given I am on the Scrolling page
  When I hover over zone4
  Then the coordinates should be displayed
