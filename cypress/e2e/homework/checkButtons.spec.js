// import { faker } from '@faker-js/faker';

describe("check buttons", () => {
    // const password = `Qwerty${faker.number.int({min: 100, max: 999})}`
    // const userData = {
    //     "name": faker.person.firstName(),
    //     "lastName": faker.person.lastName(),
    //     "email": faker.internet.email(),
    //     "password": password,
    //     "repeatPassword": password


    beforeEach(() => {
        cy.visit("/");
    })

    it("should find buttons on header section", () => {
        cy.get('.hero-descriptor').as('hero');

        cy.get('.header_signin').should('exist');

        cy.get('iframe[src*="youtube"]').should('exist');


    });

    it("should find buttons on footer", () => {
        cy.get("#contactsSection").as('contacts');
        cy.get("@contacts").find(".icon-facebook")
        cy.get("@contacts").find(".icon-telegram")
        cy.get("@contacts").find(".icon-youtube")
        cy.get("@contacts").find(".icon-instagram")
        cy.get("@contacts").find(".icon-linkedin")

        cy.get("@contacts").find(".display-4")
        cy.get("@contacts").contains("ithillel.ua")
    })

})
