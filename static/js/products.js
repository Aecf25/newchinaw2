// Promociones, Extras y Populares.

const Promo1 = [
    {
        id: 200,
        nombre: "Promo #1",
        precio: 11.50,
        img: "../static/Imagenes/promos/promo1.png",
        desc: "-Arroz Frito (Elección al gusto) <br/> -Lumpias (2 unds) <br/> -1/2 Pan (2 unds) <br/> -Refresco de 1 Litro <br/> -Galleta (1 unidad)",
        cantidad: 1
    },
    {
        id: 201,
        nombre: "Promo #2",
        precio: 11.50,
        img: "../static/Imagenes/promos/promo2.png",
        desc: "-Arroz Frito (Elección al gusto) <br/> -Costilla Asada (2 unds) <br/> -1/2 Pan (2 unds) <br/> -Refresco de 1 Litro <br/> -Galleta (1 unidad)",
        cantidad: 1
    },
    {
        id: 202,
        nombre: "Promo #3",
        precio: 32.00,
        img: "../static/Imagenes/promos/promo3.png",
        desc: "-2 Arroz Frito (Elección al gusto) <br/> -Chopsuey (Elección al gusto) <br/> -Costilla Asada (4 unds) <br/> -Pan (4 unds) <br/> -Refresco de 1.5 Litros <br/> -Galletas (3 unidades)",
        cantidad: 1
    },
    {
        id: 203,
        nombre: "Promo #4",
        precio: 29.00,
        img: "../static/Imagenes/promos/promo4.png",
        desc: "-2 Arroz Frito (Elección al gusto) <br/> -Pollo Agridulce <br/> -Lumpias (2 unidades) <br/> -Pan (4 unds) <br/> -Refresco de 1.5 Litros <br/> -Galletas (3 unidades)",
        cantidad: 1
    },
    {
        id: 204,
        nombre: "Promo #5",
        precio: 50.00,
        img: "../static/Imagenes/promos/promo5.png",
        desc: "-3 Arroz Frito (Elección al gusto) <br/> -Pollo Agridulce <br/> -Costilla (Asada, Sal & Pimienta ó Miel/ajo) <br/> -Chopsuey (elección al gusto) <br/> -Pan (8 unidades) <br/> -Refresco de 1.5 Litros <br/> -Galletas (6 unidades)",
        cantidad: 1
    },
    {
        id: 205,
        nombre: "Promo #6",
        precio: 50.00,
        img: "../static/Imagenes/promos/promo6.png",
        desc: "-3 Arroz Frito (Elección al gusto) <br/> -Pollo Agridulce <br/> -Costilla (Asada, Sal & Pimienta ó Miel/ajo) <br/> -Lumpias (4 unidades) <br/> -Pan (8 unidades) <br/> -Refresco de 1.5 Litros <br/> -Galletas (6 unidades)",
        cantidad: 1
    },
]



// Menu Completo

const combos1 = [
    {
        id: 1,
        nombre: "Combo #1",
        precio: 8.00,
        img: "../static/Imagenes/combos/1.png",
        desc: "Arroz Especial <br/>Lumpia (1) <br/> Pollo Agridulce.",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Combo #2",
        precio: 8.50,
        img: "../static/Imagenes/combos/2.png",
        desc: "Arroz Especial <br/>  Lumpia (1) <br/> Costilla Asada (1).",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Combo #3",
        precio: 8.50,
        img: "../static/Imagenes/combos/3.png",
        desc: "Arroz Especial <br/> Pollo Agridulce <br/> Costilla Asada (1).",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Combo #4",
        precio: 9.00,
        img: "../static/Imagenes/combos/4.png",
        desc: "Arroz Especial <br/> Lumpia (1) <br/> Pollo Agridulce <br/> Costilla Asada (1).",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Combo #5",
        precio: 9.00,
        img: "../static/Imagenes/combos/5.png",
        desc: "Arroz Especial <br/> Chop Suey Esp. <br/> Pollo Agridulce <br/> Lumpia (1).",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Combo #6",
        precio: 9.00,
        img: "../static/Imagenes/combos/6.png",
        desc: "Arroz Especial <br/> Chop Suey Esp. <br/> Pollo Agridulce <br/> Costilla Asada (1).",
        cantidad: 1
    },
];


