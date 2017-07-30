import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map'; // rxjs(librearia reactiva de javascript)con esta linea importamos el operador map

import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Classes/UsuarioClass";
import {Form} from "@angular/forms";
import {CorreoClass} from "../../Classes/CorreoClass";
import {UsuarioServiceService} from "../Services/usuario-service.service";

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


  constructor(private _usuarioService:UsuarioServiceService) {
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

    this._usuarioService.buscarTodos()
      .subscribe(
        (usuarios:UsuarioClass[])=> {
          this.usuarios = usuarios.map(
            (usuario: UsuarioClass) => {
              //cambiar el usuario
              usuario.editar = false;
              return usuario;
            }
          );
        },
            error=>{
              console.log("Error: ",error);
            }
          )
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
  /*
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
  } */
  crearUsuario(UsuarioFormulario){
    let usuarioACrearse:UsuarioClass=new UsuarioClass(UsuarioFormulario.value.nombre,"123456");
    /*
        let usuario = {
           nombre:"valor",
           id:undefined,
           createdAt:undefined,
           updatedAt:undefined,
           editar:undefined
         }
     */
       this._usuarioService.crear(usuarioACrearse)
      .subscribe((usuarioCreado:UsuarioClass)=>{
          this.usuarios.push(usuarioCreado);
          this.nuevoUsuario = new UsuarioClass();
      },
         error=>{
           console.log("Error",error);
         }
       )

  }

  //metodo del frontend
  //Este metodo se ejecuta con el evento del componente hijo
  //(usuarioBorrado)="eliminarUsuario($event)"
  eliminarUsuarioFrontEnd(usuario:UsuarioClass){
    let indice = this.usuarios.indexOf(usuario);
    this.usuarios.splice(indice,1);
  }
  crearCorreo(UsuarioFormularioCorreo){
    console.log("Entro a crear Correo del usuario");
    //console.log(UsuarioFormulario);
    console.log("Formulario:",UsuarioFormularioCorreo.value);
    console.log(this.nuevoCorreo);

  }
}
