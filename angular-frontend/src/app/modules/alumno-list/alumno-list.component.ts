import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../domain/alumno';
import { AlumnoService  } from '../../services/alumno.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  alumnos: Alumno[];

  constructor(private alumnoService: AlumnoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  private getAlumnos(){
    this.alumnoService.getAlumnoList().subscribe(data => {
      this.alumnos = data;
    });
  }
  getTipoAlumno(tipo: number){
    var result = "";
    switch (tipo) {
      case 1:
        result= "Regular";
        break;
      case 2:
        result= "Observado";
        break;
      case 3:
        result= "Suspendido";
        break;
      default:
        result= "NN";
    }
    return result;
  }
  alumnoDetails(id: number){
    this.router.navigate(['alumno-details', id]);
  }

  updateAlumno(id: number){
    this.router.navigate(['update-alumno', id]);
  }
  createAlumno(){
    this.router.navigate(['create-alumno']);
  }
  deleteAlumno(id: number){
    this.alumnoService.deleteAlumno(id).subscribe( data => {
      console.log(data);
      this.getAlumnos();
    })
  }
}
