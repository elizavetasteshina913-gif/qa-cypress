describe("Registration — Password field validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("Empty Password field", () => {
        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");

            cy.get('#signupPassword').focus()
            // cy.get('#signupName').type("Liza")
            cy.get('#signupPassword').blur()

        });
        cy.contains("Password required").should('exist');
    });

})

