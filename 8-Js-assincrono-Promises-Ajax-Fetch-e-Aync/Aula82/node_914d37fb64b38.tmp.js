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
esperaAi('Frase 1', aleatorio(1000,3000))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', aleatorio(1000,3000));
})