/**
 * Created by USRDEL on 16/5/17.
 */


//let holamundo = `Que tal mundo cuel`;
//console.log("hola mundo");

// boolean
let soltero:boolean = true;  //false

//enteros
let novias =12;

//string
let frasetion = "You´re done";
let otraFrasetion = `El numero de novias es ${novias +1}`;


//arrays

let notas: number[]=[1,2,34] //[]
let jaladas:Array<number>=[1,2,3] //[]


let nombre:any = "asd"
nombre = 12;

let usuario: UsuarioLogin ={
    nombre:"jonathan",
    apellido:"pachacama",
    direccion:"amaguaña"

}


interface UsuarioLogin{
    nombre:string,
    apellido:string,
    direccion?: String   // el ? hace opcional el atributo
}


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


class Persona {
    nombre:string;
    apellido:string;
    fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){

    }

    public imprimirPersona():UsuarioLogin{
        console.log(this.nombre,this.apellido);
        this.imprimirNombre(this.nombre);
        return{
            nombre:this.nombre,
            apellido:this.apellido
        }
    }


    private imprimirNombre(nombre:string,apellido?:string):void{

        if(apellido){
            console.log(nombre,apellido);
        }else{
            console.log(nombre)
        }
    }




}






//funciones

function SumarNumeros (numero1:number,numero2:number):number{
    return numero1 + numero2;
}






//podemos escribir como en javascript

var objeto = {
        nombre:"adrian",
        imprimirNombre:function(){
            return this.nombre;
        }
};










let jonathan:Persona = new Persona();

console.log(jonathan.nombre,jonathan.apellido,jonathan.fechaNacimiento);

jonathan.nombre = "Jonathan";
jonathan.apellido = "Pachacama";
jonathan.fechaNacimiento = new Date("1992-4-02");


//console.log(jonathan);

jonathan.imprimirPersona();


//------------






