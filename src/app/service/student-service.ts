import { Injectable } from '@angular/core';
import { StudentCL } from '../model/student-cl';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // se escriben como un json
  students: StudentCL[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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

  findAll() {
    return this.students;
  }

  findById(id: number): StudentCL {
    const student: StudentCL = this.students.find(s => s.id === id)!;
    return student;
  }
  generateId(): number {
    const id = Math.floor(Math.random() * (100 - 11 + 1)) + 11;
    return id;
  }
}
