
describe("Registration — Name field validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("Empty name field", () => {
        cy.get('.section.hero').within(() => {
                    cy.contains('Sign up').click();
                });

                cy.get('.modal-content').within(($form) => {
                    cy.wrap($form).should("have.class", "modal-content");

                    cy.get('#signupName').focus()
                    // cy.get('#signupName').type("Liza")
                    cy.get('#signupName').blur()

                });
                cy.contains("Name required").should('exist');
    });

})