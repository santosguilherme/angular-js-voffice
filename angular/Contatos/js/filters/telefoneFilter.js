app.filter("telefone", function () {
  return function (input, separator, ponto) {
    separator = separator || "-";
    ponto = ponto || "!";
    return input.substring(0,4) + separator + input.substring(4) + ponto;
  };
});