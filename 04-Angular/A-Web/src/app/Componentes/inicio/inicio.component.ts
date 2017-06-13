import { Component, OnInit } from '@angular/core';

import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Classes/UsuarioClass";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Jonathan";
  usuarios:UsuarioClass[]=[];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");
  planetas : PlanetaStarWarsInterface[] =[];
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
          this.usuarios=rjson;
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
  crearUsuario(){
    console.log("Entro a crear Usuario");
    let usuario:UsuarioClass ={
      nombre:this.nuevoUsuario.nombre
    };

    this._http
      .post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJs: ',respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )
  }
  eliminarUsuario(usuario: UsuarioClass, indice: number) {

    console.log("Indice:", this.usuarios.indexOf(usuario));
    console.log("Indice con index: ", indice);
    console.log("Usuarios : ", this.usuarios);
    console.log("Usuariofff : ", usuario.id);
    this.usuarios.splice(indice,1);

    this._http.delete("http://localhost:1337/Usuario?id="+usuario.id)
      .subscribe(respuesta=>{
          let respuestaJson=respuesta.json();
          console.log('respuestaJsonoooooo: ',respuestaJson);
        },
        error=>{
          console.log("Error ", error)
        }
      )

  }


}


// interface PlanetaStarWars{
//   name:string,
//   rotation_period: string;
//   orbital_period: string;
//   diameter: string;
//   climate: string;
//   gravity: string;
//   terrain: string;
//   surface_water: string;
//   population: string;
//   residents: string[];
//   films: string[];
//   created: Date;
//   edited: Date;
//   url: string;
//
// }




