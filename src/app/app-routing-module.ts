import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos tus componentes reales con sus nombres de archivo y clases correctas
import { Home } from './components/home/home';
import { Evaluador } from './components/evaluador/evaluador';
import { Resultados } from './components/resultados/resultados';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'home', component: Home },
  { path: 'evaluador', component: Evaluador },
  { path: 'resultados', component: Resultados },
  { path: '**', redirectTo: '/home' } // Comodín por seguridad si escriben una ruta inexistente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }