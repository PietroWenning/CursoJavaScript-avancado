function retornarFuncao() {
    const nome = 'Pietro';
    return function() {
        return nome;}
    }
const funcao = retornarFuncao('pietro');
const funcao2 = retornarFuncao('amanda');
console.dir(funcao());
console.dir(funcao2());