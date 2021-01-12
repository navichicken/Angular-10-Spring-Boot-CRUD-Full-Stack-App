import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoListComponent } from './modules/alumno-list/alumno-list.component';
import { CreateAlumnoComponent } from './modules/create-alumno/create-alumno.component';
import { UpdateAlumnoComponent } from './modules/update-alumno/update-alumno.component';
import { AlumnoDetailsComponent } from './modules/alumno-details/alumno-details.component';

const routes: Routes = [
  {path: 'alumnos', component: AlumnoListComponent},
  {path: 'create-alumno', component: CreateAlumnoComponent},
  {path: '', redirectTo: 'alumnos', pathMatch: 'full'},
  {path: 'update-alumno/:id', component: UpdateAlumnoComponent},
  {path: 'alumno-details/:id', component: AlumnoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
