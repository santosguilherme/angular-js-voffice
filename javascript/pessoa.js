var x = function (extra) {
	return this.idade + extra;
};

var joao = {
	nome: "João",
	idade: 20,
	getIdade: x
};

var pedro = {
	nome: "Pedro",
	idade: 10,
	getIdade: x
};

console.log(joao.getIdade(2));
console.log(pedro.getIdade(3));
console.log(joao.getIdade.call(pedro, 3));
console.log(pedro.getIdade.apply(joao, [2]));