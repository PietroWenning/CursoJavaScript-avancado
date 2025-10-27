class DispositivoEletronico{
constructor(nome){
    this.nome = nome;
    this.ligado = false;
}
ligar(){
    if(this.ligado){
        console.log(`${this.nome} já está ligado`)
        return;
    } 
    this.ligado = true;
}desligar(){
    if(!this.ligado){
        console.log(`${this.nome} já está desligado`)
        return;
    }
    this.ligado = false;
}
}
class Smartphone extends DispositivoEletronico{
constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
}   
}
class tablet extends DispositivoEletronico{
constructor(nome, temWifi){
    super(nome);
    this.temWifi = temWifi;
}
ligar(){
    console.log('Olha, você alterou o método ligar')
    super.ligar();
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'X');
console.log(s1);
const t1 = new tablet('Ipad', true);
console.log(t1);
t1.ligar();
t1.ligar();
s1.ligar();