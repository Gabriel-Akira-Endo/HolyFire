var express = require("express")

var router = express.Router()

var usuarioController = require("../controllers/usuarioController")

router.delete("/:id", function (req,res) {
    usuarioController.descurtirCurtida(req,res)
})
module.exports = router