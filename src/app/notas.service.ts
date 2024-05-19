// Importa Injectable de Angular core para crear servicios inyectables
import { Injectable } from '@angular/core';

// Define el servicio NotasService con la anotación Injectable
@Injectable({
  providedIn: 'root' // Indica que el servicio estará disponible en toda la aplicación
})
export class NotasService {
  private notas: string[] = []; // Array privado para almacenar las notas

  // Constructor del servicio
  constructor() {}

  // Método para obtener todas las notas
  obtenerNotas(): string[] {
    return this.notas; // Devuelve todas las notas almacenadas
  }

  // Método para agregar una nueva nota
  agregarNota(nota: string) {
    if (nota.trim() !== '') { // Verifica que la nota no esté vacía
      this.notas.push(nota); // Agrega la nota al array de notas
    }
  }

  // Método para eliminar una nota por su índice
  eliminarNota(index: number) {
    if (index >= 0 && index < this.notas.length) { // Verifica que el índice esté dentro del rango válido
      this.notas.splice(index, 1); // Elimina la nota del array de notas
    }
  }
}
