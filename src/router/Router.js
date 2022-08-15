const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/', Controller.listar);

router.get('/finaliza', Controller.finaliza);

router.get('/cadastroP', Controller.cadastroP)

module.exports = router;