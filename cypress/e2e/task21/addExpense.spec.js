it("add an expense", ()=>{
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
        cy.get('#addCarBrand').select('2: 3');
        cy.get('#addCarMileage').type('1500')
        cy.get('.btn-primary').contains('Add').click();
    })

    cy.contains('Add fuel expense').click();
    // cy.contains('Add an expense').click();
    cy.get('.modal-content').within(() => {

        cy.get('#addExpenseMileage').click().clear().type('185')
        cy.get('#addExpenseTotalCost').type('12500');
        cy.get('#addExpenseLiters').click().clear().blur()

        cy.contains("Liters required");


        cy.get('#addExpenseLiters').click().clear().type('5')
        cy.get('.btn-primary').contains('Add').click();
        cy.contains("First expense mileage must not be less or equal to car initial mileage. Car initial mileage is 1500").should("exist");



        cy.get('#addExpenseMileage').click().clear().type('18500')
        // cy.get('#addExpenseLiters').type('5');
        // cy.get('#addExpenseTotalCost').type('12500');
        cy.get('.btn-primary').contains('Add').click();


        // cy.get('#addExpenseTotalCost').clear()
        // cy.get('#addExpenseTotalCost').type('1600');
        // cy.get('.btn-primary').contains('Add').click();


    })


})

// })



