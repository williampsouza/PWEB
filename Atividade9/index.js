const rectangle = new Rectangle(2, 4);
console.log(`Area do retangulo: ${rectangle.calculateArea()}`);

const corrente = new Corrente();
const poupanca = new Poupanca();

function printContaAttributes(object) {
	console.log(object.getNome());
	console.log(object.getCorrentista());
	console.log(object.getBanco());
	console.log(object.getSaldo());
	console.log(object.getNumeroConta());
}

corrente
	.setNome("John Doe")
	.setCorrentista("Stuart")
	.setBanco("BBDC")
	.setSaldo(1_000_000)
	.setNumeroConta("0001")
	.setSaldoEspecial(1_000_000);

poupanca
	.setNome("Jane Doe")
	.setCorrentista("Margaret")
	.setBanco("BIDI")
	.setSaldo(2_000_000)
	.setNumeroConta("0002")
	.setJuros(0.01)
	.setDataVencimento(new Date())

console.log("Corrente:");
printContaAttributes(corrente);
console.log(corrente.getSaldoEspecial());

console.log("Poupanca:");
printContaAttributes(poupanca);
console.log(poupanca.getJuros());
console.log(poupanca.getDataVencimento());
