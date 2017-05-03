/**
 * Created by USRDEL on 3/5/17.
 */


//void

function holaMundo () {

    console.log('Hola Mundo');
}

holaMundo();

//El doble de un entero

function doble(numero) { //para definir variables en funciones en js no ponemos var
    return numero*2;
}

//console.log(doble());  me imprime NaN 'no es un numero'
console.log(doble(4)); // imprime 4

//Devuelve mult 2 num,

function  multiplicar2(a,b) {
    return a*b;

}

console.log(multiplicar2(4,3)); //imprime 12