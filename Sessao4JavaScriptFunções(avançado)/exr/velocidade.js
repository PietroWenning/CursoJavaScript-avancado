function velocidade(velocidadeAtual = 0) {
if(velocidadeAtual <= 70 )  return `Velocidade Permitida: ${velocidadeAtual}Km/h`;
else return `Velocidade Acima do Permitido: ${velocidadeAtual}Km/h - MULTADO!`;
}
const retornaVelocidade = velocidade(560);
console.log(retornaVelocidade);

