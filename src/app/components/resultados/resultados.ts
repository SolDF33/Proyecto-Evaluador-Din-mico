import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.html',
  styleUrls: ['./resultados.css'],
})
export class Resultados {
  // 1. DEFINIMOS LAS VARIABLES QUE EL HTML ESTÁ RECLAMANDO
  totalPreguntas = 10;
  notaMaxima = 10;
  nota: number | null = null;
  porcentaje = 0;
  aciertos = 0;
  errores = 0;
  mensaje = 'Todavía no hay una evaluación finalizada.';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cargarResultados();
  }

  // 2. MÉTODOS QUE EL HTML NECESITA
  get aprobo(): boolean {
    return this.nota !== null && this.nota >= 6;
  }

  get estado(): string {
    return this.nota === null ? 'Sin datos' : (this.aprobo ? 'Aprobado' : 'Desaprobado');
  }

  get barraClase(): string {
    return this.nota === null ? 'sin-datos' : (this.aprobo ? 'aprobado' : 'desaprobado');
  }

  private cargarResultados(): void {
    if (isPlatformBrowser(this.platformId)) {
      const notaGuardada = localStorage.getItem('notaFinal');
      if (notaGuardada === null) return;

      this.nota = Number(notaGuardada);
      this.porcentaje = Math.round((this.nota / this.notaMaxima) * 100);
      this.aciertos = this.nota;
      this.errores = this.totalPreguntas - this.aciertos;
      
      this.mensaje = this.aprobo
        ? 'Buen trabajo. La evaluación indica un rendimiento satisfactorio.'
        : 'Todavía hay temas para reforzar. Podes volver a intentarlo.';
    }
  }
}