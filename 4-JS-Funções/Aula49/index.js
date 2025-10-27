// function falafrase(comeco) {
//     function falaResto(resto) {
//         console.log(comeco + ' ' + resto);
//     }
//     return falaResto;
// }
// const fala = falafrase('Olá');
// fala('mundo!');
// fala('pessoal!');
// const fala2 = falafrase('Bom dia');
// fala2('turma!');
// fala2('galera!');
function criarMultiplicador(multiplicador) {
    // multiplicador é uma variável "privada"
    return function (n) {
        return n * multiplicador;
    }
}
const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4);
console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadruplicar(2))