const nome = document.getElementById('nome');
const anoNascimento = document.getElementById('anoNascimento');
const resultado = document.getElementById('resultado');
const form = document.getElementById('idadeForm');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - parseInt(anoNascimento.value);
    resultado.textContent = `Olá, ${nome.value}! Você tem ${idade} anos.`;
});