import { Injectable } from '@angular/core';

export interface Pregunta {
  enunciado: string;
  opciones: string[];
  correcta: number;
  categoria: string;
}

@Injectable({
  providedIn: 'root',
})
export class Evaluacion {

  preguntas: Pregunta[] = [
    {
      enunciado: '¿Qué es Angular?',
      opciones: ['Framework Frontend', 'Base de datos', 'Servidor', 'Lenguaje'],
      correcta: 0,
      categoria: 'Angular'
    },
    {
      enunciado: '¿Qué lenguaje utiliza Angular?',
      opciones: ['Java', 'Python', 'TypeScript', 'PHP'],
      correcta: 2,
      categoria: 'TypeScript'
    },
    {
      enunciado: '¿Qué es HTML?',
      opciones: ['Lenguaje de marcado', 'Framework', 'Servidor', 'Base de datos'],
      correcta: 0,
      categoria: 'HTML'
    },
    {
      enunciado: '¿Qué es CSS?',
      opciones: ['Lenguaje de estilos', 'Servidor', 'Base de datos', 'Framework'],
      correcta: 0,
      categoria: 'CSS'
    },
    {
      enunciado: '¿Qué hace *ngFor?',
      opciones: ['Repite elementos', 'Oculta elementos', 'Navega rutas', 'Crea servicios'],
      correcta: 0,
      categoria: 'Angular'
    },
    {
      enunciado: '¿Qué hace *ngIf?',
      opciones: ['Repite elementos', 'Muestra/Oculta elementos', 'Crea componentes', 'Genera rutas'],
      correcta: 1,
      categoria: 'Angular'
    },
    {
      enunciado: '¿Para qué sirve Router?',
      opciones: ['Navegar entre páginas', 'Crear estilos', 'Guardar datos', 'Crear HTML'],
      correcta: 0,
      categoria: 'Routing'
    },
    {
      enunciado: '¿Qué etiqueta crea enlaces?',
      opciones: ['div', 'a', 'img', 'table'],
      correcta: 1,
      categoria: 'HTML'
    },
    {
      enunciado: '¿Qué propiedad cambia el color del texto?',
      opciones: ['font-size', 'background', 'color', 'border'],
      correcta: 2,
      categoria: 'CSS'
    },
    {
      enunciado: '¿Qué es un servicio?',
      opciones: [
        'Lógica reutilizable',
        'Un componente visual',
        'Una ruta',
        'Un estilo'
      ],
      correcta: 0,
      categoria: 'Angular'
    }
  ];

  calcularNota(respuestas: number[]) {
    let nota = 0;

    this.preguntas.forEach((pregunta, i) => {
      if (respuestas[i] === pregunta.correcta) {
        nota++;
      }
    });

    return nota;
  }
}
