import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluacion } from '../../services/evaluacion';

@Component({
  selector: 'app-evaluador',
  standalone: false,
  templateUrl: './evaluador.html',
  styleUrl: './evaluador.css',
})
export class Evaluador {

  respuestas: number[] = [];

  constructor(
    public evaluacion: Evaluacion,
    private router: Router
  ) {}

  get progreso(): number {

    const respondidas =
      this.respuestas.filter(r => r !== undefined).length;

    return Math.round(
      (respondidas / this.evaluacion.preguntas.length) * 100
    );
  }

  finalizar() {

    if (
      this.respuestas.length <
      this.evaluacion.preguntas.length
    ) {
      alert('Debes responder todas las preguntas');
      return;
    }

    const nota =
      this.evaluacion.calcularNota(this.respuestas);

    const errores: string[] = [];

    this.evaluacion.preguntas.forEach((pregunta, i) => {

      if (this.respuestas[i] !== pregunta.correcta) {
        errores.push(pregunta.categoria);
      }

    });

    localStorage.setItem(
      'notaFinal',
      nota.toString()
    );

    localStorage.setItem(
      'errores',
      JSON.stringify([...new Set(errores)])
    );

    this.router.navigate(['/resultados']);
  }
}
