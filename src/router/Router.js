const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/', Controller.home);

router.get('/login', Controller.login);

router.get('/cadastro', Controller.cadastrar);

router.get('/finaliza', Controller.finaliza);

router.get('/cadastroP', Controller.cadastroP)

module.exports = router;