import { Component, OnInit } from '@angular/core';

import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Jonathan";
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
  }

  cambiarNombre():void{
    console.log("Entro");
    this.nombre = "Rafico a lenin";
  }
  cambiarOtroNombre()
  {
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
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;
          this.planetas = this.planetas.map(
            (planeta)=>{

              // planeta.imagenURL2 = "/assets/Imagenes/"+planeta.name+'.jpg';

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



