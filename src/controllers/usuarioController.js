var exploreModel = require("../models/usuarioModel")

function curtir(req,res){
    var idPost = req.body.idPostServer
    exploreModel.curtir(idPost)
    .then(
        resultado => {
            res.status(200).json(resultado)
        }
    ).catch(
        function (erro){
            console.log(erro)
            console.log(
                "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                erro.sqlMessage
            )
            res.status(500).json(erro.sqlMessage)
        }
    )

}
function contarCurtida(req,res){
    var id = req.params.id;

    exploreModel.contarCurtida(id)
    .then(
        resultado => {
            res.status(200).json(resultado)
        }
    ).catch(
        function (erro){
            console.log(erro)
            console.log(
                "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                erro.sqlMessage
            )
            res.status(500).json(erro.sqlMessage)
        }
    )

}

function descurtirCurtida(req,res){
    var idUser = req.body.  idUserServer
    exploreModel.descurtir(idUser)
    .then(
        resultado => {
            res.status(200).json(resultado)
        }
    ).catch(
        function (erro){
            console.log(erro)
            console.log(
                "\nHouve um erro no descurtir:",
                erro.sqlMessage
            )
            res.status(500).json(erro.sqlMessage)
        }
    )

}


module.exports = {
    curtir,contarCurtida, descurtirCurtida
}