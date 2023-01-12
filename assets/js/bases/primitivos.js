let nombre = 'Peter Parker';

console.log(nombre);

/* Reinicializar variable */
nombre = 'Ben Parker';

console.log(nombre);

/* typeof() sirve para saber de que tipo es la variable */

console.log(typeof(nombre));


let esMarvel = true;
console.log(typeof(esMarvel));

let edad = 33 
console.log(typeof(edad));

// camel Case: iniciar primera en miniscula y despues las palabras que sigan en Mayuscula

let superPoder;
console.log(typeof(superPoder));

let soyNull = null;
console.log(typeof(soyNull));


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof(symbol1));
console.log(typeof(symbol2));

console.log( symbol1 === symbol2)