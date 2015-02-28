app.controller("listaTelefonicaCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.titulo = "<i>Lista Telefônica</i>";
    $scope.contatos = [];
    $scope.contatosMock = ["a", "b"];

    var carregarContatos = function () {
        $http.get("http://localhost:3412/contatos").success(function (data) {
            $scope.contatos = data;
        });
    };

    carregarContatos();

    $scope.operadoras = [{id: 1, nome: "Tim", planos: ["Liberty", "Infinity"]}, 
    					 {id: 2, nome: "Vivo", planos: ["4G SmartVivo", "SmartPlus"]},
    					 {id: 3, nome: "Claro", planos: ["Sem Sinal", "Não Funciona"]}];

    $scope.adicionarContato = function (contato) {
    	$scope.contatos.push(contato);
    	delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.message = "Por favor, preencha os campos!";
  }]);