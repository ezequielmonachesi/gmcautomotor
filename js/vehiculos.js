export const vehiculos = [
  {
    id: 1,
    marca: "Volkswagen",
    modelo: "Gol Trend",
    anio: 2013, // 👈 antes decía año
    precio: 3500000,
    localidad: "San Miguel de Tucumán",

    // 🔥 Combustible
    combustible: {
      nafta: true,
      gnc: false,
    },

    // 🔧 Kilometraje
    km: 145000,

    // 📌 Documentación (registral)
    transferible: true,
    formulario08Firmado: true,
    documentacionVerificada: true,

    // 📜 Informe de dominio
    ultimoInformeDominio: {
      fecha: "2025-01-20",
      pdf: "docs/gol-trend-2013.pdf",
    },

    // 📞 Contacto del vendedor
    vendedor: {
      nombre: "Juan Pérez",
      telefono: "3815123456",
    },

    // 🖼 Fotos del vehículo (múltiples)
    imagenes: [
      "../img/vehiculos/ford.webp",
      "img/gol-trend-2013-2.jpg",
      "img/gol-trend-2013-3.jpg",
    ],

    // 📝 Observaciones
    observaciones: "Titular presente. Sin prendas ni inhibiciones.",
  },
];
