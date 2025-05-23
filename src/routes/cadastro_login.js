var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController")

//Cadastrar
router.post("/cadastroI", function (req, res) {
    usuarioController.cadastroI(req, res)
})

router.post("/cadastroU", function (req, res) {
    usuarioController.cadastroI(req, res)
})

//Autenticar
router.post("/loginU", function (req, res) {
    usuarioController.loginI(req, res)
})

router.post("/loginU", function (req, res) {
    usuarioController.loginI(req, res)
})

module.exports = router