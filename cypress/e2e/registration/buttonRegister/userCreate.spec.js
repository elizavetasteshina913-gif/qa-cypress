describe("Registration — successful path", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/");

        cy.get('.section.hero').within(() => {
            cy.contains('Sign up').click();
        });

        cy.get('.modal-content').should('be.visible');
    });

    it("should successfully register a new user", () => {

        cy.get('.modal-content').within(() => {

            cy.get('#signupName').type('Liza');
            cy.get('#signupLastName').type('test');

            cy.get('#signupEmail').type('aqaaelizavetasteshina913@gmail.com');

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
