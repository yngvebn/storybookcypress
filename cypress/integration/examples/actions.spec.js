/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=example-button--primary&viewMode=story')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Find button', () => {
    // https://on.cypress.io/type
    cy.get('.storybook-button')
      .should('contain.text', 'Button')

  })
})
