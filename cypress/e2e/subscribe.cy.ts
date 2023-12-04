describe("Newsletter subscribe form", function() {
    beforeEach(function() {
        cy.visit("")
        cy.get('button').first().invoke('text').as("button_text")
    })
    it("allow user to subscribe to email list", function() {
        cy.get('@button_text').then(button_text => {
            expect(button_text).to.eql("Open menu")
        })
        cy.getByData('email-input')
        .type("smartmouse.fun@gmail.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist')
        .contains("smartmouse.fun@gmail.com")
    })
    it("does NOT allow a invalid email address", () => {
        cy.get('@button_text').should('equal', "Open menu")
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