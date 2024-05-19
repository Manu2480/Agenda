// Importa el decorador Component de Angular core
import { Component } from '@angular/core';
// Importa el servicio TareasService que maneja la lógica de las tareas
import { TareasService } from '../tareas.service';

// Define el componente TareasComponent con su selector, plantilla y estilos asociados
@Component({
  selector: 'app-tareas', // El nombre del selector que se usa en el HTML para instanciar este componente
  templateUrl: './tareas.component.html', // La ruta al archivo de la plantilla HTML de este componente
  styleUrls: ['./tareas.component.css'] // La ruta al archivo de estilos CSS de este componente
})
export class TareasComponent {
  nuevaTarea: string = ''; // Define una propiedad pública 'nuevaTarea' que se enlaza con el campo de entrada en la plantilla

  // Constructor del componente, que inyecta el servicio TareasService para usar sus métodos y funcionalidades
  constructor(public tareasService: TareasService) {}

  // Método para agregar una nueva tarea, llama al método 'agregarTarea' del servicio
  agregarTarea() {
    this.tareasService.agregarTarea(this.nuevaTarea); // Llama al método 'agregarTarea' del servicio de tareas, pasando la nueva tarea como argumento
    this.nuevaTarea = ''; // Reinicia la propiedad 'nuevaTarea' a una cadena vacía para limpiar el campo de entrada
  }

  // Método para eliminar una tarea, llama al método 'eliminarTarea' del servicio pasando el índice de la tarea
  eliminarTarea(index: number) {
    this.tareasService.eliminarTarea(index); // Llama al método 'eliminarTarea' del servicio de tareas, pasando el índice de la tarea a eliminar
  }

  // Método para marcar una tarea como hecha o no hecha, llama al método 'marcarTareaComoHecha' del servicio pasando el índice de la tarea
  marcarTareaComoHecha(index: number) {
    this.tareasService.marcarTareaComoHecha(index); // Llama al método 'marcarTareaComoHecha' del servicio de tareas, pasando el índice de la tarea a marcar
  }
}
