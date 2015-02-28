// Exemplo de Closure 

var helloWorld = function (x) {
	var message = "Hello World" + x;
	return function (y) {
		return message + y;
	};
};

var helloWorldFn1 = helloWorld("!");
var helloWorldFn2 = helloWorld("?");
console.log(helloWorldFn1(".")); // Hello World!.
console.log(helloWorldFn2(".")); // Hello World?.