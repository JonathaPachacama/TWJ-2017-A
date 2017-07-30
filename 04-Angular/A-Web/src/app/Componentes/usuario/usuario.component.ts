import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsuarioClass} from "../../Classes/UsuarioClass";
import {Http} from "@angular/http";
import {UsuarioServiceService} from "../Services/usuario-service.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarioLocal:UsuarioClass;
  @Output() usuarioborrado = new EventEmitter();

  constructor(private _usuarioService:UsuarioServiceService) { }

  ngOnInit() {
    console.log(this.usuarioLocal)
  }
//metodo de eliminar usuario del backend
  eliminarUsuarioBackend(usuario: UsuarioClass,indice: number) {

    this._usuarioService
      .borrar(usuario)
      .subscribe(
        (usuarioborrado:UsuarioClass)=>{
          this.usuarioborrado.emit(usuarioborrado);
        },
        error=>{
          console.log("Error ", error)
        }
      )

  }

  actualizarUsuario(usuario:UsuarioClass,nombre:string){
    usuario.nombre =nombre;
    this._usuarioService.editar(usuario)
      .subscribe(
        (usuarioEditado:UsuarioClass)=>{
          this.usuarioLocal.nombre = nombre;
          this.usuarioLocal.editar = !this.usuarioLocal.editar;
        },

        err=>{
          //hubo algun problema  (Red servidor)
          //aki podriamos poner un toaster
          console.log("Hubo un error",err)
        }
      );

  }
}
