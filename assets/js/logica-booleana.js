const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa true');
    return false;
}


console.warn('Not o la negacion');

console.log(true) // true
console.log(!true) // false
console.log(!!true) // true

console.log(!regresaFalse());// true


console.log('And') // true si todos los valores son verdaderos
console.log( true && true) // true
console.log( true && false) // false
console.log( true && !false) // true

console.log('=================');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue()  && regresaFalse() ); // false

console.log('==== && ====');
regresaFalse() && regresaTrue();

console.warn('OR');
console.log(true ||false);
console.log(false ||false);


console.warn('Asignaciones');

const soyUndefined = undefined
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
console.log({a1,a2, a3, a4})