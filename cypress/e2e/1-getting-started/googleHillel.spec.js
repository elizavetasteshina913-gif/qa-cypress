
describe.skip('Google Hillel', () => {
    before(()=>{
        cy.log('starting google hillel');
    })

    beforeEach(() => {
        cy.log(`starting a new test`)
    })

    afterEach(()=>{
        cy.log('test completed')
    })

    after(()=>{
        cy.log('google hillel test completed')
    })



    it (`should be able to search for Hillel on Google and verify the title`, () => {
        cy.visit('https://www.google.com/');
        cy.get("[name=\"q\"]").type("Hillel{enter}");
        cy.title().should('include', 'Hillel');
    })
})



// describe('Google search', () => {
//     it('should be able to search for Hillel on Google and verify the title', () => {
//         cy.visit('https://www.google.com/');
//         cy.get('textarea[name="q"]').type('Hillel{enter}');
//         cy.title().should('include', 'Hillel');
//     });
// });
