import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <--- ESTO ES NECESARIO

@Component({
  selector: 'app-navbar',
  standalone: true, // Si tu versión de Angular lo pide
  imports: [RouterModule], // <--- ESTO ES LO MÁS IMPORTANTE
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent { }
