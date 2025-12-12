Feature: E-Commerce Hybrid Checkout Flow

  Background:
    Given I am logged in to the application

  @checkout
  Scenario Outline: Complete checkout with UI and DB validation
    Given I add "Sauce Labs Bike Light" to the cart and proceed to checkout
    When I fill the checkout form with "<firstName>", "<lastName>" and "<zipCode>"
    And I finish the order
    Then I should see the "Thank you for your order" message on UI
    And The order status should be "COMPLETED" in the Database

    Examples:
      | firstName | lastName | zipCode |
      | Huseyin   | Test     | 34000   |
      | Ayse      | Demo     | 10001   |