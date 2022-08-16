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

    home: (req, res) => {
        res.render('../src/views/home.ejs');
    },

    login: (req, res) => {
        res.render('../src/views/login.ejs');
    },

    cadastrar: (req, res) => {
        res.render('../src/views/cadastro.ejs');
    },

    painel: (req, res) => {
        res.render('../src/views/painelusuario.ejs');
    },
}
   
module.exports = Controller;