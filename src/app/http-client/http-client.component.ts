import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent {

  readonly apiURL : string = '';

  constructor(private http : HttpClient) {
    this.apiURL = 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100';
  }

  listarPokemonsPeloTipo() {
    this.http.get(this.apiURL)
            .subscribe(resultado => {
              console.log(resultado)
            },
            erro => {
              if(erro.status == 404) {
                console.log('Produto não localizado.');
              }
            }
            );
        }
 }
