/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from '@faker-js/faker'

Given('I visit EBAC Store register page', () => {
    cy.visit('/minha-conta')
});

    When('I register with email and password', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@teste*')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        cy.wait(5000)
    });
    
    Then('My account page must be visible', () => {
        let emailFaker = faker.internet.email()
        cy.preCadastro(emailFaker, 'senha!@123456', 'Daiane', 'Zardo')
        cy.wait(5000)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

