import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
import { StudentService } from '../../service/student-service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  // Se llama una unica vez cuando el componente se renderiza en pantalla
  ngOnInit(): void {
    console.log("ngOnInit en student-detail");
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      console.log("ID obtenido de la URL:", idParam);
      if (idParam) {
        const id = Number(idParam);
        this.student = this.studentService.findById(id);
        console.log("Estudiante encontrado:", this.student);
      }
    });
  }

  // Se llama cada vez que el componente padre cambia algo dentro del componente hijo 
  ngOnChanges(): void {
    console.log("ngOnChanges en student-detail");
  }

  //On destroy asegura que ocurra algo antes de cerrar un componente
}
