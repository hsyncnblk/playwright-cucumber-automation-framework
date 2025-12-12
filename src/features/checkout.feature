Feature: E-Commerce Hybrid Checkout Flow

  Scenario Outline: Complete checkout with UI and DB validation
    Given I am logged in to the application
    And I add a product to cart and proceed to checkout
    When I fill the checkout form with "<firstName>", "<lastName>" and "<zipCode>"
    And I finish the order
    Then I should see the "Thank you for your order" message on UI
    And The order status should be "COMPLETED" in the Database

    Examples:
      | firstName | lastName | zipCode |
      | Huseyin   | Test     | 34000   |