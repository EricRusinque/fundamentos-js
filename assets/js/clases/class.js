class Persona {

    nombre = '';
    codigo = '';
    frase = '';



    constructor( nombre = "sin nombre", codigo = 'sin codigo', frase= 'sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase =  frase;
    }
}

const spiderman = new Persona( 'Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy ironman');

console.log(spiderman)
console.log(ironman)