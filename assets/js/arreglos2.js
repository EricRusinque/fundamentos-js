/*  Los metodos son funciones que vienen internas dentro de los arreglos */

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });


juegos.forEach( ( elemento, indice, arr ) => {
    console.log(elemento, indice, arr)
});

/* Agregar al final */

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

/* Agregar al inicio  */

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});


/* Eliminar  el ultimo elemento*/
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


/* Borrar elemento en posicion especifica */

let pos = 1; 

console.log(juegos)

let juegosBorrados = juegos.splice( pos, 2);

console.log({ juegosBorrados, juegos })

/* Como saber en que lugar se encuentra la posicio indice en un arreglo */

let metroidIndex = juegos.indexOf('Metroid'); // Case Sensitive

console.log(metroidIndex)