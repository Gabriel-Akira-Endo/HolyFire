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
    function loginI(req, res) {

    var emailI = req.body.emailIServer
    var senhaI = req.body.senhaIServer

  if (!emailI || !senhaI) {
        return res.status(400).json({ erro: "Preencha todos os campos!" });
    }

    exploreModel.loginI(emailI, senhaI)
        .then(function (resultado) {
            if (resultado.length == 1) {
                res.json({
                    idIgreja: resultado[0].idIgreja,
                    nomeIgreja: resultado[0].nomeIgreja,
                    email: resultado[0].emailIgreja,
                });
            } else {
                res.status(403).json({ erro: "Email e/ou senha inválidos!" });
            }
        })
        .catch(function (erro) {
            console.error("Erro ao autenticar:", erro);
            res.status(500).json({ erro: "Erro interno no servidor." });
        });
}




module.exports = {
    curtir,contarCurtida,cadastroI,loginI,
}