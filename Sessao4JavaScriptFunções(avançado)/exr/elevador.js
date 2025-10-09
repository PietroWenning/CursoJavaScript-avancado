const pessoas = [
    {nome: 'João',idade:22,peso: 70},
    {nome: 'Maria', idade:70,peso: 60},
    {nome: 'José', idade:45,peso: 80},
    {nome: 'Ana',idade:30 ,peso: 90},
    {nome: 'Pedro',idade:15 ,peso: 40},
    {nome: 'Carla',idade:25 ,peso: 55},
    {nome: 'Lucas',idade:17 ,peso: 75}, 
]

function calcular(pessoasNoElevador, limitePeso) {
    const somaPeso = pessoasNoElevador.reduce((acc, pessoa) => acc + pessoa.peso, 0);
    console.log(`peso total das pessoas no elevador: ${somaPeso}Kg`);

    if (somaPeso < limitePeso) return  ` ${somaPeso}Kg Ok, peso normal`;
    else if (somaPeso === limitePeso) return ` ${somaPeso}Kg Cuidado, peso elevado`;
    else return ` ${somaPeso}Kg fuuuuu, vai cair. peso acima do limite`;
}

const pessoasNoElevador = [pessoas[0], pessoas[3], pessoas[5], pessoas[6], pessoas[1]]; 
const pesoLimite =300
const resultado = calcular(pessoasNoElevador, pesoLimite);

console.log(resultado);