const entremeses1 = [
    {
        id: 7,
        nombre: "Lumpias",
        precio: 4.00,
        img: "../static/Imagenes/entremeses/lumpia.png",
        desc: "Rollos de primavera (Par).",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Wanton Frito",
        precio: 5.00,
        img: "../static/Imagenes/entremeses/wantonfrito.png",
        desc: "Lámina de masa Frita.",
        cantidad: 1
    },
    {
        id: 9,
        nombre: "Wanton Frito Relleno",
        precio: 6.00,
        img: "../static/Imagenes/entremeses/wantonrelleno.png",
        desc: "Lámina de masa rellena con camarón y pollo.",
        cantidad: 1
    },
    {
        id: 10,
        nombre: "Pan Chino",
        precio: 1.50,
        img: "../static/Imagenes/entremeses/pan.png",
        desc: "Pan a base de mantequilla y azúcar (4unds).",
        cantidad: 1
    },
]

const arroz = [
    {
        id: 11,
        nombre: "Arroz Frito Especial",
        precio: 7.00,
        img: "../static/Imagenes/arrozfrito/afespecial.png",
        desc: "Arroz frito con Pollo, Jamón y Cerdo asado.",
        cantidad: 1
    },
    {
        id: 12,
        nombre: "Arroz Frito con Pollo y Camarón",
        precio: 7.50,
        img: "../static/Imagenes/arrozfrito/afpolloycamaron.png",
        desc: "Arroz Frito con Pollo & Camarón.",
        cantidad: 1
    },
    {
        id: 13,
        nombre: "Arroz Frito con Pollo",
        precio: 7.00,
        img: "../static/Imagenes/arrozfrito/afpollo.png",
        desc: "Arroz Frito con Pollo.",
        cantidad: 1
    },
    {
        id: 14,
        nombre: "Arroz Frito con Camarón",
        precio: 8.00,
        img: "../static/Imagenes/arrozfrito/afconcamaron.png",
        desc: "Arroz Frito con Camarón.",
        cantidad: 1
    },
    {
        id: 15,
        nombre: "Arroz Frito con Cerdo Asado",
        precio: 7.00,
        img: "../static/Imagenes/arrozfrito/afconcerdo.png",
        desc: "Arroz Frito con Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 16,
        nombre: "Arroz Frito con Cerdo Asado y Pollo",
        precio: 7.00,
        img: "../static/Imagenes/arrozfrito/afpollocerdo.png",
        desc: "Arroz Frito con Cerdo Asado y Pollo",
        cantidad: 1
    },
    {
        id: 17,
        nombre: "Arroz Frito con Jamón",
        precio: 7.00,
        img: "../static/Imagenes/arrozfrito/afconjamon.png",
        desc: "Arroz Frito con Jamón.",
        cantidad: 1
    },
    {
        id: 18,
        nombre: "Arroz Frito con Huevo",
        precio: 7.00,
        img: "../static/Imagenes/arrozfrito/afconhuevo.png",
        desc: "Arroz Frito con Huevo.",
        cantidad: 1
    },
    {
        id: 19,
        nombre: "Rice Cooling",
        precio: 8.00,
        img: "../static/Imagenes/arrozfrito/ricecooling.png",
        desc: "1/2 Ración de Arroz Especial </br>1/2 Ración de Chop Suey Especial.",
        cantidad: 1
    },

]

