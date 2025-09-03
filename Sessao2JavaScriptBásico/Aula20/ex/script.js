function Meuescopo() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');
    const pessoas = [];
    function recebeEventoForm(event) {
        event.preventDefault();
        const nome = form.querySelector('#txtnome').value;
        const idade = form.querySelector('#txtidade').value;
        const altura = form.querySelector('#txtaltura').value;
        const peso = form.querySelector('#txtpeso').value;
        pessoas.push({ nome, idade, altura, peso });
        console.log(pessoas);
        res.innerHTML += `<p>Nome: ${nome}, Idade: ${idade}, Altura: ${altura}, Peso: ${peso}</p>`;
        form.reset();
    }
    form.addEventListener('submit', recebeEventoForm);
    return {
        pessoas,
    };
}
const meuEscopo = Meuescopo();
function enviar() {
    const form = document.querySelector('.form');
    form.dispatchEvent(new Event('submit'));
    const res = document.querySelector('.res');



}