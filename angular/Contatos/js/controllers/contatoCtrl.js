app.controller("contatoCtrl", ["$scope", "$routeParams", function ($scope, $routeParams) {
	$scope.message = "Contato " + $routeParams.nome;
}]);