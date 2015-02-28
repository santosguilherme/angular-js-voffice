var Pessoa = function (nome, idade) {
	this.nome = nome;
	this.idade = idade;	
};

// Criando o objeto com o operador new
var joao = new Pessoa("João", 20);
console.log(joao);

// Criando o objeto sem o operador new
var pedro = {};
Pessoa.call(pedro, "Pedro", 10);
console.log(pedro);