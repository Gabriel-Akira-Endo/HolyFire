const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/puxar', (req, res) => {
  usuarioController.puxaTudo(req, res);
});
router.get('/postDash/:idIgreja', (req, res) => {
  usuarioController.puxaTudoDash(req, res);
});
router.get('/pusharMiss', (req, res) => {
  usuarioController.pusharMiss(req, res);
});
module.exports = router