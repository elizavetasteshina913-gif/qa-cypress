describe("Registration — Re-enter password validation", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/");

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').should("have.class", "modal-content");
    });

    it("should show error when Re-enter password is absent", () => {
        cy.get('.modal-content').within(() => {

            cy.get('#signupPassword').type("Valid1Pass");
            cy.get('#signupRepeatPassword').click().blur();

        });
        cy.contains("Re-enter password required").should('exist');
        cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})