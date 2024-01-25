let productos = [];
fetch("./productosniños.json")
  .then((res) => res.json())
  .then((data) => {
    productos = data;
    cargarProductos(productos);
  });

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <div class="producto-detalles">
        <img
          src="${producto.img}"
          alt=""
          class="producto-imagen"
        />
        <div class="producto-info">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">${producto.precio}</p>
        </div>
      </div>
        `;

    contenedorProductos.append(div);
  });
}
