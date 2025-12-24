describe("Registration — Last name field  validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
        // cy.contains("Guest log in").click()
    });


    it("wrong length", () => {
        // for (const {expected, title} of users) {
        //     it(title, () => {

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");

            // cy.get('#signupName').focus()
            cy.get('#signupLastName').click()
            cy.get('#signupLastName').type("o")
            cy.get('#signupLastName').blur()

        });
        cy.contains("Last name has to be from 2 to 20 characters long").should('exist');



        cy.get('#signupLastName').clear()
            .type("ThisNameIsWayTooLongToBeValid")
            .blur();
        cy.contains("Last name has to be from 2 to 20 characters long").should('exist');
    });

    // }
// })
})