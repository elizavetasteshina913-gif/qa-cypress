
it('login with valid creds', () => {
    cy.login('aqaaelizavetasteshina913@gmail.com', 'Valid1Pass');

    cy.location().its("pathname").should("eq", "/panel/garage");

    cy.get(".btn-primary").contains("Add car").should("be.visible");
});
