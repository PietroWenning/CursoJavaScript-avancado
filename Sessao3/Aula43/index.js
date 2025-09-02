try{
    //é executada quando não há erros
    console.log(a)
    console.log('abri o arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
}catch(e){
 //é executada quando ha erros
 console.log('Tratando erro')
}finally{
    //sempre
    console.log('Eu sempre sou executado')
}