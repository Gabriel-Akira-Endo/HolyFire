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
router.get("/qtdMiss/:idIgreja", function (req,res) {
    usuarioController.qtdMiss(req,res)
})
router.get("/qtdGraficos/:idIgreja", function (req,res) {
    usuarioController.qtdGraficos(req,res)
})
module.exports = router