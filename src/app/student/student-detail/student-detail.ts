import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  imports: [CommonModule],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail {
  @Input()
  student!: Student;

  //Inyectar dependencias
  constructor() {
  }

  // Se llama una unica vez cuando el componente se renderiza en pantalla
  ngOnInit(): void {
    console.log("ngOnInit en student-detail");
    // se puede por ej llamar una API
  }

  // Se llama cada vez que el componente padre cambia algo dentro del componente hijo 
  ngOnChanges(): void {
    console.log("ngOnChanges en student-detail");
  }
}
