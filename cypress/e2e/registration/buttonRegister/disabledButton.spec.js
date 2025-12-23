describe("Registration — disabled REGISTER", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/");

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').should('be.visible');
    });

    it("button is disabled if data incorrect", () => {

        cy.get('.modal-content').within(() => {

            cy.get('#signupName').type('Liza');
            cy.get('#signupEmail').click()
            cy.get('#signupEmail').type("khuiy89iu")
            cy.get('#signupEmail').blur()

        });
        cy.contains("Email is incorrect").should('exist');
        cy.contains('Register').should('be.disabled');
    });
})
