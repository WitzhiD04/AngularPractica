import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
import { StudentDetail } from '../student-detail/student-detail';
import { StudentForm } from '../student-form/student-form';
import { EmoticonPipe } from '../../pipes/emoticon-pipe';
import { StudentCL } from '../../model/student-cl';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule, StudentDetail, StudentForm, EmoticonPipe],
  templateUrl: './student-table.html',
  styleUrl: './student-table.css',
})
export class StudentTable {

  selectedStudent!: Student

  mostrarFormulario: boolean = false;

  // se escriben como un json
  students: StudentCL[] = [
    {
      name: 'Carlos',
      lastName: 'Hernández',
      age: 21,
      email: 'carlos.hernandez@universidad.edu.mx',
      phone: '614-123-4567',
      ppa: 9.2,
      address: 'Av. Universidad #1234, Col. Centro',
      activated: true,
      fechaPago: new Date('2026-03-15'),
    },
    {
      name: 'María',
      lastName: 'López',
      age: 22,
      email: 'maria.lopez@universidad.edu.mx',
      phone: '614-234-5678',
      ppa: 8.7,
      activated: true,
      fechaPago: new Date('2026-03-10'),
    },
    {
      name: 'Juan',
      lastName: 'García',
      age: 20,
      email: 'juan.garcia@universidad.edu.mx',
      phone: '614-345-6789',
      ppa: 7.5,
      address: 'Calle Libertad #567, Col. Norte',
      activated: false,
      fechaPago: new Date('2026-02-28'),
    },
    {
      name: 'Ana',
      lastName: 'Martínez',
      age: 23,
      email: 'ana.martinez@universidad.edu.mx',
      phone: '614-456-7890',
      ppa: 9.8,
      address: 'Blvd. Ortiz Mena #890',
      activated: true,
      fechaPago: new Date('2026-03-20'),
    },
    {
      name: 'Pedro',
      lastName: 'Rodríguez',
      age: 21,
      email: 'pedro.rodriguez@universidad.edu.mx',
      phone: '614-567-8901',
      ppa: 6.9,
      activated: false,
      fechaPago: new Date('2026-01-15'),
    },
    {
      name: 'Sofía',
      lastName: 'Ramírez',
      age: 20,
      email: 'sofia.ramirez@universidad.edu.mx',
      phone: '614-678-9012',
      ppa: 9.5,
      address: 'Calle Aldama #321, Col. San Felipe',
      activated: true,
      fechaPago: new Date('2026-03-18'),
    },
    {
      name: 'Diego',
      lastName: 'Torres',
      age: 24,
      email: 'diego.torres@universidad.edu.mx',
      phone: '614-789-0123',
      ppa: 8.1,
      activated: true,
      fechaPago: new Date('2026-03-05'),
    },
    {
      name: 'Valentina',
      lastName: 'Flores',
      age: 19,
      email: 'valentina.flores@universidad.edu.mx',
      phone: '614-890-1234',
      ppa: 9.0,
      address: 'Av. Teófilo Borunda #456',
      activated: true,
      fechaPago: new Date('2026-03-22'),
    },
    {
      name: 'Luis',
      lastName: 'Morales',
      age: 22,
      email: 'luis.morales@universidad.edu.mx',
      phone: '614-901-2345',
      ppa: 7.3,
      activated: false,
      fechaPago: new Date('2026-02-10'),
    },
    {
      name: 'Fernanda',
      lastName: 'Castillo',
      age: 21,
      email: 'fernanda.castillo@universidad.edu.mx',
      phone: '614-012-3456',
      ppa: 8.9,
      address: 'Periférico de la Juventud #789',
      activated: true,
      fechaPago: new Date('2026-03-25'),
    },
  ];

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
