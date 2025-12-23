describe("Registration — email field  validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("Border red", () => {
        // for (const {expected, title} of users) {
        //     it(title, () => {

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");


            cy.get('#signupEmail').click()
            cy.get('#signupEmail').type("khuiy89iu")
            cy.get('#signupEmail').blur()

        });
        cy.contains("Email is incorrect").should('exist');
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    // }
// })
})