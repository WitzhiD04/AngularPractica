import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
import { StudentDetail } from '../student-detail/student-detail';
import { StudentForm } from '../student-form/student-form';
import { EmoticonPipe } from '../../pipes/emoticon-pipe';
import { StudentCL } from '../../model/student-cl';
import { StudentService } from '../../service/student-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule, StudentDetail, StudentForm, EmoticonPipe, RouterModule],
  templateUrl: './student-table.html',
  styleUrl: './student-table.css',
})
export class StudentTable {

  students: StudentCL[] = [];

  constructor(
    private studentService: StudentService
  ) {
  }

  ngOnInit() {
    this.students = this.studentService.findAll();
  }

  selectedStudent!: Student

  mostrarFormulario: boolean = false;

  mostrarEstudiante(student: Student) {
    this.selectedStudent = student;
  }

  agregarEstudiante(student: Student) {
    this.students.push(student);
  }

  eliminarEstudiante(student: Student) {
    var index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

  mostrarForm() {
    this.mostrarFormulario = true;
  }
}
