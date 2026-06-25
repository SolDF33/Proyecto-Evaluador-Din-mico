import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  // Agregamos un log para ver si al menos entra a la función
  enviarMensaje(): void {
    console.log("Botón presionado"); 
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
  }
}
