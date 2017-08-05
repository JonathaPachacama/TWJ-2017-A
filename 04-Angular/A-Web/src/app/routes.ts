import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {Pagina21Component} from "./Componentes/pagina21/pagina21.component";
import {Pagina22Component} from "./Componentes/pagina22/pagina22.component";
import {Pagina23Component} from "./Componentes/pagina23/pagina23.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {EstaLogeadoService} from "./Services/esta-logeado.service";
export const routes:Routes =[
  {
    path:"inicio",
    component:InicioComponent,
    canActivate: [EstaLogeadoService]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"pagina2/:idPagina2/pagina3/:idPagina3",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21/:idPartes",
        component:Pagina21Component
      },
      {
        path:"pagina22/:idCompetencias",
        component:Pagina22Component
      },
      {
        path:"pagina23/:idDuenos",
        component:Pagina23Component
      }
    ]
  }
];

export const ModuleDeRutas: ModuleWithProviders=RouterModule.forRoot(routes);
