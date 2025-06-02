    const express = require('express');
    const router = express.Router();
    const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
    const usuarioController = require('../controllers/usuarioController');

    router.post('/post/:idIgreja', upload.single('foto'), (req, res) => {
    usuarioController.enviar(req, res);
    });
    router.post('/missionario/:idIgreja', upload.single('foto'), (req, res) => {
    usuarioController.missionario(req, res);
    });

    module.exports = router;
