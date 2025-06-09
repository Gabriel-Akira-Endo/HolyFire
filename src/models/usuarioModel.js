
var database = require("../database/config")

function curtir(idEvento,idUsuario){
    var instrucaoSql = `INSERT INTO curtida (fk_id_usuario, evento_idevento_like, dataCurtida) VALUES 
    (${idUsuario},${idEvento},current_timestamp());`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}
function descurtir(idEvento,idUsuario){
    var instrucaoSql = `DELETE FROM curtida WHERE fk_id_usuario = ${idUsuario} and evento_idevento_like = ${idEvento};`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}
function contarCurtida(idEvento) {
    var instrucaoSql = `select count(*) as qtd from curtida where evento_idevento_like = ${idEvento};`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}
function curtidaIgreja(idIgreja) {
    var instrucaoSql = `select count(*) as qtd from curtida join evento as e on e.idEvento = evento_idevento_like join igreja on e.igrejaEvento = idIgreja where idIgreja = ${idIgreja};`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}
function qtdEvento(idIgreja) {
    var instrucaoSql = `select count(*) as qtd from evento as e join igreja on e.igrejaEvento = idIgreja where idIgreja = ${idIgreja};`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)

}

function qtdMiss(idIgreja) {
    var instrucaoSql = `select count(*) as qtd from missionario as m join igreja on m.fk_igreja_miss = idIgreja where idIgreja = ${idIgreja};`
    console.log("Executando a instrunção SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function qtdGraficos(idIgreja) {
    var instrucaoSql = `SELECT 
    e.categoria,
    COUNT(c.evento_idevento_like) AS total FROM evento e join curtida c ON c.evento_idevento_like = e.idEvento
WHERE e.igrejaEvento = ${idIgreja}  GROUP BY e.categoria;`
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
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailU, emailU)

    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${emailU}' AND senha = '${senhaU}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviar(idIgreja, descricao, nome, cep, numero, data_hora, categoria, imagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

    const instrucao = `INSERT INTO evento (
    igrejaEvento, nome, cep, numero, data_hora, categoria, descricao, imagem_evento)
VALUES ('${idIgreja}','${nome}','${cep}','${numero}','${data_hora}', '${categoria}', '${descricao}', '${imagem}');`

    return database.executar(instrucao);
}

function missionario(idIgreja,descricao,nome,idIgreja,tel,insta,data_nasc,pedidos, imagem,email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

    const instrucao = `insert into Missionario values
(default, "${idIgreja}", "${nome}", "${email}","${data_nasc}","${tel}","${insta}","${pedidos}","${descricao}","${imagem}"
);`
    return database.executar(instrucao);
}
function puxaTudo() {
    var instrucao = `SELECT E.IdEvento, I.nomeIgreja, I.email, E.nome, E.cep, E.numero,concat(day(data_hora) ,"/",month(data_hora),"/",year(data_hora)," ",hour(data_hora),":",minute(data_hora)) as  dtHr, E.categoria, 
E.descricao, E.imagem_evento FROM evento E JOIN igreja I ON E.igrejaEvento = I.idIgreja WHERE E.data_hora > NOW() ORDER BY E.data_hora; `
    return database.executar(instrucao);
}

function pusharMiss() {
    var instrucao = "SELECT I.nomeIgreja, m.nome , m.email, m.instagram, timestampdiff(year, dt_Nasc, now()) as idade , m.tel, m.pedidos, m.descricao, m.imagem FROM missionario m JOIN igreja I ON m.fk_igreja_miss = I.idIgreja; "
    return database.executar(instrucao);
}

function puxaTudoDash(idIgreja) {
    var instrucao = `SELECT E.IdEvento, I.nomeIgreja, I.email, E.nome, E.cep, E.numero,concat(day(data_hora) ,"/",month(data_hora),"/",year(data_hora)," ",hour(data_hora),":",minute(data_hora)) as  dtHr, E.categoria, 
E.descricao, E.imagem_evento FROM evento E JOIN igreja I ON E.igrejaEvento = I.idIgreja where I.idIgreja = ${idIgreja};`
    return database.executar(instrucao);
}

module.exports = {
    curtir, contarCurtida, cadastroI, loginI, enviar, puxaTudo,cadastroU,loginU,descurtir ,puxaTudoDash,curtidaIgreja,qtdEvento,missionario,pusharMiss,qtdMiss,qtdGraficos
}