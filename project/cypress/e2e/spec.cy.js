describe('project', () => {
  it('[1] how cypress vists the website', () => {
    cy.visit("https://automationexercise.com/login")
  });
  it.only('[2] how to select elemnts', () => {
      cy.visit("https://automationexercise.com/login")
      cy.get('[name="name"]').type("aly")
      cy.get('[name="email"]').eq(1).type("aly@gmail.com")
      cy.get('[type="submit"]').eq(1).click()
      cy.url().should('include','https://automationexercise.com/signup')
    });
});