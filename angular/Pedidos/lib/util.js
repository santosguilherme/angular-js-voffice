angular.module("util", []);

angular.module("util").filter("cpf", function () {
	return function(input) {
		return input.substring(0,3) + "." + input.substring(3,6) + "." + input.substring(6,9) + "-" + input.substring(9);
	};
});