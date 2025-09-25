const pessoa1= new Object()
pessoa1.nome ='pietro'
pessoa1.sobrenome="Calebe"
pessoa1.idade =1;
pessoa1.falarnome = function(){
    return(`${this.nome} esta falando seu nome.`)
}
pessoa1.getDataNascimento= function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())



// const pessoa ={
//     nome :'Pietro',
//     sobrenome:'Calebe'
// };
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);