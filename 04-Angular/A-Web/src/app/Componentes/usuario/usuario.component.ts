import {Component, Input, OnInit} from '@angular/core';
import {UsuarioClass} from "../../Classes/UsuarioClass";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuarioLocal:UsuarioClass;

  constructor() { }

  ngOnInit() {
    console.log(this.usuarioLocal)
  }

}
