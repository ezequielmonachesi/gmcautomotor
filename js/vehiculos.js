export const vehiculos = [
  {
    id: 1,
    marca: "Renault",
    modelo: "Duster Espression",
    anio: 2015,
    precio: 13999999,
    localidad: "San Miguel de Tucumán",

    // 🔥 Dominio
    dominio: null, // ← opcional | si no quiere mostrar, poné null

    // 🔥 Combustible
    combustible: {
      nafta: true,
      gnc: false,
    },

    // 🔥 Calefacción y Aire Acondicionado
    aireAcondicionado: true,
    calefaccion: true,

    // 🔧 Kilometraje
    km: 94000,

    // 📌 Documentación (registral)
    transferible: false,
    formulario08Firmado: false,
    documentacionVerificada: false,

    // 📜 Informes
    informes: {
      dominio: {
        realizado: false,
        fecha: "2025-01-20",
      },
      multas: {
        realizado: false,
        fecha: "2025-01-20", //
      },
      patentes: {
        realizado: false,
        fecha: "2025-01-20",
      },
      verificacionPolicial: {
        realizado: false,
        fecha: "2025-01-20",
      },
    },

    // 📞 Contacto del vendedor
    vendedor: {
      nombre: "Pablo",
      telefono: "3816663406",
    },

    // 🖼 Fotos del vehículo (múltiples)
    imagenes: [
      "https://res.cloudinary.com/delz9emli/image/upload/v1767931546/duster-01_1_sa3tl0.jpg",
      "https://res.cloudinary.com/delz9emli/image/upload/v1767931547/duster-05_1_qiqvtk.jpg",
      "https://res.cloudinary.com/delz9emli/image/upload/v1767931546/duster-06_1_p8qb2o.jpg",
      "https://res.cloudinary.com/delz9emli/image/upload/v1767931546/duster-trasera_ahtdeb.jpg",
      "https://res.cloudinary.com/delz9emli/image/upload/v1767931546/duster-04_1_ila0mm.jpg",
      "https://res.cloudinary.com/delz9emli/image/upload/v1767931537/duster-03_1_sugeqn.jpg",
    ],

    // 📝 Observaciones
    observaciones:
      "Renault Duster Espression 2015. Modelo 2015 - 94.000km reales - Cubiertas nuevas - Bateria Nueva - VTV todo el 2026 - Service al Día - Motor en exelentes condiciones - Solo nafta",
  },
];
