import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  imports: [FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  // Los @Input() siempre se declaran en el componente hijo!!
  @Input() mensaje:string;

  // Los @Output() siempre se declaran en el componente hijo!!
  @Output() mensajeE:EventEmitter<string> = new EventEmitter<string>();

  elMensaje:string;

  mensajeDelHijo():void{
    this.mensajeE.emit(this.elMensaje);
  }
}
