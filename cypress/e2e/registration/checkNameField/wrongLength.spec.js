describe("Registration — Name field  validation", () => {
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
            cy.get('#signupName').click()
            cy.get('#signupName').type("k")
            cy.get('#signupName').blur()

        });
        cy.contains("Name has to be from 2 to 20 characters long").should('exist');



        cy.get('#signupName').clear()
            .type("ThisNameIsWayTooLongToBeValid")
            .blur();
        cy.contains("Name has to be from 2 to 20 characters long").should('exist');
    });

    // }
// })
})