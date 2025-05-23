var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController")

//Cadastrar
router.post("/curtida/:idEvento", function (req, res) {
    usuarioController.cadastroI(req, res)
})


module.exports = router