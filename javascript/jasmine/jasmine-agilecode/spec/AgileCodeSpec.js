/*describe("AgileCode Specification", function () {
	it("Should work!", function () {
	  expect(true).toBe(true);
	});
});*/


describe("Função fábrica x Construtora", function () {
	it("c - Crie o objeto produto por meio de uma função fábrica!", function () {
		var criarProduto = function(codigo, descricao, emEstoque, detalhes){
			return {
				codigo: codigo,
				descricao: descricao,
				emEstoque: emEstoque,
				detalhes: detalhes
			};
		};

		var arroz = criarProduto(10,"Arroz",true,"Marca do Arroz");
		
	  	expect(arroz.codigo).toBe(10);
	  	expect(arroz.descricao).toBe("Arroz");
	  	expect(arroz.emEstoque).toBe(true);
	  	expect(arroz.detalhes).toBe("Marca do Arroz");
	});

	it("d - Crie o objeto produto por meio de uma função Construtora (new)!", function () {
		var Produto = function(codigo, descricao, emEstoque, detalhes){
			this.codigo = codigo;
			this.descricao = descricao;
			this.emEstoque = emEstoque;
			this.detalhes = detalhes;
		};

		var feijao = new Produto(2,"Feijão",false,"Marca do Feijão");

	  	expect(feijao.codigo).toBe(2);
	  	expect(feijao.descricao).toBe("Feijão");
	  	expect(feijao.emEstoque).toBe(false);
	  	expect(feijao.detalhes).toBe("Marca do Feijão");
	});
});

describe("Array", function () {
	it("a - Crie a propriedade palavrasChave (array) no objeto produto e inicialize com 3 palavras chaves", function () {
		
		var criarProduto = function(codigo, descricao, emEstoque, detalhes, palavrasChave){
			return {
				codigo: codigo,
				descricao: descricao,
				emEstoque: emEstoque,
				detalhes: detalhes,
				palavrasChave: palavrasChave
			};
		};

		var produto = criarProduto(10,"Arroz",true,"Marca do Arroz", ["Branco", "Amarelo", "Cereal"]);

		expect(produto.palavrasChave[0]).toBe("Branco");
		expect(produto.palavrasChave[1]).toBe("Amarelo");
		expect(produto.palavrasChave[2]).toBe("Cereal");
	});

	it("b - Crie uma função para retornar a quantidade de palavras chave do produto", function () {
		
		var criarProduto = function(_codigo, _descricao, _emEstoque, _detalhes, _palavrasChave){
			return {
				codigo: _codigo,
				descricao: _descricao,
				emEstoque: _emEstoque,
				detalhes: _detalhes,
				palavrasChave: _palavrasChave,
				getQuantidadePalavrasChave: function(){
					return this.palavrasChave.length;
				}
			};
		};

		var produto = criarProduto(10,"Arroz",true,"Marca do Arroz", ["Branco", "Amarelo", "Cereal"]);
		
		expect(produto.getQuantidadePalavrasChave()).toBe(3);
	});

	it("c - Crie uma função incluirPalavraChave utilizando o método push ", function () {
		var criarProduto = function(_codigo, _descricao, _emEstoque, _detalhes, _palavrasChave){
			return {
				codigo: _codigo,
				descricao: _descricao,
				emEstoque: _emEstoque,
				detalhes: _detalhes,
				palavrasChave: _palavrasChave,		
				incluirPalavraChave: function(palavraChave){
					return this.palavrasChave.push(palavraChave);
				}
			};
		};

		var produto = criarProduto(10,"Arroz",true,"Marca do Arroz", ["Branco", "Amarelo", "Cereal"]);
		produto.incluirPalavraChave("Promoção");

		expect(produto.palavrasChave[0]).toBe("Branco");
		expect(produto.palavrasChave[1]).toBe("Amarelo");
		expect(produto.palavrasChave[2]).toBe("Cereal");
		expect(produto.palavrasChave[3]).toBe("Promoção");
	});

	it("d - Crie uma função apagarPalavraChave utilizando o método splice", function () {
		var criarProduto = function(codigo, descricao, emEstoque, detalhes, palavrasChave){
			return {
				codigo: codigo,
				descricao: descricao,
				emEstoque: emEstoque,
				detalhes: detalhes,
				palavrasChave: palavrasChave,
				apagarPalavraChave: function(palavraChave) {
					this.palavrasChave.splice(this.palavrasChave.indexOf(palavraChave), 1);
				}
			};
		};

		var produto = criarProduto(10,"Arroz",true,"Marca do Arroz", ["Branco", "Amarelo", "Cereal"]);
		produto.apagarPalavraChave("Amarelo");

		expect(produto.palavrasChave[0]).toBe("Branco");
		expect(produto.palavrasChave[1]).toBe("Cereal");
	});
})