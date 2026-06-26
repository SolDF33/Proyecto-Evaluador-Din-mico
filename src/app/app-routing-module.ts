import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Evaluador } from './components/evaluador/evaluador';
import { Resultados } from './components/resultados/resultados';
import { Nosotros } from './components/nosotros/nosotros';
import { Galeria } from './components/galeria/galeria';
import { Blog } from './components/blog/blog';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'evaluador', component: Evaluador },
  { path: 'resultados', component: Resultados },
  { path: 'nosotros', component: Nosotros },
  { path: 'galeria', component: Galeria },
  { path: 'blog', component: Blog },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }