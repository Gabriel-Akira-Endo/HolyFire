var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController")

//Cadastrar
router.post("/curtida/:idEvento/:idUsuario", function (req, res) {
    usuarioController.curtir(req, res)
})
router.post("/descurtida/:idEvento/:idUsuario", function (req, res) {
    usuarioController.descurtir(req, res)
})


module.exports = router