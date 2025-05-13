var express = require("express")

var router = express.Router()

var usuarioController = require("../controllers/usuarioController")

router.get("/:id", function (req,res) {
    usuarioController.contarCurtida(req,res)
})
module.exports = router