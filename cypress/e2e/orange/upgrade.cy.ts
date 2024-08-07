describe('Upgrade', () => {
    it('goes to Upgrade page', () => {
        cy.visit('/')
        cy.get('[name=username]').type('Admin')
        cy.get('[name=password]').type('admin123')
        cy.get('button[type=submit]').click()
        cy.contains('Upgrade').click()
        cy.contains('Upgrade to OrangeHRM Advanced!').should('be.visible')
    })
})
