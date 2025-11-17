function aleatorio(min,max){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function esperaAi(msg,tempo){
     return new Promise((resolve,reject) => {  
        setTimeout(() => {
            resolve(msg);
    }, tempo);
     });
}
// esperaAi('Frase 1', aleatorio(1000,3000))
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('Frase 2', aleatorio(1000,3000));
// }).then(resposta => {
//     console.log(resposta);
//     return esperaAi('Frase 3', aleatorio(1000,3000));
// })
// .then(resposta => {
//     console.log(resposta);
// }).catch(e => {
//     console.log('ERRO:', e);
// });
console.log('carregou a tela de lista de carros');
console.log('Clicou para pesquisar os carros')
listaCarros()
.then(carros => {
    console.log(carros);
    console.log('Carros carregados');
})
console.log('Aguardando os carros...');
for(let a =0; a<10000;a++){
    console.log(`numero: ${a}`)
}

function listaCarros(){
    return new Promise((resolve, reject) => {
       return resolve
    })
}