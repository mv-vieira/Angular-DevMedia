import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  public livros: string [] = [
    'Como morrem os pobres', 
    'A revolução dos bichos', 
    '1988'
  ];

}
