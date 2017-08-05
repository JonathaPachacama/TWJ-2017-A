import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {MasterUrlService} from "./master-url.service";
import {UsuarioClass} from "../Classes/UsuarioClass";

@Injectable()
export class ApiAuthService {

  url:string;
  modelo = 'Auth';
  constructor(private _http:Http,private _masterUrlService:MasterUrlService) {
    this.url = this._masterUrlService.url + this.modelo;

  }
  logIn(correo:string,password:string){

    let metodo = '/logIn';
    let datosAEnviar ={
      correo, //sintaxis del typescript
      password:password
    }
    return this._http
      .post(this.url + metodo,datosAEnviar)
     // .map(res =>return res.json());
  }

}
