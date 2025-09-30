function carros(marcaAtribuida, Modelo, placa) {
    this.marca = marcaAtribuida;
    this.Modelo = Modelo;
    this.placa = placa;
}
const honda = new carros('Honda', 'Civic', 'abc1234');
const fiat = new carros('Fiat', 'Uno', 'def5678');
console.log(honda);
console.log(fiat); 

const honda2 = {
    marca: 'honda',
    modelo: 'Civic',
}