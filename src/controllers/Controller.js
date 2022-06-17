const Controller = {
    home: (req, res) => {
        res.render('../src/views/home.ejs', { erro: 0 })
    },

    login: (req, res) => {
        res.render('../src/views/login.ejs', { erro: 0 });
    },

    cadastrar: (req, res) => {
        res.render('../src/views/cadastro.ejs', { erro: 0 })
    }
}
  
module.exports = Controller;