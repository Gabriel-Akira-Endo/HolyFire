
var database = require("../database/config")

function curtir(idPost){
var instrucaoSql = `insert into curtida values
(default, default, ${idPost});`
console.log("Executando a instrunção SQL: \n" + instrucaoSql)
return database.executar(instrucaoSql)

}
function contarCurtida(id){
var instrucaoSql = `select count(*) as qtd from curtida where idPost = ${id};`
console.log("Executando a instrunção SQL: \n" + instrucaoSql)
return database.executar(instrucaoSql)

}
module.exports = {
    curtir, contarCurtida
}