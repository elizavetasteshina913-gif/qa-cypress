it("add car", () => {
        cy.visit("/");

        cy.get(`.header_signin`).click();

        cy.get('.modal-content').within(() => {
            cy.get('#signinEmail').type(Cypress.env("userEmail"));
            cy.get('#signinPassword').type(Cypress.env("userPassword"));
            cy.get(".btn-primary").click()

        });
        cy.get('.global-layout').should('be.visible');
        cy.contains("You have been successfully logged in").should('exist');
        cy.get('.btn-primary').contains('Add car').click();

        cy.get('.modal-content').within(() => {
            cy.get('#addCarBrand').select('1: 2');
            cy.get('#addCarMileage').click().blur()

            cy.contains("Mileage cost required")


            cy.get('#addCarMileage').click().clear().type('1500')
            cy.get('.btn-primary').contains('Add').click();
        })

    })
