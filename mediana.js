function calcularPromedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedio = sumaLista / lista.length;
  return promedio;
}

const lista1 = [100, 200, 500, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) return true;
  else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const elemento1y2 = calcularPromedio([elemento1, elemento2]);
  mediana = elemento1y2;
} else {
  mediana = lista1[mitadLista1];
}
