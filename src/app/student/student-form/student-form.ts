import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../../service/student-service';

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
    id: 0,
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

  constructor(
    private studentService: StudentService
  ) {
  }


  agregarEstudiante(form: any) {
    console.log(this.formStudent);

    // para copiar los valores
    this.sendStudent = Object.assign({}, this.formStudent);
    this.sendStudent.id = this.studentService.generateId();

    this.addStudentEvent.emit(this.sendStudent);
  }

  @Output()
  ocultarForm = new EventEmitter<boolean>();

  ocultarFormulario() {
    this.ocultarForm.emit(false);
  }

}
