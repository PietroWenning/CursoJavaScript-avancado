function RetornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instacia de date');
    }
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-Br',{
        hour:'2-digit',
        minute:'2-digit',
        secund:'2-digit',
        hour12:false
    })
}try{
const data = new Date('01-01-1970 12:58:12')
const hora = RetornaHora()
console.log(hora)
}catch(e){
    //tratar erro
    //console.log(e)
}finally{
    console.log('Tenha um Bom dia!')
}
