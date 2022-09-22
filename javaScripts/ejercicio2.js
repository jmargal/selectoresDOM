//Ejercicio2
let text = document.getElementById("adicional");
let link = document.getElementById("enlace");

function showText(event) {
  event.target.classList.toggle("visible");
}
function hideLink(event) {
  event.target.classList.toggle("oculto");
}
addEventListener("click", showText);
addEventListener("click", hideLink);