const arrozsalt = [
    {
        id: 20,
        nombre: "Arroz Con Carne de Res",
        precio: 9.00,
        img: "../static/Imagenes/arrozsalt/carne.png",
        desc: "Arroz Salteado con Carne de Res.",
        cantidad: 1
    },
    {
        id: 21,
        nombre: "Arroz con Camarón Fresco",
        precio: 10.50,
        img: "../static/Imagenes/arrozsalt/camaronf.png",
        desc: "Arroz Salteado con Camarón Fresco.",
        cantidad: 1
    },
    {
        id: 22,
        nombre: "Arroz Especial de la Casa",
        precio: 9.00,
        img: "../static/Imagenes/arrozsalt/espcasa.png",
        desc: "Arroz Salteado con Camarón & Cerdo.",
        cantidad: 1
    },
    {
        id: 23,
        nombre: "Arroz con Vegetales Buda",
        precio: 9.00,
        img: "../static/Imagenes/arrozsalt/buda.png",
        desc: "Arroz Salteado con Repollo chino, Brocoli, Choy Sum, Champiñones.",
        cantidad: 1
    },
    {
        id: 24,
        nombre: "Arroz Con Tres tipos de Carne",
        precio: 9.50,
        img: "../static/Imagenes/arrozsalt/trescarnes.png",
        desc: "Arroz Salteado con Cerdo, Pollo & Carne de Res.",
        cantidad: 1
    },
    {
        id: 25,
        nombre: "Arroz Carnes Mixtas",
        precio: 10.00,
        img: "../static/Imagenes/arrozsalt/carnemixta.png",
        desc: "Arroz Salteado con Camarones Frescos, Champiñones, Jojoticos chinos, Brócoli, Cerdo, Pollo & Calamar.",
        cantidad: 1
    },
    {
        id: 26,
        nombre: "Arroz Cantonés",
        precio: 10.00,
        img: "../static/Imagenes/arrozsalt/cantones.png",
        desc: "Arroz Salteado con Salchicha china, Cerdo, Pollo & Camarón",
        cantidad: 1
    },
    {
        id: 27,
        nombre: "Arroz Blanco",
        precio: 2.00,
        img: "../static/Imagenes/arrozsalt/arrblanco.png",
        desc: "Ración de Arroz Blanco",
        cantidad: 1
    },
]

const ChopSuey = [
    {
        id: 28,
        nombre: "ChopSuey Especial",
        precio: 7.50,
        img: "../static/Imagenes/chopsuey/especial.png",
        desc: "ChopSuey con Pollo, Jamón y Cerdo asado.",
        cantidad: 1
    },

    {
        id: 280,
        nombre: "ChopSuey con Jamón",
        precio: 7.50,
        img: "../static/Imagenes/chopsuey/jamon.png",
        desc: "ChopSuey con Jamón.",
        cantidad: 1
    },

    {
        id: 29,
        nombre: "ChopSuey con Pollo y Camarón",
        precio: 8.00,
        img: "../static/Imagenes/chopsuey/pollocamaron.png",
        desc: "ChopSuey con Pollo & Camarón.",
        cantidad: 1
    },
    {
        id: 30,
        nombre: "ChopSuey con Pollo",
        precio: 7.50,
        img: "../static/Imagenes/chopsuey/pollo.png",
        desc: "ChopSuey con Pollo.",
        cantidad: 1
    },
    {
        id: 31,
        nombre: "ChopSuey con Camarón",
        precio: 8.50,
        img: "../static/Imagenes/chopsuey/camaron.png",
        desc: "ChopSuey con Camarón.",
        cantidad: 1
    },
    {
        id: 32,
        nombre: "ChopSuey con Cerdo Asado",
        precio: 7.50,
        img: "../static/Imagenes/chopsuey/cerdo.png",
        desc: "ChopSuey con Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 33,
        nombre: "ChopSuey con Carne de Res",
        precio: 7.50,
        img: "../static/Imagenes/chopsuey/carne.png",
        desc: "ChopSuey con Carne de Res.",
        cantidad: 1
    },
    {
        id: 34,
        nombre: "ChopSuey de Vegetales",
        precio: 7.00,
        img: "../static/Imagenes/chopsuey/vegetales.png",
        desc: "ChopSuey solo de Vegetales.",
        cantidad: 1
    },
]

