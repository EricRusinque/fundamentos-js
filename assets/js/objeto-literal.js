let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880,90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'infinity War'
};
console.log(personaje)
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);
console.log('Ultima Pelicula', personaje['ultima-pelicula']);



