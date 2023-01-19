import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  numero: number = 0;

  public incrementar(){
    this.numero++;
  }

  public decrementar(){
    this.numero--;
  }
}
