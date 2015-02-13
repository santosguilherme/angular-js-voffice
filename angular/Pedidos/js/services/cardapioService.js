angular.module("pedidoApp").factory("cardapioService", function($http){
	var _getCardapio = function(){
		return $http.get("http://172.16.200.177:3412/cardapio");
	};
	return {
		getCardapio : _getCardapio
	};
});