import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes que creaste
import { HomeComponent } from './components/home/home.component';
import { EvaluadorComponent } from './components/evaluador/evaluador.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'evaluador', component: EvaluadorComponent },
  { path: 'resultados', component: ResultadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }