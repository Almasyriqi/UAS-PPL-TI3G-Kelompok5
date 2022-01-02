// Nama     : M. Syifa'ul Ikrom Almasyriqi
// Kelas    : TI-3G
// NIM      : 1941720057
// No       : 20

// Test Scenario 02
describe('Test Publikasi', () => {
    beforeEach(() => {
        cy.visit('http://jti.polinema.ac.id/');
    });

    // Test Case 01
    it('Halaman Publikasi', () => {
        // Klik Publikasi, masuk ke halaman Jurnal
        cy.get('#menu-item-1402').contains('Publikasi').click();
        cy.url().should('include', '/jurnal-2')
        cy.get('h1').should('contain', 'Jurnal');
        cy.get('a[href*="http://jti.polinema.ac.id/index.php/jurnal-informatika-polinema-jip/"]').should('contain' ,'Jurnal Informatika Polinema (JIP)')
        cy.get('a[href*="http://jti.polinema.ac.id/index.php/seminar-informatika-aplikatif-siap/"]').should('contain', 'Seminar Informatika Aplikatif (SIAP)');

        // Klik link Jurnal Informatika Polinema (JIP)
        cy.get('a').contains('Jurnal Informatika Polinema (JIP)').click({force: true});
        cy.url().should('contain', '/jurnal-informatika-polinema-jip');
        cy.get('h1').should('contain', 'Jurnal Informatika Polinema (JIP)');
        cy.wait(1000);
        cy.go('back');

        // Klik link Seminar Informatika Aplikatif (SIAP)
        cy.get('a[href*="http://jti.polinema.ac.id/index.php/seminar-informatika-aplikatif-siap/"]').contains('Seminar Informatika Aplikatif (SIAP)').click({force: true});
        cy.url().should('contain', '/seminar-informatika-aplikatif-siap');
        cy.get('h1').should('contain', 'Seminar Informatika Aplikatif (SIAP)');
    });

    // Test Case 02
    it('Membuka website JIP', () => {
        cy.get('#menu-item-1402').contains('Publikasi').realHover();
        cy.get('#menu-item-1357').should('be.visible')
        cy.get('#menu-item-1357').contains('Jurnal Informatika Polinema (JIP)').click({force: true});
        cy.url().should('include', '/jurnal-informatika-polinema-jip')
        cy.get('h1').should('contain', 'Jurnal Informatika Polinema (JIP)');
        cy.get('a').contains('http://jip.polinema.ac.id').should('be.visible');

        cy.get('a').contains('http://jip.polinema.ac.id').invoke('removeAttr', 'target').click();
        cy.url().should('include', '/jip')
        cy.get('h2').should('contain', 'JIP (Jurnal Informatika Polinema)');
    });

    // Test Case 03
    it('Membuka web arsip SIAP', () => {
        cy.get('#menu-item-1402').contains('Publikasi').realHover();
        cy.get('#menu-item-3182').should('be.visible')

        cy.get('#menu-item-3182').contains('Seminar Informatika Aplikatif (SIAP)').realHover();
        cy.get('#menu-item-3181').should('be.visible')
        cy.get('#menu-item-2932').should('be.visible')

        // dropdown menu SIAP 2020
        cy.get('#menu-item-3181').contains('Seminar Informatika Aplikatif (SIAP) 2020').click();
        cy.url().should('include', '/seminar-informatika-aplikatif-siap-2020')
        cy.get('h1').should('contain', 'Seminar Informatika Aplikatif (SIAP) 2020');
        cy.get('a').should('contain', 'http://jurnalti.polinema.ac.id/index.php/SIAP/issue/archive');

        // dropdown menu SIAP 2019
        cy.get('#menu-item-1402').contains('Publikasi').realHover();
        cy.get('#menu-item-3182').contains('Seminar Informatika Aplikatif (SIAP)').realHover();
        cy.get('#menu-item-2932').contains('Seminar Informatika Aplikatif (SIAP) 2019').click();
        cy.get('h1').should('contain', 'Seminar Informatika Aplikatif (SIAP)');
        cy.get('a').should('contain', 'http://jurnalti.polinema.ac.id/index.php/SIAP/issue/archive');
        cy.get('a').contains('http://jurnalti.polinema.ac.id/index.php/SIAP/issue/archive').click();
        cy.url().should('include', '/SIAP')
        cy.get('p').should('contain', 'Seminar Informatika Aplikatif Polinema (SIAP)');
    });

    // Test Case 04
    it('Download format makalah SIAP 2019', () => {
        cy.get('#menu-item-1402').contains('Publikasi').realHover();
        cy.get('#menu-item-3182').should('be.visible')
        cy.get('#menu-item-3182').contains('Seminar Informatika Aplikatif (SIAP)').realHover();
        cy.get('#menu-item-3181').should('be.visible')
        cy.get('#menu-item-2932').should('be.visible')

        // Masuk halaman SIAP 2019
        cy.get('#menu-item-2932').contains('Seminar Informatika Aplikatif (SIAP) 2019').click();
        cy.url().should('include', '/seminar-informatika-aplikatif-siap')
        cy.get('h1').should('contain', 'Seminar Informatika Aplikatif (SIAP)');
        cy.get('a').should('contain', 'Format Makalah SIAP');

        // Download template SIAP word
        cy.downloadFile('http://jti.polinema.ac.id/wp-content/uploads/2019/07/SIAP-template-word.doc',
            'cypress/downloads', 'SIAP-template-word.doc')
        cy.readFile('cypress/downloads/SIAP-template-word.doc').should('contain', 'Judul Makalah')
    });

    // Test Case 05
    it('Download format photoshop SIAP 2019', () => {
        cy.get('#menu-item-1402').contains('Publikasi').realHover();
        cy.get('#menu-item-3182').should('be.visible')
        cy.get('#menu-item-3182').contains('Seminar Informatika Aplikatif (SIAP)').realHover();
        cy.get('#menu-item-3181').should('be.visible')
        cy.get('#menu-item-2932').should('be.visible')

        // Masuk halaman SIAP 2019
        cy.get('#menu-item-2932').contains('Seminar Informatika Aplikatif (SIAP) 2019').click();
        cy.url().should('include', '/seminar-informatika-aplikatif-siap')
        cy.get('h1').should('contain', 'Seminar Informatika Aplikatif (SIAP)');
        cy.get('a').should('contain', 'Format Makalah SIAP');

        // download banner SIAP format zip
        cy.downloadFile('http://jti.polinema.ac.id/wp-content/uploads/2017/08/Contoh_X_Banner_SIAP_2017.zip',
            'cypress/downloads', 'Contoh_X_Banner_SIAP_2017.zip');
        cy.verifyDownload('Contoh_X_Banner_SIAP_2017.zip');
    });
})
