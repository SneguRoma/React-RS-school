describe('Form', () => {
  it('should submit form with correct values', () => {
    cy.visit('/form');
    cy.get('#input-name').type('John');
    cy.get('#date').type('2020-12-20');
    cy.get('.select').select('cat');
    cy.get('#yes').click();
    cy.get('#image-input').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.jpg',
      lastModified: Date.now(),
    });
    cy.get('#input-name').should('have.value', 'John');
    cy.get('#date').should('have.value', '2020-12-20');
    cy.get('.select').should('have.value', 'cat');
    cy.get('#image-input').should('have.prop', 'value', 'C:\\fakepath\\file.jpg');
  });
});
