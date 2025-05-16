
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

function descurtir(idUser){
var instrucaoSql = `delete from curtida where fk_id_usuario = ${idUser} and evento_idevento_like = 1;`
console.log("Executando a instrunção SQL: \n" + instrucaoSql)
return database.executar(instrucaoSql)

}

module.exports = {
    curtir, contarCurtida, descurtir
}