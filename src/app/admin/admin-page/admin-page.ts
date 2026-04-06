import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  imports: [CommonModule],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {

  accion: string = '';

  // Datos de ejemplo (después los puedes conectar con datos reales)
  totalEstudiantes: number = 10;
  estudiantesActivos: number = 7;
  estudiantesInactivos: number = 3;
  promedioGeneral: number = 8.49;
}
