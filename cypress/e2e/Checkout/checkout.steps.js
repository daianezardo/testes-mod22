 /// <reference types="cypress" />

 import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
 const data = require('../../fixtures/data.json')
 
 Given('I visit EBAC Store products page with my credencials', () => {
     cy.login(data.usuario, data.senha)
 })
 
 When('I add product to the cart', ()=> {
     cy.addIten()
     cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
 })
 
 Then('a success screen must appear', ()=> {
     cy.checkoutConfirm()
 })