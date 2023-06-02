const claro = document.getElementById("claro");
const oscuro = document.getElementById("oscuro");

function cambiarClaro() {
  claro.style.background = "red";
  oscuro.style.background = "none";


  document.documentElement.style.setProperty("--primario", "#08415c");
  document.documentElement.style.setProperty("--secundario", "#cc2936");
  document.documentElement.style.setProperty("--letras", "#000000");
}

function cambiarOscuro() {
  claro.style.background = "none";
  oscuro.style.background = "red";

  //ver como se añade clases y quitarlas para no tener que hacerlo asi y
  //añadir una x en los elegidos

  document.documentElement.style.setProperty("--primario", "#031627");
  document.documentElement.style.setProperty("--secundario", "#480E22");
  document.documentElement.style.setProperty("--letras", "#ffffff");
}