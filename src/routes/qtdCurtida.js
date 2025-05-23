var express = require("express")

var router = express.Router()

var usuarioController = require("../controllers/usuarioController")

router.get("/:IdEvento", function (req,res) {
    usuarioController.contarCurtida(req,res)
})
module.exports = router