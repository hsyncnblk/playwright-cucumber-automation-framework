Feature: Product Interactions and Sorting

  Background:
    Given I am logged in to the application
 
  @sorting
  Scenario: Verify product sorting by Price (Low to High)
    Given I am on the inventory page
    When I sort the products by "Price (low to high)"
    Then The products should be sorted by price in ascending order

  @cart
  Scenario: Add and Remove item from cart
    Given I am on the inventory page
    When I add "Sauce Labs Backpack" to the cart
    And I navigate to cart page
    Then I should see "Sauce Labs Backpack" in the cart
    When I remove "Sauce Labs Backpack" from the cart
    Then The cart badge should not be visible