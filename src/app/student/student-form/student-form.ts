import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {

  @Output()
  addStudentEvent = new EventEmitter<Student>();

  formStudent: Student = {
    name: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
    ppa: 0,
    address: '',
    activated: false,
    fechaPago: new Date(),
  };

  // Pa copiar el estudiante y que no se modifique el original siempre
  sendStudent!: Student;


  agregarEstudiante(form: any) {
    console.log(this.formStudent);

    // para copiar los valores
    this.sendStudent = Object.assign({}, this.formStudent);

    this.addStudentEvent.emit(this.sendStudent);
  }
}
