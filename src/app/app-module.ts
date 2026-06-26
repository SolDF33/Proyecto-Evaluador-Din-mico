import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // <--- ESTE ES LA CLAVE
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Tus componentes
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Evaluador } from './components/evaluador/evaluador';
import { Resultados } from './components/resultados/resultados';
import { Nosotros } from './components/nosotros/nosotros';
import { Galeria } from './components/galeria/galeria';
import { Blog } from './components/blog/blog';

@NgModule({
  declarations: [
    App, Navbar, Home, Evaluador, Resultados, 
    Nosotros, Galeria, Blog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule // SOLO CommonModule aquí, nada de componentes
  ],
  bootstrap: [App],
})
export class AppModule {}