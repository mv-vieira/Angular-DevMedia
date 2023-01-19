import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  public produto = {
    tipo: 'filme',
    nome: 'Senhor dos Aneis',
    ano: '2001'
  }

}
