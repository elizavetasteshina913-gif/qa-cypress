describe("Registration — Re-enter password validation", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/");

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').should("have.class", "modal-content");
    });

    it("should show error when passwords do not match", () => {
        cy.get('.modal-content').within(() => {

            cy.get('#signupPassword').clear().type("Valid1Pass");
            cy.get('#signupRepeatPassword').clear().type("Different1Pass").blur();

            cy.contains("Passwords do not match").should('exist');

        });
    });

    it("should accept when passwords match", () => {
        cy.get('.modal-content').within(() => {
            cy.get('#signupPassword').clear().type("Valid1Pass");
            cy.get('#signupRepeatPassword').clear().type("Valid1Pass").blur();

            cy.contains("Passwords do not match").should('not.exist');

        });
    });
});
