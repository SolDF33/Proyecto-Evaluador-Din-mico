import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.html',
  styleUrl: './resultados.css',
})
export class Resultados {

  nota = localStorage.getItem('notaFinal');

  errores: string[] = [];

  constructor() {

    const datos =
      localStorage.getItem('errores');

    if (datos) {
      this.errores = JSON.parse(datos);
    }

  }
}
