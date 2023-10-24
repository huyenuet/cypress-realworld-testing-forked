describe("Newsletter subscribe form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("allow user to subscribe to email list", () => {
        cy.getByData('email-input')
        .type("smartmouse.fun@gmail.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist')
        .contains("smartmouse.fun@gmail.com")
    })
    it("does NOT allow a invalid email address", () => {
        cy.getByData('email-input').type("@gmail.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })
    it.only("User cannot subscribe if email address is already subsribed", () => {
        cy.getByData('email-input').type("john@example.com")
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should('exist').contains("john@example.com")
    })
})