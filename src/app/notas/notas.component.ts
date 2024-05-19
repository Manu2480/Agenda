// src/app/notas/notas.component.ts

// Importa el decorador 'Component' de Angular para definir este archivo como un componente
import { Component } from '@angular/core';
// Importa el servicio de notas que proporciona funcionalidad relacionada con las notas
import { NotasService } from '../notas.service';

// Define el componente 'NotasComponent' con su selector, plantilla y estilos asociados
@Component({
  selector: 'app-notas', // El nombre del selector que se usa en el HTML para instanciar este componente
  templateUrl: './notas.component.html', // La ruta al archivo de la plantilla HTML de este componente
  styleUrls: ['./notas.component.css'] // La ruta al archivo de estilos CSS de este componente
})
export class NotasComponent {
  // Define una propiedad pública 'nuevaNota' que se enlaza con el campo de entrada en la plantilla
  nuevaNota: string = '';

  // El constructor del componente, que recibe el servicio de notas como una dependencia
  constructor(public notasService: NotasService) {}

  // Método para agregar una nueva nota, llama al método 'agregarNota' del servicio
  agregarNota() {
    // Llama al método 'agregarNota' del servicio de notas, pasando la nueva nota como argumento
    this.notasService.agregarNota(this.nuevaNota);
    // Reinicia la propiedad 'nuevaNota' a una cadena vacía para limpiar el campo de entrada
    this.nuevaNota = '';
  }

  // Método para eliminar una nota, llama al método 'eliminarNota' del servicio pasando el índice de la nota
  eliminarNota(index: number) {
    // Llama al método 'eliminarNota' del servicio de notas, pasando el índice de la nota a eliminar
    this.notasService.eliminarNota(index);
  }
}
