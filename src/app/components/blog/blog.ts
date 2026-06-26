import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
  standalone: false
})
export class Blog {
  posts = [
    {
      titulo: 'Backend y la Lógica del Sistema',
      autor: 'Sol De Francesco',
      resumen: 'El desafío de procesar los datos de los exámenes...',
      completo: 'Como encargada del Backend, mi trabajo fue asegurar que la lógica de corrección sea precisa. Implementé servicios que comparan las respuestas ingresadas por el usuario con el JSON de respuestas correctas, asegurando una validación instantánea y sin errores de lógica.',
      abierto: false
    },
    {
      titulo: 'Diseño del Formulario y Evaluación',
      autor: 'Selene Sayas',
      resumen: 'Capturando las respuestas de forma dinámica...',
      completo: 'Mi enfoque principal fue la creación de un formulario dinámico que se adapta a diferentes tipos de preguntas. Trabajé intensamente en la validación de los campos para que la experiencia de evaluación sea fluida, profesional y fácil de entender para cualquier estudiante.',
      abierto: false
    },
    {
      titulo: 'Estadísticas e Integración',
      autor: 'Emanuel Varela',
      resumen: 'Transformando resultados en datos visuales...',
      completo: 'En esta etapa, me encargué de recolectar los datos obtenidos tras el examen y convertirlos en métricas claras. La integración fue clave: aseguré que los resultados se desplieguen correctamente en la interfaz para que el estudiante comprenda su rendimiento académico rápidamente.',
      abierto: false
    },
    {
      titulo: 'Frontend (UI) y Routing',
      autor: 'Uma Roveta',
      resumen: 'La arquitectura visual y la navegación del sitio...',
      completo: 'Me ocupé de que el Evaluador Académico sea intuitivo y estéticamente agradable. Utilizando Angular Router y técnicas de CSS avanzado, logré que la transición entre el Blog, los resultados y el evaluador sea rápida y consistente, manteniendo la identidad visual de la universidad.',
      abierto: false
    }
  ];

  togglePost(post: any) {
    post.abierto = !post.abierto;
  }
}