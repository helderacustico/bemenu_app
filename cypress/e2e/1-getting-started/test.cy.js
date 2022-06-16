describe('Be Menu', () => {
    
      
    it('Deve acessar a pagina', () => {
        cy.viewport(1400, 780)
        cy.visit('https://bemenu.app/bobstx')
        cy.wait(5000)  
        cy.contains('Big Bob Frango').click()     
    })       
     
  })