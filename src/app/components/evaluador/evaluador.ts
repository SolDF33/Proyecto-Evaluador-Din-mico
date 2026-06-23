import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluador',
  standalone: false,
  templateUrl: './evaluador.html',
  styleUrl: './evaluador.css',
})
export class Evaluador {
  respuestas: number[] = []; // Lo usará el integrante 3

  constructor(private router: Router) {}

  finalizar() {
    // Redirige a resultados al terminar
    this.router.navigate(['/resultados']);
  }
}