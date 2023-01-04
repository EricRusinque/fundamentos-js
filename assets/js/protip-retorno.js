
// function crearPersona(nombre, apellido ) { 
//     return{
//         nombre,
//         apellido
//     }
// }

const crearPersona = ( nombre, apellido ) => ({nombre, apellido})

const persona = crearPersona('Eric', 'Rusinque');
console.log(persona)

function imprimeArgumentos() {
    console.log(arguments)
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, arguments});
    return args
}

const [ casado,vivo, nombre, saludo ] = imprimeArgumentos2( 10, true, false, 'fernando', 'hola' );
console.log({ casado,vivo, nombre, saludo });

const persona2 = crearPersona('Eric', 'Rusinque');

const { apellido } = persona2;
console.log(apellido)



let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes}) => {
    console.log( nombre )
    console.log( codeName )
    console.log( vivo )
    console.log( edad )
    console.log( trajes )
}

imprimePropiedades(tony);