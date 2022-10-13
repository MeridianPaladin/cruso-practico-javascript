function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function calcularPrecioTotal() {
  const Price = document.getElementById("InputPrice");
  const precio = Price.value;

  const Discount = document.getElementById("InputDiscount");
  const descuento = Discount.value;

  const total = calcularPrecioConDescuento(precio, descuento);

  const resultado = document.getElementById("Resultado");
  resultado.innerText = "El total a pagar es: $" + total;
}
