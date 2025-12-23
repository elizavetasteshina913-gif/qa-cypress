// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    return originalFn(url, {
        ...options,
        auth: {
            username: "guest",
            password: "welcome2qauto",
        },
    });
})




Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false; // отключаем стандартный лог
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length), // показываем звездочки вместо текста
        });
    }
    return originalFn(element, text, options);
});




Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.contains('Sign In').click();
    cy.get('.modal-content').within(() => {
        cy.get('#signinEmail').type(email);
        cy.get('#signinPassword').type(password, { sensitive: true });
        cy.get('.btn-primary').click();
    });
});





// Cypress.Commands.add('loginAsGuest', () => {
//     cy.visit("/");
//     cy.contains("Guest log in").click()
// });
//
// Cypress.Commands.add('login', (email,password) => {
//     cy.visit("/");
    // cy.contains("Guest log in").click()
// });
//
// Cypress.Commands.add('getById', function (id) {
//     return cy.get(`#${id}`)
// })