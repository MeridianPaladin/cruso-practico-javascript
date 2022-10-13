//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado();

function areaCuadrado(lado) {
  return lado * lado;
}

areaCuadrado();

console.groupEnd();

//Códico del triágulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del circulo

console.group("Circulos");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI + "cm");

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//Interactuar con el HTML

/* CUADRADO */

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

/* TRIANGULO */

function calcularPerimetroTriangulo() {
  const lado1 = parseInt(document.getElementById("InputTrianguloLado1").value);
  const lado2 = parseInt(document.getElementById("InputTrianguloLado2").value);
  const base = parseInt(document.getElementById("InputTrianguloBase").value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = parseInt(document.getElementById("InputTrianguloLado1").value);
  const altura = parseInt(document.getElementById("InputTrianguloLado2").value);

  const area = areaTriangulo(base, altura);
  alert(area);
}

/* CIRCULO */

function calcularDiametroCirculo() {
  const radioCirculo = parseInt(
    document.getElementById("InputCirculoRadio").value
  );
  const diametro = diametroCirculo(radioCirculo);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const radioCirculo = parseInt(
    document.getElementById("InputCirculoRadio").value
  );
  const diametro = parseInt(diametroCirculo(radioCirculo));
  const perimetro = perimetroCirculo(diametro)/2;
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radioCirculo = document.getElementById("InputCirculoRadio").value;
  const area = areaCirculo(radioCirculo);
  alert(area);
}
