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
      "../img/vehiculos/ford.webp",
      "../img/vehiculos/ford-frente.webp",
      "../img/vehiculos/ford.webp",
      "../img/vehiculos/ford.webp",
    ],

    // 📝 Observaciones
    observaciones: "Titular presente. Sin prendas ni inhibiciones.",
  },
  {
    id: 2,
    marca: "Chevrolet",
    modelo: "Corsa Classic",
    anio: 2011,
    precio: 6982000,
    localidad: "San Miguel de Tucumán",

    // 🔥 Dominio
    dominio: "DEF456",

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
      "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/579107077_1865628814056686_7684205209820666618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFL3XMjkQupx_JRR83QiENBcmS3NWIwNBZyZLc1YjA0Fo44-jy7v7YbOpJ9f_QglzE&_nc_ohc=sgHT8MhgJXQQ7kNvwGYZIC7&_nc_oc=AdkCOoZxkC9i5qUZvOWfLmHvYgtlWnyCiejP3cxDJSYnYzIsGRS2iwyRgRDcu-UkaWg&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=NteLlAPkY_rEIYfumVfpiw&oh=00_AfnMpjfedaUZdE1lUiQJQMbM86ZHqnWCc_etlgbL2USM4Q&oe=694A3E4B",
      "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/577511768_1865628894056678_6379238351336017415_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGF9j2vNgdOmyftmsNmLH6l3nDmJbS2y6XecOYltLbLlmQwwYt5Gzsa35DaZG8d3s&_nc_ohc=IO_c7OZ17CcQ7kNvwGBdEtA&_nc_oc=AdmpDFImhb-gyHaieM4Fxt5_h68iapSLfpz-IStGCOteqJP75LaT_8nZhHPTco_InXQ&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=MIB0538G-oZrzGDhvIhi9Q&oh=00_AfmkX3DEuO6iuxP1HtF59869LeQ9KSK7XguTHQH-qYFsAg&oe=694A2E88",
    ],
  },
  {
    id: 4,
    marca: "Renault",
    modelo: "Sandero",
    anio: 2016,
    precio: 9752000,
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
      "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/587477467_25352547391052603_6902096390108380632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFBL5hvDGJP10d7v6HcZiyuWshREIW5qd1ayFEQhbmp3UdfoNWFQZA9c75lUVolLvA&_nc_ohc=c4NoYiRpEBUQ7kNvwH_fBXy&_nc_oc=AdmkTs1vDe_A1zfjn7r3ZkLwwPAlNhyuKCGz2lfHUuGVVSn722q3vYAxc_2rCA1wpT4&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=jOhQA9-NK1fIuldk33otUg&oh=00_AfnaFOWyxzgpwl_ts4Yiq26yAprjkYCxkk0mTT2oNB-Jmg&oe=694A3474",
      "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/586910948_25352547931052549_7892001384798585272_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE5Fv8QaOVys0Tv1d02dpMuchO5yKBlUdByE7nIoGVR0OYs7ByVSi3BIhpiNNsI5iU&_nc_ohc=ynZfQvZV_t0Q7kNvwEjIeVu&_nc_oc=AdnPRKtJHHpqWeK1Q-KOqzIUOeOUkakYfj3qsA5MM6S8O8NkxDIPef4BTB-jXWivv_k&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=cgy3HmrtMF801kr3YnVuUg&oh=00_AflmZ47a5Kq82b2BV8_avURxcng9ZGpJy_XvAWaOEYDmow&oe=694A1DC1",
      "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/587487238_25352549891052353_3135016062847934207_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGrY63oAbMDrjTr2eUbZBzork1WMVGgYKquTVYxUaBgqljj0ms6J_BSeJmtYjevsl0&_nc_ohc=B0s0_-AwcdkQ7kNvwF9p5jA&_nc_oc=AdnUHrJHc_WgktU5skSFiAvMedzD2BJQv4-zjxm83dJux-9vlzfiilCBJx9-jdNf_sE&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=6hQ5Kx9K06a4ppx3m4Gv2w&oh=00_AflS7MXiQmIhdBXmPqd1LnQsTQGbbOBzjq3uOYWhpdd21g&oe=694A4583",
      "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/585937819_25352550337718975_2754119142130419614_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHN-rDvmOoSmvOg0_nrkeRedfJ05N01cQF18nTk3TVxAf1TWZ9MR3hYsxLjYLKcHY8&_nc_ohc=nB6fs9tpQ6cQ7kNvwGS1-9z&_nc_oc=AdlZoCe65lvvVox3MSwFKMlI5h_-g5o23IrOJ7f6nsc0hGl_KUf11kQ8sIuEQyVkMBw&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=51g4Ao5vDWSIaGkcuYQR4w&oh=00_AfkSlmWucDNh6ogL-nZ2-v7ge-PsBlRHEa9nKrzkznzUNQ&oe=694A3A91",
      "https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/586133205_25352550737718935_5500264196741558398_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGgCr4BgDWh_V2e-VvRtewJbrp9FCRrUXVuun0UJGtRdT_G1r173bb0MsbMR9cQuIM&_nc_ohc=jK0kkgPwG4wQ7kNvwF5ok8s&_nc_oc=AdmIxDzWQycpvKD9JFYEszGd_lx_ualK7HDjmvmgVAGiip4v5ELb924zijDP4Y1bEfk&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=IHJvuhZpEjnOz4Z6Guk0Hw&oh=00_Afl_03wQAId2No3WYdnHzhEal-UIDWtRRefk_epky9TykQ&oe=694A403C",
      "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/585367443_25352549021052440_1243195834531213245_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFjeafLqg6Wu-exX7HqzFZli4Tfg7aCV4GLhN-DtoJXgc5E3zt-BgfJsHz3qsSZFCI&_nc_ohc=WVTl8LrGOfQQ7kNvwF-k03h&_nc_oc=AdmgAG4-IG-YioiIRzL8TqPY3szF2RQzh3PESdXd_A_yYieqQ4KJ2NqmvFMYPVwqmc4&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=PLmtOLNAEWM9BQ5_6jWDzA&oh=00_AfmaT_Mk6V3HZUHNLQ3Tew1haYr9AhwEiV5XNJ7SI1a0yA&oe=694A3ED1",
    ],

    // 📝 Observaciones
    observaciones: "Vehículo familiar. Documentación completa y verificada.",
  },
];
