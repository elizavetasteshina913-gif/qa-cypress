describe("Registration — Email validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("Empty email field", () => {
        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");

            cy.get('#signupEmail').focus()
            // cy.get('#signupName').type("Liza")
            cy.get('#signupEmail').blur()

        });
        cy.contains("Email required").should('exist');
    });



})