import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map'; // rxjs(librearia reactiva de javascript)con esta linea importamos el operador map

import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Classes/UsuarioClass";
import {Form} from "@angular/forms";
import {CorreoClass} from "../../Classes/CorreoClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Jonathan";
  usuarios:UsuarioClass[]=[];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");
  nuevoCorreo: CorreoClass = new CorreoClass("");
  planetas : PlanetaStarWarsInterface[] =[];
  // planetas2 : Array<PlanetaStarWars> =  []
  // command + a(para seleccionas) y luedo comman command+alt+l
  arregloUsuarios = [
    {
      nombre:"Jonathan",
      apellido:"pachacama",
      conectado:true
    },
    {
      nombre:"Mashi",
      apellido:"correa",
      conectado:true
    },
    {
      nombre: "Abdala",
      apellido: "Bucaran",
      conectado:false
    },
    {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado:false
    }];


  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }

  ngOnInit() {
    //Esta listo el componente
    // this._http
    //   .post("http://localhost:1337/Usuario")
    //   .subscribe(
    //     respuesta=>{
    //       let rjson = UsuarioClass[]=respuesta.json();
    //       this.usuarios = rjson;
    //       console.log("Usuarios: ",this.usuarios);
    //     },
    //     error=>{
    //       console.log("Error",error);
    //     }
    //   )

    this._http.get("http://localhost:1337/Usuario")
      .subscribe(respuesta=>{
          let rjson:UsuarioClass[]=respuesta.json();
          this.usuarios=rjson.map(
            (usuario:UsuarioClass)=>{
              //cambiar el usuario
              usuario.editar = false;
              return usuario;
            }
          );
          /*
          //añadir propiedades a  objetos
             let objeto1:any={
               prop1:1,
               prop2:2
             }
             objeto1.prop3 = 3;
           }*/
          console.log("Usuarios: ",this.usuarios);
        },
        error=>{
          console.log("Error: ",error);
        }
      )
    console.log('Nuevo Usuario: ',this.nuevoUsuario)
  }

  cambiarNombre():void{
    console.log("Entro");
    this.nombre = "Rafico a lenin";
  }
  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }
  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);


    this.nombre = nombreEtiqueta.value;

  }
  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        //funciones anonimas http://swapi.co/api/planets/?page=2
        (response)=>{
          console.log("Response:",response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.planetas = respuesta.results;
          this.planetas = this.planetas.map(
            (planeta)=>{

              planeta.imagenURL = "/assets/Imagenes/"+planeta.name+'.jpg';
              return planeta;
            }
          );

          //Arreglo que tengo
          // MUTARLE
          // MISMO ARREGLO CON UN NUEVO ATRIBUTO
          // IMAGEN

        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }
  crearUsuario(UsuarioFormulario){
    console.log("Entro a crear Usuario");
    //console.log(UsuarioFormulario);
    console.log("Formulario:",UsuarioFormulario.value);
    console.log(this.nuevoUsuario);


    /*
    let usuario:UsuarioClass ={
       nombre:this.nuevoUsuario.nombre
     };
    */
    /*
    this._http
       .post("http://localhost:1337/Usuario",this.nuevoUsuario)
       .subscribe(
         respuesta=>{
           let respuestaJson = respuesta.json();
           console.log('respuestaJs: ',respuestaJson);
           this.usuarios.push(respuestaJson);

         },
         error=>{
           console.log("Error",error);
         }
       )
       */
  }

  //metodo del frontend
  //Este metodo se ejecuta con el evento del componente hijo
  //(usuarioBorrado)="eliminarUsuario($event)"
  eliminarUsuarioFrontEnd(usuario:UsuarioClass){
    let indice = this.usuarios.indexOf(usuario);
    //eliminando del areglo
    this.usuarios.splice(indice,1);
  }
  crearCorreo(UsuarioFormularioCorreo){
    console.log("Entro a crear Correo del usuario");
    //console.log(UsuarioFormulario);
    console.log("Formulario:",UsuarioFormularioCorreo.value);
    console.log(this.nuevoCorreo);

  }
}
