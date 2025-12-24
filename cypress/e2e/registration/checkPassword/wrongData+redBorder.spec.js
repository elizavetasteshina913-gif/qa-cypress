describe("Registration — Password field validation", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/");

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').should("have.class", "modal-content");
    });

    const testCases = [
        { password: 'short1A', valid: false, message: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' },
        { password: 'alllowercase1', valid: false, message: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' },
        { password: 'ALLUPPERCASE1', valid: false, message: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' },
        { password: 'NoNumberPass', valid: false, message: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' },
        { password: 'Valid1Pass', valid: true, message: '' },
    ];

    testCases.forEach(({ password, valid, message }) => {
        it(`validate password: ${password}`, () => {

            cy.get('.modal-content').within(() => {
                cy.get('#signupPassword').clear().type(password).blur();

                if (!valid) {

                    cy.contains(message).should('exist');
                    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');


                } else {

                    cy.get('#signupPassword').should('not.have.class', 'is-invalid');
                }
            });
        });
    });
});
