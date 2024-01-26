const mujeres = document.getElementById("mujeres");
const hombres = document.getElementById("hombres");
const ninios = document.getElementById("ninios");
const fragancias = document.getElementById("fragancias");

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
