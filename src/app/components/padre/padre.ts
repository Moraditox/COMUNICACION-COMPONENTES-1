import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  imports: [Hijo, FormsModule],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  mensajeParaElHijo:string;
  mensajeDelHijo:string;

  mensaje(e:string):void{
    this.mensajeDelHijo = e;
  };
}
