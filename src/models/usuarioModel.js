
var database = require("../database/config")

function curtir(idPost){
var instrucaoSql = `INSERT INTO curtida (
    evento_idevento_like, fk_id_igreja_like, fk_id_usuario, dataCurtida
)
VALUES (
1,1,${idPost}, current_timestamp()
);`
console.log("Executando a instrunção SQL: \n" + instrucaoSql)
return database.executar(instrucaoSql)

}
function contarCurtida(id){
var instrucaoSql = `select count(*) as qtd from curtida where evento_idevento_like = ${id};`
console.log("Executando a instrunção SQL: \n" + instrucaoSql)
return database.executar(instrucaoSql)

}
function cadastroI(nomeI,cnpjI,CEPI,emailI,SenhaI){
var instrucaoSql = `INSERT INTO igreja (nomeIgreja, cnpj, email, senha,cep)
VALUES ('${nomeI}', '${cnpjI}','${emailI}','${SenhaI}', '${CEPI}');`
console.log("Executando a instrunção SQL: \n" + instrucaoSql)
return database.executar(instrucaoSql)
}
function loginI(emailI, SenhaI){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailI, SenhaI)

    var instrucaoSql = `
        SELECT idIgreja, nomeIgreja, email FROM igreja WHERE email = '${emailI}' AND senha = '${SenhaI}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    curtir, contarCurtida,cadastroI,loginI
}