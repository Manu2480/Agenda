import { Injectable } from '@angular/core';

// Define la interfaz Logro que describe la estructura de un logro
export interface Logro {
  id: number; // Identificador único del logro
  descripcion: string; // Descripción del logro
  completado: boolean; // Indica si el logro ha sido completado o no
}

@Injectable({
  providedIn: 'root'
})
export class LogrosService {
  private logros: Logro[] = [];

  constructor() { }

  // Métodos del servicio para manejar los logros
}
