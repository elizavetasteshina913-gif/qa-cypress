describe("Registration — Last name field validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("Last name required", () => {
        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");

            cy.get('#signupLastName').focus()
            // cy.get('#signupName').type("Liza")
            cy.get('#signupLastName').blur()

        });
        cy.contains("Last name required").should('exist');
    });

})