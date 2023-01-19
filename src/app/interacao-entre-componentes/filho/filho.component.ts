import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

// @Input() nomeFilho: string = "";

// private _nome: string = '';

// @Input()
//  set nome(nome: string) {
//    this._nome = (nome && nome.trim()) || '<Nome em branco>';
//  }

//  get nome(): string {
//   return this._nome;
//   }

//   ngOnChanges(changes: SimpleChanges){
//     for(let change in changes)
//     {
//      this._nome = (changes[change].currentValue && changes[change].currentValue.trim()) || '<Nome não informado>';
//     }


@Input() pais: string = "";

@Output() votado = new EventEmitter<string>();

vota(pais: string) {
  this.votado.emit(pais);
  }
}

