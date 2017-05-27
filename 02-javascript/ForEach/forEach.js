/**
 * Created by USRDEL on 10/5/17.
 */


// FOR EACH
// OPERADORES
let arregloNumeros = [1,2,3,4,5,6];

let resultado = arregloNumeros.forEach((numero,indice)=>{
        console.log(indice,numero);
})

    console.log('Resultado:',resultado)

function nuevoForEach(arreglo,funcion){

                for(var i =0;i<arreglo.length;i++){
                    funcion(arreglo[i],i,arreglo);
                }

            }
nuevoForEach(arregloNumeros,(valor,index)=>{
    console.log('Desde nuevo ForEach',valor,index);
})



var nuevaFuncion = (nombre,apellido)=>{
        var usuario1 = {
                nombre:nombre,
            apellido
        };
        console.log('Hola' +usuario1.nombre+usuario1.apellido);

            var usuario2 = {
                nombre
            };
        console.log(usuario2.nombre);
    }

    nuevaFuncion('Adrian', 'Eguez')