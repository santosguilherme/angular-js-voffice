var pessoaEncapsulada = function () {
  var nome = "João";
  var _idade = 20;
  var telefone = null;
  var endereco = {
    logradouro: "Av. Brasil",
    numero: 70,
    bairro: "Centro"
  };
  var _getIdade = function () {
      return _idade;
  };
  return {
    nome: nome,
    getIdade: _getIdade,
    setIdade: function (idade) {
      _idade = idade;
    }
  }
}();
console.log(pessoaEncapsulada); // {nome: "João"}
pessoaEncapsulada.setIdade(10);
console.log(pessoaEncapsulada.getIdade()); // 20