const chowmein = [
    {
        id: 35,
        nombre: "Chow Mein Especial", 
        precio: 9.50,
        img: "../static/Imagenes/chowmein/especial.png",
        desc: "Fideos fritos con Pollo, Jamón & Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 36,
        nombre: "Chow Mein con Pollo y Camarón", 
        precio: 10.00,
        img: "../static/Imagenes/chowmein/pollocamaron.png",
        desc: "Fideos fritos con Pollo Y Camarones.",
        cantidad: 1
    },
    {
        id: 37,
        nombre: "Chow Mein con Pollo", 
        precio: 9.50,
        img: "../static/Imagenes/chowmein/pollo.png",
        desc: "Fideos fritos con Pollo.",
        cantidad: 1
    },
    {
        id: 38,
        nombre: "Chow Mein con Camarón", 
        precio: 10.50,
        img: "../static/Imagenes/chowmein/camaron.png",
        desc: "Fideos fritos con Camarones.",
        cantidad: 1
    },
    {
        id: 39,
        nombre: "Chow Mein con Carne de Res", 
        precio: 9.50,
        img: "../static/Imagenes/chowmein/carne.png",
        desc: "Fideos fritos con Carne de Res.",
        cantidad: 1
    },
    {
        id: 40,
        nombre: "Chow Mein con Carne de Res y Vegetales", 
        precio: 15.00,
        img: "../static/Imagenes/chowmein/carneresvege.png",
        desc: "Fideos fritos con Carne de Res & Vegetales Chinos.",
        cantidad: 1
    },
    {
        id: 41,
        nombre: "Chow Mein con Pollo y Vegetales.", 
        precio: 15.00,
        img: "../static/Imagenes/chowmein/pollovegetal.png",
        desc: "Fideos fritos con Pollo & Vegetales chinos.",
        cantidad: 1
    },
    {
        id: 42,
        nombre: "Chow Mein con Carnes Mixtas", 
        precio: 17.00,
        img: "../static/Imagenes/chowmein/carnemixta.png",
        desc: "Fideos fritos con Carne de Res, Pollo, Camarones & Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 43,
        nombre: "Chow Mein Con Vegetales Tipo Buda", 
        precio: 9.50,
        img: "../static/Imagenes/chowmein/chowbuda.png",
        desc: "Fideos fritos con Vegetales chinos (Repollo chio, Brocoli, Choy Sum, Jojotico chino, Champiñones).",
        cantidad: 1
    },
]

const Lomein = [
    {
        id: 44,
        nombre: "Lo Mein Especial", 
        precio: 9.50,
        img: "../static/Imagenes/lomein/especial.png",
        desc: "Fideos Hervidos con Pollo, Jamón & Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 45,
        nombre: "Lo Mein Con Pollo y Camarón", 
        precio: 10.00,
        img: "../static/Imagenes/lomein/pollocamaron.png",
        desc: "Fideos Hervidos con Pollo & Camarón.",
        cantidad: 1
    },
    {
        id: 46,
        nombre: "Lo Mein Con Cerdo Asado", 
        precio: 9.50,
        img: "../static/Imagenes/lomein/cerdo.png",
        desc: "Fideos Hervidos con Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 47,
        nombre: "Lo Mein Con Pollo", 
        precio: 9.50,
        img: "../static/Imagenes/lomein/pollo.png",
        desc: "Fideos Hervidos con Pollo.",
        cantidad: 1
    },
    {
        id: 48,
        nombre: "Lo Mein Con Camarón", 
        precio: 10.50,
        img: "../static/Imagenes/lomein/camaron.png",
        desc: "Fideos Hervidos con Camarones.",
        cantidad: 1
    },
    {
        id: 49,
        nombre: "Lo Mein Con Carne de Res", 
        precio: 9.50,
        img: "../static/Imagenes/lomein/carne.png",
        desc: "Fideos Hervidos con Carne de Res.",
        cantidad: 1
    },
    {
        id: 50,
        nombre: "Lo Mein Con Jengibre y Cebollín", 
        precio: 9.00,
        img: "../static/Imagenes/lomein/jengicebolla.png",
        desc: "Fideos Hervidos con Tiritas de Jengibre & Cebollín.",
        cantidad: 1
    },
    {
        id: 51,
        nombre: "Lo Mein Con Salsa de Ostras", 
        precio: 9.00,
        img: "../static/Imagenes/lomein/salsaostra.png",
        desc: "Fideos Hervidos con Salsa de Ostras.",
        cantidad: 1
    },
]

