//declaracao de funcao (function hoisting)
falaoi()
function falaoi(){
    console.log('oi')
}
// First-class objects (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log('sou um dado')
}
function executaFuncao(funcao){
    funcao()
}
executaFuncao(souUmDado)
// Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow()   
//dentro de um objeto
const obj = {
    falar: function(){
        console.log('estou falando...')
    }
}
obj.falar()