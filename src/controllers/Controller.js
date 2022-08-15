const Controller = {
    listar: (req, res) => {
        res.render('../src/views/home.ejs')
    },
    finaliza: (req, res) => {
        res.render('../src/views/finalizacompra.ejs')
    },
    cadastroP: (req, res) => {
        res.render('../src/views/cadastroDeProduto.ejs')
    },
}


module.exports = Controller;