const locators = {
    login:{
        botaoAcessar: '.MuiButton-label',
        botaoSelecionarFilial: '.MuiButton-label > .MuiTypography-root'
    },

    inputs: {
        login: ':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input',
        password: ':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input',
        caixaSelectFilial: '#filial-selecionada-select-outlined',
        selecionaFilial: '.MuiList-root > .MuiButtonBase-root',
    },

    cliente: {
        lupaConsultaCliente: '.jss77 > .MuiButtonBase-root',
        digitaCliente: '.MuiToolbar-root > .MuiFormControl-root > .MuiInputBase-root',
        cliclaSelecionaCliente: '.MuiDialog-paper > .MuiList-root > .MuiButtonBase-root',
        confirmaModal: '.MuiBox-root > .MuiGrid-root > .MuiButton-contained',
        clienteData: 'Helder Lima'

    },

    produto: {
        

    }
}

export default locators;