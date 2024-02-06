Feature: Checkout
    Scenario: Checkout
        Given I visit EBAC Store products page with my credencials
        When I add product to the cart
        Then a success screen must appear