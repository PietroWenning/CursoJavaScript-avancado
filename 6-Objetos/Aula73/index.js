function Conta(agencia, numero, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.saldo = saldo;
} 
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
}
Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente para saque de R$${valor}. Saldo atual: R$${this.saldo}`);   
    } else {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
}
Conta.prototype.verSaldo = function() {
    console.log(`Saldo atual: R$${this.saldo}`);
}
const conta1 = new Conta(123, 456789, 1000);
conta1.verSaldo();
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(2000);