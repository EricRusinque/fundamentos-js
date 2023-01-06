let a = 5;

if( a > 10 ) {
    console.log('A es mayor a 10 ');
} else {
    console.log('A es menor a 10')
}

console.log('Fin del programa');


const hoy = new Date();
let dia = hoy.getDate(); // 0: domingo, 1: lunes, 2: martes...

console.log({ dia });

if( dia === 0 ) {
    console.log('Domingo')
} else if( dia === 1 ){
    console.log('Lunes')
} else if( dia === 2 ){
    console.log('Martes')
} else {
    console.log('No es lunes, martes o domingo...')
}