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



//var dos = multiplicar2(1,2);

var dos = multiplicar2(1,2);

    console.log(dos);

    var multiplicacion = multiplicar2;

    console.log(multiplicacion(4,6));


//no es necesario poner un nombre a la funcion a esas se le llaman funciones anonimas
var hola = function () {
    console.log('hola')

}

hola(); //imprime hola



console.log(hola()); //si imprimimos una funcion ke es void devuelve undefined


var resultado = hola(); //igualando el undefie¡ned ke nos salio, imprime undefiened

console.log(resultado); //devuelve undefiened

console.log('Hola: ',hola);  //devuelve la definicion de la funcion





//mandar funciones como parametros  (muy raro)

function hazAlgo(algo) {
    algo()
}

hazAlgo(function () {console.log('hola')});
hazAlgo(function () {return 2});


/*funcion generica para transformar un numero, en los parametros ponemor primero el numer y despues la funcion de trasformar

function transformarNumero(numero,transformacion) {
    transformacion(numero);
}*/


transformarNumero(5,function (numero)  {
    return numero * 2;
    })

transformarNumero(8,function (numero)  {
        return numero / 2;
})
