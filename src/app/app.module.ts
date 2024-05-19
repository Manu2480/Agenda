// Importa NgModule de Angular core
import { NgModule } from '@angular/core';
// Importa BrowserModule para la renderización en el navegador
import { BrowserModule } from '@angular/platform-browser';
// Importa RouterModule y Routes para configurar las rutas de la aplicación
import { RouterModule, Routes } from '@angular/router';

// Importa FormsModule para habilitar el enlace de datos bidireccional
import { FormsModule } from '@angular/forms'; // Importa FormsModule

// Importa los componentes de la aplicación
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { TareasComponent } from './tareas/tareas.component';
import { AvancesComponent } from './avances/avances.component';
import { FooterComponent } from './footer/footer.component';

// Define las rutas de la aplicación
const appRoutes: Routes = [
  { path: 'notas', component: NotasComponent }, // Ruta para el componente de Notas
  { path: 'tareas', component: TareasComponent }, // Ruta para el componente de Tareas
  { path: 'avances', component: AvancesComponent },// Ruta para el componente de Avances
  { path: '', redirectTo: '/notas', pathMatch: 'full' }, // Ruta por defecto redirige a Notas
];

// Define el módulo principal de la aplicación
@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    TareasComponent,
    AvancesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, // Importa BrowserModule
    RouterModule.forRoot(appRoutes), // Configura las rutas principales de la aplicación
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente raíz para inicializar la aplicación
})
export class AppModule { }
