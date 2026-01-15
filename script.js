let contadorCarrito = 0;

function actualizarContadorCarrito() {
  const elementoContadorCarrito = document.getElementById("contador-carrito");
  if (elementoContadorCarrito) {
    elementoContadorCarrito.textContent = contadorCarrito.toString();
  }
}

function manejarClickAgregarCarrito(evento) {
  const boton = evento.currentTarget;
  const nombreProducto = boton.getAttribute("data-product") || "Producto";

  contadorCarrito += 1;
  actualizarContadorCarrito();

  boton.textContent = "Agregado";
  boton.disabled = true;

  setTimeout(() => {
    boton.textContent = "Agregar al carrito";
    boton.disabled = false;
  }, 800);

  console.log(`Agregado al carrito: ${nombreProducto}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const botonesAgregar = document.querySelectorAll(".btn-add");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", manejarClickAgregarCarrito);
  });

  const formularioContacto = document.querySelector(".contact-form");
  if (formularioContacto) {
    formularioContacto.addEventListener("submit", (evento) => {
      evento.preventDefault();
      alert("No se envían datos, al menos no todavía.");
    });
  }

  actualizarContadorCarrito();
});
