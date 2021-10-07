Feature: Shadow View

Scenario: Getting the shadow view button with cy.get and cy.find
    Given I am on my homepage
    When I use cy.get and cy.find
    Then I get the element successfully

Scenario: Getting the shadow view button with one query
    Given I am on my homepage
    When I use one query
    Then I get the element successfully
