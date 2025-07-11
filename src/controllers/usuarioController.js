var exploreModel = require("../models/usuarioModel")

function curtir(req, res) {
    var idEvento = req.params.idEvento;
    var idUsuario = req.params.idUsuario;

    exploreModel.curtir(idEvento, idUsuario)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )

}
function descurtir(req, res) {
    var idEvento = req.params.idEvento;
    var idUsuario = req.params.idUsuario;

    exploreModel.descurtir(idEvento, idUsuario)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )

}
function contarCurtida(req, res) {

    var idEvento = req.params.IdEvento;

    exploreModel.contarCurtida(idEvento)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )

}
function curtidaIgreja(req, res) {

    var idIgreja = req.params.idIgreja;

    exploreModel.curtidaIgreja(idIgreja)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )
}
function qtdEvento(req, res) {

    var idIgreja = req.params.idIgreja;

    exploreModel.qtdEvento(idIgreja)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )

}
function qtdMiss(req, res) {

    var idIgreja = req.params.idIgreja;

    exploreModel.qtdMiss(idIgreja)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro:",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )
    }

function qtdGraficos(req, res) {

    var idIgreja = req.params.idIgreja;

    exploreModel.qtdGraficos(idIgreja)
        .then(
            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
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

    exploreModel.cadastroI(nomeI, cnpjI, CEPI, emailI, SenhaI)

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
                    email: resultado[0].email,
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

function cadastroU(req, res) {
    var nomeU = req.body.nomeUServer
    var emailU = req.body.emailUServer
    var senhaU = req.body.SenhaUServer

    exploreModel.cadastroU(nomeU, emailU, senhaU)

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
function loginU(req, res) {

    var emailU = req.body.emailUServer
    var senhaU = req.body.senhaUServer

    if (!emailU || !senhaU) {
        return res.status(400).json({ erro: "Preencha todos os campos!" });
    }

    exploreModel.loginU(emailU, senhaU)
        .then(function (resultado) {
            if (resultado.length == 1) {
                res.json({
                    idUsuario: resultado[0].idUsuario,
                    nome: resultado[0].nome,
                    email: resultado[0].email,
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

function enviar(req, res) {
    var idIgreja = req.body.idIgreja
    var imagem = req.file.filename;
    var descricao = req.body.descricao;
    var nome = req.body.nome;
    var cep = req.body.cep;
    var numero = req.body.numero;
    var data_hora = req.body.data_hora;
    var categoria = req.body.categoria;

    exploreModel.enviar(idIgreja, descricao, nome, cep, numero, data_hora, categoria, imagem)
        .then(resultado => { 
            console.log("Insert realizado com sucesso:", resultado);
            res.status(201).send("Post enviado com sucesso controller");
        }).catch(err => {
            console.error("Erro no envio do evento:", err);
            res.status(500).send(err);
        });
}

function missionario(req, res) {
    var idIgreja = req.body.idIgreja
    var imagem = req.file.filename;
    var descricao = req.body.descricao
    var nome = req.body.nome
    var idIgreja = req.body.idIgreja
    var tel = req.body.tel
    var insta = req.body.insta
    var data_nasc = req.body.data_nasc
    var pedidos = req.body.pedidos
    var email = req.body.email

    exploreModel.missionario(idIgreja,descricao,nome,idIgreja,tel,insta,data_nasc,pedidos, imagem,email)
        .then(resultado => { 
            console.log("Insert realizado com sucesso:", resultado);
            res.status(201).send("Missionario enviado com sucesso controller");
        }).catch(err => {
            console.error("Erro no envio do missionario:", err);
            res.status(500).send(err);
        });
}

function puxaTudo(req, res) {
    exploreModel.puxaTudo()
        .then(
            resultado => {
                res.status(200).json(resultado);
            }).catch(err => {
                res.status(500).send(err);
            });
}
function pusharMiss(req, res) {
    exploreModel.pusharMiss()
        .then(
            resultado => {
                res.status(200).json(resultado);
            }).catch(err => {
                res.status(500).send(err);
            });
}
function puxaTudoDash(req, res) {
    var idIgreja = req.params.idIgreja
    exploreModel.puxaTudoDash(idIgreja)
        .then(
            resultado => {
                res.status(200).json(resultado);
            }).catch(err => {
                res.status(500).send(err);
            });
}



module.exports = {
    curtir, contarCurtida, cadastroI, loginI, enviar, puxaTudo, cadastroU, loginU, descurtir, puxaTudoDash, curtidaIgreja, qtdEvento, missionario,pusharMiss,qtdMiss,qtdGraficos
}