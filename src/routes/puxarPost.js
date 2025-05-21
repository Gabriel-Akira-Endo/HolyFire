const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/puxar', (req, res) => {
  usuarioController.puxaTudo(req, res);
});
module.exports = router