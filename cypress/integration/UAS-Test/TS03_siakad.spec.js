// Nama         : Novan Sandi Dwi Irawan
// Kelas        : TI-3G
// NIM          : 1941720076
// No           : 22

//  Test Scenario 3
describe('Test Siakad JTI', () => {
    beforeEach(() => {
        cy.visit('http://jti.polinema.ac.id/');
        cy.get('a').contains('Siakad').click();
    });

    // Test Case 01
    it('login success', () => {
        cy.get('#username')
        .type('1941720076')
        
        cy.get('#password')
        .type('160816')

        cy.get('#chk_tampilkan').click()

        cy.contains('Login').click()

        cy.get('h3').contains('1941720076 / NOVAN S.D.I').should('be.visible');
    })

    // Test Case 02
    it('wrong username', () => {
        cy.get('#password')
        .type('160816')

        cy.get('#chk_tampilkan').click()

        cy.contains('Login').click()
        cy.get('#alert-login').should('contain', 'Username harus diisi');
    })

    // Test Case 03
    it('wrong password', () => {
        cy.get('#username')
        .type('1941720076')
        
        cy.get('#chk_tampilkan').click()

        cy.contains('Login').click()
        cy.get('#alert-login').should('contain', 'Password harus diisi');

    })

    // Test Case 04
    it('wrong username & password', () => {
        cy.get('#username')
        .type('19417276')
        
        cy.get('#password')
        .type('16')

        cy.get('#chk_tampilkan').click()

        cy.contains('Login').click()
        cy.get('#alert-login').should('contain', 'Username / Password Salah');
    })

    //Test Case 05
    it('Cetak KRS', () => {
        cy.get('#username')
        .type('1941720076')
        
        cy.get('#password')
        .type('160816')

        cy.get('#chk_tampilkan').click()

        cy.contains('Login').click()

        cy.get('#gm_akademik').click()

        cy.contains('Kartu Rencana Studi (KRS)').click()
        cy.get('.table').should('be.visible');
        cy.get('.green').should('be.visible');
        
        cy.contains('Cetak KRS').click()
    })

    // Test Case 06
    it('Cek Nilai', () => {
        cy.get('#username')
        .type('1941720076')
        
        cy.get('#password')
        .type('160816')

        cy.get('#chk_tampilkan').click()

        cy.contains('Login').click()

        cy.get('#gm_akademik').click()

        cy.contains('Nilai Mahasiswa').click()

        cy.get('#portlet_caption_title').should('contain', 'Transkip Nilai');
        cy.get('.green-meadow').should('be.visible');

        cy.get('select[name = "idThnSem"]').select("2019/2020 Genap");

        cy.contains('Filter').click()
        cy.get('.table').should('be.visible');
    })

})