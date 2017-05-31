import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Jonathan";
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
    }];


  constructor() {
  }

  ngOnInit() {

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
  }



