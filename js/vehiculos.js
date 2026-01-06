export const vehiculos = [
  {
    id: 1,
    marca: "Volkswagen",
    modelo: "Gol Trend",
    anio: 2013, // 👈 antes decía año
    precio: 3500000,
    localidad: "San Miguel de Tucumán",

    // 🔥 Dominio
    dominio: "ABC123", // ← opcional | si no quiere mostrar, poné null

    // 🔥 Combustible
    combustible: {
      nafta: true,
      gnc: true,
    },

    // 🔥 Calefacción y Aire Acondicionado
    aireAcondicionado: true,
    calefaccion: true,

    // 🔧 Kilometraje
    km: 145000,

    // 📌 Documentación (registral)
    transferible: true,
    formulario08Firmado: true,
    documentacionVerificada: true,

    // 📜 Informes
    informes: {
      dominio: {
        realizado: true,
        fecha: "2025-01-20",
      },
      multas: {
        realizado: true,
        fecha: "2025-01-20",
      },
      patentes: {
        realizado: false,
        fecha: null,
      },
    },

    // 📞 Contacto del vendedor
    vendedor: {
      nombre: "Juan Pérez",
      telefono: "3815123456",
    },

    // 🖼 Fotos del vehículo (múltiples)
    imagenes: [
      "../img/vehiculos/01-ford.webp",
      "../img/vehiculos/02-ford.webp",
      "../img/vehiculos/03-ford.webp",
      "../img/vehiculos/04-ford.webp",
      "../img/vehiculos/05-ford.webp",
      "../img/vehiculos/06-ford.webp",
      "../img/vehiculos/07-ford.webp",
    ],

    // 📝 Observaciones
    observaciones: "Titular presente. Sin prendas ni inhibiciones.",
  },
  {
    id: 2,
    marca: "Peugeot",
    modelo: "Peugeot 307 1.6 Xs 110cv",
    anio: 2011,
    precio: 6982000,
    localidad: "San Miguel de Tucumán",

    // 🔥 Dominio
    dominio: "JRK249",

    // 🔥 Combustible
    combustible: {
      nafta: true,
      gnc: true,
    },

    // 🔥 Confort
    aireAcondicionado: true,
    calefaccion: true,

    // 🔧 Kilometraje
    km: 178000,

    // 📌 Documentación
    transferible: true,
    formulario08Firmado: true,
    documentacionVerificada: true,

    // 📜 Informes
    informes: {
      dominio: {
        realizado: true,
        fecha: "2025-01-18",
      },
      multas: {
        realizado: true,
        fecha: "2025-01-18",
      },
      patentes: {
        realizado: false,
        fecha: null,
      },
    },

    // 📞 Vendedor
    vendedor: {
      nombre: "Carlos Gómez",
      telefono: "3816001122",
    },

    // 🖼 Imágenes
    imagenes: [
      "../img/vehiculos/01-peugeot.webp",
      "../img/vehiculos/02-peugeot.webp",
      "../img/vehiculos/03-peugeot.webp",
      "../img/vehiculos/04-peugeot.webp",
      "../img/vehiculos/05-peugeot.webp",
    ],
  },
  {
    id: 4,
    marca: "Fiat",
    modelo: "Strada 1.3 Freedom Cd",
    anio: 2025,
    precio: 3666000,
    localidad: "San Miguel de Tucumán",

    // 🔥 Dominio
    dominio: null, // ← no desea mostrar patente

    // 🔥 Combustible
    combustible: {
      nafta: true,
      gnc: false,
    },

    // 🔥 Confort
    aireAcondicionado: true,
    calefaccion: true,

    // 🔧 Kilometraje
    km: 118000,

    // 📌 Documentación
    transferible: true,
    formulario08Firmado: true,
    documentacionVerificada: true,

    // 📜 Informes
    informes: {
      dominio: {
        realizado: true,
        fecha: "2025-02-10",
      },
      multas: {
        realizado: true,
        fecha: "2025-02-10",
      },
      patentes: {
        realizado: true,
        fecha: "2025-02-10",
      },
    },

    // 📞 Vendedor
    vendedor: {
      nombre: "Luis Fernández",
      telefono: "3815127788",
    },

    // 🖼 Imágenes
    imagenes: [
      "../img/vehiculos/01-fiat.webp",
      "../img/vehiculos/02-fiat.webp",
      "../img/vehiculos/03-fiat.webp",
      "../img/vehiculos/04-fiat.webp",
    ],

    // 📝 Observaciones
    observaciones: "Vehículo familiar. Documentación completa y verificada.",
  },
];
