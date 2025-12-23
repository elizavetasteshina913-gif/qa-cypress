describe("Registration — Last name field  validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("Last name is invalid", () => {
        // for (const {expected, title} of users) {
        //     it(title, () => {

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");


            cy.get('#signupLastName').click()
            cy.get('#signupLastName').type("khuiy89iu")
            cy.get('#signupLastName').blur()

        });
        cy.contains("Last name is invalid").should('exist');
    });

    // }
// })
})