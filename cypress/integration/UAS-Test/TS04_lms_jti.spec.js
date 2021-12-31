// Nama     : Arin Kistia Nugraeni
// Kelas    : TI-3G
// NIM      : 1941720006
// No       : 06

// Test Scenario 04
describe('Test LMS JTI', ()=>{
    beforeEach(() => {
        cy.visit('http://jti.polinema.ac.id/');
        cy.get('a').contains('E-Learning').click();
        cy.get('a').contains('Log in').click();
    });

    // Testcase 01
    it('login success', () => {
        cy.get('h2').contains('Elearning Teknologi Informasi');
        cy.get('#username').type('1941720057');
        cy.get('#password').type('1941720057');
        cy.get('#loginbtn').click();
        cy.url().should('contain','/my');
        cy.get('.usertext').should('contain',"MUHAMMAD SYIFA'UL IKROM ALMASYRIQI 1941720057");
    });

    // Testcase 02
    it('wrong username', () => {
        cy.get('h2').contains('Elearning Teknologi Informasi');
        cy.get('#username').type('1941720057');
        cy.get('#loginbtn').click();
        cy.get('.alert-danger').should('contain',"Invalid login, please try again");
    });

    // Testcase 03
    it('wrong password', () => {
        cy.get('h2').contains('Elearning Teknologi Informasi');
        cy.get('#password').type('1941720057');
        cy.get('#loginbtn').click();
        cy.get('.alert-danger').should('contain',"Invalid login, please try again");
    });

    // Testcase 04
    it('wrong password & username', () => {
        cy.get('h2').contains('Elearning Teknologi Informasi');
        cy.get('#loginbtn').click();
        cy.get('.alert-danger').should('contain',"Invalid login, please try again");
    });

    // Testcase 5
    it('search kosong', () => {
        cy.get('a').contains('Course List').click();
        cy.get('#coursesearchbox').type('{enter}');
        cy.get('p').contains('You can search for multiple words at once and can refine your search as follows:').should('be.visible');
        cy.get('ul').should('be.visible');
    });

    //Testcase 6
    it('search success', () => {
        cy.get('a').contains('Course List').click();
        cy.get('#coursesearchbox').type('algoritma {enter}');
        cy.get('.highlight').contains('Algoritma').should('be.visible');
    });

    //Testcase 7
    it('search wrong', () => {
        cy.get('a').contains('Course List').click();
        cy.get('#coursesearchbox').type('algoritmu {enter}');
        cy.get('h2').contains("No courses were found with the words 'algoritmu'").should('be.visible');
    });
})