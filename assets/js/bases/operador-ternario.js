/* 
*dias de seamana abrimos a las 11
*Pero los fines de emana abrimos a las 9
*/

const dia = 4; // 0: domingo... 1: lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // esta bierto, esta cerrado, hoy abrimos a las XX

// if( dia === 0 || dia === 6 ) {
//     console.log('Fin de Semana');
//     horaApertura = 9;
// } else {
//     console.log('dia de Semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes( dia ) ? 9 : 10);
 

// if( horaActual >= horaApertura) {
//     mensaje = 'Esta Abierto'
// } else {
//     mensaje = `esta cerrado, hoy abrimos a las ${ horaApertura }`
// }

mensaje = ( horaActual >= horaApertura ? 'esta abierto' : `esta cerrado, hoy abrimos a las ${ horaApertura }`)

console.log({ horaApertura, mensaje  });