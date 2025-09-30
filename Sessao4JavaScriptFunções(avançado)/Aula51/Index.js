function retornarNomeProprio(nome) {
    return function() {
        return nome;
    };
}
const retornaNomePietro = retornarNomeProprio('pietro');
const retonarNomeAmanda = retornarNomeProprio('amanda');
console.dir(retonarNomeAmanda());
console.dir(retornaNomePietro());