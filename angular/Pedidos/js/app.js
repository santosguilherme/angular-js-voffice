angular.module("pedidoApp", ['util', 'ngRoute']);

angular.module("pedidoApp").config(function ($routeProvider){

	$routeProvider.when("/pedidos", {
		templateUrl: 'view/pedido.html',
		controller: 'PedidoCtrl'
	});

	$routeProvider.when("/sobre", {
		templateUrl: 'view/sobre.html'
	});

	$routeProvider.otherwise({redirectTo: '/pedidos'});

});



