/**
 * Created by USRDEL on 3/5/17.
 */


//comentarios una sola linea

console.log('hello Kitty')


//crear un objeto con mi nombre (nombre, apellido y una funcion que imprima el nombre y el apellido)


var jonathan = {

    nombre:"Jonathan",
    apellido:"Pachacama",
    fechaNacimiento:new Date(),
    imprimir:function () {

        //console.log(adrian.nombre,adrian.apellido) una forma
        console.log(this.nombre,this.apellido) //this me dice que me coja del objeto, poner nombres no es buena idea

    },
    ano:function () {
        return this.fechaNacimiento.getFullYear();
    },
    diferenciaEdad:function (edadAComparar) {
        //return Math.abs(edadAComparar-this.fechaNacimiento.getFullYear())  una forma
        var resultado = edadAComparar-this.fechaNacimiento.getFullYear();  // otra forma

        if(resultado<0){
            return resultado*-1
        }else{
            return resultado
        }

    }

};


//jonathan.imprimir()

//console.log(jonathan.ano());


console.log(jonathan.diferenciaEdad(1992));