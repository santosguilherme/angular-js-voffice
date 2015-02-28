// Exemplo de criação de objetos com função fábrica e construtora, juntamente com array

var produto = {
	codigo: 10, 
	descricao: "Raquete de Tenis", 
	palavrasChave: ["tenis", "esporte", "azul"],
	getQuantidade: function () {
		return this.palavrasChave.length;
	}
};

var criarProduto = function (codigo, descricao, palavrasChave) {
	return {
		codigo: codigo,
		descricao: descricao,
		palavrasChave: palavrasChave,
		inserirPalavraChave: function (palavraChave) {
			this.palavrasChave = this.palavrasChave || [];
			return this.palavrasChave.push(palavraChave);
		}
	};
};

var Produto = function (codigo, descricao, palavrasChave) {
	this.codigo = codigo;
	this.descricao = descricao;
	this.palavrasChave = palavrasChave;
	this.excluirPalavraChave = function (palavraChave) {
		this.palavrasChave.splice(this.palavrasChave.indexOf(palavraChave), 1);
	};
};

console.log(produto.palavrasChave);
console.log(produto.getQuantidade());
var produto2 = criarProduto(10, "Raquete de Tenis", ["tenis", "esporte", "azul"]);
console.log(produto2.palavrasChave);
console.log(produto2.inserirPalavraChave("saude"));
console.log(produto2.palavrasChave);
var produto3 = new Produto(10, "Raquete de Tenis", ["tenis", "esporte", "azul"]);
console.log(produto3.palavrasChave);
produto3.excluirPalavraChave("azul");
console.log(produto3.palavrasChave);