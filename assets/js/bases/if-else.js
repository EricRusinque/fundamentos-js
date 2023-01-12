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

dia = 3;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',    
    2: 'martes', 
    3: 'miercoles',  
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

console.log( diasLetras2[dia] || 'Dia no valido' );