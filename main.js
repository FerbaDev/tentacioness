const mujeres = document.getElementById("mujeres");
const hombres = document.getElementById("hombres");
const ninios = document.getElementById("ninios");
const fragancias = document.getElementById("fragancias");
const ofertas = document.getElementById("ofertas");

mujeres.addEventListener("click", () => {
  //enlace de la pagina que quieras
  window.location.href = "./mujeres/remeras-mujer.html";
});

hombres.addEventListener("click", () => {
  //enlace de la pagina que quieras
  window.location.href = "./hombres/hombre.html";
});

ninios.addEventListener("click", () => {
  //enlace de la pagina que quieras
  window.location.href = "./niños/niños.html";
});

fragancias.addEventListener("click", () => {
  //enlace de la pagina que quieras
  window.location.href = "./fragancias.html";
});

ofertas.addEventListener("click", () => {
  //enlace de la pagina que quieras
  window.location.href = "./ofertas.html";
});
