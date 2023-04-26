describe('main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('the h1 contains the correct text', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Go');
    cy.get('h1').contains('RoboWorld');
  });

  it('check search and modal', () => {
    cy.get('input[type="input"]').type('She');
    cy.get('input[type="input"]').should('have.value', 'She');
    cy.contains('Go').click();
    cy.get('h2[class="name_user"]').contains('Name: Sheldon Quigley');
    cy.get('h2[class="name_user"]').contains('Name: Kody Terry');
    cy.get('div[id="2"]').click();
    cy.get('div[class="modal-card active"]').should('be.visible');
    cy.get('p').contains('Email: hbingley1@plala.or.jp');
    cy.get('div[class="close_icon"]').click();
    cy.get('div[class="modal-card"]').should('be.hidden');
  });
  it('check about nav', () => {
    cy.contains('About').click();
    cy.get('h2[class="about"]').contains('This page about us');
    cy.get('h3[class="cur_page navigation_link"]').contains('Current page: about');
  });
});
