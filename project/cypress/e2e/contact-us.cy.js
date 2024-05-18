
describe('contact US', () => {
    it.only('[1] Positive scenario', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aly")
        cy.get('[name="last_name"]').type("abouelatta")
        cy.get('[name="email"]').type("aly@gmail.com")
        cy.get('[name="message"]').type("i am using cypress")
        cy.get('[type="submit"]').click()
        cy.url().should('include','thank-you')
    });
    it('[2] no first name', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="last_name"]').type("abouelatta")
        cy.get('[name="email"]').type("aly@gmail.com")
        cy.get('[name="message"]').type("i am using cypress")
        cy.get('[type="submit"]').click()
        cy.contains("all fields are required").should("be.exist");
    });
    it('[3] no last name', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aly")
        cy.get('[name="email"]').type("aly@gmail.com")
        cy.get('[name="message"]').type("i am using cypress")
        cy.get('[type="submit"]').click()
        cy.contains("all fields are required").should("be.exist");
    });
    it('[4] no email', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aly")
        cy.get('[name="last_name"]').type("abouelatta")
        cy.get('[name="message"]').type("i am using cypress")
        cy.get('[type="submit"]').click()
        cy.contains("all fields are required").should("be.exist");
        cy.contains("Invalid email address").should("be.exist")
    });
    it('[5] no comments', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aly")
        cy.get('[name="last_name"]').type("abouelatta")
        cy.get('[type="submit"]').click()
        cy.contains("all fields are required").should("be.exist");
    });
    it('[6] reset', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("aly")
        cy.get('[name="last_name"]').type("abouelatta")
        cy.get('[name="email"]').type("aly@gmail.com")
        cy.get('[name="message"]').type("i am using cypress")
        cy.get('[type="reset"]').click()
    });
    it('[7] empty fields', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[type="submit"]').click()
        cy.contains("all fields are required").should("be.exist");
        cy.contains("Invalid email address").should("be.exist")
    });
    it('[8] click on navbar', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('#nav-title').click()
        cy.url().should('include','index')
    });

});