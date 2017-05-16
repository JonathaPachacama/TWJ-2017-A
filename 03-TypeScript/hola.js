/**
 * Created by USRDEL on 16/5/17.
 */
//let holamundo = `Que tal mundo cuel`;
//console.log("hola mundo");
// boolean
var soltero = true; //false
//enteros
var novias = 12;
//string
var frasetion = "You´re done";
var otraFrasetion = "El numero de novias es " + (novias + 1);
//arrays
var notas = [1, 2, 34]; //[]
var jaladas = [1, 2, 3]; //[]
var nombre = "asd";
nombre = 12;
var usuario = {
    nombre: "jonathan",
    apellido: "pachacama",
    direccion: "amaguaña"
};
/*
class persona {
    public nombre:string = "Nom"; //pubico por defectp+o
    private apellido:string ;
    public fechaNacimiento:Date;


    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }

}
*/
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
    };
    return Persona;
}());
var jonathan = new Persona();
console.log(jonathan.nombre, jonathan.apellido, jonathan.fechaNacimiento);
jonathan.nombre = "Jonathan";
jonathan.apellido = "Pachacama";
jonathan.fechaNacimiento = new Date("1992-4-02");
//console.log(jonathan);
jonathan.imprimirPersona();
