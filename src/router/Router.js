const express = require('express');

const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/', Controller.home);

router.get('/login', Controller.login);

router.get('/cadastro', Controller.cadastrar);

module.exports = router;