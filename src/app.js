/* Crear un array con al menos 10 posiciones donde cada
posición contento un objeto con las siguientes características. */

/* 

{
 nombre: "Hotel Madrid", (string)
 ciudad: “Madrid” (string)
 precio: 150, (integer)
 moneda: "Euros", (Euros / Dollar)
 free_wifi: true, (boolean)
 promociones: [{ (array)
 nombre: "20% off con la compra de 7 noches",
 porcentaje_descuento: 20
 }]
}



*/

/* objeto */

const Hoteles = [
  {
    nombre: "Hotel Estrellas",
    ciudad: "Buenos Aires",
    precio: 500,
    moneda: "Pesos",
    free_wifi: true,
    promociones: [
      {
        nombre: "10% off con la compra de 7 noches",
        porcentaje_descuento: 10
      }
    ]
  },
  {
    nombre: "Hotel Quilmes",
    ciudad: "Quilmes",
    precio: 5000,
    moneda: "Pesos",
    free_wifi: true,
    promociones: [
      {
        nombre: "20% off con la compra de 7 noches",
        porcentaje_descuento: 5
      }
    ]
  },
  {
    nombre: "Hotel Catedral",
    ciudad: "Fcio Varela",
    precio: 5.0,
    moneda: "Pesos",
    free_wifi: false,
    promociones: [
      {
        nombre: "20% off con la compra de 7 noches",
        porcentaje_descuento: 20
      }
    ]
  },
  {
    nombre: "Hotel Cruce",
    ciudad: "Fcio Varela",
    precio: 150,
    moneda: "Pesos",
    free_wifi: false,
    promociones: [
      {
        nombre: "40% off con la compra de 7 noches",
        porcentaje_descuento: 40
      }
    ]
  },
  {
    nombre: "Hotel Valencia",
    ciudad: "Valencia",
    precio: 320,
    moneda: "Euros",
    free_wifi: false,
    promociones: [
      {
        nombre: "25% off con la compra de 7 noches",
        porcentaje_descuento: 25
      }
    ]
  },
  {
    nombre: "Hotel Paris",
    ciudad: "Paris",
    precio: 280,
    moneda: "Euros",
    free_wifi: false,
    promociones: [
      {
        nombre: "30% off con la compra de 4 noches",
        porcentaje_descuento: 30
      }
    ]
  },
  {
    nombre: "Hotel Barcelona",
    ciudad: "Barcelona",
    precio: 450,
    moneda: "Euros",
    free_wifi: true,
    promociones: [
      {
        nombre: "15% off con la compra de 3 noches",
        porcentaje_descuento: 15
      }
    ]
  },
  {
    nombre: "Hotel Bogota",
    ciudad: "Bogota",
    precio: 300,
    moneda: "Dolares",
    free_wifi: true,
    promociones: [
      {
        nombre: "25% off con la compra de 5 noches",
        porcentaje_descuento: 25
      }
    ]
  },
  {
    nombre: "Hotel Mendoza",
    ciudad: "Mendoza",
    precio: 4000,
    moneda: "ARS",
    free_wifi: true,
    promociones: [
      {
        nombre: "25% off con la compra de 5 noches",
        porcentaje_descuento: 25
      }
    ]
  },

  {
    nombre: "Hotel Bs As",
    ciudad: "Buenos Aires",
    precio: 2500,
    moneda: "ARS",
    free_wifi: false,
    promociones: [
      {
        nombre: "10% off con la compra de 3 noches",
        porcentaje_descuento: 10
      }
    ]
  }
];

console.log(Hoteles.length);

/* funciones */

function dataWifi(data) {
  let listadoWifi = [];
  data.forEach((hotel) => {
    if (hotel.free_wifi) {
      listadoWifi.push(hotel.nombre);
    }
  });

  return listadoWifi;
}

console.log(dataWifi(Hoteles));

//algo asii
// super ejej

// funcaaaaa :)
