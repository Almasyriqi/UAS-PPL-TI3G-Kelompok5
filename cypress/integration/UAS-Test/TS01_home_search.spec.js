// Nama     : M. Syifa'ul Ikrom Almasyriqi
// Kelas    : TI-3G
// NIM      : 1941720057
// No       : 20

// Test Scenario 01
describe('Test Home dan Search', () => {
    beforeEach(() => {
        cy.visit('http://jti.polinema.ac.id/');
    });

    // Test Case 01
    it('Cek Atribut pada Home', () => {
        // cek logo, search bar, slideshow, berita terbaru, dan pengumuman
        cy.get('.logo').should('be.visible');
        cy.get('.frm-search').should('be.visible');
        cy.get('.sangar-slideshow-content').should('be.visible');
        cy.get('.box-title').should('contain', 'Berita Terbaru');
        cy.get('.box-title').should('contain', 'Pengumuman');

        // Cek gambar auditorium pada galeri
        cy.get('.box-title-unblock').should('contain', 'Galeri');
        cy.get('.box-item').should('be.visible');
        cy.get('.rbsTitle ').contains('auditorium').click();
        cy.wait(1000);
        cy.get('.mfp-close').should('be.visible').click();
    });

    // Test Case 02
    it('Cek Berita', () => {
        // klik berita FGD pembentukan komite kurikulum D-IV SIB
        cy.get('.box-item-title').contains('FGD Pembentukan Komite Kurikulum D-IV SIB').click();
        cy.url().should('contain', '/fgd');
        cy.get('.main-content-title').should('contain', 'FGD Pembentukan Komite Kurikulum D-IV SIB');
        cy.wait(1000);
        cy.go('back');

        // Klik berita lainnya
        cy.get('a').contains('Berita Lainnya...').click();
        cy.url().should('contain', '/berita');
        cy.get('.main-content-title').should('contain', 'Daftar Berita');
        cy.get('.btn').contains('« Sebelumnya').click();
        cy.url().should('contain', '/page/2');
        cy.wait(1000);
        cy.get('a').contains('Selanjutnya »').should('be.visible').click();
    });

    // Test Case 03
    it('Cek Pengumuman', () => {
        // klik pengumuman INTERCOMP JTI 2021
        cy.get('.box-item-title').contains('INTERCOMP JTI 2021').click();
        cy.url().should('contain', '/intercomp-jti-2021');
        cy.get('.main-content-title').should('contain', 'INTERCOMP JTI 2021');
        cy.wait(1000);
        cy.go('back');

        // klik pengumuman lainnya
        cy.get('a').contains('Pengumuman Lainnya...').click();
        cy.url().should('contain', '/pengumuman');
        cy.get('.main-content-title').should('contain', 'Category: Pengumuman');
        cy.get('.btn').contains('Older posts').click();
        cy.url().should('contain', '/page/2');
        cy.wait(1000);
        cy.get('a').contains('Newer posts').should('be.visible').click();
    });

    // Test Case 04
    it('Search kosong', () => {
        cy.get('.search-input-text').type('{enter}');
        cy.get('.main-content-title').should('contain', 'Search Results for: ');
        cy.get('#post-3680').should('be.visible');
    });

    // Test Case 05
    it('Search kata program', () => {
        cy.get('.search-input-text').type('Program {enter}');
        cy.url().should('contain', 'Program')
        cy.get('.main-content-title').should('contain', 'Search Results for: Program');
        cy.get('#post-3672').should('be.visible');
        cy.wait(1000);
        cy.get('.btn').contains('Older posts').click();
        cy.url().should('contain', '/page/2');
        cy.wait(1000);
        cy.get('a').contains('Newer posts').should('be.visible').click();
    });
})
