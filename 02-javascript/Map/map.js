/**
 * Created by USRDEL on 10/5/17.
 */
let arreglo = [8,10,6,8,7];

let resultado = arreglo.map((valor,indice)=>{
        return valor/5;
});

console.log(resultado);


let arregloUsuarios = [{
    nombre:"Adrian" //Sr. o Sra. Adrian
    //fechaCreacion: new Date()
    //anoCreacion:  fgdghdg
},{
    nombre:"Maria"  //Sr. o Sra. Maria
    //fechaCreacion: new Date()
    //anoCreacion:  fgdghdg
}];


let nuevoArreglo = arregloUsuarios.map((valorUsuario)=>{
    valorUsuario.nombre = "Sr. o Sra. "+valorUsuario.nombre
valorUsuario.fechaCreacion = new Date();
valorUsuario.anoCreacion = usuario.fechaCreacion.getFullYear()
return valorUsuario;
});
console.log(nuevoArreglo);