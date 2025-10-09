function carro(fabricacao, modelo, carro){
    CalculaAno = function(){
        return 2025 - fabricacao;
        }
    this.fabricacao = fabricacao;
    this.modelo = modelo;
    this.ano = carro;
    this.idade = CalculaAno();
}
const carro1 = new carro('2010', 'Honda', 'Civic');
const carro2 = new carro('2015', 'Fiat', 'Uno');
console.log(carro1);
console.log(carro2);
