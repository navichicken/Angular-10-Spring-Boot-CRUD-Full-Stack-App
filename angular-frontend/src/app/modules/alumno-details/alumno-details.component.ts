import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../../domain/alumno';
import { AlumnoService  } from '../../services/alumno.service';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css']
})
export class AlumnoDetailsComponent implements OnInit {

  id: number
  alumno: Alumno
  constructor(private route: ActivatedRoute, private employeService: AlumnoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.alumno = new Alumno();
    this.employeService.getAlumnoById(this.id).subscribe( data => {
      this.alumno = data;
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

}
