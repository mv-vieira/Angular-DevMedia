import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devmedia-angular';

  public exibirConteudo: boolean = false;

  public toggleConteudo(){
    return this.exibirConteudo = !this.exibirConteudo;
  }
}


