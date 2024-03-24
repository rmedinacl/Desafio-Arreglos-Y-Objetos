const url = window.location.pathname.split("/");
const pathname = url[url.length - 1];

function cardGenerator(
  nombre,
  src,
  descripcion,
  ubicacion,
  habitaciones,
  costo,
  smoke,
  pets
) {
  return `<div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${src}"
      class="card-img-top"
      alt="${nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${nombre}
      </h5>
      <p class="card-text">
        ${descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i>
        ${ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${habitaciones}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${costo}</p>
      ${
        smoke
          ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
          : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
      }
      ${
        pets
          ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
          : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
      }
    </div>
    </div>
  </div>`;
}

if (pathname === "index.html") {
  const ventas_container = document.querySelector("#venta");
  const alquiler_container = document.querySelector("#alquiler");

  const ventas = propiedades_venta.splice(0, 3);
  ventas.forEach((element) => {
    ventas_container.innerHTML += cardGenerator(
      element.nombre,
      element.src,
      element.descripcion,
      element.ubicacion,
      element.habitaciones,
      element.costo,
      element.smoke,
      element.pets
    );
  });

  const alquiler = propiedades_alquiler.splice(0, 3);
  alquiler.forEach((element) => {
    alquiler_container.innerHTML += cardGenerator(
      element.nombre,
      element.src,
      element.descripcion,
      element.ubicacion,
      element.habitaciones,
      element.costo,
      element.smoke,
      element.pets
    );
  });
} else if (pathname === "venta.html") {
  const ventas_container = document.querySelector("#propiedades_venta");
  propiedades_venta.forEach((element) => {
    ventas_container.innerHTML += cardGenerator(
      element.nombre,
      element.src,
      element.descripcion,
      element.ubicacion,
      element.habitaciones,
      element.costo,
      element.smoke,
      element.pets
    );
  });
} else if (pathname === "arriendo.html") {
  const alquiler_container = document.querySelector("#propiedades_alquiler");
  propiedades_alquiler.forEach((element) => {
    alquiler_container.innerHTML += cardGenerator(
      element.nombre,
      element.src,
      element.descripcion,
      element.ubicacion,
      element.habitaciones,
      element.costo,
      element.smoke,
      element.pets
    );
  });
}