const fideos = [
    {
        id: 52,
        nombre: "Fideos Estilo Singapur", 
        precio: 10.50,
        img: "../static/Imagenes/fideos/singapour.png",
        desc: "Fideos de Arroz al Estilo Singapur (Picante).",
        cantidad: 1
    },
    {
        id: 53,
        nombre: "Fideos Estilo Cantonés", 
        precio: 10.50,
        img: "../static/Imagenes/fideos/canton.png",
        desc: "Fideos de Arroz al Estilo Cantonés.",
        cantidad: 1
    },
]

const pollos = [
    {
        id: 54,
        nombre: "Pollo con Vegetales Chinos", 
        precio: 12.00,
        img: "../static/Imagenes/pollo/pollovegechino.png",
        desc: "Pollo cortado en cubos con Vegetales Chinos.",
        cantidad: 1
    },
    {
        id: 55,
        nombre: "Pollo con Champiñón", 
        precio: 13.00,
        img: "../static/Imagenes/pollo/pollochampi.png",
        desc: "Pollo con Champiñones.",
        cantidad: 1
    },
    {
        id: 56,
        nombre: "Pollo con Trozos de Merey", 
        precio: 12.00,
        img: "../static/Imagenes/pollo/pollomerey.png",
        desc: "Pollo con Merey Troceado.",
        cantidad: 1
    },
    {
        id: 57,
        nombre: "Pollo Frito en Salsa de Naranja", 
        precio: 12.00,
        img: "../static/Imagenes/pollo/pollonaranja.png",
        desc: "Pollo Frito sumergido en Salsa de Naranja.",
        cantidad: 1
    },
    {
        id: 58,
        nombre: "Pollo con Piña", 
        precio: 12.00,
        img: "../static/Imagenes/pollo/pollopiña.png",
        desc: "Pollo con Trozos de Piña.",
        cantidad: 1
    },
    {
        id: 59,
        nombre: "Pollo con Miel y Ajonjolí", 
        precio: 13.00,
        img: "../static/Imagenes/pollo/pollomiel.png",
        desc: "Pollo Rebozado con Miel y Ajonjolí.",
        cantidad: 1
    },
    {
        id: 60,
        nombre: "Pollo Agridulce", 
        precio: 10.00,
        img: "../static/Imagenes/pollo/polloagridulce.png",
        desc: "Pollo Rebozado bañado en Salsa Agridulce.",
        cantidad: 1
    },
    {
        id: 61,
        nombre: "Pollo con Cerdo Asado", 
        precio: 12.00,
        img: "../static/Imagenes/pollo/pollocerdoasado.png",
        desc: "Pollo en cubitos con rebanadas de Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 62,
        nombre: "Pollo con Jojoticos Chinos", 
        precio: 13.00,
        img: "../static/Imagenes/pollo/pollojojotico.png",
        desc: "Pollo en cubos acompañado de vegetales y Jojoticos chinos.",
        cantidad: 1
    },
    {
        id: 63,
        nombre: "Pollo en Salsa de Ostras", 
        precio: 12.00,
        img: "../static/Imagenes/pollo/polloostra.png",
        desc: "Pollo con Vegetales en Salsa de Ostras.",
        cantidad: 1
    },
]

