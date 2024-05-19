import { Component } from '@angular/core';

// Define el componente principal AppComponent con su selector, plantilla y estilos asociados
@Component({
  selector: 'app-root', // Selector del componente que se utilizará en la plantilla principal
  templateUrl: './app.component.html', // Ruta al archivo de la plantilla HTML del componente
  styleUrls: ['./app.component.css'] // Ruta al archivo de estilos CSS del componente
})
export class AppComponent {
  title = 'agenda'; // Propiedad del componente que almacena el título de la aplicación
}
