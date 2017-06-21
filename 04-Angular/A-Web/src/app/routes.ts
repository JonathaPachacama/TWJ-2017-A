import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {Pagina21Component} from "./Componentes/pagina21/pagina21.component";
import {Pagina22Component} from "./Componentes/pagina22/pagina22.component";
import {Pagina23Component} from "./Componentes/pagina23/pagina23.component";
export const routes:Routes =[
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"pagina2",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21",
        component:Pagina21Component
      },
      {
        path:"pagina22",
        component:Pagina22Component
      },
      {
        path:"pagina23",
        component:Pagina23Component
      }
    ]
  }
];

export const ModuleDeRutas: ModuleWithProviders=RouterModule.forRoot(routes);
