class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';



    constructor( nombre = "sin nombre", codigo = 'sin codigo', frase= 'sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase =  frase;
    }
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    } 

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo }`)
    }

    miFrase(){
        this.quienSoy()
        console.log(`${ this.codigo } dice: ${ this.frase }`)
    }
}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy ironman');

console.log(spiderman)
console.log(ironman)

spiderman.quienSoy()
// ironman.miFrase()

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
spiderman.nemesis = 'Duende Verde'

console.log(spiderman.getComidaFavorita)
console.log(spiderman);
