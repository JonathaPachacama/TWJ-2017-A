/**
 * Created by USRDEL on 3/5/17.
 */

//variables.js


// en javascript se define la palabra reservada con <var>


//enteros

var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);


//float

var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);


//todos los demas

var verdaderoOFalso = true;
var falso = false;
var nombre = 'Adrian';
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -5432;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

console.log(cuatroString);

var variable;

console.log(variable);

var numero2 = 2;
console.log(typeof numero2);





//OBJETOS JSON

var adrian = {
    id:1,
    nombre:'Adrian',
    createAt:new Date(),
    updatedAt: new Date(),
    casado:true,
    prestamos:false,
    hijos:null,
    altura:2.8,
    negativos:-1,
    mascota:{
        nombre:'cachetes',
        fechaNacimiento:new Date()
    }


};

console.log('OBJETO:', adrian);


console.log(adrian.mascota.fechaNacimiento);

console.log('Altura: ',adrian.altura);
adrian.altura = 1.48;
console.log('Altura: ',adrian.altura);

adrian.altura = {
    ancho:2.4,
    alto:1.79
};

console.log('Altura: ',adrian.altura);



//borra un atributo o propiedadesdel objeto


delete adrian.altura;
console.log('objeto',adrian);

//añadir un atribuo o propiedad de un objeto

adrian.juegos = 'varios'
console.log('Objeto',adrian);


//arreglos

var arreglo = [
    1,
    'adr',
    2.4,
    false,
    true,
    null,
    undefined,
    new Date(),
    -3412,
    {
        a:'b'
    }];

//console.log('arrego: '+ arreglo) asi el arreglo no va a imprimirse va a salir "[object Object]"

console.log('arrego: ', arreglo) //asi si se imprime el objeto



console.log(arreglo[4]); //imprimir un atributo del arreglo

var nuevoObjeto = {
    papas:['chola','chaucha'],
    cebollas:['paitenia','perla','blanca']
}



//matriz : arreglos dentro de arreglos

var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);


//arreglo de objetos
var arregloDeObjetos = [
    {
        id:1,
        nombre:'Adrian'
    },
    {
        id:2,
        nombre:'Felipe'
    }
];

console.log('Antes',arregloDeObjetos);

//borrar un elemento del arreglo
    //splice('delimita ka posicion en la que vamos a trabajar','numero Objetos a eliminarses')

arregloDeObjetos.splice(0,1)

console.log('Despues',arregloDeObjetos);

//insertar un elemento

arregloDeObjetos.splice(0,0,{id:3,nombre:'Carmen'})
console.log('Despues2',arregloDeObjetos);





