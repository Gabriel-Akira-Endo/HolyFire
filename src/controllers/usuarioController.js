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
    function cadastroI(req, res) {
    var nomeI = req.body.nomeIServer
    var cnpjI = req.body.cnpjIServer
    var CEPI = req.body.CEPIServer
    var emailI = req.body.emailIServer
    var SenhaI = req.body.SenhaIServer

    exploreModel.cadastroI(nomeI, cnpjI, CEPI, emailI,SenhaI)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao realizar o cadastro! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}



module.exports = {
    curtir,contarCurtida,cadastroI,
}