import { Component, signal } from '@angular/core';
import { StudentTable } from './student/student-table/student-table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [StudentTable, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Modelo y controlador
  // Cada componente es una pantalla
  protected readonly title = signal('Student app');

  userType = 'admin';
}
