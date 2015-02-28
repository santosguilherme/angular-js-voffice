var periodo = {
	inicio: new Date(),
	fim: new Date(),
	calcularDiferencaEmHoras: function () {
		return this.fim.getTime() - this.inicio.getTime() / (1000*60*60);
	}
};

periodo.calcularDiferencaEmHoras();

var criarPeriodo = function (inicio, fim) {
	var _calcularDiferencaEmHoras = function () {
		return fim.getTime() - inicio.getTime() / (1000*60*60);
	};

	return {
		calcularDiferencaEmHoras: _calcularDiferencaEmHoras
	}
};

criarPeriodo(new Date(), new Date()).calcularDiferencaEmHoras();