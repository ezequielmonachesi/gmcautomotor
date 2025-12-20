import { vehiculos } from "../js/vehiculos.js";

const contenedor = document.getElementById("lista-vehiculos");

function renderTarjetas(listaAutos, limite = null) {
  contenedor.innerHTML = "";

  const autosARenderizar = limite ? listaAutos.slice(0, limite) : listaAutos;

  autosARenderizar.forEach((auto) => {
    const portada = auto.imagenes?.[0] || "";

    const tarjeta = document.createElement("article");
    tarjeta.className = "col-6 col-md-4 mb-4";

    tarjeta.innerHTML = `
      <a href="./detalle.html?id=${
        auto.id
      }" style="text-decoration: none; color: inherit">
        <div class="card shadow-sm h-100" style="border-radius: 10px; overflow: hidden">
          <img 
            src="${portada}" 
            class="card-img-top" 
            style="height: 180px; object-fit: cover" 
            alt="${auto.marca} ${auto.modelo}"
          />

          <div class="card-body">
            <span
              style="
                display: inline-block;
                background: #e8f8ec;
                border: 1px solid #42af5d;
                color: #2d7a3b;
                padding: 3px 8px;
                border-radius: 14px;
                font-size: 12px;
                font-weight: 600;
              "
            >
              ✔️ Documentación verificada
            </span>

            <h5 class="card-title mt-2">${auto.marca} ${auto.modelo}</h5>
            <p class="card-text mb-1"><strong>Año:</strong> ${auto.anio}</p>
            <p class="card-text mb-0">
              <strong>Precio:</strong> $${auto.precio.toLocaleString("es-AR")}
            </p>
          </div>
        </div>
      </a>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// ===============================
// 🧠 Lógica automática según HTML
// ===============================

if (contenedor) {
  const limite = contenedor.dataset.limit
    ? parseInt(contenedor.dataset.limit)
    : null;

  renderTarjetas(vehiculos, limite);
}
