import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private router: Router,
             private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
//parametros de ruta actual (hijo)
    this.rutaActiva.params.subscribe(
      params=>{
        console.log("parametros en pagina 21 :",params);
      }
    )

    //Parametros de la ruta PAPA
        this.rutaActiva.parent.params.subscribe(
          params=>{
            console.log("Parametros de mi Papa:",params);
          }
     )


  }

  navegarAInicio(){
    // this.router.navigate(["inicio"])
    this.router.navigate(["pagina2",2,"pagina3",4,"pagina22",136])
  }

}
