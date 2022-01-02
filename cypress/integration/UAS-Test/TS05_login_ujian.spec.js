// Nama     : Lutfi
// Kelas    : TI-3G
// NIM      : 2041723009
// No       : 13

// Test Scenario 05
describe('Test Login Ujian JTI', ()=>{
    beforeEach(() => {
        cy.visit('http://jti.polinema.ac.id/');
        cy.get('a').contains('Ujian Online').click();
    });

    // Testcase 01
    it('login success', () => {
        cy.get('#xuser_name').type('2041723009');
        cy.get('#xuser_password').type('2041723009');
        cy.get('#login').click();
        cy.url().should('contain','/index');
        cy.get('h1').should('contain',"Daftar Ujian");
        cy.get('.testlist').should('be.visible')
    });

    // Testcase 02
    it('wrong password', () => {
        cy.get('#xuser_name').type('2041723009');
        cy.get('#login').click()
        cy.get('.warning').should('contain',"PERINGATAN: user atau password salah");
    });

    // Testcase 03
    it('wrong username', () => {
        cy.get('#xuser_password').type('2041723009');
        cy.get('#login').click();
        cy.get('.warning').should('contain',"PERINGATAN: user atau password salah");
    });

    // Testcase 04
    it('wrong password & username', () => {
        cy.get('#xuser_name').type('1234567');
        cy.get('#xuser_password').type('1234567');
        cy.get('#login').click();
        cy.get('.warning').should('contain',"PERINGATAN: user atau password salah");
    });

    // Testcase 5
    it('Click User', () => {
        cy.get('#xuser_name').type('2041723009');
        cy.get('#xuser_password').type('2041723009');
        cy.get('#login').click();
        cy.get('a').contains('user').click();
        cy.get('h1').contains('user').should('be.visible');
    });
})