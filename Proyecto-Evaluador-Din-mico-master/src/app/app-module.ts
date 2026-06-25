import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Evaluador } from './components/evaluador/evaluador';
import { Resultados } from './components/resultados/resultados';
import { Navbar } from './components/navbar/navbar';

@NgModule({
  declarations: [App, Home, Evaluador, Resultados, Navbar],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
})
export class AppModule {}