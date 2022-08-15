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
        res.render('../src/views/home.ejs', { erro: 0 });
    },

    login: (req, res) => {
        res.render('../src/views/login.ejs', { erro: 0 });
    },

    cadastrar: (req, res) => {
        res.render('../src/views/cadastro.ejs', { erro: 0 });
    },
}
   
module.exports = Controller;