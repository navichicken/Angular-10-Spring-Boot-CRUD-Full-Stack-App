import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../domain/alumno';
import { AlumnoService  } from '../../services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html'
})
export class CreateAlumnoComponent implements OnInit {
 
  alumno: Alumno = new Alumno();
  levelNum:number;
  levels:Array<Object> = [
      {num: 1, name: "Regular"},
      {num: 2, name: "Observado"},
      {num: 3, name: "Suspendido"}
  ];

  constructor(private alumnoService: AlumnoService,
    private router: Router) { 
    }
    
    toNumber(){
      this.levelNum = +this.levelNum;
      console.log(this.levelNum);
    }
  
    selectedLevel = this.levels[0];
  ngOnInit(): void {
  }

  saveAlumno(){
    this.alumnoService.createAlumno(this.alumno).subscribe( data =>{
      console.log(data);
      this.goToAlumnoList();
    },
    error => console.log(error));
  }

  goToAlumnoList(){
    this.router.navigate(['/alumnos']);
  }
  
  onSubmit(){
    var tipo;
    tipo = this.alumno.tipoAlumno;
    this.alumno.tipoAlumno = tipo.num;
    console.log(this.alumno);
    this.saveAlumno();
  }
}
