describe('login spec', () => {
    it('logs in as standard user', () => {
        cy.visit('https://saucedemo.com')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('button[type="submit"]').click()
        cy.get('.inventory_list').should('be.visible')
        cy.url().should('include', '/inventory.html')
    })
})
