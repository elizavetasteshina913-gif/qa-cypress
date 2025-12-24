// describe("Registration — successful path", () => {
//     beforeEach(() => {
//         cy.visit("https://qauto.forstudy.space/");
//
//         cy.get('.section.hero').within(() => {
//             cy.contains('Sign up').click();
//         });
//
//         cy.get('.modal-content').should('be.visible');
//     });

describe("login", () => {
    beforeEach(() => {
        cy.login();
    });

    it("add car", () => {
            cy.get(`.main`).within(() => {
                cy.get(".btn-primary").click()
                cy.get(".modal-content").contains("Add a car");
                cy.get('#addCarBrand').select('1: 2')


            })
    });
});
