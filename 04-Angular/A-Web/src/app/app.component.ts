import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: './app.component.html',

  /*template: `
      <h1>Hola</h1>

     `,*/
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //title = 'Funciona!!';
  //saludo = '    Hola amigos';
  //nombre = 'jonathan';
  //apellido = 'pachacama';

  url:string="httpa://angular.io";
  src:string="http://res.cloudinary.com/buddahbelly/image/upload/v1423072364/brilliantbritz/angular-js.png";

  usuario:UsuarioInt = {
    nombre:"Jonathan",
    apellido:"Pachacama"
  }

  constructor(){
    console.log("constructor");
    this.holaMundo();
    console.log(this.saludar(this.usuario.nombre,this.usuario.apellido));

  }

  holaMundo(){
    console.log("Hola mundo");
  }
  saludar(nombre:string,
          apellido?:string):string{
    return `Hola ${nombre} ${apellido}`;
  }

}



interface UsuarioInt{
  nombre:string,
  apellido:string
}
