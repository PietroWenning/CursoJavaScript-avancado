function teste() {
    console.log('Função teste executada!');
}


class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste()
    }   
    aumentarVolume() {
        if (this.volume >= 100) {
            console.log(`Volume já está no máximo: ${this.volume}`);
            return;
        }
        this.volume += 10;
        console.log(`Volume aumentado para: ${this.volume}`);
    }
    diminuirVolume() {
        if (this.volume <= 0) {
            console.log(`Volume já está no mínimo: ${this.volume}`);
            return;
        }
        this.volume -= 10;
        console.log(`Volume diminuído para: ${this.volume}`);
    }
    static soma(x,y){
       console.log(this)
    }
}
const controle1 = new ControleRemoto('LG');
ControleRemoto.soma()