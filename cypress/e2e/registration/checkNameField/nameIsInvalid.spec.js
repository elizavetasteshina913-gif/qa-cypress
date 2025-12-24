

describe("Registration — Name field validation", () => {
    beforeEach(() => {
        cy.visit(`https://qauto.forstudy.space/`);
    });


    it("Name is invalid", () => {
        // for (const {expected, title} of users) {
        //     it(title, () => {

              cy.get('.section.hero').within(() => {
                 cy.contains('Sign up').click();
            });

              cy.get('.modal-content').within(($form) => {
                cy.wrap($form).should("have.class", "modal-content");

                // cy.get('#signupName').focus()
                cy.get('#signupName').click()
                cy.get('#signupName').type("8497_urjrek")
                cy.get('#signupName').blur()


            });
            cy.contains("Name is invalid").should('exist');
        });
    // }
// })
})