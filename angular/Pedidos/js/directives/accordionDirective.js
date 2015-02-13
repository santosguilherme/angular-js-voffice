angular.module("pedidoApp").directive("accordion", function() {
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
		templateUrl: "view/accordion.html"
	};
});