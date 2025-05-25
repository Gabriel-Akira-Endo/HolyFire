
var database = require("../database/config")

function curtir(idPost) {
    var instrucaoSql = `INSERT INTO curtida (
    evento_idevento_like, fk_id_usuario, dataCurtida
)
VALUES (
 1,${idPost}, current_timestamp()
);`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}
function contarCurtida(idEvento) {
    var instrucaoSql = `select count(*) as qtd from curtida where evento_idevento_like = ${idEvento};`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}

function cadastroI(nomeI, cnpjI, CEPI, emailI, SenhaI) {
    var instrucaoSql = `INSERT INTO igreja (nomeIgreja, cnpj, email, senha,cep)
VALUES ('${nomeI}', '${cnpjI}','${emailI}','${SenhaI}', '${CEPI}');`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}
function cadastroU(nomeU, emailU, senhaU) {
    var instrucaoSql = `INSERT INTO Usuario (nome,email,senha)
VALUES ('${nomeU}', '${emailU}','${senhaU}');`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function loginI(emailI, SenhaI) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailI, SenhaI)

    var instrucaoSql = `
        SELECT idIgreja, nomeIgreja, email FROM igreja WHERE email = '${emailI}' AND senha = '${SenhaI}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function loginU(emailU, senhaU) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailI, SenhaI)

    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${emailU}' AND senha = '${senhaU}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviar(idIgreja, descricao, nome, cep, numero, data_hora, categoria, imagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

    const instrucao = `INSERT INTO evento (
    igrejaEvento, nome, cep, numero, data_hora, categoria, descricao, imagem_evento)
VALUES (
    '${idIgreja}', 
    '${nome}', 
    '${cep}', 
    '${numero}', 
    '${data_hora}', 
    '${categoria}', 
    '${descricao}', 
	'${imagem}'
);  `;

    return database.executar(instrucao);
}
function puxaTudo() {
    var instrucao = "SELECT E.IdEvento, I.nomeIgreja, I.email, E.nome, E.cep, E.numero, E.data_hora, E.categoria, E.descricao, E.imagem_evento FROM evento E JOIN igreja I ON E.igrejaEvento = I.idIgreja WHERE E.data_hora > NOW(); "
    return database.executar(instrucao);
}
module.exports = {
    curtir, contarCurtida, cadastroI, loginI, enviar, puxaTudo,cadastroU
}