const carnes = [
    {
        id: 65,
        nombre: "Carne en Salsa de Ostras", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carneostras.png",
        desc: "Carne de res en lonjas con Salsa de Ostras.",
        cantidad: 1
    },
    {
        id: 66,
        nombre: "Carne con Pimentones", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carnepimenton.png",
        desc: "Carne de Res en lonjas con trozos de Pimentón.",
        cantidad: 1
    },
    {
        id: 67,
        nombre: "Carne en Salsa de Curry", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carnecurry.png",
        desc: "Carne de Res en lonjas bañadas en Salsa de Curry (Picante).",
        cantidad: 1
    },
    {
        id: 69,
        nombre: "Carne con Merey", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carnemerey.png",
        desc: "Carne de Res en lonjas acompañadas con trozos de Merey.",
        cantidad: 1
    },
    {
        id: 71,
        nombre: "Carne con Jojoticos chinos", 
        precio: 13.00,
        img: "../static/Imagenes/carne/carnejojotico.png",
        desc: "Carne de Res en lonjas con Jojoticos chinos.",
        cantidad: 1
    },
    {
        id: 72,
        nombre: "Carne con Champiñones", 
        precio: 13.00,
        img: "../static/Imagenes/carne/carnechamp.png",
        desc: "Carne de Res en lonjas con Trozos de Champiñón.",
        cantidad: 1
    },
    {
        id: 73,
        nombre: "Carne Encebollada", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carnecebolla.png",
        desc: "Carne de Res en lonjas con Cebolla en Trozos.",
        cantidad: 1
    },
    {
        id: 74,
        nombre: "Carne con Pimienta Negra", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carnepimienta.png",
        desc: "Carne de Res adobado principalmente con Pimienta Negra.",
        cantidad: 1
    },
    {
        id: 76,
        nombre: "Carne con Jengibre y Cebollín", 
        precio: 12.00,
        img: "../static/Imagenes/carne/carnejengicebo.png",
        desc: "Carne de Res acompañado con julianas de Jengibre y trozos de Cebollín.",
        cantidad: 1
    },
]

const CerdoyCamaron = [
    {
        id: 77,
        nombre: "Costillas Asadas", 
        precio: 9.00,
        img: "../static/Imagenes/cerdo/asada.png",
        desc: "Costillas de Cerdo Asadas (4unds).",
        cantidad: 1
    },
    {
        id: 78,
        nombre: "Costillas en Salsa Agria y Picante", 
        precio: 10.50,
        img: "../static/Imagenes/cerdo/costmielajo.png",
        desc: "Costillas Rebozadas en Salsa Agria & Picante.",
        cantidad: 1
    },
    {
        id: 79,
        nombre: "Costillas con Sal y Pimienta", 
        precio: 10.50,
        img: "../static/Imagenes/cerdo/costsalpimienta.png",
        desc: "Costillas en Trozos con Sal & Pimienta.",
        cantidad: 1
    },
    {
        id: 80,
        nombre: "Costillas en Salsa de Miel y Ajo", 
        precio: 10.50,
        img: "../static/Imagenes/cerdo/costmielajo.png",
        desc: "Costillas en Trozos bañadas en Salsa de Miel & Ajo.",
        cantidad: 1
    },
    {
        id: 81,
        nombre: "Cerdo Asado", 
        precio: 7.50,
        img: "../static/Imagenes/cerdo/cerdoasado.png",
        desc: "Cerdo en Rebanadas Asado.",
        cantidad: 1
    },
    {
        id: 82,
        nombre: "Cerdo Asado con Champiñones", 
        precio: 13.00,
        img: "../static/Imagenes/cerdo/asadochamp.png",
        desc: "Cerdo en Rebanadas Asado acompañado de trozos de Champiñones.",
        cantidad: 1
    },
    {
        id: 83,
        nombre: "Cerdo Asado con Merey", 
        precio: 12.00,
        img: "../static/Imagenes/cerdo/asadomerey.png",
        desc: "Cerdo en Rebanadas Asado con trozos de Merey.",
        cantidad: 1
    },
    {
        id: 84,
        nombre: "Cerdo Asado con Jojoticos chinos", 
        precio: 13.00,
        img: "../static/Imagenes/cerdo/asadojojotico.png",
        desc: "Cerdo en Rebanadas Asado con Jojotico & Vegetales chinos.",
        cantidad: 1
    },
    {
        id: 85,
        nombre: "Cerdo Frito Agridulce", 
        precio: 12.00,
        img: "../static/Imagenes/cerdo/agridulce.png",
        desc: "Cerdo en Rebanadas Frito bañado en Salsa Agridulce.",
        cantidad: 1
    },
    {
        id: 87,
        nombre: "Camarones en Salsa de Ajo", 
        precio: 20.00,
        img: "../static/Imagenes/cerdo/camaronsalsaajo.png",
        desc: "Camarones Frescos enteros bañados en Salsa de Ajo.",
        cantidad: 1
    },
]

