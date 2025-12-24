describe("Registration — successful path", () => {
    beforeEach(() => {
        cy.visit("https://qauto2.forstudy.space/");

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').should('be.visible');
    });

    it("should successfully register a new user", () => {

        cy.get('.modal-content').within(() => {

            cy.get('#signupName').type('Kira');
            cy.get('#signupLastName').type('kokol');

            cy.get('#signupEmail').type('aqamandarinkaa094@gmail.com');

            cy.get('#signupPassword').type('Valid1Pass');
            cy.get('#signupRepeatPassword').type('Valid1Pass');

            cy.contains('Register')
                .should('be.enabled')
                .click();

        });

        cy.get('.global-layout').should('be.visible');
        cy.contains("Registration complete").should('exist');
    });
});
