import pdv from '../../pages/pdv';

describe('PDV ERP', () => {
    
      
  it('Deve acessar a pagina', () => {
    pdv.login()

    pdv.informaCliente()
    
    pdv.informa3Produtos()
      

    pdv.finalizaVenda()

    pdv.informaMeioPagamento()
    pdv.informaCondicaoPagamento()
    pdv.confirmaSelecao()
    pdv.confirmaPagamentoFechamentoVenda()

    pdv.confirmaModalidadeExpedicao()

    pdv.fechaModalConfirmacaoPedido()       
       
  })     
     
})