const fuyung = [
    {
        id: 88,
        nombre: "Fu Yung Especial", 
        precio: 9.00,
        img: "../static/Imagenes/fuyung/fuyung.png",
        desc: "Tortilla de Huevo rellena Pollo, Jamón & Cerdo Asado.",
        cantidad: 1
    },
    {
        id: 89,
        nombre: "Fu Yung con Pollo y Camarón", 
        precio: 9.50,
        img: "../static/Imagenes/fuyung/fuyung.png",
        desc: "Tortilla de Huevo rellena Pollo & Camarones.",
        cantidad: 1
    },
    {
        id: 90,
        nombre: "Fu Yung con Pollo", 
        precio: 9.00,
        img: "../static/Imagenes/fuyung/fuyung.png",
        desc: "Tortilla de Huevo rellena con tiritas de Pollo.",
        cantidad: 1
    },
    {
        id: 91,
        nombre: "Fu Yung con Camarón", 
        precio: 10.00,
        img: "../static/Imagenes/fuyung/fuyung.png",
        desc: "Tortilla de Huevo rellena de Camarones.",
        cantidad: 1
    },
    {
        id: 92,
        nombre: "Fu Yung con Jamón", 
        precio: 9.00,
        img: "../static/Imagenes/fuyung/fuyung.png",
        desc: "Tortilla de Huevo rellena con tiritas de Jamón.",
        cantidad: 1
    },
    {
        id: 93,
        nombre: "Fu Yung con Cerdo Asado", 
        precio: 9.00,
        img: "../static/Imagenes/fuyung/fuyung.png",
        desc: "Tortilla de Huevo rellena con tiritas de Cerdo Asado.",
        cantidad: 1
    },
]

const Vegetales = [
    {
        id: 94,
        nombre: "Vegetales con Carnes Mixtas", 
        precio: 15.00,
        img: "../static/Imagenes/vegetal/carnemixta.png",
        desc: "Vegetales chinos acompañdos de Carne de Res, Pollo & Camarones.",
        cantidad: 1
    },
    {
        id: 95,
        nombre: "Vegetales con Tres Tipos de Carnes", 
        precio: 15.00,
        img: "../static/Imagenes/vegetal/trescarnes.png",
        desc: "Vegetales chinos acompañado de Cerdo, Pollo & Carne de Res.",
        cantidad: 1
    },
    {
        id: 96,
        nombre: "Vegetales Tipo Buda", 
        precio: 9.00,
        img: "../static/Imagenes/vegetal/buda.png",
        desc: "Vegetales chinos Estilo Buda (Repollo chino, Brocoli, Choy Sum, entre otros).",
        cantidad: 1
    },
    {
        id: 98,
        nombre: "Ensalada de Camarones", 
        precio: 8.00,
        img: "../static/Imagenes/vegetal/camaron.png",
        desc: "Ensalada tradicional con Camarones.",
        cantidad: 1
    },
    {
        id: 99,
        nombre: "Ensalada de Pollo", 
        precio: 7.00,
        img: "../static/Imagenes/vegetal/pollo.png",
        desc: "Ensalada tradicional con tiritas de Pollo.",
        cantidad: 1
    },
    {
        id: 100,
        nombre: "Ensalada Mixta", 
        precio: 7.00,
        img: "../static/Imagenes/vegetal/pollocamaron.png",
        desc: "Ensalada tradicional con tiritas de Pollo & Camarones.",
        cantidad: 1
    },
]

