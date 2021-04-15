function criarAluno1(RA, nome) {
	return {
		RA,
		nome
	};
}

function Aluno1(RA, nome) {
	this.RA = RA;
	this.nome = nome;
}

const aluno = {
	RA: '0001',
	nome: 'John Doe'
};

[
	criarAluno1("0001", "John Doe"),
	new Aluno1("0001", "John Doe"),
	aluno
].forEach((element, index) => {
	console.log(`Método ${index + 1}: `);
	console.log(element);
	console.log("===============")
});