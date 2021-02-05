/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=example-button--primary&viewMode=story')
  })


  it('Find button', () => {
    cy.get('.storybook-button')
      .should('contain.text', 'Button')
  })
})
