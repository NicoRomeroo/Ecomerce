import './App.css'

const products = [
  {
    id: "1",
    name: "Iphone 15 Pro Max",
    price: 1699,
    category: "Celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_768125-MLA71783090116_092023-O.webp",
    stock: 25,
    description: "iPhone 15 Pro. Forjado en titanio y equipado con el revolucionario chip A17 Pro, un Botón de Acción personalizable y el sistema de cámaras Pro más versátil.",
  },
  {
    id: "2",
    name: "Samsung s24 Ultra",
    price: 2100,
    category: "Celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_883475-MLA75097236690_032024-O.webp",
    stock: 15,
    description: "SAMSUNG Galaxy S24 Ultra Teléfono Celular, 512GB AI Smartphone, Android Desbloqueado, Cámara Zoom de 50MP, Batería de Larga Duración, S Pen, Versión de EE. UU., 2024, Violeta Titanio",
  },
  {
    id: "3",
    name: "Sony Xperia 1 V",
    price: 1800,
    category: "Celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_608314-MLU73598862636_122023-O.webp",
    stock: 5,
    description: "Sistema Operativo: Android 13 / Lector de Huella Lateral / IP65/68. Procesador: Snapdragon 8 Gen 2 / GPU: Adreno 740. Memoria: 12GB RAM LP-DDR5x / Almacenamiento: 256GB UFS 4.0 / Ampliable con microSD a 1TB.  Pantalla: 6.5” OLED 4K HDR / 120Hz / Protección Gorilla Glass Victus. Cámara: Triple de 48+12+12MP / Frontal: 12MP / HDR10+. Video: 4K@120fps EIS - IOS / HDR / Optica Carl Zeiss. Sonido: Dolby Atmos / Parlantes Stereo / Jack 3.5mm. Batería: 5,000 mAh - 30W / Compatible con Carga Inalámbrica. Conectividad: 5G / 4G / WiFi 6E / Bluetooth 5.3 / NFC / GPS / USB C. Dimensiones: 165 x 71 x 8.3mm / Peso: 187gr.",
  },
  {
    id: "4",
    name: "Monitor Samsung Led 27'' Ips Full Hd 75 Hz diseño sin bordes",
    price: 300,
    category: "Monitor",
    img: "https://http2.mlstatic.com/D_NQ_NP_601443-MLU72903650381_112023-O.webp",
    stock: 15,
    description: "Diseño minimalista para máxima concentración. La pantalla sin borde en 3 lados proporciona una estética limpia y moderna, ideal para cualquier entorno de trabajo. En configuraciones de múltiples monitores, las pantallas se alinean para ofrecer una vista prácticamente sin interrupciones.",
  },
  {
    id: "5",
    name: "Monitor gamer Gigabyte G27F led 27' negro 100V/240V",
    price: 350,
    category: "Monitor",
    img: "https://http2.mlstatic.com/D_NQ_NP_721448-MLA45212599699_032021-O.webp",
    stock: 10,
    description: "Disfrutá de todas las cualidades que el monitor Gigabyte G27F tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.",
  },
  {
    id: "6",
    name: "Monitor gamer curvo Samsung S34A65 LCD 34' negro 100V/240V",
    price: 1000,
    category: "Monitor",
    img: "https://http2.mlstatic.com/D_NQ_NP_973764-MLA51059059144_082022-O.webp",
    stock: 5,
    description: "Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.",
  },
  {
    id: "7",
    name: "Pc Gamer Ryzen",
    price: 710,
    category: "Pc",
    img: "https://http2.mlstatic.com/D_NQ_NP_737747-MLA44318783019_122020-O.webp",
    stock: 15,
    description: "MICRO: AMD RYZEN 5 4600G. VIDEO: RADEON GRAPHICS. MOTHER: A320 - DDR4 - USB 3.0 - SATA3. DISCO: 480GB SSD. MEMORIA RAM: 16GB DDR4 .GABINETE KIT: ATX (TECLADO MOUSE)",
  },
  {
    id: "8",
    name: "Pc Gamer Ryzen",
    price: 390,
    category: "Pc",
    img: "https://http2.mlstatic.com/D_NQ_NP_907204-MLA47395576830_092021-O.webp",
    stock: 15,
    description: "GABINETE RGB NAXIDO TAL CUAL AL DE LA FOTO. PROCESADOR AMD (AM4) RYZEN 3 2200 G PRO. RADEON GRAPHICS INCLUDED. MOTHER ASUS a320 AM4. MEMORIA DDR4 8GB 2666 ADATA GAMER. DISCO SOLIDO SSD 240 GB ADATA. FUENTE 500 WATTS FULL CERTIFICADA. TECLADO MOUSE USB",
  },
  {
    id: "9",
    name: "Pc Gamer Intel",
    price: 275,
    category: "Pc",
    img: "https://http2.mlstatic.com/D_NQ_NP_602904-MLA75208572461_032024-O.webp",
    stock: 20,
    description: "Procesador: Intel Core I5 3.10GHZ. Memoria: 4GB DDR3 1600Mhz. Almacenamiento: HDD 1 TB de Capacidad. Unidades DVD: Grabadora DVD/CD. Conexiones: 6 puertos USB 2.0/4 Puertos usb 3.0 / 1 VGA / Display Port /1 Rj45.",
  },
  {
    id: "10",
    name: "Mouse Gamer G502 Hero Original Logitech G Negro",
    price: 69,
    category: "Mouse",
    img: "https://http2.mlstatic.com/D_NQ_NP_656261-MLU72703529811_112023-O.webp",
    stock: 25,
    description: "El G502 HERO está equipado con un sensor óptico avanzado para una precisión de seguimiento excepcional, iluminación RGB personalizable y perfiles de juego a medida, con sensibilidad ajustable de 200 a 16.000 dpi y pesas modulares.",
  },
  {
    id: "11",
    name: "Mouse gamer de juego HyperX MOUSE Pulsefire Surge HX-MC002B negro",
    price: 55,
    category: "Mouse",
    img: "https://http2.mlstatic.com/D_NQ_NP_756614-MLU70010183186_062023-O.webp",
    stock: 25,
    description: "Sumérgete en el mundo de los videojuegos con el mouse gamer HyperX Pulsefire Surge en color negro. Este mouse cuenta con un sensor óptico PixArt 3389 de alta precisión y una resolución de 16000 dpi, lo que te permitirá apuntar y moverte con gran exactitud en tus partidas. Además, su velocidad máxima de 450 ips te brindará una respuesta rápida y fluida en todo momento.",
  },
  {
    id: "12",
    name: "Mouse gamer de juego Razer DeathAdder Essential negro",
    price: 43,
    category: "Mouse",
    img: "https://http2.mlstatic.com/D_NQ_NP_803425-MLU70006892432_062023-O.webp",
    stock: 25,
    description: "Desde 2005 Razer es la marca líder de estilo de vida para jugadores. Ha diseñado y construido el ecosistema de hardware, software y servicios más grande del mundo. La ubicación de cada botón y curva de los mouses Razer se crearon para adaptarse perfectamente a tu mano. Gracias a estos dispositivos, conseguirás una experiencia de juego cómoda y placentera.",
  },
  {
    id: "13",
    name: "Teclado gamer Redragon Kumara K552 QWERTY Outemu Blue",
    price: 50,
    category: "Teclado",
    img: "https://http2.mlstatic.com/D_NQ_NP_833248-MLA74650708404_022024-O.webp",
    stock: 20,
    description: "La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.",
  },
  {
    id: "14",
    name: "Teclado gamer Redragon Dragonborn K630 QWERTY Redragon Brown",
    price: 55,
    category: "Teclado",
    img: "https://http2.mlstatic.com/D_NQ_NP_926204-MLA53970349980_022023-O.webp",
    stock: 10,
    description: "Sumérgete en el mundo del gaming con el teclado gamer Redragon Dragonborn K630, diseñado especialmente para brindarte una experiencia única y emocionante. Este teclado QWERTY en inglés US cuenta con switches Redragon Brown que ofrecen una respuesta táctil y rápida, ideal para mejorar tu rendimiento en tus juegos favoritos. Además, su conector USB-C garantiza una conexión estable y rápida con tu computadora.",
  },
  {
    id: "15",
    name: "Teclado gamer Redragon Shiva K512 RGB QWERTY",
    price: 44,
    category: "Teclado",
    img: "https://http2.mlstatic.com/D_NQ_NP_799291-MLA50495610720_062022-O.webp",
    stock: 15,
    description: "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",
  },  
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};