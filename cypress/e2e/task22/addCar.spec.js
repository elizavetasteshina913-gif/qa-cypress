import { faker } from '@faker-js/faker';

describe("Register+add car", () => {
    const password = `Qwerty${faker.number.int({min: 100, max: 999})}`
    const userData = {
        "name": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "email": faker.internet.email(),
        "password": password,
        "repeatPassword": password
    }

    beforeEach(() => {
        cy.visit("/");
        cy.get(".btn-primary").as("loginBtn");
        cy.get("@loginBtn").click();
    });

    it("Register and add car", () => {

        cy.get(`.modal-content`).within(($form) => {
            cy.wrap($form).should("have.class", "modal-content");

            cy.get("#signupName").type(userData.name);
            cy.get("#signupLastName").type(userData.lastName);
            cy.get("#signupEmail").type(userData.email);
            cy.get("#signupPassword").type(userData.password);
            cy.get("#signupRepeatPassword").type(userData.password);
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


                expect(carData.mileage).to.eq(1500);
                expect(carData.carBrandId).to.eq(3);
                expect(carData.carModelId).to.eq(11);
            })


        })



    });

// });


