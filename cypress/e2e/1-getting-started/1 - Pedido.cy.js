describe('Be Menu', () => {
    
      
    it('Deve acessar a pagina', () => {
        cy.viewport(1600, 880)
        cy.visit('https://golerp-pdv.netlify.app/')
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('vendas@casadodoutor.com.br')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('1')
        cy.get('.MuiButton-label').click()
        cy.get('#filial-selecionada-select-outlined').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.get('.MuiButton-label > .MuiTypography-root').click()   
        cy.wait(6000)   
     
        cy.get('#autocomplete-produto').type('acs.18')
        cy.get('.MuiFab-extended').click()
        cy.get('.sc-hTtwUo').click()

        cy.contains('DINHEIRO').click()
        cy.contains('A VISTA').click()
        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click()

        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click()

        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click()

        cy.get('.jss171 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    })       
     
  })