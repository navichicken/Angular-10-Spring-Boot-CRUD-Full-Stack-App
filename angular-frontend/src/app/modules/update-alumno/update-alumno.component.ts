import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../domain/alumno';
import { AlumnoService  } from '../../services/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css']
})
export class UpdateAlumnoComponent implements OnInit {

  id: number;
  alumno: Alumno = new Alumno();
  levelNum:number;
  levels:Array<Object> = [
      {num: 1, name: "Regular"},
      {num: 2, name: "Observado"},
      {num: 3, name: "Suspendido"}
  ];
  constructor(private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router) { }

    toNumber(){
      this.levelNum = +this.levelNum;
      console.log(this.levelNum);
    }
  
    selectedLevel = this.levels[0];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.alumnoService.getAlumnoById(this.id).subscribe(data => {
      this.alumno = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.alumnoService.updateAlumno(this.id, this.alumno).subscribe( data =>{
      this.goToAlumnoList();
    }
    , error => console.log(error));
  }

  goToAlumnoList(){
    this.router.navigate(['/alumnos']);
  }
}
