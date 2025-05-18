var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController")

//Cadastrar
router.post("/cadastroI", function (req, res) {
    usuarioController.cadastroI(req, res)
})

//Autenticar
router.post("/loginI", function (req, res) {
    usuarioController.loginI(req, res)
})

module.exports = router