'use-strict';

angular.module("pedidoApp").controller("PedidoCtrl", ["$scope", "$filter", "$http", "cardapioService", function($scope, $filter, $http, cardapioService){		
	$scope.clientePedido = {};
	$scope.cardapio = [];
	$scope.pedidos = [];
	$scope.valorTotalPedidos = 0;

	$scope.criterioBuscaCardapio = "";

	$scope.carregarCardapio = function(){
		cardapioService.getCardapio().success(function(data, status){
			$scope.cardapio = data;
		});
	};

	$scope.carregarCardapio();

	$scope.adicionarPedido = function (pedido){
		var subtotal = pedido.item.preco * pedido.quantidade;
		pedido.subtotal = subtotal;

		$scope.valorTotalPedidos += subtotal;

		pedido.data = $filter("date")(new Date(), "dd/MM/yyyy HH:mm");

		$scope.pedidos.push(angular.copy(pedido));
		delete $scope.pedido;
		$scope.pedidoForm.$setPristine();
	};

	$scope.cancelarPedido = function(pedido){
		var indiceDopedido = $scope.pedidos.indexOf(pedido);
		
		if(indiceDopedido == -1) return;

		$scope.pedidos.splice(indiceDopedido, 1);
		$scope.valorTotalPedidos -= pedido.subtotal;
	};

	$scope.salvarCliente = function(cliente) {
		$scope.clientePedido = angular.copy(cliente);
		if(cliente.cpf){
			$scope.clientePedido.cpf = $filter("cpf")(cliente.cpf);
		}
		delete $scope.cliente;
		$scope.pedidoForm.telefone.$setPristine();
	};

	$scope.ordenarCardapio = function(campo){
		$scope.campoOrdenado = campo;
		$scope.direcao = !$scope.direcao;
	};
}]);