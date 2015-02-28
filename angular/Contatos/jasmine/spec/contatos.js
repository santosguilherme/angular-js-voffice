describe("Contatos Controller", function () {
	var $scope;

	beforeEach(function () {
		module("listaTelefonica");
	});

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new();
		$controller("listaTelefonicaCtrl", {$scope: $scope});
	}));

	it("Deve listar os contatos", function () {
		expect($scope.contatosMock.length).toBe(2);
	});

	it("Deve listar os contatos", function () {
		expect($scope.message).toBe("Por favor, preencha os campos!");
	});

	it("Deve adicionar um contato", function () {
		$scope.contatoForm = {$setPristine: function () {}};
		$scope.adicionarContato({nome: "Ana"});
		expect($scope.contatos.length).toBe(1);
	});
});