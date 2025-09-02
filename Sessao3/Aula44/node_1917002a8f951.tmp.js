//Tratando setInterval setTimeout
function MostrarHora(){
    let data =new Date()
return data.toLocaleTimeString('pt-Br',{
        hour:'2-digit',
        minute:'2-digit',
        secund:'2-digit',
        hour12:false
    })
}
function FuncaodoInterva(){
    console.log(MostrarHora())
}
setInterval(FuncaodoInterva);