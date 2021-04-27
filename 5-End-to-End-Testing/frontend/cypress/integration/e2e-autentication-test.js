/// <reference types="cypress" />

describe('Registration test', () => {
    it('A user with the same name already exists', () => {
        // Arange
        let page = 'http://localhost:8080/#/register';
        let name = 'bopojil';
        let mail = 'test@test.ru';
        let password = '123123123';
        
        // Act
        cy.visit(page);
        cy.get('#username').type(name);
        cy.get('#email').type(mail);
        cy.get('#password').type(password);
        cy.get('#register-button').click();

        // Assert
        cy.get('.error-messages > li').should('contain.text', 'username has already been taken');

    });

    it('Enter with correct data',() => {
        // Arrange
        let page = 'http://localhost:8080/#/register';
        let name = 'vuvytere';
        let mail = 'rumaxohyvo@mail.com';
        let password = '123456789';

        // Act
        cy.visit(page);
        cy.get('#signin > .nav-link').click();
        cy.get('#email').type(mail);
        cy.get('#password').type(password);
        cy.get('#signin-button').click();
        
        // Assert
        cy.get('.container > .nav > :nth-child(2) > .nav-link').should('contain.text', 'New Post');

    });
});
