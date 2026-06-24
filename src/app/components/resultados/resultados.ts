import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.html',
  styleUrl: './resultados.css',
})
export class Resultados {
  readonly notaMaxima = 10;
  readonly puntosPorPregunta = 2;
  readonly totalPreguntas = this.notaMaxima / this.puntosPorPregunta;

  nota: number | null = null;
  porcentaje = 0;
  aciertos = 0;
  errores = this.totalPreguntas;
  mensaje = 'Todavia no hay una evaluacion finalizada.';

  constructor() {
    this.cargarResultados();
  }

  get aprobo(): boolean {
    return this.nota !== null && this.nota >= 6;
  }

  get estado(): string {
    if (this.nota === null) {
      return 'Sin datos';
    }

    return this.aprobo ? 'Aprobado' : 'Desaprobado';
  }

  get barraClase(): string {
    if (this.nota === null) {
      return 'sin-datos';
    }

    return this.aprobo ? 'aprobado' : 'desaprobado';
  }

  private cargarResultados(): void {
    const notaGuardada = localStorage.getItem('notaFinal');

    if (notaGuardada === null) {
      return;
    }

    const notaParseada = Number(notaGuardada);

    if (Number.isNaN(notaParseada)) {
      return;
    }

    this.nota = notaParseada;
    this.porcentaje = Math.round((this.nota / this.notaMaxima) * 100);
    this.aciertos = Math.round(this.nota / this.puntosPorPregunta);
    this.errores = this.totalPreguntas - this.aciertos;
    this.mensaje = this.aprobo
      ? 'Buen trabajo. La evaluacion indica un rendimiento satisfactorio.'
      : 'Todavia hay temas para reforzar. Podes volver a intentarlo.';
  }
}
