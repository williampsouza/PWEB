function Rectangle(x, y) {
	this.x = x;
	this.y = y;
}

Rectangle.prototype.calculateArea = function () {
	return this.x * this.y;
}

function Conta() {}

Conta.prototype.getNome = function () {
    return this.nome;
}

Conta.prototype.setNome = function (nome) {
	this.nome = nome;
	return this;
}

Conta.prototype.getCorrentista = function () {
	return this.correntista;
}

Conta.prototype.setCorrentista = function (correntista) {
	this.correntista = correntista;
	return this;
}

Conta.prototype.getBanco = function () {
	return this.banco;
}

Conta.prototype.setBanco = function (banco) {
	this.banco = banco;
	return this;
}

Conta.prototype.getNumeroConta = function () {
	return this.numeroConta;
}

Conta.prototype.setNumeroConta = function (numeroConta) {
	this.numeroConta = numeroConta
	return this;
}

Conta.prototype.getSaldo = function () {
	return this.saldo;
}

Conta.prototype.setSaldo = function (saldo) {
	this.saldo = saldo;
	return this;
}

function Corrente() {
}

Corrente.prototype = Object.create(Conta.prototype);

Conta.prototype.getSaldoEspecial = function () {
	return this.saldoEspecial;
}
Conta.prototype.setSaldoEspecial = function (saldoEspecial) {
	this.saldoEspecial = saldoEspecial;
	return this;
}


function Poupanca() {
}

Poupanca.prototype = Object.create(Conta.prototype);

Poupanca.prototype.getJuros = function () {
	return this.juros;
}

Poupanca.prototype.setJuros = function (juros) {
	this.juros = juros;
	return this;
}

Poupanca.prototype.getDataVencimento = function (dataVencimento) {
	return this.dataVencimento;
}

Poupanca.prototype.setDataVencimento = function (dataVencimento) {
	this.dataVencimento = dataVencimento;
	return this;
}

window.Rectangle = Rectangle;
window.Poupanca = Poupanca;