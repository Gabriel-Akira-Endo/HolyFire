var express = require("express")

var router = express.Router()

var usuarioController = require("../controllers/usuarioController")

router.post("/:id", function (req,res) {
    usuarioController.curtir(req,res)
})
module.exports = router