const Sopas = [
    {
        id: 101,
        nombre: "Sopa de Wanton", 
        precio: 5.50,
        img: "../static/Imagenes/sopa/wanton.png",
        desc: "Sopa con Wanton Relleno.",
        cantidad: 1
    },
    {
        id: 102,
        nombre: "Sopa de Wanton Mein", 
        precio: 7.00,
        img: "../static/Imagenes/sopa/wantonmein.png",
        desc: "Sopa con Wanton Relleno & Fideos.",
        cantidad: 1
    },
    {
        id: 103,
        nombre: "Sopa de Vegetales", 
        precio: 5.00,
        img: "../static/Imagenes/sopa/vegetal.png",
        desc: "Sopa con Vegetales chinos.",
        cantidad: 1
    },
    {
        id: 105,
        nombre: "Sopa de Huevo con Pollo", 
        precio: 5.00,
        img: "../static/Imagenes/sopa/huevopollo.png",
        desc: "Sopa con tiritas de Pollo & Huevo.",
        cantidad: 1
    },
    {
        id: 106,
        nombre: "Sopa de Pollo con Champiñones", 
        precio: 6.00,
        img: "../static/Imagenes/sopa/pollochampi.png",
        desc: "Sopa con tiritas de Pollo & Champiñones fileteados.",
        cantidad: 1
    },
    {
        id: 107,
        nombre: "Crema de Jojoto", 
        precio: 5.50,
        img: "../static/Imagenes/sopa/jojoto.png",
        desc: "Crema a Base de Jojoto & Huevo.",
        cantidad: 1
    },
]

const Bebidas = [
    {
        id: 108,
        nombre: "Agua", 
        precio: 2.00,
        img: "../static/Imagenes/bebida/agua.png",
        desc: "Presentación de 1.5 lts.",
        cantidad: 1
    },
    {
        id: 109,
        nombre: "Té Lipton", 
        precio: 5.00,
        img: "../static/Imagenes/bebida/te.png",
        desc: "Presentación de 1.5 lts (Durazno ó Limón).",
        cantidad: 1
    },
    {
        id: 110,
        nombre: "Jugo Yukery", 
        precio: 5.00,
        img: "../static/Imagenes/bebida/jugo.png",
        desc: "Presentación de 1.5lts (Manzana, Naranja, Naranja-Mango & Pera).",
        cantidad: 1
    },
    {
        id: 111,
        nombre: "Refresco de Botella", 
        precio: 2.50,
        img: "../static/Imagenes/bebida/pepsi.png",
        desc: "Presentación de 1.5lts (Pepsi, Manzanita, Uva, Piña, Naranja, Kolita, 7up).",
        cantidad: 1
    },
    {
        id: 112,
        nombre: "Refresco de Botella", 
        precio: 3.00,
        img: "../static/Imagenes/bebida/pepsi.png",
        desc: "Presentación de 2lts (Pepsi, 7up).",
        cantidad: 1
    },
    {
        id: 113,
        nombre: "Agua", 
        precio: 0.80,
        img: "../static/Imagenes/bebida/agua.png",
        desc: "Presentación de 355ml.",
        cantidad: 1
    },
    {
        id: 114,
        nombre: "Agua", 
        precio: 1.00,
        img: "../static/Imagenes/bebida/agua.png",
        desc: "Presentación de 600 ml.",
        cantidad: 1
    },
]

const extras = [
    {
        id: 115,
        nombre: "Salsa Agridulce", 
        precio: 0.10,
        img: "../static/Imagenes/extra/roja.png",
        desc: "Presentación en sobre.",
        cantidad: 1
    },
    {
        id: 116,
        nombre: "Salsa de Soja", 
        precio: 0.10,
        img: "../static/Imagenes/extra/negra.png",
        desc: "Presentación en sobre.",
        cantidad: 1
    },
]
