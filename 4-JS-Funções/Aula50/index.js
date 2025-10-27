const nome = 'Pietro';
function falaNome() {
    const nome = 'Outra coisa';
    console.log(nome);
}
falaNome();
function usaFalaNome() {
    const nome = 'João';
    falaNome();
}
usaFalaNome();
