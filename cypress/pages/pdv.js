import locators from '../support/locators'
import data from '../support/data'

class pdv {

    login() {
        cy.viewport(1600, 880)
        cy.visit(data.baseUrl.prod)
        cy.get(locators.inputs.login).type(data.login.user)
        cy.get(locators.inputs.password).type(data.login.password)
        cy.get(locators.login.botaoAcessar).click()
        cy.get(locators.inputs.caixaSelectFilial).click()        
        cy.get(locators.inputs.selecionaFilial).click()
        cy.get(locators.login.botaoAcessar).click()
        cy.wait(6000)        
    }


    informaCliente() {
        cy.get(locators.cliente.lupaConsultaCliente).click()
        cy.get(locators.cliente.digitaCliente).type(data.cliente.clienteData)
        cy.get(locators.cliente.cliclaSelecionaCliente).click()
        cy.get(locators.cliente.confirmaModal).click()
    }


    informa1Produto() {
        cy.get('#autocomplete-produto').type('ACS.18')
        cy.get('.MuiFab-extended').click()        
    }

    informa3Produtos() {
        cy.get('#autocomplete-produto').type('ACS.18')
        cy.get('.MuiFab-extended').click().wait(1000)
        cy.get('#autocomplete-produto').type('LIM.11')
        cy.get('.MuiFab-extended').click().wait(1000)  
        cy.get('#autocomplete-produto').type('SAD.1')
        cy.get('.MuiFab-extended').click().wait(1000)          
    }

    finalizaVenda() {
        cy.get('.sc-hTtwUo > .MuiButton-label').click()
    }

    informaMeioPagamento() {
        cy.contains('CARTÃO DÉBITO').click()
    }
    
    informaCondicaoPagamento() {
        cy.contains('A VISTA').click()
    }

    confirmaSelecao() {
        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click()
    }

    confirmaPagamentoFechamentoVenda() {
        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click().wait(3000)
    }

    confirmaModalidadeExpedicao() {
        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click()
    }

    fechaModalConfirmacaoPedido() {
        cy.get('.jss224 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    }

}

export default new pdv