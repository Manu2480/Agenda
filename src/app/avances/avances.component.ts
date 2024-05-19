import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-avances',
  templateUrl: './avances.component.html',
  styleUrls: ['./avances.component.css']
})
export class AvancesComponent implements OnInit {
  totalTareas: number = 0;
  tareasCompletadas: number = 0;
  porcentajeCompletado: number = 0;

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    // Obtenemos las tareas del servicio
    const tareas = this.tareasService.obtenerTareas();

    // Calculamos el número total de tareas y el número de tareas completadas
    this.totalTareas = tareas.length;
    this.tareasCompletadas = tareas.filter(tarea => tarea.hecha).length;

    // Calculamos el porcentaje de tareas completadas
    this.porcentajeCompletado = this.totalTareas > 0 ? (this.tareasCompletadas / this.totalTareas) * 100 : 0;
  }
}
