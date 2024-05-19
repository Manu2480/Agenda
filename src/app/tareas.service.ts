//Se crearon los .service para que la información de notas y tareas no se perdiera al navegar por los demas componentes

// Importa el decorador Injectable de Angular core
import { Injectable } from '@angular/core';

// Define la interfaz Tarea que describe la estructura de una tarea
interface Tarea {
  descripcion: string; // La descripción de la tarea
  hecha: boolean; // Indica si la tarea está marcada como hecha o no
}

// Marca este servicio como inyectable y lo proporciona en el nivel raíz de la aplicación
@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // Variable privada que almacena la lista de tareas
  private tareas: Tarea[] = [];

  // Constructor del servicio
  constructor() {}

  // Método para obtener todas las tareas
  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  // Método para agregar una nueva tarea
  agregarTarea(descripcion: string) {
    // Verifica si la descripción de la tarea no está vacía antes de agregarla
    if (descripcion.trim() !== '') {
      this.tareas.push({ descripcion, hecha: false }); // Agrega la nueva tarea al array de tareas
    }
  }

  // Método para eliminar una tarea según su índice
  eliminarTarea(index: number) {
    // Verifica si el índice está dentro del rango válido de tareas
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1); // Elimina la tarea del array de tareas
    }
  }

  // Método para marcar una tarea como hecha o no hecha según su índice
  marcarTareaComoHecha(index: number) {
    // Verifica si el índice está dentro del rango válido de tareas
    if (index >= 0 && index < this.tareas.length) {
      this.tareas[index].hecha = !this.tareas[index].hecha; // Cambia el estado de la tarea
    }
  }
}
