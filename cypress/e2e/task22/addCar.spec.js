describe("Register+add car", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get(".btn-primary").as("loginBtn");
        cy.get("@loginBtn").click();
    });

    it("Register and add car", () => {

        cy.get(`.modal-content`).within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");

            cy.get("#signupName").type("Lizzaaaqa");
            cy.get("#signupLastName").type("lolio");
            cy.get("#signupEmail").type("35qaamandarinkaa094@gmail.com");
            cy.get("#signupPassword").type("Validpass1");
            cy.get("#signupRepeatPassword").type("Validpass1");
            cy.get(".btn-primary").click();
        });

        cy.intercept('POST', '/api/cars', ).as("createCar")

            cy.get('.btn-primary').contains('Add car').click();
            cy.get('.modal-content').within(() => {
                cy.get('#addCarBrand').select('2: 3');
                cy.get('#addCarMileage').type('1500');
                cy.get('.btn-primary').contains('Add').click();
            });
            cy.wait('@createCar').then(({response}) => {
                // const car = response.body.data[0];

                const carData = response.body.data;


                expect(data.mileage).to.eq(1500);
                expect(data.carBrandId).to.eq(3);
                expect(data.carModelId).to.eq(11);
            })


        })



    });

// });


