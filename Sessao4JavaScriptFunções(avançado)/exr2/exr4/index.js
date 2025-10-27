const Pessoas = document.getElementById("nome");
const Idade = document.getElementById("idade");
const Peso = document.getElementById("peso");
const Resultado = document.getElementById("resultado");
let pessoasNoElevador = [];
function calcular(pessoasNoElevador, limitePeso) {
    const somaPeso = pessoasNoElevador.reduce((acc, pessoa) => acc + pessoa.peso, 0);
    console.log(`peso total das pessoas no elevador: ${somaPeso}Kg`);

    if (somaPeso < limitePeso) {return  ` ${somaPeso}Kg Ok, peso normal`
  }
    else if (somaPeso === limitePeso) return ` ${somaPeso}Kg Cuidado, peso elevado`;
    else return ` ${somaPeso}Kg fuuuuu, vai cair. peso acima do limite`;
}
function adicionarPessoa() {
    const nome = Pessoas.value;
    const idade = parseInt(Idade.value);
    const peso = parseFloat(Peso.value);
    const pessoa = { nome, idade, peso };
    pessoasNoElevador.push(pessoa);
    const resultadoCalculo = calcular(pessoasNoElevador, LimitePeso);
    Resultado.textContent = `Pessoas no elevador: ${pessoasNoElevador.length}. ${resultadoCalculo}`;
    Pessoas.value = "";
    Idade.value = "";
    Peso.value = "";
}