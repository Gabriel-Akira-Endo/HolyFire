var express = require("express")

var router = express.Router()

var usuarioController = require("../controllers/usuarioController")

router.get("/:IdEvento", function (req,res) {
    usuarioController.contarCurtida(req,res)
})

router.get("/curtidaIgreja/:idIgreja", function (req,res) {
    usuarioController.curtidaIgreja(req,res)
})
router.get("/qtdEvento/:idIgreja", function (req,res) {
    usuarioController.qtdEvento(req,res)
})
module.exports = router