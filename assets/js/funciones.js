function saludar( nombre ) {
    console.log('Hola ' + nombre); 
    return 1;

    //esto nunca se va a ejecutar
    // console.log('Hola')
} 

const saludar2 = function() {
    console.log('Hola Mundo')
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = nombre  => {
    console.log('Hola', nombre)
}

const retornoDeSaludar = saludar('eric')
console.log(retornoDeSaludar)


// saludarFlecha();
// saludarFlecha2( 'melissa' );

function sumar( a, b ) {
    return a + b 
}

/* const sumar2 = ( a, b ) => {
    return a + b 
} */

const sumar2 = ( a, b ) => a + b 

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio() )
console.log( getAleatorio2() )