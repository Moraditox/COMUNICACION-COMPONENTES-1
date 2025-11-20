import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  imports: [],
  templateUrl: './nieto.html',
  styleUrl: './nieto.css',
})
export class Nieto {
  // Los @Input() siempre se declaran en el componente hijo!!
  @Input() mensaje:string;
}
