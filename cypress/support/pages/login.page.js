/// <reference types="cypress" />

class LoginPage {
    get #user() { return cy.get("#user_login") }
    get #pass() { return cy.get("#user_pass") }
    get #login() { return cy.get("#wp-submit") }

    login(user, pass){
        this.#user.type(user, {force: true} )
        this.#pass.type(pass)
        this.#login.click()
    }

}

module.exports = new LoginPage()