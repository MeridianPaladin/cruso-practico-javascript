function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function calcularPrecioTotal() {
  const precio = document.getElementById("InputPrice").value;
  // const precio = Price.value;

  const descuento = document.getElementById("InputDiscount").value;
  // const descuento = Discount.value;

  const total = calcularPrecioConDescuento(precio, descuento);

  const resultado = document.getElementById("Resultado");
  resultado.innerText = "El total a pagar es: $" + total;
}

const btn = document.getElementById("calculoBtn");

btn.addEventListener("click", function () {
  calcularPrecioTotal();
});
