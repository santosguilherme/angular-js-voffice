'use-strict';

angular.module("pedidoApp", [])

	.controller("PedidoCtrl", function($scope, $filter){		
		$scope.clientePedido = {};
		$scope.cardapio = [{descricao: "Refrigerante", preco: 3},
						   {descricao: "Cerveja", preco: 4},
						   {descricao: "Suco", preco: 3},
						   {descricao: "Agua", preco: 2}];
		$scope.pedidos = [];
		$scope.valorTotalPedidos = 0;

		$scope.criterioBuscaCardapio = "";
		$scope.title = "Água - R$ 3,00";

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
	})

	.filter("cpf", function () {
		return function(input) {
			return input.substring(0,3) + "." + input.substring(3,6) + "." + input.substring(6,9) + "-" + input.substring(9);
		};
	})

	.directive("accordion", function() {
		return {
			restrict: 'E',
		    transclude: true,
		    scope: {
		    	title: "@"
		    },
		    link: function(scope) {
		    	scope.showDescription = function(){
		    		scope.isShowDescription = !scope.isShowDescription;
		    	};
		    },
			templateUrl: "js/directive/accordion.html"
		};
	});