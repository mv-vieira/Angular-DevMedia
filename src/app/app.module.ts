import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { FilmeComponent } from './diretiva estruturais/filme/filme.component';
import { ListaLivrosComponent } from './diretiva estruturais/lista-livros/lista-livros.component';
import { LivroComponent } from './diretiva estruturais/livro/livro.component';
import { ProdutoComponent } from './diretiva estruturais/produto/produto.component';
import { RevistaComponent } from './diretiva estruturais/revista/revista.component';
import { CaixaDeTextoComponent } from './event binding/caixa-de-texto/caixa-de-texto.component';
import { ClickMeComponent } from './event binding/click-me/click-me.component';
import { TemplateFormsComponent } from './formulário/template-forms/template-forms.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { FilhoComponent } from './interacao-entre-componentes/filho/filho.component';
import { PaiComponent } from './interacao-entre-componentes/pai/pai.component';
import { TooltipExampleComponent } from './Projeto Tooltip/tooltip-example/tooltip-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLivrosComponent,
    RevistaComponent,
    LivroComponent,
    FilmeComponent,
    ProdutoComponent,
    ClickMeComponent,
    CaixaDeTextoComponent,
    PaiComponent,
    FilhoComponent,
    TooltipExampleComponent,
    TemplateFormsComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
