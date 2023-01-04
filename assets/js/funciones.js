function saludar( nombre ) {
    console.log('Hola ' + nombre); 
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

saludar('eric')

saludarFlecha();
saludarFlecha2( 'melissa' );