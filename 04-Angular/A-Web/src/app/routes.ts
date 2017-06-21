import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
export const routes:Routes =[
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"pagina2",
    component:Pagina2Component
  }
];

export const ModuleDeRutas: ModuleWithProviders=RouterModule.forRoot(routes);
