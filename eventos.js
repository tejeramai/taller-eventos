const caja = document.querySelector(".contenedor-boton");
if (caja) {
  caja.addEventListener("click", function () {
    alert("Hola! Soy el div");
  });
}

const boton = document.querySelector(".boton-saludar");
if (boton) {
  boton.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}